@extends('_layouts.markdown')

@section('description', 'Alter Ego: Regras de RPG, Ambientação em forma de Cenário para RPG, e Ficção em forma de contos, histórias e algo mais.')

@section('title')
Alter Ego | {{ $page->site->title }}
@endsection

@section('content')
<div class="mt-20 px-5 min-h-screen">
    <div class="py-5 container mx-auto">
        <div class="w-full flex pb-5 md:pb-10 items-center text-blue-900">
            <svg class="mr-5 w-16 h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12A5 5 0 119 2a5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm7 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h4a5 5 0 015 5v2zm1-5a1 1 0 010-2 5 5 0 015 5v2a1 1 0 01-2 0v-2a3 3 0 00-3-3zm-2-4a1 1 0 010-2 3 3 0 000-6 1 1 0 010-2 5 5 0 010 10z"/>
            </svg>
            <h2 class="text-4xl md:text-6xl text-blue-900 font-semibold">Alter Ego</h2>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full pb-20 sm:w-8/12 text-base sm:text-lg lg:text-xl xl:text-2xl">
                <p class="mb-5">É o projeto mais ambicioso. Ele é dividido em três partes: Sistema, Terra 2037 e Dackers.</p>
            </div>
        </div>

        <div class="flex flex-wrap justify-center -mx-5">
            <div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900 ">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0115 19.43V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 019 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 00-2.41 1.4zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Sistema</h3>
                    </div>
                    <p class="text-2xl">Alter Ego, do Latim, outro eu, é um sistema genérico e rápido que utiliza dados de 6 lados.</p>
                    <a href="/alter-ego/sistema/" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Leia as regras
                    </a>
                </div>
            </div>
            <div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.06 13a8 8 0 005.18 6.51A18.5 18.5 0 018.02 13H4.06zm0-2h3.96a18.5 18.5 0 011.22-6.51A8 8 0 004.06 11zm15.88 0a8 8 0 00-5.18-6.51A18.5 18.5 0 0115.98 11h3.96zm0 2h-3.96a18.5 18.5 0 01-1.22 6.51A8 8 0 0019.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 110-20 10 10 0 010 20z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Terra 2037</h3>
                    </div>
                    <p class="text-2xl">A grande e nova Era da Informação chegou. O mundo inteiro está, literalmente, conectado.</p>
                    <a href="/alter-ego/terra-2037/" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        Descubra o futuro
                    </a>
                </div>
            </div>
            <div class="p-5 w-full sm:w-1/2">
                <div class="p-5 bg-gray-100">
                    <div class="pb-5 flex items-center text-blue-900">
                        <svg class="mr-5 w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 22a2 2 0 01-2-2v-1a1 1 0 00-1-1 1 1 0 00-1 1v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-3H5a3 3 0 110-6h1V8a2 2 0 012-2h3V5a3 3 0 116 0v1h3a2 2 0 012 2v3a2 2 0 01-2 2h-1a1 1 0 00-1 1 1 1 0 001 1h1a2 2 0 012 2v3a2 2 0 01-2 2h-3zm3-2v-3h-1a3 3 0 110-6h1V8h-3a2 2 0 01-2-2V5a1 1 0 00-1-1 1 1 0 00-1 1v1a2 2 0 01-2 2H8v3a2 2 0 01-2 2H5a1 1 0 00-1 1 1 1 0 001 1h1a2 2 0 012 2v3h3v-1a3 3 0 116 0v1h3z"/>
                        </svg>
                        <h3 class="text-3xl font-semibold">Dackers</h3>
                    </div>
                    <p class="text-2xl">No velho ditado "há o dia da caça e do caçador", os Dackers acreditam que você é a caça...</p>
                    <a href="/alter-ego/dackers/" class="inline-block mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500">
                        O que você é?
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
