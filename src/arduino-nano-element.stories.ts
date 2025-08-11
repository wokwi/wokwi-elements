import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import './arduino-nano-element';

export interface ArduinoNanoArgs {
  led13: boolean;
  ledTX: boolean;
  ledRX: boolean;
  ledPower: boolean;
}

const meta: Meta = {
  title: 'Arduino Nano',
  component: 'wokwi-arduino-nano',
  args: {
    led13: false,
    ledTX: false,
    ledRX: false,
    ledPower: true,
  } satisfies ArduinoNanoArgs,
  argTypes: {
    led13: { control: { type: 'boolean' } },
    ledTX: { control: { type: 'boolean' } },
    ledRX: { control: { type: 'boolean' } },
    ledPower: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'An Arduino Nano board component with configurable LEDs and button events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ArduinoNanoArgs>;

export const Nano: Story = {
  args: {
    led13: false,
    ledTX: false,
    ledRX: false,
    ledPower: true,
  },
  render: (args) => html`
    <wokwi-arduino-nano
      .led13=${args.led13}
      .ledTX=${args.ledTX}
      .ledRX=${args.ledRX}
      .ledPower=${args.ledPower}
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-arduino-nano>
  `,
};
