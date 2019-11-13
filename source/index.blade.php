@extends('_layouts.master')

@section('header')
    @include('_partials.header.main')
@endsection

@section('title')
{{ $page->site->title }} | {{ $page->site->subtitle }}
@endsection

@section('content')
<div class="mt-20 px-5">
    <div class="py-5 container mx-auto">
        <div class="w-full pb-5 md:pb-10">
            <h2 class="text-5xl text-blue-900 font-semibold">Projetos</h2>
        </div>
        <div class="flex flex-wrap justify-center -mx-5">
            <div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900 ">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 01-.9 0L4 9.62V18h16V9.62z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Weekly</h3>
                    </div>
                    <p class="text-2xl">Na #Weekly é uma curadoria do mais interessante do mundo RPGístico na última semana.</p>
                    <a href="/weekly" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Ver todas as edições
                    </a>
                </div>
            </div>
            <!--<div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 21H7a4 4 0 01-4-4V5c0-1.1.9-2 2-2h10a2 2 0 012 2h2a2 2 0 012 2v11a3 3 0 01-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 01-.17-1zm-7-3h4a1 1 0 010 2H8a1 1 0 010-2zm0-4h4a1 1 0 010 2H8a1 1 0 010-2zm0-4h4a1 1 0 010 2H8a1 1 0 110-2zm9 11a1 1 0 002 0V7h-2v11z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Artigos</h3>
                    </div>
                    <p class="text-2xl">Aqui, trago minhas próprias criações: personagens, aventuras, adaptações, NPCs, monstros e muito mais.</p>
                    <a href="/artigos" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Ver todos os artigos
                    </a>
                </div>
            </div>-->
            <div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12A5 5 0 119 2a5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm7 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h4a5 5 0 015 5v2zm1-5a1 1 0 010-2 5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3zm-2-4a1 1 0 010-2 3 3 0 000-6 1 1 0 010-2 5 5 0 010 10z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Alter Ego</h3>
                    </div>
                    <p class="text-2xl">É o projeto mais ambicioso. Ele é dividido em três partes: Sistema, Terra 2037 e Dackers.</p>
                    <a href="/alter-ego" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Descubra o Alter Ego
                    </a>
                </div>
            </div>
            <!--<div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 18.94V21h3a1 1 0 010 2H8a1 1 0 010-2h3v-2.06A8 8 0 014 11a1 1 0 012 0 6 6 0 1012 0 1 1 0 012 0 8 8 0 01-7 7.94zM12 1a4 4 0 014 4v6a4 4 0 11-8 0V5a4 4 0 014-4zm0 2a2 2 0 00-2 2v6a2 2 0 104 0V5a2 2 0 00-2-2z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Podcast</h3>
                    </div>
                    <p class="text-2xl">Em breve, também estarei de volta com o <em>Papo de Mestre</em>. Dessa vez, curto, simples e direto.</p>
                    <a href="/casts" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Escute todos os casts
                    </a>
                </div>
            </div>-->
        </div>
    </div>
</div>
@endsection
