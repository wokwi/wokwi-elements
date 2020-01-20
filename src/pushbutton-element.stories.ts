import { storiesOf } from '@storybook/web-components';
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
  )
  .add(
    'Four buttons',
    () =>
      html`
        <wokwi-pushbutton
          color="red"
          @button-press=${action('red button-press')}
          @button-release=${action('red button-release')}
        ></wokwi-pushbutton>
        <wokwi-pushbutton
          color="green"
          @button-press=${action('green button-press')}
          @button-release=${action('green button-release')}
        ></wokwi-pushbutton>
        <wokwi-pushbutton
          color="blue"
          @button-press=${action('blue button-press')}
          @button-release=${action('blue button-release')}
        ></wokwi-pushbutton>
        <wokwi-pushbutton
          color="white"
          @button-press=${action('white button-press')}
          @button-release=${action('white button-release')}
        ></wokwi-pushbutton>
      `
  );
