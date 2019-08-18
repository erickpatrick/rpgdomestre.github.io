@extends('_layouts.master')

@section('description', 'Alter Ego: Regras de RPG, Ambientação em forma de Cenário para RPG, e Ficção em forma de contos, histórias e algo mais.')

@section('header')
    @header(['page' => $page, 'subheader' => true])
        @slot('title', 'Alter Ego')
        @slot('subtitle', 'Regras. Ambientação. Ficção.')
    @endheader
@endsection

@section('title')
Alter Ego | {{ $page->site->title }}
@endsection

@section('content')
<div class="alter-ego">
    @sectionPrimary
        <p>Depois de um longo tempo de amadurecimento, <em>Alter Ego</em> veio para ser desenvolvido com e para a comunidade RPGista.</p>
        <p>Ajude-nos com as <strong>regras</strong>, ajustando o <em>sistema</em>; com a <strong>ambientação</strong>, evoluindo a <em>Terra 2037</em>; ou decidindo o futuro dos <strong>personagens</strong>, em <em>Dackers</em>.</p>
    @endsectionPrimary

    @sectionSecondary
        @slot('classes', 'section--columns')
        @column(['showLink' => true])
            @slot('title', 'Sistema')
            @slot('content')
                <p>Alter Ego, do Latim, <em>outro eu</em>, é um sistema genérico e rápido que utiliza dados de 6 lados.</p>
            @endslot
            @slot('link', $page->urlTo('/alter-ego/sistema'))
        @endcolumn

        @column(['showLink' => true])
            @slot('title', 'Terra 2037')
            @slot('content')
                <p>A grande e nova Era da Informação chegou. O mundo inteiro está, literalmente, conectado.</p>
            @endslot
            @slot('link', $page->urlTo('/alter-ego/terra-2037'))
        @endcolumn

        @column(['showLink' => true])
            @slot('title', 'Dackers')
            @slot('content')
                <p>No velho ditado "há o dia da caça e do caçador", os Dackers acreditam que você é a caça...</p>
            @endslot
            @slot('link', $page->urlTo('/alter-ego/dackers'))
        @endcolumn
    @endsectionSecondary
</div>
@endsection
