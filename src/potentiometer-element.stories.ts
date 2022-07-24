import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './potentiometer-element';

export default {
  title: 'Potentiometer',
  component: 'wokwi-potentiometer',
};

const Template = ({ degrees = 0, zoom = 1 }) => html`
  <span style="transform: rotate(${degrees}deg); zoom: ${zoom}; display: inline-block;">
    <wokwi-potentiometer @input=${action('input')} />
  </span>
`;

export const Default = Template.bind({});
Default.args = {};

export const Rotated = Template.bind({});
Rotated.args = { ...Default.args, degrees: 90 };

export const Zoomed = Template.bind({});
Zoomed.args = { ...Default.args, zoom: 1.5 };
