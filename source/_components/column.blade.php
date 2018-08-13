<section>
    <h6>{{ $title }}</h6>
    {{ $content }}
    @if($showLink)
    <a href="{{ $link ?? '#' }}" class="">Visitar</a>
    @endif
</section>