<?php

namespace App;

use Mni\FrontYAML\Markdown\MarkdownParser;

class ExtendedParseDownParser implements MarkdownParser
{
    private $parser;

    /**
     * ExtendedParseDownParser constructor.
     * @param ExtendedParseDown|null $parsedownExtra
     * @throws \Exception
     */
    public function __construct(ExtendedParseDown $parsedownExtra = null)
    {
        $this->parser = $parsedownExtra ?: new ExtendedParseDown();
    }

    public function parse($markdown)
    {
        return $this->parser->parse($markdown);
    }
}
