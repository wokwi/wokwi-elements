import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('wokwi-7segment')
export class SevenSegmentElement extends LitElement {
  @property() color = 'red';
  @property({ type: Array }) values: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  static get styles() {
    return css`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `;
  }

  render() {
    const { color, values } = this;
    const fill = (index: number) => (values[index] ? color : '#ddd');
    return html`
      <svg
        width="12mm"
        height="18.5mm"
        version="1.1"
        viewBox="0 0 12 18.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="skewX(-8) translate(2, 0)">
          <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${fill(0)}" />
          <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${fill(1)}" />
          <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${fill(2)}" />
          <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${fill(3)}" />
          <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${fill(4)}" />
          <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${fill(5)} />
          <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${fill(6)} />
        </g>
        <circle cx="11" cy="17" r="1.1" fill="${fill(7)}" />
      </svg>
    `;
  }
}
