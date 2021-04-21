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

const Template = ({ value }) =>
  html` <wokwi-slide-potentiometer
    value=${value}
    @button-press=${action('button-press')}
    @button-release=${action('button-release')}
  >
  </wokwi-slide-potentiometer>`;

export const Default = Template.bind({});
Default.args = { value: 5 };

export const Large = Template.bind({});
Large.args = { value: 10 };
