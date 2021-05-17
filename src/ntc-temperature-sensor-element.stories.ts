import { html } from 'lit';
import './ntc-temperature-sensor-element';

export default {
  title: 'NTC Temperature Sensor',
  component: 'wokwi-ntc-temperature-sensor',
};

const Template = () => html` <wokwi-ntc-temperature-sensor></wokwi-ntc-temperature-sensor> `;

export const Default = Template.bind({});
