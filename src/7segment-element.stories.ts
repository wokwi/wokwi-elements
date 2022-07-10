import { withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf, forceReRender } from '@storybook/web-components';
import { html } from 'lit';
import './7segment-element';

class SpinnerAnimation {
  private index = 0;
  values: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  step() {
    this.values = [0, 0, 0, 0, 0, 0, 0, 0];
    this.values[this.index++ % 6] = 1;
  }
}

class BlinkAnimation {
  value = false;

  step() {
    this.value = !this.value;
  }
}

const spinnerAnimation = new SpinnerAnimation();
const blinkAnimation = new BlinkAnimation();
setInterval(() => {
  spinnerAnimation.step();
  blinkAnimation.step();
  forceReRender();
}, 100);

storiesOf('7 Segment', module)
  .addParameters({ component: 'wokwi-7segment' })
  .addDecorator(withKnobs)
  .add(
    'Red 4.',
    () =>
      html`<wokwi-7segment
        color="red"
        values="[0,1,1,0,0,1,1,1]"
        pins=${select('pins', ['extend', 'top', 'none'], 'extend')}
      ></wokwi-7segment>`
  )
  .add(
    'Green 5',
    () => html`<wokwi-7segment color="green" values="[1,0,1,1,0,1,1,0]"></wokwi-7segment>`
  )
  .add(
    '2 yellow Digits',
    () =>
      html`<wokwi-7segment
        color="yellow"
        digits="2"
        values="[0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0]"
      ></wokwi-7segment>`
  )
  .add(
    '3 white digits',
    () =>
      html`<wokwi-7segment
        color="white"
        digits="3"
        values="[0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0]"
      ></wokwi-7segment>`
  )
  .add(
    'Clock mode',
    () =>
      html`<wokwi-7segment
        color="red"
        digits="4"
        colon="true"
        .colonValue=${blinkAnimation.value}
        pins=${select('pins', ['extend', 'top', 'none'], 'top')}
        values="[0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0]"
      ></wokwi-7segment>`
  )
  .add(
    'Blue spinner',
    () =>
      html`<wokwi-7segment
        color="#8080ff"
        pins="none"
        .values="${spinnerAnimation.values}"
      ></wokwi-7segment>`
  );
