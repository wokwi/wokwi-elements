import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';

@customElement('wokwi-slide-switch')
export class SlideSwitchElement extends LitElement {
  @property() value = 0;

  readonly pinInfo: ElementPin[] = [
    { name: '1', number: 1, y: 34, x: 6.5, signals: [] },
    { name: '2', number: 2, y: 34, x: 16, signals: [] },
    { name: '3', number: 3, y: 34, x: 25.5, signals: [] },
  ];

  static get styles() {
    return css`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      svg #handle {
        transition: transform 0.2s linear;
      }
      input:checked + svg #handle {
        transform: translate(2px, 0);
      }
      input:focus + svg #handle {
        stroke-width: 0.4px;
        stroke: #8080ff;
      }
    `;
  }

  private onClick() {
    const inputEl = this.shadowRoot?.querySelector<HTMLInputElement>('.hide-input');
    if (inputEl) {
      inputEl.checked = !inputEl.checked;
      this.onValueChange(inputEl);
      inputEl?.focus();
    }
  }

  private onValueChange(target: HTMLInputElement) {
    this.value = target.checked ? 1 : 0;
    this.dispatchEvent(new InputEvent('input', { detail: this.value }));
  }

  renderSVG() {
    return html`<svg
      width="8.5mm"
      height="9.23mm"
      version="1.1"
      viewBox="0 0 8.5 9.23"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      @click="${this.onClick}"
    >
      <defs>
        <radialGradient
          id="a"
          cx="9.33"
          cy="122"
          r="4.25"
          gradientTransform="matrix(1.75 -.511 .28 .959 -41.2 8.15)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#808080" offset="0" />
          <stop stop-color="#b5b5b5" offset="1" />
        </radialGradient>
      </defs>
      <g fill="#aaa" stroke-width=".0673">
        <rect x="4" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        <rect x="1.54" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        <rect x="6.5" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
      </g>
      <path
        id="handle"
        d="m2.74 0.128 0.145-0.128 0.177 0.0725 0.174-0.0725 0.151 0.0725 0.154-0.0725 0.151 0.0725 0.128-0.0725 0.134 0.0725 0.123-0.0725 0.145 0.128 2e-5 2h-1.48z"
        stroke-width=".0623"
      />
      <rect x="0" y="2.06" width="8.5" height="3.48" fill="url(#a)" stroke-width=".0548" />
      <rect x=".0322" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
      <rect x="6.95" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
      <rect x="2.55" y="4.74" width="3.47" height=".805" stroke-width=".0955" />
    </svg>`;
  }

  render() {
    const { value } = this;
    return html`
      <input
        tabindex="0"
        type="checkbox"
        class="hide-input"
        .checked=${value}
        @input="${(e: InputEvent) => this.onValueChange(e.target as HTMLInputElement)}"
      />
      ${this.renderSVG()}
    `;
  }
}
