import { html } from 'lit';
import './robotic-arm-element';

export default {
  title: 'Robotic Arm',
  component: 'wokwi-robotic-arm',
  argTypes: {
    shoulderAngle: { control: { type: 'range', min: 240, max: 360 } },
    elbowAngle: { control: { type: 'range', min: 0, max: 134 } },
    gripperAngle: { control: { type: 'range', min: 264, max: 360 } },
    wristAngle: { control: { type: 'range', min: 0, max: 100 } },
    gripperColor: { control: { type: 'color' } },
    armColor: { control: { type: 'color' } },
    jointColor: { control: { type: 'color' } },
  },
  args: {
    shoulderAngle: 240,
    elbowAngle: 100,
    gripperAngle: 280,
    wristAngle: 56,
    gripperColor: '#eeeedd',
    armColor: '#ffffdd',
    jointColor: '#111111',
  },
};

const Template = ({
  shoulderAngle,
  elbowAngle,
  wristAngle,
  gripperAngle,
  gripperColor,
  armColor,
  jointColor,
}) =>
  html`<wokwi-robotic-arm
    shoulderAngle=${shoulderAngle}
    elbowAngle=${elbowAngle}
    wristAngle=${wristAngle}
    gripperAngle=${gripperAngle}
    gripperColor=${gripperColor}
    armColor=${armColor}
    jointColor=${jointColor}
  ></wokwi-robotic-arm>`;

export const Default = Template.bind({});
Default.args = {
  shoulderAngle: 297,
  elbowAngle: 52,
  wristAngle: 56,
  gripperAngle: 270,
  gripperColor: '#eeeedd',
  armColor: '#ffffdd',
  jointColor: '#111111',
};
