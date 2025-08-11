/// <reference types="storybook/test" />

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './servo-element';
import { ServoElement } from './servo-element';

interface ServoArgs {
  angle: number;
  horn: 'single' | 'double' | 'cross';
  hornColor: string;
}

const meta = {
  title: 'Servo',
  component: 'wokwi-servo',
  parameters: {
    docs: {
      description: {
        component: 'A servo motor component that can rotate to different angles',
      },
    },
  },
  args: {
    angle: 45,
    horn: 'single',
    hornColor: '#ccc',
  },
  argTypes: {
    angle: {
      control: { type: 'range', min: 0, max: 180, step: 1 },
      description: 'The angle of the servo (0-180 degrees)',
      defaultValue: 45,
    },
    horn: {
      control: { type: 'select' },
      options: ['single', 'double', 'cross'],
      description: 'The type of servo horn',
    },
    hornColor: {
      control: { type: 'color' },
      description: 'The color of the servo horn',
      defaultValue: '#ccc',
    },
  },
  render: (args: ServoArgs) =>
    html`<wokwi-servo
      data-testid="servo"
      angle=${args.angle}
      horn=${args.horn}
      hornColor=${args.hornColor}
    ></wokwi-servo>`,
} satisfies Meta<ServoArgs>;

export default meta;
type Story = StoryObj<ServoArgs>;

export const Default: Story = {
  args: {
    angle: 45,
  },
};

export const AnimatedSweep: Story = {
  async play({ canvas, abortSignal }) {
    const servo = canvas.getByTestId<ServoElement>('servo');
    let angle = 0;
    let goingUp = true;
    while (!abortSignal.aborted) {
      angle = goingUp ? angle + 1 : angle - 1;
      if (angle === 180 || angle === 0) {
        goingUp = !goingUp;
      }
      servo.angle = angle;
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
  },
};

export const HornDouble: Story = {
  args: {
    angle: 45,
    horn: 'double',
  },
  render: (args) => html`<wokwi-servo horn=${args.horn} angle=${args.angle}></wokwi-servo>`,
};

export const HornCross: Story = {
  args: {
    angle: 45,
    horn: 'cross',
  },
  render: (args) => html`<wokwi-servo horn=${args.horn} angle=${args.angle}></wokwi-servo>`,
};
