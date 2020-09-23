import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './power-switch-element';

storiesOf('Power Switch', module)
  .addParameters({ component: 'wokwi-power-switch' })
  .add('Default', () => html` <wokwi-power-switch></wokwi-power-switch> `);
