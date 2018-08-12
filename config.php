<?php

return [
    'baseUrl' => 'http://rpgdm.test/',
    'production' => false,
    'collections' => [
        'weekly' => [
            'path' => '{collection}/{date|Y-W}/{filename}',
            'sort' => '-date'
        ]
    ],
    'site' => [
        'title' => 'RPG do Mestre',
        'subtitle' => 'Onde o mestre cria, reinventa, modifica e publica RPG.'
    ],
    'urlTo' => function ($page, $path = '') {
        return implode('', [
            $page->baseUrl,
            $path
        ]);
    }
];
