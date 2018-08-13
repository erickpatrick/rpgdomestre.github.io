<header class="header">
    @includeWhen($subheader ?? false, '_partials.subheader')
    <h1 class="header__title">{{ $title ?? $page->site->title ?? '' }}</h1>
    <h5 class="header__subtitle">{{ $subtitle ?? $page->site->subtitle ?? '' }}</h5>
    {{ $slot }}
</header>