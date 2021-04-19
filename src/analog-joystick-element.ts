import { css, customElement, html, LitElement, property } from 'lit-element';
import { analog, ElementPin, GND, VCC } from './pin';
import { SPACE_KEYS } from './utils/keys';

@customElement('wokwi-analog-joystick')
export class AnalogJoystickElement extends LitElement {
  @property({ type: Number }) xValue = 0;
  @property({ type: Number }) yValue = 0;
  @property() pressed = false;

  readonly pinInfo: ElementPin[] = [
    { name: 'VCC', x: 33, y: 115.8, signals: [VCC()] },
    { name: 'VERT', x: 42.6012, y: 115.8, signals: [analog(0)] },
    { name: 'HORZ', x: 52.2024, y: 115.8, signals: [analog(1)] },
    { name: 'SEL', x: 61.8036, y: 115.8, signals: [] },
    { name: 'GND', x: 71.4048, y: 115.8, signals: [GND()] },
  ];

  static get styles() {
    return css`
      #knob {
        transition: transform 0.3s;
      }

      #knob:hover {
        fill: #222;
      }

      #knob:focus {
        outline: none;
        stroke: #4d90fe;
        stroke-width: 0.5;
      }

      .controls {
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      #knob:hover ~ .controls {
        opacity: 1;
      }

      .controls:hover {
        opacity: 1;
      }

      .controls path {
        pointer-events: none;
      }

      .controls .region {
        pointer-events: bounding-box;
        fill: none;
      }

      .controls .region:hover + path {
        fill: #fff;
      }

      .controls circle:hover {
        stroke: #fff;
      }

      .controls circle.pressed {
        fill: #fff;
      }
    `;
  }

  render() {
    const { xValue, yValue } = this;
    return html`
      <svg
        width="27.2mm"
        height="31.8mm"
        viewBox="0 0 27.2 31.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noise" primitiveUnits="objectBoundingBox">
            <feTurbulence baseFrequency="2 2" type="fractalNoise" />
            <feColorMatrix
              values=".1 0 0 0 .1
                      .1 0 0 0 .1
                      .1 0 0 0 .1
                      0 0 0 0 1"
            />
            <feComposite in2="SourceGraphic" operator="lighter" />
            <feComposite result="body" in2="SourceAlpha" operator="in" />
          </filter>
          <radialGradient id="g-knob" cx="13.6" cy="13.6" r="10.6" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="0.9" />
            <stop stop-color="#777" offset="1" />
          </radialGradient>
          <radialGradient
            id="g-knob-base"
            cx="13.6"
            cy="13.6"
            r="13.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#444" offset=".8" />
            <stop stop-color="#555" offset=".9" />
            <stop offset="1" />
          </radialGradient>
          <path
            id="pin"
            fill="silver"
            stroke="#a2a2a2"
            stroke-width=".024"
            d="M8.726 29.801a.828.828 0 00-.828.829.828.828 0 00.828.828.828.828 0 00.829-.828.828.828 0 00-.829-.829zm-.004.34a.49.49 0 01.004 0 .49.49 0 01.49.489.49.49 0 01-.49.49.49.49 0 01-.489-.49.49.49 0 01.485-.49z"
          />
        </defs>
        <path
          d="M1.3 0v31.7h25.5V0zm2.33.683a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.5 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-20.5 26.8a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.4 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-12.7 2.66a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.57 0a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.49.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm-7.62.007a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488zm10.2.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488z"
          fill="#bd1e34"
        />
        <g
          fill="#fff"
          font-family="sans-serif"
          text-anchor="middle"
          stroke-width=".03"
          font-size="1.2"
        >
          <text letter-spacing=".053">
            <tspan x="4.034" y="25.643">Analog</tspan>
            <tspan x="4.061" y="27.159">Joystick</tspan>
          </text>
          <text transform="rotate(-90)" text-anchor="start" font-size="1.2">
            <tspan x="-29.2" y="9.2">VCC</tspan>
            <tspan x="-29.2" y="11.74">VERT</tspan>
            <tspan x="-29.2" y="14.28">HORZ</tspan>
            <tspan x="-29.2" y="16.82">SEL</tspan>
            <tspan x="-29.2" y="19.36">GND</tspan>
          </text>
        </g>
        <ellipse cx="13.6" cy="13.7" rx="13.6" ry="13.7" fill="url(#g-knob-base)" />
        <path
          d="M48.2 65.5s.042.179-.093.204c-.094.017-.246-.077-.322-.17-.094-.115-.082-.205-.009-.285.11-.122.299-.075.299-.075s-.345-.303-.705-.054c-.32.22-.228.52.06.783.262.237.053.497-.21.463-.18-.023-.252-.167-.21-.256.038-.076.167-.122.167-.122s-.149-.06-.324.005c-.157.06-.286.19-.276.513v1.51s.162-.2.352-.403c.214-.229.311-.384.53-.366.415.026.714-.159.918-.454.391-.569.085-1.2-.178-1.29"
          fill="#fff"
        />
        <circle
          id="knob"
          cx="13.6"
          cy="13.6"
          transform="translate(${2.5 * -xValue}, ${2.5 * -yValue})"
          r="10.6"
          fill="url(#g-knob)"
          filter="url(#noise)"
          tabindex="0"
          @keyup=${(e: KeyboardEvent) => this.keyup(e)}
          @keydown=${(e: KeyboardEvent) => this.keydown(e)}
        />
        <g fill="none" stroke="#fff" stroke-width=".142">
          <path
            d="M7.8 31.7l-.383-.351v-1.31l.617-.656h1.19l.721.656.675-.656h1.18l.708.656.662-.656h1.25l.643.656.63-.656h1.21l.695.656.636-.656h1.17l.753.656v1.3l-.416.39"
          />
          <path
            d="M9.5 31.7l.381-.344.381.331M12.1 31.7l.381-.344.381.331M14.7 31.7l.381-.344.381.331M17.2 31.7l.381-.344.381.331"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </g>
        <g class="controls" stroke-width="0.6" stroke-linejoin="bevel" fill="#aaa">
          <rect
            class="region"
            y="8.5"
            x="1"
            height="10"
            width="7"
            @mousedown=${() => this.mousedown(1, 0)}
            @mouseup=${() => this.mouseup(true, false)}
          />
          <path d="m 7.022,11.459 -3.202,2.497 3.202,2.497" />

          <rect
            class="region"
            y="1.38"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${() => this.mousedown(0, 1)}
            @mouseup=${() => this.mouseup(false, true)}
          />
          <path d="m 16.615,7.095 -2.497,-3.202 -2.497,3.202" />

          <rect
            class="region"
            y="8.5"
            x="18"
            height="10"
            width="7"
            @mousedown=${() => this.mousedown(-1, 0)}
            @mouseup=${() => this.mouseup(true, false)}
          />
          <path d="m 19.980,16.101 3.202,-2.497 -3.202,-2.497" />

          <rect
            class="region"
            y="17"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${() => this.mousedown(0, -1)}
            @mouseup=${() => this.mouseup(false, true)}
          />
          <path d="m 11.620,20.112 2.497,3.202 2.497,-3.202" />

          <circle
            cx="13.6"
            cy="13.6"
            r="3"
            stroke="#aaa"
            class=${this.pressed ? 'pressed' : ''}
            @mousedown=${() => this.press()}
            @mouseup=${() => this.release()}
          />
        </g>
        <use xlink:href="#pin" x="0" />
        <use xlink:href="#pin" x="2.54" />
        <use xlink:href="#pin" x="5.08" />
        <use xlink:href="#pin" x="7.62" />
        <use xlink:href="#pin" x="10.16" />
      </svg>
    `;
  }

  private keydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        this.yValue = 1;
        this.valueChanged();
        break;
      case 'ArrowDown':
        this.yValue = -1;
        this.valueChanged();
        break;
      case 'ArrowLeft':
        this.xValue = 1;
        this.valueChanged();
        break;
      case 'ArrowRight':
        this.xValue = -1;
        this.valueChanged();
        break;
    }
    if (SPACE_KEYS.includes(e.key)) {
      this.pressed = true;
      this.valueChanged();
    }
  }

  private keyup(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        this.yValue = 0;
        this.valueChanged();
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        this.xValue = 0;
        this.valueChanged();
        break;
    }
    if (SPACE_KEYS.includes(e.key)) {
      this.pressed = false;
      this.valueChanged();
    }
  }

  private mousedown(dx: number, dy: number) {
    if (dx) {
      this.xValue = dx;
    }
    if (dy) {
      this.yValue = dy;
    }
    this.valueChanged();
  }

  private mouseup(x: boolean, y: boolean) {
    if (x) {
      this.xValue = 0;
    }
    if (y) {
      this.yValue = 0;
    }
    this.valueChanged();
  }

  private press() {
    this.pressed = true;
    this.dispatchEvent(new InputEvent('button-press'));
  }

  private release() {
    this.pressed = false;
    this.dispatchEvent(new InputEvent('button-release'));
  }

  private valueChanged() {
    this.dispatchEvent(new InputEvent('input'));
  }
}
