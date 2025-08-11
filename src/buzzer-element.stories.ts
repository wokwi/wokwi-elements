import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './buzzer-element';

interface BuzzerArgs {
  hasSignal: boolean;
}

const meta = {
  title: 'Buzzer',
  component: 'wokwi-buzzer',
  parameters: {
    docs: {
      description: {
        component: 'A buzzer component that can emit sound signals',
      },
    },
  },
  argTypes: {
    hasSignal: {
      control: { type: 'boolean' },
      description: 'Whether the buzzer is currently emitting a signal',
    },
  },
  args: {
    hasSignal: false,
  },
} satisfies Meta<BuzzerArgs>;

export default meta;
type Story = StoryObj<BuzzerArgs>;

export const Default: Story = {
  render: (args) => html`
    <div style="height: 20px"></div>
    <wokwi-buzzer .hasSignal=${args.hasSignal}></wokwi-buzzer>
  `,
};
