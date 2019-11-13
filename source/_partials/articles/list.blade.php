@if ($position === 1)
<div class="w-full pb-5 md:pb-10">
    <h2 class="text-4xl md:text-6xl text-blue-900 font-semibold">{{ $article->title }}</h2>
    <div class="flex flex-wrap items-center -mx-5">
        <div class="p-5 w-full sm:w-3/4">
            <p class="text-base sm:text-lg lg:text-xl xl:text-2xl">{!! $article->description ?? '' !!}</p>
        </div>
        <div class="p-5 w-full sm:w-1/4 mt-5 sm:mt-0 text-center sm:justify-end">
            <a href="{{ $article->getUrl() }}" class="py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 inline-block bg-blue-500 hover:bg-blue-400 text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-bold">
                Ler mais
            </a>
        </div>
    </div>
</div>
@endif

@if ($position === 2)
<div class="flex flex-wrap -mx-5">
@endif

@if (in_array($position, [2, 3]))
<div class="p-5 md:pb-20 w-full sm:w-1/2">
    <h3 class="text-3xl md:text-5xl text-blue-900 font-semibold">{{ $article->title }}</h3>
    <p class="text-lg">{!! $article->description ?? '' !!}</p>
    <a href="{{ $article->getUrl() }}" class="mt-5 py-2 px-4 border-b-4 border-gray-700 hover:border-gray-600 inline-block bg-gray-400 hover:bg-gray-300 text-base sm:text-lg text-gray-700 font-bold">
        Ler mais
    </a>
</div>
@endif

@if ($position >= 4)
<div class="p-5 w-full sm:w-1/2 md:w-1/3">
    <h3 class="text-2xl md:text-3xl text-blue-900 font-semibold">{{ $article->title }}</h3>
    <p class="text-lg">{!! $article->description ?? '' !!}</p>
    <a href="{{ $article->getUrl() }}" class="mt-5 py-2 px-4 border-b-4 hover:border-gray-400 inline-block bg-transparent hover:bg-gray-100 text-gray-700 text-base sm:text-lg font-bold">
        Ler mais
    </a>
</div>
@endif

@if ($position === $last)
</div>
@endif
