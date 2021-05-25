import { html } from 'lit-html';
import './heart-beat-sensor-element';

export default {
  title: 'Heart Beat Sensor',
  component: 'wokwi-heart-beat-sensor',
};

const Template = () => html`<wokwi-heart-beat-sensor></wokwi-heart-beat-sensor>`;

export const Default = Template.bind({});
