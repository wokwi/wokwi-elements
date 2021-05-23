import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import './slide-potentiometer-element';

export default {
  title: 'Slide Potentiometer',
  component: 'wokwi-slide-potentiometer',
};

const Template = ({ degrees = 0 }) => html` <div
  style="transform: rotate(${degrees}deg) translate(50%, 50%); width:400px; height: 400px;"
>
  <wokwi-slide-potentiometer />
</div>`;

export const Default = Template.bind({});
Default.args = {};

export const Portrait = Template.bind({});
Portrait.args = { ...Default.args, degrees: 90 };
