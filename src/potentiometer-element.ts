import { css, customElement, html, LitElement, property } from 'lit-element';

interface Point {
  x: number;
  y: number;
}

/** The potentiometer SVG is taken from https://freesvg.org/potentiometer and some of the
    functions are taken from https://github.com/vitaliy-bobrov/js-rocks knob component */
@customElement('wokwi-potentiometer')
export class PotentiometerElement extends LitElement {
  @property() min = 0;
  @property() max = 100;
  @property() value = 0;
  @property() step = 1;
  @property() startDegree = -135;
  @property() endDegree = 135;
  private center: Point = { x: 0, y: 0 };
  pressed = false;

  static get styles() {
    return css`
      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
    `;
  }

  clamp(min: number, max: number, value: number): number {
    return Math.min(Math.max(value, min), max);
  }

  mapToMinMax(value: number, min: number, max: number): number {
    return value * (max - min) + min;
  }

  percentFromMinMax(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }

  render() {
    return html`
      <style>
        #rotating {
          transform-origin: 10px 8px;
          transform: rotate(var(--knob-angle, 0deg));
        }
      </style>
      <svg
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
      >
        <rect
          x=".14716"
          y=".14838"
          width="19.483"
          height="19.45"
          ry="1.2302"
          fill="#045881"
          stroke="#045881"
          stroke-width=".3018"
        />
        <rect
          x="5.3713"
          y=".70219"
          width="9.0895"
          height="1.8724"
          fill="#ccdae3"
          stroke-width=".1509"
        />
        <ellipse
          cx="9.9059"
          cy="8.1778"
          rx="7.2664"
          ry="7.4327"
          fill="#e4e8eb"
          stroke-width=".1509"
        />
        <rect
          x="6.5981"
          y="17.004"
          width="6.4501"
          height="2.0613"
          fill-opacity="0"
          stroke="#fff"
          stroke-width=".3018"
        />
        <g stroke-width=".1509">
          <text x="6.2155704" y="16.605389">GND</text>
          <text x="8.7457705" y="16.625864">VCC</text>
          <text x="11.256002" y="16.592617">SIG</text>
        </g>
        <g fill="#fff" stroke-width=".1509">
          <ellipse cx="1.6773" cy="1.8098" rx=".99743" ry=".96419" />
          <ellipse cx="1.4781" cy="18.368" rx=".99743" ry=".96419" />
          <ellipse cx="17.969" cy="18.467" rx=".99743" ry=".96419" />
          <ellipse cx="18.068" cy="1.9094" rx=".99743" ry=".96419" />
        </g>
        <g fill="#b3b1b0" stroke-width=".1509">
          <ellipse cx="7.6846" cy="18.062" rx=".61125" ry=".63476" />
          <ellipse cx="9.7535" cy="18.038" rx=".61125" ry=".63476" />
          <ellipse cx="11.871" cy="18.038" rx=".61125" ry=".63476" />
        </g>
        <ellipse
          cx="9.9557"
          cy="8.0601"
          rx="6.6002"
          ry="6.5836"
          fill="#c3c2c3"
          stroke-width=".1509"
        />
        <rect id="rotating" x="10" y="2" width=".42002" height="3.0578" stroke-width=".1509" />
      </svg>
    `;
  }

  private down(event: MouseEvent) {
    if (event.button === 0 || window.navigator.maxTouchPoints) {
      this.pressed = true;
      this.updatePotentiometerPosition(event);
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

  private updatePotentiometerPosition(event: MouseEvent | TouchEvent) {
    event.stopPropagation();
    event.preventDefault();

    const potentiometerRect = this.getBoundingClientRect();

    this.center = {
      x: window.scrollX + potentiometerRect.left + potentiometerRect.width / 2,
      y: window.scrollY + potentiometerRect.top + potentiometerRect.height / 2
    };
  }

  private rotateHandler(event: MouseEvent | TouchEvent) {
    event.stopPropagation();
    event.preventDefault();

    const isTouch = event.type === 'touchmove';
    const pageX = isTouch ? (event as TouchEvent).touches[0].pageX : (event as MouseEvent).pageX;
    const pageY = isTouch ? (event as TouchEvent).touches[0].pageY : (event as MouseEvent).pageY;
    const x = this.center.x - pageX;
    const y = this.center.y - pageY;
    let deg = Math.round((Math.atan2(y, x) * 180) / Math.PI);

    if (deg < 0) {
      deg += 360;
    }

    deg -= 90;

    if (x > 0 && y <= 0) {
      deg -= 360;
    }

    deg = this.clamp(this.startDegree, this.endDegree, deg);
    const percent = this.percentFromMinMax(deg, this.startDegree, this.endDegree);
    const value = this.mapToMinMax(percent, this.min, this.max);

    this.updateValue(value);
  }

  private updatePotentiometerPointer(value: number) {
    const percent = this.percentFromMinMax(value, this.min, this.max);
    const deg = Math.round((this.endDegree - this.startDegree) * percent + this.startDegree);
    this.style.setProperty('--knob-angle', `${deg}deg`);
  }

  private updateValue(value: number) {
    const clamped = this.clamp(this.min, this.max, value);
    const updated = Math.round(clamped / this.step) * this.step;
    const rounded = Math.round(updated * 100) / 100;
    this.updatePotentiometerPointer(rounded);
    this.dispatchEvent(new InputEvent('input', { data: `${rounded}` }));
  }
}
