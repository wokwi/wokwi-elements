import { html } from 'lit';
import './main-breadboard-element';

export default {
  title: 'Main Breadboard',
  component: 'wokwi-main-breadboard',
  argTypes: {},
  args: {},
};

const Template = () => html`<wokwi-main-breadboard></wokwi-main-breadboard>`;

export const Default = Template.bind({});
