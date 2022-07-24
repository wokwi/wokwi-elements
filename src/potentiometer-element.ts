import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { analog, ElementPin } from './pin';
import { clamp } from './utils/clamp';

const knobCenter = {
  x: 9.91,
  y: 8.18,
};

/** The potentiometer SVG is taken from https://freesvg.org/potentiometer and some of the
    functions are taken from https://github.com/vitaliy-bobrov/js-rocks knob component */
@customElement('wokwi-potentiometer')
export class PotentiometerElement extends LitElement {
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 1023;
  @property() value = 0;
  @property() step = 1;
  @property() startDegree = -135;
  @property() endDegree = 135;

  private pressed = false;
  private pageToKnobMatrix: SVGMatrix | null = null;

  readonly pinInfo: ElementPin[] = [
    { name: 'GND', x: 29, y: 68.5, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'SIG', x: 37, y: 68.5, number: 2, signals: [analog(0)] },
    { name: 'VCC', x: 44.75, y: 68.5, number: 3, signals: [{ type: 'power', signal: 'VCC' }] },
  ];

  static get styles() {
    return css`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `;
  }

  mapToMinMax(value: number, min: number, max: number): number {
    return value * (max - min) + min;
  }

  percentFromMinMax(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }

  render() {
    const percent = clamp(0, 1, this.percentFromMinMax(this.value, this.min, this.max));
    const knobDeg = (this.endDegree - this.startDegree) * percent + this.startDegree;

    return html`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${styleMap({
          '--knob-angle': knobDeg + 'deg',
        })}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx=${knobCenter.x}
          cy=${knobCenter.y}
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect
          x="6.6"
          y="17"
          width="6.5"
          height="2"
          fill-opacity="0"
          stroke="#fff"
          stroke-width=".30"
        />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="8.75" y="16.63">SIG</text>
          <text x="11.25" y="16.59">VCC</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="9.75" cy="18" rx=".61" ry=".63" />
          <ellipse cx="11.87" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
      </svg>
    `;
  }

  private focusInput() {
    const inputEl: HTMLInputElement | null | undefined =
      this.shadowRoot?.querySelector('.hide-input');
    inputEl?.focus();
  }

  private onValueChange(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.updateValue(parseFloat(target.value));
  }

  private down(event: MouseEvent) {
    if (event.button === 0 || window.navigator.maxTouchPoints) {
      this.pressed = true;

      event.stopPropagation();
      event.preventDefault();

      this.updateKnobMatrix();
    }
  }

  private move(event: MouseEvent) {
    const { pressed } = this;
    if (pressed) {
      this.rotateHandler(event);
    }
  }

  private up() {
    this.pressed = false;
  }

  private updateKnobMatrix() {
    const knob = this.shadowRoot?.querySelector<SVGRectElement>('#knob');
    this.pageToKnobMatrix = knob?.getScreenCTM()?.inverse() ?? null;
  }

  private rotateHandler(event: MouseEvent | TouchEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.pageToKnobMatrix) {
      return;
    }

    const isTouch = event.type === 'touchmove';
    const pageX = isTouch ? (event as TouchEvent).touches[0].pageX : (event as MouseEvent).pageX;
    const pageY = isTouch ? (event as TouchEvent).touches[0].pageY : (event as MouseEvent).pageY;
    const localPosition = new DOMPointReadOnly(pageX, pageY).matrixTransform(this.pageToKnobMatrix);
    const x = knobCenter.x - localPosition.x;
    const y = knobCenter.y - localPosition.y;
    let deg = Math.round((Math.atan2(y, x) * 180) / Math.PI);
    if (deg < 0) {
      deg += 360;
    }

    deg -= 90;

    if (x > 0 && y <= 0 && deg > 0) {
      deg -= 360;
    }

    deg = clamp(this.startDegree, this.endDegree, deg);
    const percent = this.percentFromMinMax(deg, this.startDegree, this.endDegree);
    const value = this.mapToMinMax(percent, this.min, this.max);

    this.updateValue(value);
  }

  private updateValue(value: number) {
    const clamped = clamp(this.min, this.max, value);
    const updated = Math.round(clamped / this.step) * this.step;
    this.value = Math.round(updated * 100) / 100;
    this.dispatchEvent(new InputEvent('input', { detail: this.value }));
  }
}
