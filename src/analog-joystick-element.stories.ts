import { html } from 'lit';
import { action } from 'storybook/actions';
import './analog-joystick-element';

export default {
  title: 'Analog Joystick',
  component: 'wokwi-analog-joystick',
  parameters: {
    docs: {
      description: {
        component: 'An analog joystick component with configurable x and y values',
      },
    },
  },
};

export const Joystick = () =>
  html`<wokwi-analog-joystick
    @button-press=${action('button-press')}
    @button-release=${action('button-release')}
    @input=${action('input')}
  ></wokwi-analog-joystick>`;
