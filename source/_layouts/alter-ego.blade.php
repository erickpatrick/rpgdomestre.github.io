@extends('_layouts.master')

@section('description', $page->description)

@section('header')
    @include('_partials.header.internal')
@endsection

@section('title')
Alter Ego: {{ $page->subheading }} | {{ $page->site->title }}
@endsection

@section('content')
<div class="mt-20 px-5 min-h-screen content">
    <div class="py-5 container mx-auto">
        <div class="w-full flex pb-5 md:pb-10 items-center text-blue-900">
            <svg class="mr-5 w-16 h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12A5 5 0 119 2a5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm7 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h4a5 5 0 015 5v2zm1-5a1 1 0 010-2 5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3zm-2-4a1 1 0 010-2 3 3 0 000-6 1 1 0 010-2 5 5 0 010 10z"></path>
            </svg>
            <h2 class="text-4xl md:text-6xl text-blue-900 font-semibold">Alter Ego: {{ $page->subheading }}</h2>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full pb-20 sm:w-8/12 text-base sm:text-lg lg:text-xl xl:text-2xl">
                <p class="mb-5">{{ $page->description }}</p>
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full pb-20 sm:w-8/12 text-base sm:text-lg lg:text-xl xl:text-2xl">
                @yield('mContent')
            </div>
        </div>
    </div>
</div>
@endsection
