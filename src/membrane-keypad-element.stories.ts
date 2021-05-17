import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './membrane-keypad-element';

storiesOf('Membrane Keypad', module)
  .addParameters({ component: 'wokwi-membrane-keypad' })
  .add(
    'Default',
    () => html`
      <wokwi-membrane-keypad
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'With connector',
    () => html`
      <wokwi-membrane-keypad
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
        .connector=${true}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'Custom keys',
    () => html`
      <wokwi-membrane-keypad
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
        .keys=${['1', '2', '3', '4', 'Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F', '!', '@', '#', '$']}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'Three columns',
    () => html`
      <wokwi-membrane-keypad
        columns="3"
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'Three columns + connector',
    () => html`
      <wokwi-membrane-keypad
        columns="3"
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
        .connector=${true}
      ></wokwi-membrane-keypad>
    `
  );
