# Wokwi Elements

Web Components for Arduino and various electronic parts.

[![NPM Version](https://img.shields.io/npm/v/@wokwi/elements)](https://www.npmjs.com/package/@wokwi/elements)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/wokwi/wokwi-elements)

Check out [the component catalog](https://elements.wokwi.com).

Note: these elements only provide the presentation and display of the represented hardware. They do not provide the functional simulation code of the hardware. That is dependant on the application (simulator) that you wish to use these with, and thus up to you to create. 

## Local development

To prepare for local development, clone this repo, and then install
the dependencies:

```
npm install
```

Then start storybook:

```
npm run storybook
```

This will open a local dev server at http://localhost:6006, where you
can interact with the elements and see your changes live, similar to
https://elements.wokwi.com.

## Creating a new element

The easiest way to create a new element is to run the generator:

```
npm run new-element --name demo
```

This will generate a new element called `demo`. It will also
create a storybook file, so you will be able to see the new element
in storybook (see the "Local development" section above).

Note: updates the docstrings in the code will not be reflected
in Storybook's Docs tab unless you restart Storybook, or run the
following command manually and refresh the page:

```
npm run analyze-components
```

Check out the [Contributing Guide](CONTRIBUTING.md) for more details.

## Learn how to create elements

### Video tutorial

The [Membrane keypad element live-coding tutorial](https://www.youtube.com/watch?v=gh27icNatwA) walks
through the complete process behind creating an element: research, drawing, and writing the code /
stories.

### Blog posts

* [Recreating The Arduino Pushbutton Using SVG And &lt;lit-element&gt;](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/) 
* [Turning Arduino OLED Display into a Web Component](https://blog.wokwi.com/making-an-arduino-ssd1306-lit-element/)

## License

Wokwi Elements are released under the [MIT license](LICENSE).
