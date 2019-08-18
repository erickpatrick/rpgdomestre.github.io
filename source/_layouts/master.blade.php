<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="@yield('description')">
        <meta name="keywords" content="{{ $page->site->keywords  }}">
        <link rel='manifest' href='{{ $page->baseUrl }}/manifest.json'>
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <title>@yield('title', $page->site->title)</title>
    </head>
    <body>
        <div id="app">
            @yield('header')
            @yield('navigation')
            @yield('sidebar')
            @yield('content')
            @yield('extras')

            @footer
        </div>
        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
    </body>
</html>
