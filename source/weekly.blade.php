---
extends: _layouts.markdown
section: mContent
mActive: true
mSubheader: true
mTitle: Weekly
mSubtitle: Publicações interessantes curadas semanalmente.
#pagination:
  #collection: weekly
  #perPage: 5
---

@section('mContent')

    @if(isset($weekly) && $weekly->count())
        @foreach ($weekly as $key => $post)
            @include(
                '_partials.weekly.list',
                [
                    'position' => $weekly->count() - $key + 1,
                    'weekly' => $post,
                    'last' => $weekly->count()
                ]
            )
        @endforeach
    @else
        @include('_partials.weekly.empty')
    @endif

@endsection
