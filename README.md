# Wokwi Elements

Web Components for Arduino and various electronic parts.

[![NPM Version](https://img.shields.io/npm/v/@wokwi/elements)](https://www.npmjs.com/package/@wokwi/elements)

Check out [the component catalog](https://elements.wokwi.com).

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
[https://elements.wokwi.com].

## Creating a new element

The easiest way to create a new element is to run the generator:

```
npm run new-element --name demo
```

This will generate a new element called `demo`. It will also
create a storybook file, so you will be able to see the new element
in storybook (see the "Local development" section above).

## License

Wokwi Elements are released under the [MIT license](LICENSE).
