import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import './membrane-keypad-element';

interface MembraneKeypadArgs {
  columns: 3 | 4;
  connector: boolean;
}

const meta = {
  title: 'Membrane Keypad',
  component: 'wokwi-membrane-keypad',
  args: {
    columns: 4,
    connector: false,
  },
  argTypes: {
    connector: { control: { type: 'boolean' } },
    columns: { control: { type: 'range', min: 3, max: 4, step: 1 } },
  },
  parameters: {
    docs: {
      description: {
        component: 'A membrane keypad component with configurable layout and keys',
      },
    },
  },
  render: ({ columns, connector }) => html`
    <wokwi-membrane-keypad
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
      columns=${columns}
      .connector=${connector}
    ></wokwi-membrane-keypad>
  `,
} satisfies Meta<MembraneKeypadArgs>;

export default meta;
type Story = StoryObj<MembraneKeypadArgs>;

export const Default: Story = {};

export const WithConnector: Story = {
  args: {
    connector: true,
  },
};

export const CustomKeys: Story = {
  render: ({ columns, connector }) => html`
    <wokwi-membrane-keypad
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
      columns=${columns}
      .connector=${connector}
      .keys=${['1', '2', '3', '4', 'Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F', '!', '@', '#', '$']}
    ></wokwi-membrane-keypad>
  `,
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
  },
};

export const ThreeColumnsWithConnector: Story = {
  args: {
    columns: 3,
    connector: true,
  },
};
