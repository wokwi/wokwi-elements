import { html } from 'lit';
import './attiny85-element';

export default {
  title: 'Attiny85',
  component: 'wokwi-attiny85',
  argTypes: {
    value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
  args: {
    value: 5,
  },
};

const Template = ({ value }) => html`<wokwi-attiny85 value=${value}></wokwi-attiny85>`;

export const Default = Template.bind({});
Default.args = { value: 5 };

export const Large = Template.bind({});
Large.args = { value: 10 };
