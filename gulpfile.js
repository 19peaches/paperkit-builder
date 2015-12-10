/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks.
 | Since we're not using Laravel and pulling all our assets from within
 | node modules, and we don't want to edit the Elixir config directly,
 | we need to reset the paths for our configuration, then we'll just
 | call everything via it's full path. Simple right?
 |
 */

 var elixir = require('laravel-elixir');

 /**
  * Custom configuration since we're using node assets and not Laravel.
  */

 elixir.config.assetsPath      = '';
 elixir.config.publicPath      = '';
 elixir.config.css.folder      = '';
 elixir.config.css.sass.folder = '';
 elixir.config.js.folder       = '';

/**
 * That's it ... now we can start mixing ... WOOT!
 */

elixir(function (mix) {

    // Copy Fonts
    mix.copy([
        'node_modules/bootstrap-sass/assets/fonts/bootstrap',
        'node_modules/font-awesome/fonts'
    ], 'dist/assets/fonts');

    // Copy Images
    mix.copy([
        'node_modules/paper-kit/assets/paper_img'
    ], 'dist/assets/paper_img');

    // We have copy demo.css into a .scss file in order to compile it.
    mix.copy('node_modules/paper-kit/assets/css/demo.css', 'sass/demo.scss');

    // Mix SASS
    mix.sass([
        'sass/app.scss',
    ], 'dist/assets/css/app.css');

// Mix JS
mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-ui/dist/jquery-ui.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
    'node_modules/paper-kit/assets/js/ct-paper-checkbox.js',
    'node_modules/paper-kit/assets/js/ct-paper-radio.js',
    'node_modules/paper-kit/assets/js/bootstrap-select.js',
    'node_modules/paper-kit/assets/js/bootstrap-datepicker.js',
    'node_modules/paper-kit/assets/js/ct-paper.js',
], 'dist/assets/js/app.js');

    // Copy html files
    mix.copy([
        'html/*.html'
    ], 'dist/');

});
