<section class="section section--primary">
    @if(isset($title))
    <h4 class="section__title">{{ $title }}</h4>
    @endif
    {{ $slot }}
</section>