import { html } from 'lit';
import './robot-arm-element';

export default {
  title: 'Robot Arm',
  component: 'wokwi-robot-arm',
};

const Template = ({
  sholderAngle,
  elbowAngle,
  wristAngle,
  gripperAngle,
  gripperColor,
  armColor,
  jointColor,
}) =>
  html`<wokwi-robot-arm
    sholderAngle=${sholderAngle}
    elbowAngle=${elbowAngle}
    wristAngle=${wristAngle}
    gripperAngle=${gripperAngle}
    gripperColor=${gripperColor}
    armColor=${armColor}
    jointColor=${jointColor}
  ></wokwi-robot-arm>`;

export const Default = Template.bind({});
Default.args = {
  sholderAngle: 297,
  elbowAngle: 52,
  wristAngle: 56,
  gripperAngle: 270,
  gripperColor: '#eeeedd',
  armColor: '#ffffdd',
  jointColor: '#111111',
};
