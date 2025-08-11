import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lcd1602-element';
import { fontA02 } from './lcd1602-font-a02';

const helloWorld = 'Hello,           World!';
const symbols = '\x10 I \x9d Symbols! \x11\xab \x14\x18\x17\x1e \x91\x98\x96 \x93\x97\xa9 \xbb';

interface LCD1602Args {
  background: string;
  backlight: boolean;
  blink: boolean;
  color: string;
  cursor: boolean;
  cursorX: number;
  cursorY: number;
  pins: string;
  text: string;
}

const meta: Meta<LCD1602Args> = {
  title: 'LCD1602',
  component: 'wokwi-lcd1602',
  args: {
    text: '',
    cursorX: 0,
    cursorY: 0,
    background: 'green',
    backlight: true,
    blink: false,
    color: 'black',
    cursor: false,
    pins: 'full',
  } satisfies LCD1602Args,
  parameters: {
    docs: {
      description: {
        component: 'A 16x2 LCD display component with configurable text, cursor, and colors',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LCD1602Args>;

const Template = (args: LCD1602Args) => html`
  <wokwi-lcd1602
    .text=${args.text}
    .cursor=${args.cursor}
    .blink=${args.blink}
    cursorX=${args.cursorX}
    cursorY=${args.cursorY}
    .backlight=${args.backlight}
    .color=${args.color}
    .background=${args.background}
    .pins=${args.pins}
  ></wokwi-lcd1602>
`;

export const HelloWorld: Story = Template.bind({});
HelloWorld.args = {
  text: helloWorld,
};

export const WhiteOnBlue: Story = Template.bind({});
WhiteOnBlue.args = {
  text: helloWorld,
  color: 'white',
  background: 'blue',
  blink: true,
  backlight: true,
};

export const BlinkingCursor: Story = Template.bind({});
BlinkingCursor.args = {
  text: helloWorld,
  blink: true,
  cursorX: 7,
  cursorY: 1,
};

export const Cursor: Story = Template.bind({});
Cursor.args = {
  text: helloWorld,
  cursor: true,
  cursorX: 7,
  cursorY: 1,
};

export const DisplayOffGreen: Story = Template.bind({});
DisplayOffGreen.storyName = 'Display Off (Green)';
DisplayOffGreen.args = {
  backlight: false,
};

export const DisplayOffBlue: Story = Template.bind({});
DisplayOffBlue.storyName = 'Display Off (Blue)';
DisplayOffBlue.args = {
  backlight: false,
  color: 'white',
  background: 'blue',
};

export const FontA02: Story = {
  name: 'Font A02',
  render: () => html`<wokwi-lcd1602 .text=${symbols} .font=${fontA02}></wokwi-lcd1602>`,
};

export const I2CPins: Story = Template.bind({});
I2CPins.storyName = 'I²C Pins';
I2CPins.args = {
  text: 'I only need        4 pins!',
  pins: 'i2c',
};

export const NoPins: Story = Template.bind({});
NoPins.args = {
  text: 'Look ma!           I got no pins',
  pins: 'none',
};
