import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import './ky-040-element';

export default {
  title: 'KY040',
  component: 'wokwi-ky-040',
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 360 } },
  },
  args: {
    angle: 0,
  },
};

const Template = ({ angle }) =>
  html`<wokwi-ky-040
    .angle=${angle}
    @rotate-cw=${action('rotate-cw')}
    @rotate-ccw=${action('rotate-ccw')}
    @button-press=${action('button-press')}
    @button-release=${action('button-release')}
  >
  </wokwi-ky-040>`;

export const Default = Template.bind({});
