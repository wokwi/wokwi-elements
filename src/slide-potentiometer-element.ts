import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { analog, ElementPin } from './pin';
import { clamp } from './utils/clamp';
import { getScreenCTM } from './utils/ctm-workaround';
import { mmToPix } from './utils/units';

@customElement('wokwi-slide-potentiometer')
export class SlidePotentiometerElement extends LitElement {
  @property({ type: Number }) travelLength = 30;
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 2;

  get pinInfo(): ElementPin[] {
    return [
      { name: 'VCC', x: 1, y: 43, number: 1, signals: [{ type: 'power', signal: 'VCC' }] },
      { name: 'SIG', x: 1, y: 63, number: 2, signals: [analog(0)] },
      {
        name: 'GND',
        x: 93.6 + this.travelLength * mmToPix,
        y: 43,
        number: 3,
        signals: [{ type: 'power', signal: 'GND' }],
      },
    ];
  }

  private isPressed = false;
  private zoom = 1;
  private pageToLocalTransformationMatrix: DOMMatrix | null = null;

  static get styles() {
    return css`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #tip {
        /* some style to add when the element has focus */
        filter: url(#outline);
      }
    `;
  }

  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('travelLength')) {
      this.dispatchEvent(new CustomEvent('pininfo-change'));
    }
    super.update(changedProperties);
  }

  render() {
    const { value, min: minValue, max: maxValue, travelLength } = this;
    // Tip is centered by default
    const tipBaseOffsetX = -15;
    const tipMovementX = (value / (maxValue - minValue)) * travelLength;
    const tipOffsetX = tipMovementX + tipBaseOffsetX;

    return html`
      <input
        tabindex="0"
        type="range"
        min="${this.min}"
        max="${this.max}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        aria-valuemax="${this.max}"
        @input="${this.onInputValueChange}"
        class="hide-input"
      />
      <svg
        width="${travelLength + 25}mm"
        height="29mm"
        version="1.1"
        viewBox="0 0 ${travelLength + 25} 29"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="outline">
            <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#4faaff" />
          </filter>
          <linearGradient
            id="tipGradient"
            x1="36.482"
            x2="50.447"
            y1="91.25"
            y2="91.25"
            gradientTransform="matrix(.8593 0 0 1.1151 -14.849 -92.256)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#595959" offset=".4" />
            <stop stop-color="#595959" offset=".6" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <radialGradient
            id="bodyGradient"
            cx="62.59"
            cy="65.437"
            r="22.5"
            gradientTransform="matrix(1.9295 3.7154e-8 0 .49697 -98.268 -23.02)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d2d2d2" offset="0" />
            <stop stop-color="#7a7a7a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="11" width="5" height="0.75" />
          <rect x="${travelLength + 20}" y="11" width="5" height="0.75" />
          <rect x="0" y="16.25" width="5" height="0.75" />
        </g>
        <g transform="translate(5 5)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="${travelLength + 15}"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect
            x="3.25"
            y="8"
            width="${travelLength + 8.5}"
            height="3"
            rx=".1"
            ry=".1"
            fill="#3f1e1e"
          />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(${travelLength + 13.375} 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Tip -->
          <g
            id="tip"
            transform="translate(${tipOffsetX} 0)"
            @mousedown=${this.down}
            @touchstart=${this.down}
            @touchmove=${this.touchMove}
            @touchend=${this.up}
            @keydown=${this.down}
            @keyup=${this.up}
            @click="${this.focusInput}"
          >
            <rect x="19.75" y="8.6" width="5.5" height="1.8" />
            <rect
              x="16.5"
              y="0"
              width="12"
              height="19"
              fill="url(#tipGradient)"
              stroke-width="2.6518"
              rx=".1"
              ry=".1"
            />
            <rect x="22.2" y="0" width=".6" height="19" fill="#efefef" />
          </g>
        </g>
        <rect x="0" y="14" width="1" height="1" fill="none" id="firefox-workaround" />
      </svg>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('mouseup', this.up);
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseleave', this.up);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('mouseup', this.up);
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseleave', this.up);
  }

  private focusInput() {
    const inputEl: HTMLInputElement | null | undefined =
      this.shadowRoot?.querySelector('.hide-input');
    inputEl?.focus();
  }

  private down(): void {
    if (!this.isPressed) {
      this.updateCaseDisplayProperties();
    }
    this.isPressed = true;
  }

  private up = () => {
    if (this.isPressed) {
      this.isPressed = false;
    }
  };

  private updateCaseDisplayProperties(): void {
    const element = this.shadowRoot?.querySelector<SVGRectElement>('#sliderCase');
    const firefoxWorkaround = this.shadowRoot?.querySelector<SVGRectElement>('#firefox-workaround');

    if (element && firefoxWorkaround) {
      this.pageToLocalTransformationMatrix = getScreenCTM(
        element,
        firefoxWorkaround,
        new DOMRect(0, 14, 1, 1),
      );
    }

    // Handle zooming in the storybook
    const zoom = getComputedStyle(window.document.body)?.zoom;
    if (zoom !== undefined) {
      this.zoom = Number(zoom);
    } else {
      this.zoom = 1;
    }
  }

  private onInputValueChange(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      this.updateValue(Number(target.value));
    }
  }

  private mouseMove = (event: MouseEvent) => {
    if (this.isPressed) {
      this.updateValueFromXCoordinate(new DOMPointReadOnly(event.pageX, event.pageY));
    }
  };

  private touchMove(event: TouchEvent): void {
    if (this.isPressed) {
      if (event.targetTouches.length > 0) {
        const touchTarget = event.targetTouches[0];
        this.updateValueFromXCoordinate(new DOMPointReadOnly(touchTarget.pageX, touchTarget.pageY));
      }
    }
  }

  private updateValueFromXCoordinate(position: DOMPointReadOnly): void {
    if (this.pageToLocalTransformationMatrix) {
      // Handle zoom first, the transformation matrix does not take that into account
      let localPosition = new DOMPointReadOnly(position.x / this.zoom, position.y / this.zoom);
      // Converts the point from the page coordinate space to the #caseRect coordinate space
      // It also translates the units from pixels to millimeters!
      localPosition = localPosition.matrixTransform(this.pageToLocalTransformationMatrix);
      const caseBorderWidth = 7.5;
      const tipPositionXinMM = localPosition.x - caseBorderWidth;
      const mmPerIncrement = this.travelLength / (this.max - this.min);
      this.updateValue(Math.round(tipPositionXinMM / mmPerIncrement));
    }
  }

  private updateValue(value: number) {
    this.value = clamp(this.min, this.max, value);
    this.dispatchEvent(new InputEvent('input', { detail: this.value }));
  }
}
