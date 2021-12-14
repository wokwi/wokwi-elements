import { html } from 'lit';
import './stepper-motor-element';

export default {
  title: 'Stepper Motor',
  component: 'wokwi-stepper-motor',
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 360 } },
  },
  args: {
    angle: 0,
    units: '',
    value: '',
  },
};

const Template = ({ angle, units, value }) =>
  html`<wokwi-stepper-motor .angle=${angle} .units=${units} .value=${value}></wokwi-stepper-motor>`;

export const Default = Template.bind({});
Default.args = {};

export const Rotated90 = Template.bind({});
Rotated90.args = { angle: 90, units: 'degrees', value: '90' };

export const Steps = Template.bind({});
Steps.args = { angle: 180, value: '52,500', units: 'steps' };
