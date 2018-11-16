# PostCSS Media Directives [![Build Status][ci-img]][ci]

[PostCSS] plugin that uses the short names of the @media Directive.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/Saran010/postcss-media-directives.svg
[ci]:      https://travis-ci.org/Saran010/postcss-media-directives

```css
@miw(480) { // or 480px
    body {
        background-color: lightgreen;
    }
}
@maw(480) { // or 480px
    body {
        background-color: lightgreen;
    }
}
  
```

```css
@media(min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
@media(max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

## Usage

```js
postcss([ require('postcss-media-directives') ])
```

See [PostCSS] docs for examples for your environment.
