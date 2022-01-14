import { html } from 'lit';
import { forceReRender } from '@storybook/web-components';
import './pc-fan-element';

class FanAnimation {
  angle = 0;

  step() {
    this.angle = this.angle + 5;

    if (this.angle >= 360) {
      this.angle = 0;
    }
  }
}

const fanAnimation = new FanAnimation();
setInterval(() => {
  fanAnimation.step();
  forceReRender();
}, 10);

export default {
  title: 'PC Fan',
  component: 'wokwi-pc-fan',
  argTypes: {
    angle: { control: { type: 'number', min: 0, max: 360, step: 1 } },
  },
  args: {
    angle: 0,
  },
};

const Template = ({ angle }) => html`<wokwi-pc-fan angle=${angle}></wokwi-pc-fan>`;
export const Default = Template.bind({});
Default.args = { angle: 5 };

const TemplateOn = () => html`<wokwi-pc-fan angle=${fanAnimation.angle}></wokwi-pc-fan>`;
export const FanOn = TemplateOn.bind({});
FanOn.args = { angle: 0 };
