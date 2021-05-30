import { html } from 'lit-html';
import './flame-sensor-element';

export default {
  title: 'Flame Sensor',
  component: 'wokwi-flame-sensor',
  argTypes: {
    ledPower: { control: { type: 'boolean' } },
    ledSignal: { control: { type: 'boolean' } },
  },
  args: {
    ledPower: true,
    ledSignal: false,
  },
};

const Template = ({ ledPower, ledSignal }) =>
  html` <wokwi-flame-sensor .ledPower=${ledPower} .ledSignal=${ledSignal}></wokwi-flame-sensor>`;

export const Default = Template.bind({});
