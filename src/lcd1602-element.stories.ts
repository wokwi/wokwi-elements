import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import { fontA02 } from './lcd1602-font-a02';
import './lcd1602-element';

const encode = (s: string) => new Uint8Array(s.split('').map((c) => c.charCodeAt(0)));
const helloWorld = 'Hello,           World!';
const symbols = '\x10 I \x9d Symbols! \x11\xab \x14\x18\x17\x1e \x91\x98\x96 \x93\x97\xa9 \xbb';

storiesOf('LCD1602', module)
  .addParameters({ component: 'wokwi-lcd1602' })
  .addDecorator(withKnobs)
  .add(
    'Hello, World!',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(text('value', helloWorld))}"
        .cursor=${boolean('cursor', false)}
        .blink=${boolean('blink', false)}
        cursorX=${number('cursorX', 0, { min: 0, max: 15 })}
        cursorY=${number('cursorY', 0, { min: 0, max: 1 })}
        .backlight=${boolean('backlight', true)}
      ></wokwi-lcd1602>
    `
  )
  .add(
    'White on blue',
    () => html`
      <wokwi-lcd1602
        color="white"
        background="blue"
        blink="true"
        .characters="${encode(helloWorld)}"
      ></wokwi-lcd1602>
    `
  )
  .add(
    'Blinking cursor',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(helloWorld)}"
        blink="true"
        cursorX="7"
        cursorY="1"
      ></wokwi-lcd1602>
    `
  )
  .add(
    'Cursor',
    () => html`
      <wokwi-lcd1602
        .characters="${encode(helloWorld)}"
        cursor="true"
        cursorX="7"
        cursorY="1"
      ></wokwi-lcd1602>
    `
  )
  .add(
    'Display off (green)', //
    () => html`<wokwi-lcd1602 .backlight=${false}></wokwi-lcd1602>`
  )
  .add(
    'Display off (blue)',
    () => html`
      <wokwi-lcd1602 .backlight=${false} color="white" background="blue"></wokwi-lcd1602>
    `
  )
  .add(
    'Font A02',
    () =>
      html`
        <wokwi-lcd1602
          .characters="${encode(text('value', symbols))}"
          .font=${fontA02}
          .cursor=${boolean('cursor', false)}
          .blink=${boolean('blink', false)}
          cursorX=${number('cursorX', 0, { min: 0, max: 15 })}
          cursorY=${number('cursorY', 0, { min: 0, max: 1 })}
        ></wokwi-lcd1602>
      `
  )
  .add(
    'I²C pins',
    () =>
      html`
        <wokwi-lcd1602
          .characters="${encode('I only need        4 pins!')}"
          pins="i2c"
        ></wokwi-lcd1602>
      `
  )
  .add(
    'No pins',
    () =>
      html`
        <wokwi-lcd1602
          .characters="${encode('Look ma!           I got no pins')}"
          pins="none"
        ></wokwi-lcd1602>
      `
  );
