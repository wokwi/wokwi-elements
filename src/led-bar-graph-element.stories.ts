import { html } from 'lit-html';
import './led-bar-graph-element';

export default {
  title: 'Led Bar Graph',
  component: 'wokwi-led-bar-graph',
  argTypes: {
    color: { control: { type: 'color' } },
    values: 'string',
  },
  args: {
    values: '[1, 0, 1, 0, 1, 0, 1, 0, 1, 0]',
    color: 'red',
  },
};

const Template = ({ color, values }) =>
  html`<wokwi-led-bar-graph values=${values} color=${color}></wokwi-led-bar-graph>`;

export const Red = Template.bind({});
Red.args = { color: 'red' };

export const Green = Template.bind({});
Green.args = { color: 'lime' };

export const Off = Template.bind({});
Off.args = { color: 'lime', values: '[]' };
