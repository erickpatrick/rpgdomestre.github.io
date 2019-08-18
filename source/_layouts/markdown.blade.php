@extends('_layouts.master')

@section('description', substr($page->description,0,149).'...')

@section('header')
    @header(['page' => $page, 'subheader' => $page->mSubheader])
        @slot('title', $page->mUseMTitleForPageTitle ? $page->mTitle : $page->site->title)
        @slot('subtitle', $page->mUseMTitleForPageTitle ? $page->mSubtitle : $page->site->subtitle)
    @endheader
@endsection

@section('navigation')
    @if($page->mNavigation)
        @navigation([
            'items' => [
                [
                    'title' => 'Home', 
                    'url' => $page->urlTo(), 
                    'active' => false
                ],
                [
                'title' => 'Weekly',
                'url' => $page->urlTo('weekly'),
                'active' => $page->mActive
                ],
                [
                    'title' => 'Sobre', 
                    'url' => $page->urlTo('sobre'), 
                    'active' => $page->mActive
                ]
            ]
        ])
    @endif
@endsection

@section('title')
{{ $page->mTitle }}{{ $page->mSubtitle ? ", {$page->mSubtitle}" : '' }} | {{ $page->site->title }}
@endsection

@section('content')
<div class="home {{ $page->mContentClasses }}">
    @if($page->mSectionPrimary)
        @sectionPrimary
    @endif

    @if($page->mToc)
        <div class="table-of-contents">
        <h5>Índice</h5>
        @include($page->mToc)
        </div>
    @endif
    @yield('mContent')

    @if($page->mSectionPrimary)
        @endsectionPrimary
    @endif
</div>
@endsection
