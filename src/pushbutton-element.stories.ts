import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import './pushbutton-element';

storiesOf('pushbutton', module)
  .add(
    'Red',
    () =>
      html`
        <wokwi-pushbutton
          color="red"
          @button-press=${action('button-press')}
          @button-release=${action('button-release')}
        ></wokwi-pushbutton>
      `
  )
  .add(
    'Green',
    () =>
      html`
        <wokwi-pushbutton
          color="green"
          @button-press=${action('button-press')}
          @button-release=${action('button-release')}
        ></wokwi-pushbutton>
      `
  );
