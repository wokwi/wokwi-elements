import { html } from 'lit';
import './slide-switch-element';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Slide Switch',
  component: 'wokwi-slide-switch',
};

export const SlideSwitch = () =>
  html`<wokwi-slide-switch @input=${action('input')}></wokwi-slide-switch>`;
