---
extends: _layouts.markdown
section: mContent
mActive: true
mSubheader: true
mTitle: Weekly
mSubtitle: Publicações interessantes curadas semanalmente.
mNavigation: true
mSectionPrimary: true
mUseMTitleForPageTitle: true
#pagination:
  #collection: weekly
  #perPage: 5
description: >-
    Publicações interessantes sobre Roleplaying Games, curadas semanalmente e manualmente.
---

@section('mContent')

    @if(isset($weekly) && $weekly->count())
        <ul class="weekly-list">
        @foreach ($weekly as $post)
            <li>
                <h5><a href="{{ $post->getUrl() }}">{{ $post->mSubtitle }}</a></h5>
                <p>{!! $post->description ?? '' !!}</p>
            </li>
        @endforeach
        </ul>
    @else
        Não há edição de weekly publicada até o momento
    @endif

@endsection