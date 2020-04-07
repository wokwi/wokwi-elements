import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import { logEvent } from 'storybook-events-logger';
import './potentiometer-element';

storiesOf('Potentiometer', module)
  .addParameters({ component: 'wokwi-potentiometer' })
  .add(
    'Potentiometer',
    () => html` <wokwi-potentiometer min="0" max="200" @input=${logEvent}></wokwi-potentiometer> `
  );
