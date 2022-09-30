import { html } from 'lit';
import './hx711-element';

export default {
  title: 'HX711',
  component: 'wokwi-hx711',
};

const Template = ({ width, height, type = '50kg' }) =>
  html`<wokwi-hx711 .type=${type} .width=${width} .height=${height}></wokwi-hx711>`;

export const LoadCell50kg = Template.bind({});
LoadCell50kg.args = { type: '50kg', width: 580, height: 430 };

export const LoadCell5kg = Template.bind({});
LoadCell5kg.args = { type: '5kg', width: 507, height: 269 };

export const GaugePressure = Template.bind({});
GaugePressure.args = { type: 'gauge', width: 509, height: 200 };
