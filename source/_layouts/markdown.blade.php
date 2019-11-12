@extends('_layouts.master')

@section('description', substr($page->description,0,149).'...')

@section('header')
    @include('_partials.header.internal')
@endsection

@section('title')
{{ $page->mTitle }}{{ $page->mSubtitle ? ", {$page->mSubtitle}" : '' }} | {{ $page->site->title }}
@endsection

@section('content')
<div class="mt-20 px-5 min-h-screen">
    <div class="py-5 container mx-auto">
        @yield('mContent')
    </div>
</div>
@endsection
