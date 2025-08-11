import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './neopixel-matrix-element';

interface NeopixelMatrixArgs {
  rows: number;
  cols: number;
  blurLight: boolean;
  animation: boolean;
}

const meta = {
  title: 'NeoPixel Matrix',
  component: 'wokwi-neopixel-matrix',
  args: {
    rows: 8,
    cols: 8,
    blurLight: false,
    animation: false,
  },
  argTypes: {
    rows: { control: { type: 'range', min: 1, max: 32, step: 1 } },
    cols: { control: { type: 'range', min: 1, max: 32, step: 1 } },
    blurLight: { control: { type: 'boolean' } },
    animation: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'A NeoPixel matrix component with configurable dimensions and effects',
      },
    },
  },
  render: (args: NeopixelMatrixArgs) => html`
    <div style="display: inline-block; background: #363; padding: 4px">
      <wokwi-neopixel-matrix
        rows=${args.rows}
        cols=${args.cols}
        .blurLight=${args.blurLight}
        .animation=${args.animation}
      ></wokwi-neopixel-matrix>
    </div>
  `,
} satisfies Meta<NeopixelMatrixArgs>;

export default meta;
type Story = StoryObj<NeopixelMatrixArgs>;

export const EightByEightGreenBackground: Story = {
  name: '8x8, Green Background',
  args: {
    rows: 8,
    cols: 8,
    blurLight: true,
    animation: true,
  },
};

export const SixteenBySixteenDarkBackground: Story = {
  name: '16x16, Dark Background',
  args: {
    animation: true,
    rows: 16,
    cols: 16,
  },
};
