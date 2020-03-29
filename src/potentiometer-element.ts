import { customElement, html, LitElement, property } from 'lit-element';

interface Point {
  x: number;
  y: number;
}

let id = 1;

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
  id = `rotating-${id++}`;

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
        #${this.id} {
          transform-origin: -120.168198px -140.5804px;
          transform: rotate(var(--knob-angle, 0deg));
        }
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20mm"
        height="20mm"
        viewBox="0 0 20 20"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
      >
        <g transform="translate(-6.7420057,-6.6693388)">
          <g transform="matrix(0.15090139,0,0,0.15090139,34.862601,35.84314)">
            <rect
              ry="8.1522207"
              y="-192.35448"
              x="-185.37505"
              height="128.89323"
              width="129.11356"
              style="opacity:1;fill:#045881;fill-opacity:1;stroke:#045881;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <rect
              y="-188.67798"
              x="-150.76115"
              height="12.407617"
              width="60.234947"
              style="opacity:1;fill:#ccdae3;fill-opacity:1;stroke:none;stroke-width:2.26042461;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="49.255947"
              rx="48.154297"
              cy="-139.14471"
              cx="-120.70818"
              style="opacity:1;fill:#e4e8eb;fill-opacity:1;stroke:none;stroke-width:1.97907138;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <rect
              y="-80.647011"
              x="-142.63103"
              height="13.660479"
              width="42.74408"
              style="opacity:1;fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <text
              y="-83.291"
              x="-145.16521"
              style="font-style:normal;font-weight:normal;font-size:6.4255476px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.34422573"
              xml:space="preserve"
            >
              <tspan
                style="font-size:6.4255476px;fill:#ffffff;stroke-width:0.34422573"
                y="-83.291"
                x="-174.16521"
              >
                GND
              </tspan>
            </text>
            <text
              y="-83.155312"
              x="-128.39781"
              style="font-style:normal;font-weight:normal;font-size:6.42554712px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.34422573"
              xml:space="preserve"
            >
              <tspan
                style="font-size:6.42554712px;fill:#ffffff;stroke-width:0.34422573"
                y="-83.155312"
                x="-158.39781"
              >
                VCC
              </tspan>
            </text>
            <text
              y="-83.375633"
              x="-111.76274"
              style="font-style:normal;font-weight:normal;font-size:6.42554712px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.34422573"
              xml:space="preserve"
            >
              <tspan
                style="font-size:6.42554712px;fill:#ffffff;stroke-width:0.34422573"
                y="-83.375633"
                x="-142.76274"
              >
                SIG
              </tspan>
            </text>
            <ellipse
              ry="6.3895783"
              rx="6.6099091"
              cy="-181.33797"
              cx="-175.23991"
              style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="6.3895783"
              rx="6.6099091"
              cy="-71.613472"
              cx="-176.56194"
              style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="6.3895783"
              rx="6.6099091"
              cy="-70.952477"
              cx="-67.278061"
              style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="6.3895783"
              rx="6.6099091"
              cy="-180.67697"
              cx="-66.617111"
              style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="4.2065206"
              rx="4.0507231"
              cy="-73.640999"
              cx="-135.42528"
              style="opacity:1;fill:#b3b1b0;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="4.2065206"
              rx="4.0507231"
              cy="-73.796799"
              cx="-121.71519"
              style="opacity:1;fill:#b3b1b0;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="4.2065206"
              rx="4.0507231"
              cy="-73.796799"
              cx="-107.69341"
              style="opacity:1;fill:#b3b1b0;fill-opacity:1;stroke:none;stroke-width:1.95151615;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <ellipse
              ry="43.629311"
              rx="43.739475"
              cy="-139.91585"
              cx="-120.38097"
              style="opacity:1;fill:#c3c2c3;fill-opacity:1;stroke:none;stroke-width:1.77517259;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            />
            <rect
              id="${this.id}"
              y="-180.5804"
              x="-120.168198"
              height="20.26368"
              width="2.7833986"
            />
          </g>
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
    this.dispatchEvent(new CustomEvent('potentiometer-value-changed', { detail: rounded }));
  }
}
