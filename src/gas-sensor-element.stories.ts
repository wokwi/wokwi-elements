import { html } from 'lit';
import './gas-sensor-element';

export default {
  title: 'Gas Sensor',
  component: 'wokwi-gas-sensor',
  argTypes: {
    ledPower: { control: { type: 'boolean' } },
    ledD0: { control: { type: 'boolean' } },
  },
  args: {
    ledPower: true,
    ledD0: false,
  },
};

const Template = ({ ledPower, ledD0 }) =>
  html` <wokwi-gas-sensor .ledPower=${ledPower} .ledD0=${ledD0}></wokwi-gas-sensor>`;

export const Default = Template.bind({});
