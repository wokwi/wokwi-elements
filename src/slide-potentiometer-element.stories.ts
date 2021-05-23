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

export const Default = () => html`<wokwi-slide-potentiometer />`;

export const Portrait = () =>
  html`
    <div style="transform: rotate(90deg) translate(50%, 50%);">
      <wokwi-slide-potentiometer />
    </div>
  `;
