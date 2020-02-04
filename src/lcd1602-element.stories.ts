import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './lcd1602-element';

const encode = (s: string) => new Uint8Array(s.split('').map(c => c.charCodeAt(0)));
const helloWorld = 'Hello,           World!';

storiesOf('LCD1602', module)
  .addDecorator(withKnobs)
  .add(
    'Hello, World!',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(text('value', helloWorld))}"
        cursor=${select('cursor', ['off', 'blink', 'underline'], 'off')}
        cursorX=${number('cursorX', 0, { min: 0, max: 15 })}
        cursorY=${number('cursorY', 0, { min: 0, max: 1 })}
      ></wokwi-lcd1602>
    `
  )
  .add(
    'White on blue',
    () => html`
      <wokwi-lcd1602
        color="white"
        background="blue"
        .characters="${encode(helloWorld)}"
        cursor="blink"
      ></wokwi-lcd1602>
    `
  )
  .add(
    'Blinking cursor',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(helloWorld)}"
        cursor="blink"
        cursorX="7"
        cursorY="1"
      ></wokwi-lcd1602>
    `
  )
  .add(
    'Underline cursor',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(helloWorld)}"
        cursor="underline"
        cursorX="7"
        cursorY="1"
      ></wokwi-lcd1602>
    `
  );
