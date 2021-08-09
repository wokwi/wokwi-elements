import { html } from 'lit-html';
import './rgb-led-element';

export default {
  title: 'RGB Led',
  component: 'wokwi-rgb-led',
  argTypes: {
    ledRed: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    ledGreen: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    ledBlue: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    background: { control: { type: 'color' } },
  },
  args: {
    ledRed: 0,
    ledGreen: 0,
    ledBlue: 0,
    background: '',
  },
};

const Template = ({ ledRed, ledGreen, ledBlue, background }) =>
  html`<div style="background:${background}">
    <wokwi-rgb-led .ledRed=${ledRed} .ledGreen=${ledGreen} .ledBlue=${ledBlue}></wokwi-rgb-led>
  </div>`;

export const Default = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.args = { background: '#333' };

export const Red = Template.bind({});
Red.args = { ledRed: 1 };

export const Green = Template.bind({});
Green.args = { ledGreen: 1 };

export const Blue = Template.bind({});
Blue.args = { ledBlue: 1 };

export const Yellow = Template.bind({});
Yellow.args = { ledRed: 1, ledGreen: 1, ledBlue: 0 };

export const White = Template.bind({});
White.args = { ledRed: 1, ledGreen: 1, ledBlue: 1 };

export const Cyan = Template.bind({});
Cyan.args = { ledRed: 0, ledGreen: 1, ledBlue: 1 };
