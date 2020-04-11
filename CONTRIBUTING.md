# Contributing to Wokwi Elements

First of all, thank you for considering contributing to Wokwi Elements! 
Please go over these guidelines to ensure that your contribution lands
successfully.

## Creating a New Element

Before starting to work on a new element, please 
[file an issue](https://github.com/wokwi/wokwi-elements/issues/new/choose)
to discuss the implementation. 

Also, please make sure that any 3d-party graphics that you use
for the element is released under a permissive license (such as
MIT, BSD, Apache, or CC-BY), and that you give credits to the 
original authors as required.

To create the element, use our hygen generator, by running:

```
npm run new-element --name demo
```

Replacing `demo` with your actual element name (e.g. `led`).

Running this command will also generate a Storybook file for
the new element. You can then start Storybook by runnning:

```
npm run storybook
```

This will open a local dev server at http://localhost:6006, where you
can interact with your new element and see any changes live, similar to
https://elements.wokwi.com.

## Element Guidelines

Please make sure to follow these guidelines when working on your new element:

1. If the element is an input element (knob, button, slider, etc.), it has
   to be keyboard accessible (i.e. adding the `tabindex` attribute, listening
   for the `keydown` and `keyup` events, etc).
2. Make sure that your element renders well and functions on mobile devices.
3. Add docstring to the element class and any public properties/methods. These
   doc strings will appear in the Docs tag in storybook. Check out the [Resistor
   Element](src/resistor-element.ts) for an example.
4. Your commit messages should follow the [conventional commits 
   standard](https://www.conventionalcommits.org/), e.g.:
   `feat: add neopixel element`

## Video Tutorial and Blog Post

The [Membrane keypad element live-coding video tutorial](https://www.youtube.com/watch?v=gh27icNatwA) walks
through the complete process behind creating an element: research, drawing, and writing the code /
stories. 

If you prefer reading over watching a video, please check out [Recreating The Arduino Pushbutton Using SVG And &lt;lit-element&gt;](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/).
