import { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import './dip-switch-8-element';

const meta = {
  title: 'DIP Switch 8',
  component: 'wokwi-dip-switch-8',
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: () =>
    html`<wokwi-dip-switch-8 @switch-change=${action('switch-change')}></wokwi-dip-switch-8>`,
};
