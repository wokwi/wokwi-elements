import { html } from 'lit';
import './ftdi-element';

export default {
  title: 'FTDI',
  component: 'wokwi-ftdi',
};

const Template = () => html`<wokwi-ftdi></wokwi-ftdi>`;

export const Default = Template.bind({});
Default.args = {};
