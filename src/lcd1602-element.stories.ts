import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './lcd1602-element';

const helloWorld = new Uint8Array('Hello,           World!'.split('').map(c => c.charCodeAt(0)));

storiesOf('LCD1602', module)
  .addDecorator(withKnobs)
  .add(
    'Hello, World!',
    () => html`
      <wokwi-lcd1602 .characters="${helloWorld}"></wokwi-7segment>
    `
  )
  .add(
    'White on blue',
    () => html`
      <wokwi-lcd1602 color="white" background="blue" .characters="${new Uint8Array(
        helloWorld
      )}"></wokwi-7segment>
    `
  )
  .add(
    'Blinking cursor',
    () => html`
      <wokwi-lcd1602 
        .characters="${helloWorld}" 
        cursor="blink"
        cursorX="7" 
        cursorY="1"
      ></wokwi-7segment>
    `
  )
  .add(
    'Underline cursor',
    () => html`
      <wokwi-lcd1602 
        .characters="${helloWorld}" 
        cursor="underline"
        cursorX="7" 
        cursorY="1"
      ></wokwi-7segment>
    `
  );
