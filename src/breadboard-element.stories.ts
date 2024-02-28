import { html } from 'lit';
import './breadboard-element';

export default {
  title: 'Breadboard',
  component: 'wokwi-breadboard',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['small', 'normal'],
      },
    },
  },
  args: {
    type: 'normal',
  },
};

const Template = ({ type }) => html` <wokwi-breadboard type=${type}></wokwi-breadboard>`;

export const Small = Template.bind({});
Small.args = { type: 'small' };

export const Normal = Template.bind({});
Normal.args = { type: 'normal' };
