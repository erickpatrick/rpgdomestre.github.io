@extends('_layouts.master')

@section('header')
    @header(['page' => $page])
    @endheader
@endsection

@section('navigation')
    @navigation([
        'items' => [
            ['title' => 'Home', 'url' => $page->urlTo(), 'active' => false],
            ['title' => 'Weekly', 'url' => $page->urlTo('weekly'), 'active' => false],
            ['title' => 'Sobre', 'url' => $page->urlTo('sobre'), 'active' => false],
        ]
    ])
@endsection

@section('title')
{{ $page->site->title }} | {{ $page->site->subtitle }}
@endsection

@section('content')
<div class="home">
    @sectionPrimary
        @slot('title', 'Projetos')
        @slot('classes', 'section--columns')
        @projectListing([
            'title' => 'Alter Ego',
            'description' => 'É o nosso projeto mais recente. Ele é dividido em três partes: Sistema, Terra 2037 e Dackers.',
            'link' => '/alter-ego'
        ])
        @projectListing([
            'title' => 'Weekly',
            'description' => 'A Weekly é a curadoria de artigos, citações, imagens e links interessantes sobre o mundo do RPG para ajudar jogadores e mestres.',
            'link' => '/weekly'
        ])
    @endsectionPrimary
</div>
@endsection
