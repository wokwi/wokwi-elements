import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './slide-potentiometer-element';

export default {
  title: 'Slide Potentiometer',
  component: 'wokwi-slide-potentiometer',
  argTypes: {
    travelLength: { control: { type: 'range', min: 15, max: 100 } },
  },
  args: {
    travelLength: 30,
  },
};

const Template = ({ travelLength, degrees = 0 }) => html`
  <div style="transform: rotate(${degrees}deg) translate(50%, 50%); width: 500px; height: 400px;">
    <wokwi-slide-potentiometer .travelLength=${travelLength} @input=${action('input')} />
  </div>
`;

export const Default = Template.bind({});
Default.args = {};

export const Rotated = Template.bind({});
Rotated.args = { ...Default.args, degrees: 90 };

export const Short = Template.bind({});
Short.args = { travelLength: 15 };

export const Long = Template.bind({});
Long.args = { travelLength: 60 };

export const ExtraLong = Template.bind({});
ExtraLong.args = { travelLength: 100 };
