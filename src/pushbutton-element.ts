import { css, customElement, html, LitElement, property } from 'lit-element';

const SPACE_KEY = 32;

@customElement('wokwi-pushbutton')
export class PushbuttonElement extends LitElement {
  @property() color = 'red';
  @property() pressed = false;

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      .pushbutton-container {
        display: flex;
        flex-direction: column;
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .pushbutton-container:active .button-circle {
        fill: url(#grad-down);
      }

      .clickable-element {
        cursor: pointer;
      }
    `;
  }

  render() {
    const { color } = this;
    return html`
      <button class="pushbutton-container">
        <svg
          width="18mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              id="grad-up"
              x1="61.904"
              x2="133.7"
              y1="70.549"
              y2="142.84"
              gradientTransform="matrix(.10523 0 0 .10523 -4.3122 -5.2194)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${color}" offset="0.3" />
              <stop stop-color="${color}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="grad-down"
              x1="61.904"
              x2="133.7"
              y1="70.549"
              y2="142.84"
              gradientTransform="matrix(.10523 0 0 .10523 -4.3122 -5.2194)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop stop-color="${color}" offset="0.5" />
              <stop stop-color="${color}" offset="0.7" />
              <stop stop-color="#ffffff" offset="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#eaeaea">
            <path
              d="m-0.3538 1.4672c-0.058299 0-0.10523 0.0469-0.10523 0.10522v0.38698h-2.1504c-0.1166 0-0.21045 0.0938-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21045 0.21045 0.21045h2.1504v0.40101c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m-0.35376 8.6067c-0.058299 0-0.10523 0.0469-0.10523 0.10523v0.38697h-2.1504c-0.1166 0-0.21045 0.0939-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21046 0.21045 0.21046h2.1504v0.401c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m12.354 1.4672c0.0583 0 0.10522 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09385 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
            <path
              d="m12.354 8.6067c0.0583 0 0.10523 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09386 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="url(#grad-up)" />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${color}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
    `;
  }

  firstUpdated() {
    this.addEventListener('mousedown', this.down);
    this.addEventListener('touchstart', this.down);
    this.addEventListener('mouseup', this.up);
    this.addEventListener('touchend', this.up);
    this.addEventListener('keydown', (e: KeyboardEvent) => e.keyCode === SPACE_KEY && this.down());
    this.addEventListener('keyup', (e: KeyboardEvent) => e.keyCode === SPACE_KEY && this.up());
  }

  private down() {
    if (!this.pressed) {
      this.pressed = true;
      this.dispatchEvent(new Event('button-press'));
    }
  }

  private up() {
    if (this.pressed) {
      this.pressed = false;
      this.dispatchEvent(new Event('button-release'));
    }
  }
}
