import { withActions, action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './membrane-keypad-element';

storiesOf('Membrane Keypad', module)
  .addDecorator(withActions())
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
    'Three Columns',
    () => html`
      <wokwi-membrane-keypad
        .threeColumns="${true}"
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
      ></wokwi-membrane-keypad>
    `
  );
