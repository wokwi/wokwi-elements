import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './7segment-element';
import { LitElement, customElement, property } from 'lit-element';

storiesOf('7 Segment', module)
  .addDecorator(withKnobs)
  .add(
    'Red 4.',
    () => html`
      <wokwi-7segment color="red" values="[0,1,1,0,0,1,1,1]"></wokwi-7segment>
    `
  )
  .add(
    'Green 5',
    () => html`
      <wokwi-7segment color="green" values="[1,0,1,1,0,1,1,0]"></wokwi-7segment>
    `
  )
  .add(
    'Blue spinner',
    () => html`
      <wokwi-blue-spinner></wokwi-blue-spinner>
    `
  );

@customElement('wokwi-blue-spinner')
export class BlueSpinnerElement extends LitElement {
  @property({ type: Array }) values: number[] = [];

  private interval: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    let i = 0;
    this.interval = setInterval(() => {
      this.values = [0, 0, 0, 0, 0, 0, 0, 0];
      this.values[i++ % 6] = 1;
    }, 100);
  }

  disconnectedCallback() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    return html`
      <wokwi-7segment color="blue" .values="${this.values}"></wokwi-7segment>
    `;
  }
}
