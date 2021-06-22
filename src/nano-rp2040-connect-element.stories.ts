import { html } from 'lit-html';
import './nano-rp2040-connect-element';

export default {
  title: 'Nano RP2040 Connect',
  component: 'wokwi-nano-rp2040-connect',
  argTypes: {
    ledPower: { control: { type: 'boolean' } },
    ledBuiltIn: { control: { type: 'boolean' } },
    ledRed: { control: { type: 'number' } },
    ledGreen: { control: { type: 'number' } },
    ledBlue: { control: { type: 'number' } },
  },
  args: {
    ledPower: false,
    ledBuiltIn: false,
    ledRed: 0,
    ledGreen: 0,
    ledBlue: 0,
  },
};

const Template = ({ ledPower, ledBuiltIn, ledRed, ledGreen, ledBlue }) =>
  html` <wokwi-nano-rp2040-connect
    .ledPower=${ledPower}
    .ledBuiltIn=${ledBuiltIn}
    .ledRed=${ledRed}
    .ledGreen=${ledGreen}
    .ledBlue=${ledBlue}
  ></wokwi-nano-rp2040-connect>`;

export const Default = Template.bind({});
