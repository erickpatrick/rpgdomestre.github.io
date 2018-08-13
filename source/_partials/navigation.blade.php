<ul class="navigation">
@foreach ($items as $item)
    <li class="navigation__link{{ !$item['active'] ? '' : ' navigation__link--active' }}">
    <a href="{{ $item['url'] }}">{{ $item['title'] }}</a></li>
@endforeach
</ul>