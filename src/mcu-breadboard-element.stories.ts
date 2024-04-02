import { html } from 'lit';
import './mcu-breadboard-element';

export default {
  title: 'Mcu Breadboard',
  component: 'wokwi-mcu-breadboard',
  argTypes: {},
  args: {},
};

const Template = () => html`<wokwi-mcu-breadboard></wokwi-mcu-breadboard>`;

export const Default = Template.bind({});
