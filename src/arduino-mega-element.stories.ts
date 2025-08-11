import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { html } from 'lit';
import './arduino-mega-element';

interface ArduinoMegaArgs {
  led13: boolean;
  ledTX: boolean;
  ledRX: boolean;
  ledPower: boolean;
}

const meta: Meta = {
  title: 'Arduino Mega',
  component: 'wokwi-arduino-mega',
  args: {
    led13: false,
    ledTX: false,
    ledRX: false,
    ledPower: true,
  } satisfies ArduinoMegaArgs,
  argTypes: {
    led13: { control: { type: 'boolean' } },
    ledTX: { control: { type: 'boolean' } },
    ledRX: { control: { type: 'boolean' } },
    ledPower: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'An Arduino Mega board component with configurable LEDs and button events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ArduinoMegaArgs>;

export const Mega: Story = {
  render: (args) => html`
    <wokwi-arduino-mega
      .led13=${args.led13}
      .ledTX=${args.ledTX}
      .ledRX=${args.ledRX}
      .ledPower=${args.ledPower}
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-arduino-mega>
  `,
};
