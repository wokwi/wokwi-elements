import { html } from 'lit';
import './big-sound-sensor-element';

export default {
  title: 'Big Sound Sensor',
  component: 'wokwi-big-sound-sensor',
  argTypes: {
    led1: { control: { type: 'boolean' } },
    led2: { control: { type: 'boolean' } },
  },
  args: {
    led1: false,
    led2: false,
  },
};

const Template = ({ led1, led2 }) =>
  html`<wokwi-big-sound-sensor .led1=${led1} .led2=${led2}></wokwi-big-sound-sensor>`;

export const Default = Template.bind({});
