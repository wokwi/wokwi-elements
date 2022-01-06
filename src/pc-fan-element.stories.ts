import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf, forceReRender } from '@storybook/web-components';
import { html } from 'lit';
import './pc-fan-element';

class FanAnimation {
  angle = 0;

  step() {
    if (this.angle > 60) {
      this.angle = 0;
    } else {
      this.angle++;
    }
  }
}

const fanAnimation = new FanAnimation();
setInterval(() => {
  fanAnimation.step();
  forceReRender();
}, 5);

storiesOf('PC-Fan', module)
  .addParameters({ component: 'wokwi-pc-fan' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`<wokwi-pc-fan angle=${number('angle', 0, { min: 0, max: 360 })}></wokwi-pc-fan> `
  )
  .add('Fan On', () => {
    return html`<wokwi-pc-fan angle=${fanAnimation.angle}></wokwi-pc-fan> `;
  });
