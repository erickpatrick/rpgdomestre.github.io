<?php namespace App\Listeners;

use samdark\sitemap\Sitemap;
use TightenCo\Jigsaw\Jigsaw;

class GenerateSitemap
{
    /**
     * @param Jigsaw $jigsaw
     */
    public function handle(Jigsaw $jigsaw): void
    {
        $baseUrl = $jigsaw->getConfig('baseUrl');
        $sitemap = new Sitemap($jigsaw->getDestinationPath() . '/sitemap.xml');
        collect($jigsaw->getOutputPaths())
            ->map(function ($path) {
                if ($path) {
                    return str_start($path, '/');
                }
            })
            ->each(function ($path) use ($baseUrl, $sitemap) {
                if (! $this->isAsset($path)) {
                    $sitemap->addItem($baseUrl . $path, time(), Sitemap::DAILY);
                }
            });
        $sitemap->write();
    }

    public function isAsset($path): bool
    {
        return collect(['/css', '/img', '/js', '/CNAME'])->contains(function ($value) use ($path) {
            return starts_with($path, $value);
        });
    }
}