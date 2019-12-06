import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import './led-element';

storiesOf('LED', module)
  .addDecorator(withKnobs)
  .add(
    'Red',
    () =>
      html`
        <wokwi-led color="red" .value=${boolean('value', false)}></wokwi-led>
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
        ></wokwi-led>
      `
  )
  .add(
    'Green',
    () =>
      html`
        <wokwi-led color="green" .value=${boolean('value', false)}></wokwi-led>
      `
  )
  .add(
    'Yellow',
    () =>
      html`
        <wokwi-led color="yellow" .value=${boolean('value', false)}></wokwi-led>
      `
  )
  .add(
    'Blue',
    () =>
      html`
        <wokwi-led color="blue" .value=${boolean('value', false)}></wokwi-led>
      `
  )
  .add(
    'Orange',
    () =>
      html`
        <wokwi-led color="orange" .value=${boolean('value', false)}></wokwi-led>
      `
  )
  .add(
    'White',
    () =>
      html`
        <wokwi-led color="white" .value=${boolean('value', false)}></wokwi-led>
      `
  );
