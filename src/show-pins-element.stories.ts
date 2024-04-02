import { html } from 'lit';
import './show-pins-element';

export default {
  title: 'Show Pin',
  component: 'wokwi-show-pins',
  argTypes: {
    pinColor: { control: 'color' },
    pinType: { control: { type: 'select', options: ['circle', 'rect'] } },
    pinWidth: { control: 'number' },
    pinHeight: { control: 'number' },
    pinRadius: { control: 'number' },
  },
  args: {
    pinColor: 'transparent',
    pinType: 'circle',
    pinWidth: 5,
    pinHeight: 5,
    pinRadius: 2.5,
  },
};

const Template = ({ pinColor, pinType, pinWidth, pinHeight, pinRadius }) => html`<wokwi-show-pins
  pinColor=${pinColor}
  pinType=${pinType}
  pinWidth=${pinWidth}
  pinHeight=${pinHeight}
  pinRadius=${pinRadius}
>
  <wokwi-main-breadboard></wokwi-main-breadboard>
</wokwi-show-pins>`;

export const Default = Template.bind({});
Default.args = { pinColor: 'transparent' };
