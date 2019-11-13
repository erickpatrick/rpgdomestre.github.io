@extends('_layouts.master')

@section('description', substr($page->description,0,149).'...')

@section('header')
    @include('_partials.header.internal')
@endsection

@section('title')
{{ $page->title }} | {{ $page->site->title }}
@endsection

@section('content')
<div class="mt-20 px-5 min-h-screen content">
    <div class="py-5 container mx-auto">
        <div class="w-full pb-5 md:pb-10">
            <h2 class="text-4xl md:text-6xl text-blue-900 font-semibold">{{ $page->title }}</h2>
            <h5 class="text-lg md:text-2xl text-blue-500">
                <span>por {{ $page->author }}</span> <time>em {{ $page->formatDate($page->date) }}</time>
            </h5>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full pb-20 sm:w-8/12 text-base sm:text-lg lg:text-xl xl:text-2xl">
                @yield('mContent')
            </div>
        </div>
    </div>
</div>
@endsection
