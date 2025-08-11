import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import './pushbutton-element';

interface PushbuttonArgs {
  color: string;
  label: string;
  xray: boolean;
}

const meta = {
  title: 'Pushbutton',
  component: 'wokwi-pushbutton',
  args: {
    color: 'red',
    label: '',
    xray: false,
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'green', 'blue', 'white', 'yellow', 'black', 'purple'],
    },
    label: { control: 'text' },
    xray: { control: 'boolean' },
  },
  render: (args: PushbuttonArgs) => html`
    <wokwi-pushbutton
      color=${args.color}
      label=${args.label}
      .xray=${args.xray}
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton>
  `,
};

export default meta;
type Story = StoryObj<PushbuttonArgs>;

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const RedWithXray: Story = {
  args: {
    color: 'red',
    xray: true,
  },
};

export const RedWithLabel: Story = {
  args: {
    color: 'red',
    label: 'Press me!',
  },
};

export const RedWithLongLabel: Story = {
  args: {
    color: 'red',
    label: 'I have a really long label...',
  },
};

export const FourButtons: Story = {
  render: () => html`
    <wokwi-pushbutton
      color="red"
      @button-press=${action('red button-press')}
      @button-release=${action('red button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="green"
      @button-press=${action('green button-press')}
      @button-release=${action('green button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="blue"
      @button-press=${action('blue button-press')}
      @button-release=${action('blue button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="white"
      @button-press=${action('white button-press')}
      @button-release=${action('white button-release')}
    ></wokwi-pushbutton>
  `,
};
