import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pinsFemalePattern } from './patterns/pins-female';
import { analog, ElementPin, i2c, spi, usart } from './pin';

@customElement('wokwi-arduino-mega')
export class ArduinoMegaElement extends LitElement {
  @property() led13 = false;
  @property() ledRX = false;
  @property() ledTX = false;
  @property() ledPower = false;

  readonly pinInfo: ElementPin[] = [
    { name: 'SCL', x: 90, y: 9, signals: [i2c('SCL')] },
    { name: 'SDA', x: 100, y: 9, signals: [i2c('SDA')] },
    { name: 'AREF', x: 109, y: 9, signals: [] },
    { name: 'GND.1', x: 119, y: 9, signals: [{ type: 'power', signal: 'GND' }] },
    { name: '13', x: 129, y: 9, signals: [{ type: 'pwm' }] },
    { name: '12', x: 138, y: 9, signals: [{ type: 'pwm' }] },
    { name: '11', x: 148, y: 9, signals: [{ type: 'pwm' }] },
    { name: '10', x: 157.5, y: 9, signals: [{ type: 'pwm' }] },
    { name: '9', x: 167.5, y: 9, signals: [{ type: 'pwm' }] },
    { name: '8', x: 177, y: 9, signals: [{ type: 'pwm' }] },
    { name: '7', x: 190, y: 9, signals: [{ type: 'pwm' }] },
    { name: '6', x: 200, y: 9, signals: [{ type: 'pwm' }] },
    { name: '5', x: 209.5, y: 9, signals: [{ type: 'pwm' }] },
    { name: '4', x: 219, y: 9, signals: [{ type: 'pwm' }] },
    { name: '3', x: 228.5, y: 9, signals: [{ type: 'pwm' }] },
    { name: '2', x: 238, y: 9, signals: [{ type: 'pwm' }] },
    { name: '1', x: 247.5, y: 9, signals: [usart('TX')] },
    { name: '0', x: 257.5, y: 9, signals: [usart('RX')] },
    { name: '14', x: 270.5, y: 9, signals: [usart('TX', 3)] },
    { name: '15', x: 280, y: 9, signals: [usart('RX', 3)] },
    { name: '16', x: 289.5, y: 9, signals: [usart('TX', 2)] },
    { name: '17', x: 299, y: 9, signals: [usart('RX', 2)] },
    { name: '18', x: 308.5, y: 9, signals: [usart('TX', 1)] },
    { name: '19', x: 318.5, y: 9, signals: [usart('RX', 1)] },
    { name: '20', x: 328, y: 9, signals: [i2c('SDA')] },
    { name: '21', x: 337.5, y: 9, signals: [i2c('SCL')] },

    { name: '5V.1', x: 361, y: 8, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: '5V.2', x: 371, y: 8, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: '22', x: 361, y: 17.5, signals: [] },
    { name: '23', x: 371, y: 17.5, signals: [] },
    { name: '24', x: 361, y: 27.25, signals: [] },
    { name: '25', x: 371, y: 27.25, signals: [] },
    { name: '26', x: 361, y: 36.75, signals: [] },
    { name: '27', x: 371, y: 36.75, signals: [] },
    { name: '28', x: 361, y: 46.25, signals: [] },
    { name: '29', x: 371, y: 46.25, signals: [] },
    { name: '30', x: 361, y: 56, signals: [] },
    { name: '31', x: 371, y: 56, signals: [] },
    { name: '32', x: 361, y: 65.5, signals: [] },
    { name: '33', x: 371, y: 65.5, signals: [] },
    { name: '34', x: 361, y: 75, signals: [] },
    { name: '35', x: 371, y: 75, signals: [] },
    { name: '36', x: 361, y: 84.5, signals: [] },
    { name: '37', x: 371, y: 84.5, signals: [] },
    { name: '38', x: 361, y: 94.25, signals: [] },
    { name: '39', x: 371, y: 94.25, signals: [] },
    { name: '40', x: 361, y: 103.75, signals: [] },
    { name: '41', x: 371, y: 103.75, signals: [] },
    { name: '42', x: 361, y: 113.5, signals: [] },
    { name: '43', x: 371, y: 113.5, signals: [] },
    { name: '44', x: 361, y: 123, signals: [{ type: 'pwm' }] },
    { name: '45', x: 371, y: 123, signals: [{ type: 'pwm' }] },
    { name: '46', x: 361, y: 132.75, signals: [{ type: 'pwm' }] },
    { name: '47', x: 371, y: 132.75, signals: [] },
    { name: '48', x: 361, y: 142.25, signals: [] },
    { name: '49', x: 371, y: 142.25, signals: [] },
    { name: '50', x: 361, y: 152, signals: [spi('MISO')] },
    { name: '51', x: 371, y: 152, signals: [spi('MOSI')] },
    { name: '52', x: 361, y: 161.5, signals: [spi('SCK')] },
    { name: '53', x: 371, y: 161.5, signals: [spi('SS')] },
    { name: 'GND.4', x: 361, y: 171.25, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'GND.5', x: 371, y: 171.25, signals: [{ type: 'power', signal: 'GND' }] },

    { name: 'IOREF', x: 136, y: 184.5, signals: [] },
    { name: 'RESET', x: 145.5, y: 184.5, signals: [] },
    { name: '3.3V', x: 155, y: 184.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
    { name: '5V', x: 164.5, y: 184.5, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: 'GND.2', x: 174.25, y: 184.5, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'GND.3', x: 183.75, y: 184.5, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'VIN', x: 193.5, y: 184.5, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'A0', x: 208.5, y: 184.5, signals: [analog(0)] },
    { name: 'A1', x: 218, y: 184.5, signals: [analog(1)] },
    { name: 'A2', x: 227.5, y: 184.5, signals: [analog(2)] },
    { name: 'A3', x: 237.25, y: 184.5, signals: [analog(3)] },
    { name: 'A4', x: 246.75, y: 184.5, signals: [analog(4)] },
    { name: 'A5', x: 256.25, y: 184.5, signals: [analog(5)] },
    { name: 'A6', x: 266, y: 184.5, signals: [analog(6)] },
    { name: 'A7', x: 275.5, y: 184.5, signals: [analog(7)] },
    { name: 'A8', x: 290.25, y: 184.5, signals: [analog(8)] },
    { name: 'A9', x: 300, y: 184.5, signals: [analog(9)] },
    { name: 'A10', x: 309.5, y: 184.5, signals: [analog(10)] },
    { name: 'A11', x: 319.25, y: 184.5, signals: [analog(11)] },
    { name: 'A12', x: 328.75, y: 184.5, signals: [analog(12)] },
    { name: 'A13', x: 338.5, y: 184.5, signals: [analog(13)] },
    { name: 'A14', x: 348, y: 184.5, signals: [analog(14)] },
    { name: 'A15', x: 357.75, y: 184.5, signals: [analog(15)] },
  ];

  static get styles() {
    return css`
      text {
        font-size: 2px;
        font-family: monospace;
      }
    `;
  }

  render() {
    const { ledPower, led13, ledRX, ledTX } = this;
    return html`
      <svg
        width="102.66mm"
        height="50.80mm"
        version="1.1"
        viewBox="-4 0 102.66 50.80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pinsFemalePattern}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <!-- PCB -->
        <path
          d="M2.105.075v50.653h94.068v-1.206l2.412-2.412V14.548l-2.412-2.413V2.487L93.785.075zm14.443.907a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.505 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0116.548.982zm71.154 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.505 1.505 1.505 0 01-1.505 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0187.702.982zM64.818 15.454a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm0 26.532a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm-49.476 4.825a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.504 1.505 1.505 0 01-1.506 1.506 1.505 1.505 0 01-1.505-1.506 1.505 1.505 0 011.476-1.504zm78.39 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.504 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506 1.505 1.505 0 011.476-1.504z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black" transform="translate(0 -4)">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(18.4 1.07)">
          <rect width="${0.38 + 2.54 * 10}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.81 1.07)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(66 1.07)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(27.93 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.63 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(71.34 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(90.1 0.8)">
          <rect width="${0.38 + 2.54 * 2}" height="${2.54 * 18}" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <rect x="43" y="17.55" fill="#000" width="13.5" height="13.5" rx="0.5" />

        <!-- Programming Headers -->
        <g transform="translate(61.5 21.09)">
          <rect width="4.80" height="7" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(72.20 15.58)">
          <use xlink:href="#led-body" />
          ${ledPower &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="68" y="16.75">PWR</tspan>
        </text>

        <g transform="translate(26 13.86)">
          <use xlink:href="#led-body" />
          ${led13 &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 18.52)">
          <use xlink:href="#led-body" />
          ${ledTX &&
          svg`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 20.75)">
          <use xlink:href="#led-body" />
          ${ledRX &&
          svg`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="29.4" y="15">L</tspan>
          <tspan x="29.4" y="19.8">TX</tspan>
          <tspan x="29.4" y="22">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="7.6" width="31.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.8">PWM</tspan>
        </text>

        <rect x="60.5" y="11.8" width="25.4" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="65" y="14.2">COMMUNICATION</tspan>
        </text>

        <text
          transform="translate(22.6 3.4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">11</tspan>
          <tspan x="0" dy="2.54">10</tspan>
          <tspan x="0" dy="2.54">9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">6</tspan>
          <tspan x="0" dy="2.54">5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→ 1</tspan>
          <tspan x="0" dy="2.54">RX← 0</tspan>
          <tspan x="0" dy="3.34">TX3 14</tspan>
          <tspan x="0" dy="2.54">RX3 15</tspan>
          <tspan x="0" dy="2.54">TX2 16</tspan>
          <tspan x="0" dy="2.54">RX2 17</tspan>
          <tspan x="0" dy="2.54">TX1 18</tspan>
          <tspan x="0" dy="2.54">RX1 19</tspan>
          <tspan x="0" dy="2.54">SDA 20</tspan>
          <tspan x="0" dy="2.54">SCL 21</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="36" y="41.46" width="12.44" height="0.16" fill="#fff"></rect>
        <rect x="50" y="41.46" width="39" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="39" y="40.96">POWER</tspan>
          <tspan x="65" y="40.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(30.19 47) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="3.74">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">A6</tspan>
          <tspan x="0" dy="2.54">A7</tspan>
          <tspan x="0" dy="3.74">A8</tspan>
          <tspan x="0" dy="2.54">A9</tspan>
          <tspan x="0" dy="2.54">A10</tspan>
          <tspan x="0" dy="2.54">A11</tspan>
          <tspan x="0" dy="2.54">A12</tspan>
          <tspan x="0" dy="2.54">A13</tspan>
          <tspan x="0" dy="1.84">A14</tspan>
          <tspan x="0" dy="1.84">A15</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <text x="51.85" y="36" style="font-size:4px;font-weight:bold;line-height:1.25;fill:#fff">
          Arduino MEGA
        </text>
      </svg>
    `;
  }
}
