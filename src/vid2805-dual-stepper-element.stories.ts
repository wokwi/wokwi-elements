import { html } from 'lit';
import './vid2805-dual-stepper-element';
import { StepperHand } from './vid2805-dual-stepper-element';

export default {
  title: 'VID2805 Dual Stepper',
  component: 'wokwi-vid2805-dual-stepper',
  argTypes: {
    outerLength: { control: { type: 'range', min: 20, max: 70 } }, 
    outerAngle: { control: { type: 'range', min: 0, max: 360 } }, 
    outerColour: { control: { type: 'color' } }, 
    outerShape : { options: ['arrow' , 'plain', 'fancy'], control: { type: 'select'}}, 
    innerLength: { control: { type: 'range', min: 20, max: 70 } }, 
    innerAngle: { control: { type: 'range', min: 0, max: 360 } }, 
    innerColour: { control: { type: 'color' } }, 
    innerShape : { options: ['arrow' , 'plain', 'fancy'], control: { type: 'select'}}, 
  },
  args: {
    outerLength: 20,
    outerAngle: 0,
    outerColour: 'grey',
    outerShape: 'plain',
    innerLength: 20,
    innerAngle:  0,
    innerColour:  'darkgrey',
    innerShape:  'plain',
  },
};


//  .innerHand = ${new ClockHand(innerLength, innerColour, innerShape, innerAngle)}
// .outerHand = ${new ClockHand(outerLength, outerColour, outerShape, outerAngle)}


const Template = ({outerLength, outerAngle, outerColour, outerShape, 
  innerLength, innerAngle, innerColour, innerShape,
innerHand, outerHand }) => html`<wokwi-vid2805-dual-stepper 
.outerLength = ${outerLength}
.outerAngle = ${outerAngle}
.outerColour = ${outerColour}
.outerShape = ${outerShape}
.innerLength = ${innerLength}
.innerAngle = ${innerAngle}
.innerColour = ${innerColour}
.innerShape = ${innerShape}  
 .innerHand = ${innerHand}
  .outerHand = ${outerHand}
></wokwi-vid2805-dual-stepper>`;

export const Default = Template.bind({});
Default.args = { 
  // outerLength: 20,
  // outerAngle: 0,
  // outerColour: 'grey',
  // outerShape: 'plain',
  // innerLength: 20,
  // innerAngle:  0,
  // innerColour:  'darkgrey',
  // innerShape:  'plain',

  innerHand: new StepperHand(25, "red", "plain", 225),
  outerHand: new StepperHand(30, "green", "plain", 270),
};

export const NineOclock = Template.bind({});
NineOclock.args = { 
  innerHand: new StepperHand(70, "silver", "plain", 90),
  outerHand: new StepperHand(60, "gold", "plain", 0),
};

export const SameLength = Template.bind({});
SameLength.args = { 
  innerHand: new StepperHand(20, "blue", "plain", 0),
  outerHand: new StepperHand(20, "green", "plain", 180),
};
