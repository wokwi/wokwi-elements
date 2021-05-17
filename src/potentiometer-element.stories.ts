import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './potentiometer-element';

storiesOf('Potentiometer', module)
  .addParameters({ component: 'wokwi-potentiometer' })
  .add(
    'Potentiometer',
    () =>
      html`
        <wokwi-potentiometer min="0" max="200" @input=${action('input')}></wokwi-potentiometer>
      `
  );
