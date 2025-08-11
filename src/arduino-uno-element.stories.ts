import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import './arduino-uno-element';

interface ArduinoUnoArgs {
  led13: boolean;
  ledTX: boolean;
  ledRX: boolean;
  ledPower: boolean;
}

const meta: Meta = {
  title: 'Arduino Uno',
  component: 'wokwi-arduino-uno',
  args: {
    led13: false,
    ledTX: false,
    ledRX: false,
    ledPower: true,
  } satisfies ArduinoUnoArgs,
  argTypes: {
    led13: { control: { type: 'boolean' } },
    ledTX: { control: { type: 'boolean' } },
    ledRX: { control: { type: 'boolean' } },
    ledPower: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'An Arduino Uno R3 board component with configurable LEDs and button events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ArduinoUnoArgs>;

export const UnoR3: Story = {
  render: (args) => html`
    <wokwi-arduino-uno
      .led13=${args.led13}
      .ledTX=${args.ledTX}
      .ledRX=${args.ledRX}
      .ledPower=${args.ledPower}
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-arduino-uno>
  `,
};

export const UnoR3Large: Story = {
  render: (args) => html`
    <wokwi-arduino-uno
      style="zoom: 2"
      .led13=${args.led13}
      .ledTX=${args.ledTX}
      .ledRX=${args.ledRX}
      .ledPower=${args.ledPower}
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-arduino-uno>
  `,
};
