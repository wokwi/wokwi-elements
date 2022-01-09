import { html } from 'lit';
import { storiesOf } from '@storybook/web-components';
import { withKnobs } from '@storybook/addon-knobs';
import './hx711-element';

export default {
  title: 'HX711',
  component: 'wokwi-hx711',
};

storiesOf('HX711', module)
  .addParameters({ component: 'wokwi-hx711' })
  .addDecorator(withKnobs)
  .add('50kg Load Sensor', () => html`<wokwi-hx711 sensorType="50kg Load Sensor"></wokwi-hx711>`)
  .add('5kg Load Sensor', () => html`<wokwi-hx711 sensorType="5kg Load Sensor"></wokwi-hx711>`)
  .add(
    'Gauge Pressure Sensor',
    () => html`<wokwi-hx711 sensorType="Gauge Pressure Sensor"></wokwi-hx711>`
  );
