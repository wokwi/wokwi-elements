/// <reference types="storybook/test" />

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './led-bar-graph-element';

interface LedBarGraphArgs {
  color: string;
  offColor: string;
  values: number[];
}

const meta: Meta = {
  title: 'Led Bar Graph',
  component: 'wokwi-led-bar-graph',
  parameters: {
    docs: {
      description: {
        component: 'A rezisable LED bar graph component with configurable colors and values',
      },
    },
  },
  args: {
    color: 'red',
    offColor: '#444',
    values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  } satisfies LedBarGraphArgs,
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'lime', 'blue', 'yellow', 'BRG', 'RYG', 'GYR', 'BCYR', 'BGYR'],
      description: 'The color of a lit segment.',
    },
    offColor: { control: 'color', description: 'The color of an unlit segment.' },
    values: {
      control: 'object',
      description:
        'The values for the individual segments: 1 for a lit segment, and 0 for an unlit segment.',
    },
  },
};

export default meta;
type Story = StoryObj<LedBarGraphArgs>;

export const Default: Story = {
  render: (args) =>
    html`<wokwi-led-bar-graph
      .color=${args.color}
      .offColor=${args.offColor}
      .values=${args.values}
    ></wokwi-led-bar-graph>`,
};
