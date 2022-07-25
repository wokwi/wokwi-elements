import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './potentiometer-element';

export default {
  title: 'Potentiometer',
  component: 'wokwi-potentiometer',
};

const Template = ({ transform = '' }) => html`
  <span style="transform: ${transform}; display: inline-block;">
    <wokwi-potentiometer @input=${action('input')} />
  </span>
`;

export const Default = Template.bind({});
Default.args = {};

export const Rotated = Template.bind({});
Rotated.args = { ...Default.args, transform: 'rotate(90deg)' };

export const Zoomed = Template.bind({});
Zoomed.args = { ...Default.args, transform: 'translate(25px, 25px) scale(1.5)' };
