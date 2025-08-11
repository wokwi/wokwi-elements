import { html } from 'lit';
import { action } from 'storybook/actions';
import './slide-switch-element';

export default {
  title: 'Slide Switch',
  component: 'wokwi-slide-switch',
};

export const SlideSwitch = () =>
  html`<wokwi-slide-switch @input=${action('input')}></wokwi-slide-switch>`;
