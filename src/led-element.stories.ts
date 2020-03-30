import { storiesOf } from '@storybook/web-components';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import './led-element';

const brightnessOptions = {
  range: true,
  min: 0,
  max: 1.0,
  step: 0.05,
};

storiesOf('LED', module)
  .addDecorator(withKnobs)
  .add(
    'Red',
    () =>
      html`
        <wokwi-led
          color="red"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Red with label',
    () =>
      html`
        <wokwi-led
          color="red"
          .value=${boolean('value', false)}
          label="${text('label', '12')}"
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Green',
    () =>
      html`
        <wokwi-led
          color="green"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Yellow',
    () =>
      html`
        <wokwi-led
          color="yellow"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Blue',
    () =>
      html`
        <wokwi-led
          color="blue"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Orange',
    () =>
      html`
        <wokwi-led
          color="orange"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'White',
    () =>
      html`
        <wokwi-led
          color="white"
          .value=${boolean('value', false)}
          .brightness=${number('brightness', 1.0, brightnessOptions)}
        ></wokwi-led>
      `
  )
  .add(
    'Brightness Levels',
    () =>
      html`
        <wokwi-led color="red" label="0" .value=${true} brightness="0"></wokwi-led>
        <wokwi-led color="red" label="1%" .value=${true} brightness="0.01"></wokwi-led>
        <wokwi-led color="red" label="10%" .value=${true} brightness="0.1"></wokwi-led>
        <wokwi-led color="red" label="25%" .value=${true} brightness="0.25"></wokwi-led>
        <wokwi-led color="red" label="50%" .value=${true} brightness="0.5"></wokwi-led>
        <wokwi-led color="red" label="75%" .value=${true} brightness="0.75"></wokwi-led>
        <wokwi-led color="red" label="100%" .value=${true}></wokwi-led>
      `
  );
