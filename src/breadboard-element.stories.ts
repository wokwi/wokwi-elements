import { html } from 'lit';
import './breadboard-element';

export default {
  title: 'Breadboard',
  component: 'BreaboardElement',
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

const Template = ({ type }) => html`
  <wokwi-show-pins pinRadius="5" pinType="circle">
    <BreadboardElement type=${type}></BreadboardElement>
  </wokwi-show-pins>
`;

export const Small = Template.bind({});
Small.args = { type: 'small' };

export const Normal = Template.bind({});
Normal.args = { type: 'normal' };
