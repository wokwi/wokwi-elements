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
        font-size: 6.5px;
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
          transform-origin: -120.168198px -140.5804px;
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
        <g transform="matrix(.1509 0 0 .1509 28.121 29.174)">
          <rect
            x="-185.38"
            y="-192.35"
            width="129.11"
            height="128.89"
            ry="8.1522"
            fill="#045881"
            stroke="#045881"
            stroke-width="2"
          />
          <rect x="-150.76" y="-188.68" width="60.235" height="12.408" fill="#ccdae3" />
          <ellipse cx="-120.71" cy="-139.14" rx="48.154" ry="49.256" fill="#e4e8eb" />
          <rect
            x="-142.63"
            y="-80.647"
            width="42.744"
            height="13.66"
            fill-opacity="0"
            stroke="#fff"
            stroke-width="2"
          />
          <text x="-145.16521" y="-83.291">GND</text>
          <text x="-128.39781" y="-83.155312">VCC</text>
          <text x="-111.76274" y="-83.375633">SIG</text>
          <g fill="#fff">
            <ellipse cx="-175.24" cy="-181.34" rx="6.6099" ry="6.3896" />
            <ellipse cx="-176.56" cy="-71.613" rx="6.6099" ry="6.3896" />
            <ellipse cx="-67.278" cy="-70.952" rx="6.6099" ry="6.3896" />
            <ellipse cx="-66.617" cy="-180.68" rx="6.6099" ry="6.3896" />
          </g>
          <g fill="#b3b1b0">
            <ellipse cx="-135.43" cy="-73.641" rx="4.0507" ry="4.2065" />
            <ellipse cx="-121.72" cy="-73.797" rx="4.0507" ry="4.2065" />
            <ellipse cx="-107.69" cy="-73.797" rx="4.0507" ry="4.2065" />
          </g>
          <ellipse cx="-120.38" cy="-139.92" rx="43.739" ry="43.629" fill="#c3c2c3" />
          <rect id="rotating" x="-120.17" y="-180.58" width="2.7834" height="20.264" />
        </g>
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
    this.dispatchEvent(new InputEvent('potentiometer-value-changed', { data: `${rounded}` }));
  }
}
