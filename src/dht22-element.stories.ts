import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './dht22-element';

storiesOf('DHT22', module)
  .addParameters({ component: 'wokwi-dht22' })
  .add('Default', () => html`<wokwi-dht22></wokwi-dht22>`);
