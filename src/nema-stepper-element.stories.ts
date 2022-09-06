import { html } from 'lit';
import './nema-stepper-element';

export default {
  title: 'Nema Stepper',
  component: 'wokwi-nema-stepper',
  argTypes: {
    value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    angle: { control: { type: 'range', min: 0, max: 360 } },
    arrow: { control: { type: 'color' } },    
    size: { control: { type: 'range', min:8, max: 34 } },    
  },
  args: {
    angle: 135,
    size: '17',
    arrow: '',
    units: '',
    value: '',
  },
};

const Template = ({ angle, arrow, units, value, size }) => html`<wokwi-nema-stepper
    .angle=${angle}
    .arrow=${arrow}
    .units=${units}
    .value=${value}
    .size=${size}
  ></wokwi-nema-stepper>`;


export const Nema8 = Template.bind({});
Nema8.args = { value: 5, size: 8, units: 'steps' };
export const Nema11 = Template.bind({});
Nema11.args = { value: 5, size: 11, units: 'steps' };
export const Nema14 = Template.bind({});
Nema14.args = { value: 5, size: 14, units: 'steps' };
export const Nema17 = Template.bind({});
Nema17.args = { value: 5, size: 17, units: 'steps' };
export const Nema23 = Template.bind({});
Nema23.args = { value: 5, size: 23, units: 'steps' };
export const Nema34 = Template.bind({});
Nema34.args = { value: 5, size: 34, units: 'steps' };


