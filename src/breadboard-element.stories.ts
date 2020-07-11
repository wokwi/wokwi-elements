import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './breadboard-element';

storiesOf('Breadboard', module)
  .addParameters({ component: 'wokwi-breadboard' })
  .addDecorator(withKnobs)
  .add('Default', () => html` <wokwi-breadboard size="full"></wokwi-breadboard> `)
  .add('half sized board', () => html` <wokwi-breadboard size="half"></wokwi-breadboard> `)
  .add('mini sized board', () => html` <wokwi-breadboard size="mini"></wokwi-breadboard> `);
