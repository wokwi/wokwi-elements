import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import './franzininho-element';

export default {
  title: 'Franzininho',
  component: 'wokwi-franzininho',
  argTypes: {
    ledPower: { control: { type: 'boolean' } },
    led1: { control: { type: 'boolean' } },
  },
  args: {
    ledPower: true,
    led1: false,
  },
};

const Template = ({ ledPower, led1 }) =>
  html`<wokwi-franzininho
    .ledPower=${ledPower}
    .led1=${led1}
    @button-press=${action('button-press')}
    @button-release=${action('button-press')}
  >
  </wokwi-franzininho>`;

export const Default = Template.bind({});
