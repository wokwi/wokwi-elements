import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf, forceReRender } from '@storybook/web-components';
import { html } from 'lit-html';
import './servo-element';

class SweepAnimation {
  angle = 0;
  goingUp = true;

  step() {
    if (this.goingUp) {
      this.angle++;
    } else {
      this.angle--;
    }
    if (this.angle === 180) {
      this.goingUp = false;
    }
    if (this.angle === 0) {
      this.goingUp = true;
    }
  }
}

const sweepAnimation = new SweepAnimation();
setInterval(() => {
  sweepAnimation.step();
  forceReRender();
}, 20);

storiesOf('Servo', module)
  .addParameters({ component: 'wokwi-servo' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html` <wokwi-servo angle=${number('angle', 45, { min: 0, max: 180 })}></wokwi-servo> `
  )
  .add('Animated: sweep', () => {
    return html` <wokwi-servo angle=${sweepAnimation.angle}></wokwi-servo> `;
  })
  .add(
    'Horn: double',
    () =>
      html`
        <wokwi-servo horn="double" angle=${number('angle', 45, { min: 0, max: 180 })}></wokwi-servo>
      `
  )
  .add(
    'Horn: cross',
    () =>
      html`
        <wokwi-servo horn="cross" angle=${number('angle', 45, { min: 0, max: 180 })}></wokwi-servo>
      `
  );
