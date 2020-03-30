import { storiesOf } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import './potentiometer-element';

storiesOf('potentiometer', module)
  .addParameters({ component: 'wokwi-potentiometer' })
  .add(
    'potentiometer',
    () =>
      html`
        <wokwi-potentiometer
          min="0"
          max="200"
          @input=${action('potentiometer-value-changed')}
        ></wokwi-potentiometer>
      `
  );
