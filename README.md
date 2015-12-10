# Paperkit Builder
Paperkit builder is a lightweight [Laravel-Elixir](https://www.npmjs.com/package/laravel-elixir) build system for managing and customizing [Paper-Kit](http://www.creative-tim.com/product/paper-kit) by [Creative-Tim.](http://www.creative-tim.com)

It allows you to use the latest versions of jQuery, jQuery-UI, Bootstrap and Paper-Kit all while building up your customized sass to make it your own.

## Installation

You'll need to have node.js and npm installed and Git of course.

Change into your working directory:

```bash
$ cd Code
$ git clone https://github.com/19peaches/paperkit-builder.git

$ cd paperkit-builder
$ npm install
```

This will take a few minutes to install as we're downloading all of our dependencies, including jQuery and jQuery UI from Github.

Node will build both jQuery and jQuery UI for you to their respective `dist` directories.

## Usage

Once the install completes:

```bash
$ gulp
```

If you're ready for production, use the Elixir production flag:

```bash
$ gulp --production
```

Elixir will build all your assets and create a single `app.css` and `app.js` file along with maps for each, move all fonts and images, and copy the existing html examples to your `dist` directory.

## Customizing

To customize simply add your own `sass` or `scss` files to the `sass` directory and import them into `app/app.scss` or write your own styles and overrides in that file.

If you have additional javascript files to build into `app.js`, add them to the `js` directory and them include them in the `mix.styles` method in `gulpfile.js`

```js
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
	// add any new javascript files here
], 'dist/assets/js/app.js');
```

If you have any questions or issues please use the issues tab.

Paper-Kit is Copyright Creative-Tim - [License](http://creative-tim.com/license)
