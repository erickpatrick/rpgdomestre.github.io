---
extends: _layouts.markdown
section: mContent
mActive: true
mSubheader: true
mTitle: Artigos
mSubtitle: Minhas ideias sobre RPG e os diversos conteúdos relacionados.
#pagination:
  #collection: artigos
  #perPage: 5
---

@php
$counter = 1;
@endphp

@section('mContent')

    @if(isset($articles) && $articles->count())
        @foreach ($articles as $key => $post)
            @include(
                '_partials.articles.list',
                [
                    'position' => $counter,
                    'article' => $post,
                    'last' => $articles->count()
                ]
            )

            @php
            $counter++;
            @endphp
        @endforeach
    @else
        @include('_partials.articles.empty')
    @endif

@endsection
