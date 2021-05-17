import { html } from 'lit';
import './gas-sensor-element';

export default {
  title: 'Gas Sensor',
  component: 'wokwi-gas-sensor',
};

const Template = () => html`<wokwi-gas-sensor></wokwi-gas-sensor>`;

export const Default = Template.bind({});
