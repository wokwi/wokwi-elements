import { html } from 'lit';
import './breadboard-element';

export default {
  title: 'Breadboard',
  component: 'wokwi-breadboard',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['mini', 'full'],
      },
    },
  },
  args: {
    type: 'full',
  },
};

const Template = ({ type }) => html` <wokwi-show-pins>
  <wokwi-breadboard type=${type}></wokwi-breadboard>
</wokwi-show-pins>`;

export const Default = Template.bind({});
Default.args = { value: 5 };

export const Large = Template.bind({});
Large.args = { value: 10 };
