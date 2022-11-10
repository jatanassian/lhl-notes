# Outline

### Responsive Design

- From [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design):
  > Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.

### Mobile first vs Desktop first

- [Figma](https;//www.figma.com) was made for desktop first: small buttons, folder/files system with dropdowns...
- [TTC](https://www.ttc.ca) and [STM](https://www.stm.info/en) were made for mobile first: huge buttons and menus made for the finger, "More" button even though there's room for more... The space isn't being used to its full potential
- It's a decision based on what's your website's audience

### Introduction to Chrome DevTools

- Useful to see the HTML and CSS
- Live changing the content and CSS properties
- Can change width of page and simulate phone/tablet experience

### Viewport Meta Tag

- `width=device-width` tells the browser to set the width of the page to the width of the device
- `intial-scale=1.0` sets the initial zoom level of the page to `1.0` (or 100%)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Units of Measure

- Absolute sizes: `px`, `pt`, `in`
- Relative sizes: `%`, `vh`, `vw`, `em`, `rem`

### `em` and `rem`

```css
body {
  font-size: 24px;
}

h1 {
  font-size: 2em;
}

article {
  font-size: 0.5em; /* h1 inside article will adapt to that font-size (same size as p) */
}
```

- pixels are limited as they are static

```css
body {
  font-size: 24px;
  width: 400px; /* Would stay at 400px no matter how big */
  width: 1200px; /* Would stay no matter how small (horizontal scrolling) */
}
```

- to fix that you can use percentage:

```css
body {
  font-size: 24px;
  width: 100%; /* Here */
}

/* Add this to stop the website from "wiggling" */
html,
body {
  margin: 0;
  padding: 0;
}

section {
  padding: 1em; /* To add back the space around */
}
```

### `ch`

- current paragraphs are too wide, would lose focus if reading this blog post
- Look at news website for example [The Guardian](https://www.theguardian.com/): text is not as wide (around 700px, or 70-90 characters long)
- we can use `ch`, based on the width of the 0 character, but it's still the same issue as `px`

```css
article {
  font-size: 0.5em;
  width: 75ch; /* This one */
}
```

### `max-width` and `min-width`

````css
article {
  font-size: 0.5em;
  width: 100%;
  max-width: 75ch;
  min-width: 200px;
}
```

### Flexbox

```css
article {
        font-size: 0.5em;
        width: 100%;
        max-width: 40ch; /* This one */
        min-width: 200px;
      }

      section {
        padding: 1em;
        display: flex; /* This one */
        flex-wrap: wrap; /* This one */
        gap: 1em;
      }
```

### Media Queries
- new HTML file with CSS:
```css
img {
        width: 40%;
        height: auto;
      }

      body {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
      }

      article {
        width: 50%; /* update it later to calc(50% - 0.5em) */
        display: flex;
        align-items: center;
        gap: 1em;
      }
```

- **media type** and **media feature**
- Media types: `screen`, `print`, `speech`, and `all`
- Media features: `aspect-ratio`, `device-height`, `light-level`, and `orientation`

```css
@media screen and (max-width: 800px) {
        article {
          width: 100%;
          flex-direction: column;
        }

        img {
          width: 100%;
        }
      }
```

- Here there's a big clash when switching from one size to the other

```css
@media screen and (max-width: 700px) {
        article {
          width: 100%;
          flex-direction: column;
        }
      }

      @media screen and (max-width: 1100px) {
        article {
          flex-direction: column;
        }

        img {
          width: 100%;
        }
      }
      ```

- let's resize the image when large screen

```css
@media screen and (min-width: 1100px) {
        img {
          width: 60%;
        }
      }
      ```
- let's play with colors
```css
/* Add this to every media query with diff colors */
body {
          background-color: green; /* The 700px one won't be appliedm ask why*/
        }
```
- remove last media query as it is redundant
- reorder media queries by level of specificity to fix color overwriting

- You can also specify certain style sheets

```html
<link
  rel="stylesheet"
  media="screen and (min-width: 1200px)"
  href="large.css"
/>
```

### Break

https://coffee-break-time.surge.sh/?time=600

### Intro to Sass

- **S**yntactically **A**wesome **S**yle **S**heets (Sassy CSS)

### Variables

```scss
// variables
$font-color: lightblue;
$font-size: 1.2rem;

p {
  color: $font-color;
}
h1 {
  font-size: $font-size;
}
```

### Sass CLI

- [npm sass](https://www.npmjs.com/package/sass)

```sh
# install globally
npm i -g sass

# output to console
sass input.scss

# output to file
sass input.scss output.css

# file watcher
sass input.scss output.css --watch

# no source map
sass input.scss output.css --watch --no-source-map

# source folder:output folder
sass app/sass:public/stylesheets --watch
sass sass:stylesheets --watch --no-source-map

# get rid of .sass-cache
sass main.scss output.css --no-source-map --no-cache
```

### Nesting

```scss
// using nesting
.container {
  p {
    color: magenta;
    text-decoration: underline;
  }
  div {
    border: 1px solid black;
  }
}
```

### Partials

```scss
// _variables.scss
$font-size: 24px;
$border-width: 10px;
$border-color: hotpink;
$border-style: dotted;
$border: $border-width $border-style $border-color;
```

```scss
// styles.scss
@import "_variables";

// you can omit the underscore
@import "variables";
```

### Extending Styles

```scss
.header-text {
  font-size: 2em;
  font-family: "sans-serif";
}

.heading {
  @extend .header-text;
  color: rebeccapurple;
}
```

#### Mixins

```scss
// declare the mixin
@mixin header-styles {
  height: 50px;
  background-color: $header-bg;
}

// include it in another style
header {
  @include header-styles();
}

// mixins can take parameters as well
@mixin make-square($n) {
  height: $n;
  width: $n;
  font-size: ($n / 2);
  border: ($n / 4) solid black;
}

.small-square {
  @include make-square(4em);
}

.med-square {
  @include make-square(30px);
}
```
````
