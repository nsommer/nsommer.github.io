CSS Grid System
================
This is a very simple CSS grid system, built with Sass. It allows to generate a custom grid system by changing a few variables in `src/_variables.scss`.

## Capabilities
- Float based grid system with configurable size classes.
- Natural language class names rather than decimal numbers.
- Utility classes for cell alignment and offsets.
- Configurable optional responsive sizing classes.

## Usage
For detailed documentation, visit the [demo page](https://nsommer.github.io/sass-grids). Here's the short version:

```html
<div class="grid">
  <div class="cell cell-half">   I'm a cell taking half the width of my parent.        </div>
  <div class="cell cell-quarter">I'm a cell taking a quarter of the width of my parent.</div>
  <div class="cell cell-quarter">I'm a cell taking a quarter of the width of my parent.</div>
</div>
```

To be able to use the grid system with standard values, copy the `dist/sass-grids.css` into your project folder and include it into the head your HTML like that:

```html
<link rel="stylesheet" href="sass-grids.css">
```

## Customize
To customize, clone this repository and change the variables in `src/_variables.scss`. The most important variable is `$cells-per-row` which defaults to 10. The smallest grid cell available after compiling will be the size of **1 / $cells-per-row**. **$cells-per-row** must be at least 2. The code uses a map internally to form common language names for cell size classes. The map contains entries for up to 15 cell sizes, you have to add entries to it if you set **cells-per-row** to something greater than 15.

The variable `$gutter` sets the space between two cells. The variable `$responsive-size-classes` which defaults to true enables or disables the generation of responsive size classes. Additional width breakpoint can be added to the `$width-breakpoints` map variable.

After adjusting the variables, you have to compile the Sass files to CSS.

## Compiling the Sass files
Install Sass on your system if you didn't already.

```bash
gem install sass
```

Assuming you have node and npm installed, switch to the project root and install grunt and its sass plugin.

```bash
npm install
```

After that, compiling the Sass files into CSS is as easy as typing:

```bash
grunt dist
```

## Float based
Besides floating based grid systems, there do also exist solutions that use *flexbox* or *inline-block* and *box-sizing*. I decided to go for a solution using floats because I already knew how that works. *Flexbox* would probably be the best solution technically, but aside from very bad support in IE, this is something I want to explore another time.

## Yet another grid system?
I needed a grid system for a website I was building so I took the opportunity to improve my Sass skills by writing it from scratch by myself. :-)

## License
MIT license rocks.
