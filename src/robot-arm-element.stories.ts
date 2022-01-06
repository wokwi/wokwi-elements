import { html } from 'lit';
import './robot-arm-element';

export default {
  title: 'Robot Arm',
  component: 'wokwi-robot-arm',
  argTypes: {
    handAngle: { control: { type: 'range', min: 270, max: 360 } },
    armAngle: { control: { type: 'range', min: 250, max: 328 } },
    fingerColor: { control: { type: 'color' } },
    armColor: { control: { type: 'color' } },
    jointColor: { control: { type: 'color' } },
  },
  args: {
    value: 5,
  },
};

const Template = ({ handAngle, armAngle, fingerColor, armColor, jointColor }) =>
  html`<wokwi-robot-arm
    handAngle=${handAngle}
    armAngle=${armAngle}
    fingerColor=${fingerColor}
    armColor=${armColor}
    jointColor=${jointColor}
  ></wokwi-robot-arm>`;

export const Default = Template.bind({});
Default.args = { handAngle: 327, armAngle: 290, fingerColor: '#eeeedd', armColor: '#ffffdd', jointColor: '#111111' };
