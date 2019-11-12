<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="@yield('description')">
        <meta name="keywords" content="{{ $page->site->keywords  }}">
        <link rel='manifest' href='{{ $page->baseUrl }}/manifest.json'>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        {{-- <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}"> --}}
        <title>@yield('title', $page->site->title)</title>
        <style>
            @media (min-width: 768px) {
                .md\:text-8xl {
                    font-size: 6rem;
                }
            }
        </style>
    </head>
    <body class="font-serif">
        @yield('header')
        @yield('content')
        @yield('extras')

        @footer
        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
    </body>
</html>
