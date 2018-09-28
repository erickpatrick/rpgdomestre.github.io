<?php

use App\ExtendedParseDownParser;
use App\Listeners\GenerateSitemap;
use Mni\FrontYAML\Markdown\MarkdownParser;

/** @var $container \Illuminate\Container\Container */
/** @var $events \TightenCo\Jigsaw\Events\EventBus */

/**
 * You can run custom code at different stages of the build process by
 * listening to the 'beforeBuild', 'afterCollections', and 'afterBuild' events.
 */
$container->bind(
    MarkdownParser::class,
    ExtendedParseDownParser::class
);

$events->afterBuild([
    GenerateSitemap::class
]);
