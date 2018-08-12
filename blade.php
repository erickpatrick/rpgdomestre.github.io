<?php

/** @var \Illuminate\View\Compilers\BladeCompiler $bladeCompiler */

/** components */
$bladeCompiler->component('_components.header');
$bladeCompiler->component('_components.subheader');
$bladeCompiler->component('_components.sectionPrimary');
$bladeCompiler->component('_components.sectionSecondary');
$bladeCompiler->component('_components.column');
$bladeCompiler->component('_components.toc');

/** named includes: easy helpers */
$bladeCompiler->include('_partials.navigation');
$bladeCompiler->include('_partials.copyright');
$bladeCompiler->include('_partials.footer');
$bladeCompiler->include('_partials.projectListing');
