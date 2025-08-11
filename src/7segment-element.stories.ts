/// <reference types="storybook/test" />

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './7segment-element';
import { SevenSegmentElement } from './7segment-element';

const meta: Meta = {
  title: '7 Segment',
  component: 'wokwi-7segment',
  parameters: {
    docs: {
      description: {
        component: 'A 7-segment display component with configurable colors, digits, and values',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedFour: Story = {
  render: () => html`
    <wokwi-7segment color="red" values="[0,1,1,0,0,1,1,1]" pins="extend"></wokwi-7segment>
  `,
};

export const GreenFive: Story = {
  render: () => html` <wokwi-7segment color="green" values="[1,0,1,1,0,1,1,0]"></wokwi-7segment> `,
};

export const TwoYellowDigits: Story = {
  render: () => html`
    <wokwi-7segment
      color="yellow"
      digits="2"
      values="[0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0]"
    ></wokwi-7segment>
  `,
};

export const ThreeWhiteDigits: Story = {
  render: () => html`
    <wokwi-7segment
      color="white"
      digits="3"
      values="[0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0]"
    ></wokwi-7segment>
  `,
};

export const ClockMode: Story = {
  render: () => {
    return html`<wokwi-7segment
      data-testid="clock-display"
      color="red"
      digits="4"
      colon="true"
      pins="top"
      values="[0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0]"
    ></wokwi-7segment>`;
  },
  play: async ({ canvas, abortSignal }) => {
    const sevenSegment = canvas.getByTestId<SevenSegmentElement>('clock-display');
    while (!abortSignal.aborted) {
      sevenSegment.colonValue = !sevenSegment.colonValue;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  },
};

export const BlueSpinner: Story = {
  render: () => {
    return html`<wokwi-7segment
      data-testid="spinner-display"
      color="#8080ff"
      pins="none"
      .values=${[1, 0, 0, 0, 0, 0, 0, 0]}
    ></wokwi-7segment>`;
  },

  play: async ({ canvas, abortSignal }) => {
    const sevenSegment = canvas.getByTestId<SevenSegmentElement>('spinner-display');
    let index = 0;
    while (!abortSignal.aborted) {
      const values = [0, 0, 0, 0, 0, 0, 0, 0];
      values[index++ % 6] = 1;
      sevenSegment.values = values;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  },
};
