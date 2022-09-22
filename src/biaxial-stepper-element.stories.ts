import { html } from 'lit';
import './biaxial-stepper-element';

export default {
  title: 'Biaxial Stepper',
  component: 'wokwi-biaxial-stepper',
  argTypes: {
    innerHandLength: { control: { type: 'range', min: 20, max: 70 } },
    innerHandAngle: { control: { type: 'range', min: 0, max: 360 } },
    innerHandColor: { control: { type: 'color' } },
    innerHandShape: { options: ['arrow', 'plain', 'ornate'], control: { type: 'select' } },
    outerHandLength: { control: { type: 'range', min: 20, max: 70 } },
    outerHandAngle: { control: { type: 'range', min: 0, max: 360 } },
    outerHandColor: { control: { type: 'color' } },
    outerHandShape: { options: ['arrow', 'plain', 'ornate'], control: { type: 'select' } },
  },
  args: {
    outerHandLength: 20,
    outerHandAngle: 0,
    outerHandColor: 'grey',
    outerHandShape: 'plain',
    innerHandLength: 20,
    innerHandAngle: 0,
    innerHandColor: 'darkgrey',
    innerHandShape: 'plain',
  },
};

const Template = ({
  innerHandLength,
  innerHandColor,
  innerHandShape,
  innerHandAngle,
  outerHandLength,
  outerHandColor,
  outerHandShape,
  outerHandAngle,
}) => html`<wokwi-biaxial-stepper
  .innerHandLength=${innerHandLength}
  .innerHandAngle=${innerHandAngle}
  .innerHandColor=${innerHandColor}
  .innerHandShape=${innerHandShape}
  .outerHandLength=${outerHandLength}
  .outerHandAngle=${outerHandAngle}
  .outerHandColor=${outerHandColor}
  .outerHandShape=${outerHandShape}
></wokwi-biaxial-stepper>`;

export const Default = Template.bind({});
Default.args = {
  innerHandLength: 25,
  innerHandColor: 'red',
  innerHandShape: 'arrow',
  innerHandAngle: 225,
  outerHandLength: 30,
  outerHandColor: 'green',
  outerHandShape: 'arrow',
  outerHandAngle: 270,
};

export const NineOclock = Template.bind({});
NineOclock.args = {
  innerHandLength: 70,
  innerHandColor: 'silver',
  innerHandShape: 'plain',
  innerHandAngle: 0,
  outerHandLength: 40,
  outerHandColor: 'gold',
  outerHandShape: 'plain',
  outerHandAngle: 270,
};

export const SixOclock = Template.bind({});
SixOclock.args = {
  innerHandLength: 70,
  innerHandColor: 'silver',
  innerHandShape: 'plain',
  innerHandAngle: 0,
  outerHandLength: 40,
  outerHandColor: 'gold',
  outerHandShape: 'plain',
  outerHandAngle: 180,
};

export const ThreeOclock = Template.bind({});
ThreeOclock.args = {
  innerHandLength: 70,
  innerHandColor: 'silver',
  innerHandShape: 'plain',
  innerHandAngle: 0,
  outerHandLength: 50,
  outerHandColor: 'gold',
  outerHandShape: 'plain',
  outerHandAngle: 90,
};

export const TenPastTen = Template.bind({});
TenPastTen.args = {
  innerHandLength: 70,
  innerHandColor: 'silver',
  innerHandShape: 'plain',
  innerHandAngle: 60,
  outerHandLength: 60,
  outerHandColor: 'gold',
  outerHandShape: 'plain',
  outerHandAngle: 300,
};

export const SameLength = Template.bind({});
SameLength.args = {
  innerHandLength: 30,
  innerHandColor: 'blue',
  innerHandShape: 'plain',
  innerHandAngle: 0,
  outerHandLength: 30,
  outerHandColor: 'green',
  outerHandShape: 'plain',
  outerHandAngle: 180,
};

export const OrnateClock = Template.bind({});
OrnateClock.args = {
  innerHandLength: 70,
  innerHandColor: 'silver',
  innerHandShape: 'ornate',
  innerHandAngle: 60,
  outerHandLength: 60,
  outerHandColor: 'gold',
  outerHandShape: 'ornate',
  outerHandAngle: 300,
};
