import { html } from 'lit';
import './stepper-motor-element';
import { forceReRender } from '@storybook/web-components';

export default {
  title: 'Stepper Motor',
  component: 'wokwi-stepper-motor',
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 360 } },
    size: { control: { type: 'select', options: [8, 11, 14, 17, 23, 34] } },
    arrow: { control: { type: 'color' } },
  },
  args: {
    angle: 0,
    arrow: '',
    units: '',
    value: '',
    size: 17,
  },
};

class RotateAnimation {
  angle = 0;
  dirCW = true;

  step() {
    this.angle += this.dirCW ? 1 : -1;

    // change direction if we hit the limit
    if (this.angle === 360 || this.angle === 0) {
      this.dirCW = !this.dirCW;
    }
  }
}

const rotateAnimation = new RotateAnimation();
setInterval(() => {
  rotateAnimation.step();
  forceReRender();
}, 20);

const Template = ({ angle, arrow, units, value, size }) =>
  html`<wokwi-stepper-motor
    .angle=${rotateAnimation.angle}
    .arrow=${arrow}
    .units=${units}
    .value=${value}
    .size=${size}
  ></wokwi-stepper-motor>`;

export const Default = Template.bind({});
Default.args = {};

export const Rotated90 = Template.bind({});
Rotated90.args = { angle: 90, units: 'degrees', value: '90', size: 14 };

export const Steps = Template.bind({});
Steps.args = { angle: 180, value: '52,500', units: 'steps', size: 14 };

export const Degrees = Template.bind({});
Steps.args = { angle: 180, value: '180', units: 'degrees', size: 14 };

export const PurpleArrow = Template.bind({});
PurpleArrow.args = { angle: 350, arrow: '#4a36ba', size: 14 };

export const Nema17 = Template.bind({});
Nema17.args = { angle: 70, arrow: '#4a36ba', size: 17 };

export const Nema23 = Template.bind({});
Nema23.args = { angle: 70, arrow: '#4a36ba', size: 23 };

export const Nema34 = Template.bind({});
Nema34.args = { angle: 70, arrow: '#4a36ba', size: 34 };
