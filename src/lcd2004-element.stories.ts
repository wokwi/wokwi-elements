import { html } from 'lit';
import { fontA02 } from './lcd1602-font-a02';
import './lcd2004-element';

export default {
  title: 'LCD2004',
  component: 'wokwi-lcd2004',
};

export const lcd2004 = () => html`<wokwi-lcd2004 text="Hello World! LCD2004"></wokwi-lcd2004>`;
lcd2004.storyName = 'Hello World';

export const blueBackground = () =>
  html`<wokwi-lcd2004
    background="blue"
    color="white"
    text="Line 1              Line 2              Line 3              Line 4"
  ></wokwi-lcd2004>`;

export const i2cPins = () => html`<wokwi-lcd2004
  pins="i2c"
  text="I²C Pins"
  .font=${fontA02}
></wokwi-lcd2004>`;
i2cPins.storyName = 'I2C Pins';
