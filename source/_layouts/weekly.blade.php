@extends('_layouts.master')

@section('description', substr($page->description,0,149).'...')

@section('header')
    @include('_partials.header.internal')
@endsection

@section('title')
{{ $page->mTitle }}{{ $page->mSubtitle ? ", {$page->mSubtitle}" : '' }} | {{ $page->site->title }}
@endsection

@section('content')
<div class="mt-20 px-5 min-h-screen weekly">
    <div class="py-5 container mx-auto">
        <div class="w-full pb-5 md:pb-10">
            <h2 class="text-4xl md:text-6xl text-blue-900 font-semibold">{{ $page->weeklyTitle }}</h2>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full pb-20 sm:w-8/12 text-base sm:text-lg lg:text-xl xl:text-2xl">
                @yield('mContent')
            </div>
        </div>
    </div>
</div>
@endsection
