import { html } from 'lit';
import './led-element';

export default {
  title: 'LED',
  component: 'wokwi-led',
  argTypes: {
    value: { control: 'boolean' },
    brightness: { control: { type: 'range', min: 0, max: 1.0, step: 0.05 } },
    color: { control: { type: 'color' } },
    lightColor: { control: { type: 'color' } },
    label: 'string',
    flip: { control: 'boolean' },
  },
  args: {
    brightness: 1.0,
    flip: false,
    value: false,
  },
};

const Template = ({ color, flip, label, lightColor, value, brightness }) =>
  html`<wokwi-led
    color=${color}
    .flip=${flip}
    .brightness=${brightness}
    label=${label}
    lightColor=${lightColor}
    .value=${value}
  ></wokwi-led>`;

export const Red = Template.bind({});
Red.args = { color: 'red' };

export const RedWithLabel = Template.bind({});
RedWithLabel.args = { color: 'red', label: '12' };

export const Flipped = Template.bind({});
Flipped.args = { color: 'red', flip: true };

export const Green = Template.bind({});
Green.args = { color: 'green' };

export const Yellow = Template.bind({});
Yellow.args = { color: 'yellow' };

export const Blue = Template.bind({});
Blue.args = { color: 'blue' };

export const Orange = Template.bind({});
Orange.args = { color: 'orange' };

export const White = Template.bind({});
White.args = { color: 'white' };

export const BrightnessLevels = () => html`
  <wokwi-led color="red" label="0" .value=${true} brightness="0"></wokwi-led>
  <wokwi-led color="red" label="1%" .value=${true} brightness="0.01"></wokwi-led>
  <wokwi-led color="red" label="10%" .value=${true} brightness="0.1"></wokwi-led>
  <wokwi-led color="red" label="25%" .value=${true} brightness="0.25"></wokwi-led>
  <wokwi-led color="red" label="50%" .value=${true} brightness="0.5"></wokwi-led>
  <wokwi-led color="red" label="75%" .value=${true} brightness="0.75"></wokwi-led>
  <wokwi-led color="red" label="100%" .value=${true}></wokwi-led>
`;
