import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';
import { SPACE_KEYS } from './utils/keys';

@customElement('wokwi-pushbutton')
export class PushbuttonElement extends LitElement {
  @property() color = 'red';
  @property() pressed = false;
  @property() label = '';

  readonly pinInfo: ElementPin[] = [
    { name: '1.l', x: 0, y: 13, signals: [] },
    { name: '2.l', x: 0, y: 32, signals: [] },
    { name: '1.r', x: 67, y: 13, signals: [] },
    { name: '2.r', x: 67, y: 32, signals: [] },
  ];

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `;
  }

  render() {
    const { color, label } = this;
    const buttonFill = this.pressed ? `url(#grad-down-${color})` : `url(#grad-up-${color})`;

    return html`
      <button
        aria-label="${label} ${color} pushbutton"
        @mousedown=${this.down}
        @mouseup=${(e: MouseEvent) => !e.ctrlKey && this.up()}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${(e: KeyboardEvent) => SPACE_KEYS.includes(e.key) && this.down()}
        @keyup=${(e: KeyboardEvent) => SPACE_KEYS.includes(e.key) && !e.ctrlKey && this.up()}
      >
        <svg
          width="17.802mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <style>
            button:active .button-circle {
              fill: url(#grad-down-${color});
            }
          </style>
          <defs>
            <linearGradient id="grad-up-${color}" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${color}" offset="0.3" />
              <stop stop-color="${color}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient id="grad-down-${color}" x1="1" x2="0" y1="1" y2="0">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${color}" offset="0.3" />
              <stop stop-color="${color}" offset="0.5" />
              <stop offset="1" />
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
          <g fill="#999" stroke-width="1.0154">
            <path
              d="m12.365 2.426c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m12.365 7.5c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m-0.35085 4.3526c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
            <path
              d="m-0.35085 9.4266c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="${buttonFill}" />
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
      <span class="label">${this.label}</span>
    `;
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
