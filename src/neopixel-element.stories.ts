import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './neopixel-element';

interface NeopixelArgs {
  r: number;
  g: number;
  b: number;
}

const meta = {
  title: 'Neopixel',
  component: 'wokwi-neopixel',
  args: {
    r: 0,
    g: 0,
    b: 0,
  },
  argTypes: {
    r: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    g: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    b: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  },
  parameters: {
    docs: {
      description: {
        component: 'A NeoPixel RGB LED component with configurable colors',
      },
    },
  },
  render: (args) => html` <wokwi-neopixel r=${args.r} g=${args.g} b=${args.b}></wokwi-neopixel> `,
} satisfies Meta<NeopixelArgs>;

export default meta;
type Story = StoryObj<NeopixelArgs>;

export const Red: Story = {
  args: {
    r: 1,
    g: 0,
    b: 0,
  },
};

export const White: Story = {
  args: {
    r: 1,
    g: 1,
    b: 1,
  },
};
