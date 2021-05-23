import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import './slide-potentiometer-element';

export default {
  title: 'Slide Potentiometer',
  component: 'wokwi-slide-potentiometer',
  argTypes: {
    value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
  args: {
    value: 5,
  },
};

const Template = ({ style, minValue, maxValue, value }) => html` <div style=${style}>
  <wokwi-slide-potentiometer @minValue=${minValue} @value=${value} @maxValue=${maxValue} />
</div>`;

export const Default = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = { style: 'transform: rotate(90deg) translate(50%, 50%);' };
