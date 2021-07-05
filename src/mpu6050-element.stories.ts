import { html } from 'lit-html';
import './mpu6050-element';

export default {
  title: 'MPU6050',
  component: 'wokwi-mpu6050',
  argTypes: {
    led1: { control: { type: 'boolean' } },
  },
  args: {
    led1: false,
  },
};

const Template = ({ led1 }) => html` <wokwi-mpu6050 .led1=${led1}></wokwi-mpu6050>`;

export const Default = Template.bind({});
