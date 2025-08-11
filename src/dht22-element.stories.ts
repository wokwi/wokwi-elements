import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './dht22-element';

const meta: Meta = {
  title: 'DHT22',
  component: 'wokwi-dht22',
  parameters: {
    docs: {
      description: {
        component: 'A DHT22 temperature and humidity sensor component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => html`<wokwi-dht22></wokwi-dht22>`,
};
