<?php

return [
    'baseUrl' => 'http://localhost:3000/',
    'production' => false,
    'collections' => [
        'weekly' => [
            'path' => '{collection}/{date|Y-W}/{filename}',
            'sort' => '-date'
        ]
    ],
    'site' => [
        'title' => 'RPG do Mestre',
        'subtitle' => 'Onde o mestre cria, reinventa, modifica e publica RPG.',
        'description' => 'Site que aborda Roleplaying Games nacionais e internacionais. Poussui sistema e cenário próprios, o Alter Ego. Também possui uma newsletter própria, a Weekly, que traz links semanalmente sobre RPGs.',
        'keywords' => 'rpg do mestre, rpgdm, rpg, ttrpg, roleplaying games, games, roleplaying, dnd, d&amp;d, dungeons and dragons, dungeons, dragons, vampiro, d20, d10, alter ego, newsletter, weekly, weeklies, cenário, scenario, alter, ego, system, sistema',
    ],
    'urlTo' => function ($page, $path = '') {
        return implode('', [
            $page->baseUrl,
            $path
        ]);
    }
];
