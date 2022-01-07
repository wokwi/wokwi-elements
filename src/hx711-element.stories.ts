import { html } from 'lit';
import './hx711-element';

export default {
  title: 'Hx711',
  component: 'wokwi-hx711',
  argTypes: {
    value: { control: { type: 'number', min: -2147483648, max: 2147483647, step: 1 } },
  },
  args: {
    value: 0,
  },
};

const Template = () => html`<wokwi-hx711 v</wokwi-hx711>`;

export const Default = Template.bind({});
