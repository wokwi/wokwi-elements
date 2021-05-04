import { css, customElement, html, LitElement, property, svg } from 'lit-element';
import { ElementPin } from './pin';

@customElement('wokwi-slide-potentiometer')
export class SlidePotentiometerElement extends LitElement {
  @property() value = 0;
  @property() minValue = 0;
  @property() maxValue = 50;
  private isPressed = false;
  private caseRect: DOMRect | undefined;
  private zoom = 1;
  readonly pinInfo: ElementPin[] = [
    { name: '1', x: 17.5, y: 59, number: 1, signals: [] },
    { name: '2', x: 17.5, y: 82.75, number: 2, signals: [] },
    { name: '3', x: 222.25, y: 59, number: 3, signals: [] },
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
      input:focus + svg #tip {
        /* some style to add when the element has focus */
        filter: url(#outline);
      }
    `;
  }

  render() {
    const { value, minValue, maxValue } = this;
    const tipTravelInMM = 30;
    // Tip is centered by default
    const tipBaseOffsetX = -(tipTravelInMM / 2);
    const tipMovementX = (value / (maxValue - minValue)) * tipTravelInMM;
    const tipOffSetX = tipMovementX + tipBaseOffsetX;
    return html`
      <input
        tabindex="0"
        type="range"
        min="${this.minValue}"
        max="${this.maxValue}"
        value="${this.value}"
        step="1"
        aria-valuemin="${this.minValue}"
        aria-valuenow="${this.value}"
        aria-valuemax="${this.maxValue}"
        @input="${this.onInputValueChange}"
        class="hide-input"
      />
      <svg
        width="55mm"
        height="29mm"
        version="1.1"
        viewBox="0 0 55 29"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @mouseup=${this.up}
        @mousemove=${this.mouseMove}
        @mouseleave=${this.up}
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
            <stop stop-color="#2a2a2a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="11" width="5" height="0.75" />
          <rect x="50" y="11" width="5" height="0.75" />
          <rect x="0" y="17.25" width="5" height="0.75" />
        </g>
        <g transform="translate(5 5)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="45"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect x="3.25" y="8" width="38.5" height="3" rx=".1" ry=".1" fill="#3f1e1e" />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(43.375 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Tip -->
          <g
            id="tip"
            transform="translate(${tipOffSetX} 0)"
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
      </svg>
    `;
  }

  private focusInput() {
    const inputEl: HTMLInputElement | null | undefined = this.shadowRoot?.querySelector(
      '.hide-input'
    );
    inputEl?.focus();
  }

  private down(): void {
    this.dispatchEvent(new CustomEvent('button-press'));
    if (!this.isPressed) {
      this.updateCaseRect();
    }
    this.isPressed = true;
  }

  private up(): void {
    if (this.isPressed) {
      this.dispatchEvent(new CustomEvent('button-release'));
      this.isPressed = false;
    }
  }

  private updateCaseRect(): void {
    const element = this.shadowRoot?.querySelector('#sliderCase');
    if (element) {
      this.caseRect = element?.getBoundingClientRect();
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

  private mouseMove(event: MouseEvent): void {
    if (this.isPressed) {
      this.updateValueFromXCoordinate(event.pageX);
    }
  }

  private touchMove(event: TouchEvent): void {
    if (this.isPressed) {
      if (event.targetTouches.length > 0) {
        this.updateValueFromXCoordinate(event.targetTouches[0].pageX);
      }
    }
  }

  private updateValueFromXCoordinate(xPosition: number): void {
    const width = this.caseRect?.width ?? 0;
    const pixelPerMM = width / 45;
    const travelInPixels = 30 * pixelPerMM;
    const pixelPerIncrement = travelInPixels / (this.maxValue - this.minValue);
    const caseBorderWidth = pixelPerMM * 7.5;
    const tipPositionX = xPosition / this.zoom - (this.caseRect?.left ?? 0) - caseBorderWidth;
    this.updateValue(Math.round(tipPositionX / pixelPerIncrement));
  }

  private updateValue(value: number) {
    let clampedValue = Math.min(value, this.maxValue);
    clampedValue = Math.max(clampedValue, this.minValue);
    this.value = clampedValue;
    this.dispatchEvent(new InputEvent('input', { detail: clampedValue }));
  }
}
