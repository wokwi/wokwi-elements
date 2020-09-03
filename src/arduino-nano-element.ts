import { customElement, html, LitElement, property, svg } from 'lit-element';
import { analog, ElementPin, i2c, spi, usart } from './pin';

@customElement('wokwi-arduino-nano')
export class ArduinoNanoElement extends LitElement {
  @property() led13 = false;
  @property() ledRX = false;
  @property() ledTX = false;
  @property() ledPower = false;
  @property() resetButton = false;

  readonly pinInfo: ElementPin[] = [
    // bottom row
    { name: '13', x: 3.67, y: 16.34, signals: [spi('SCK')] },
    { name: '3.3V', x: 6.21, y: 16.34, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
    { name: 'AREF', x: 8.75, y: 16.34, signals: [] },
    { name: 'A0', x: 11.29, y: 16.34, signals: [analog(0)] },
    { name: 'A1', x: 13.83, y: 16.34, signals: [analog(1)] },
    { name: 'A2', x: 16.37, y: 16.34, signals: [analog(2)] },
    { name: 'A3', x: 18.91, y: 16.34, signals: [analog(3)] },
    { name: 'A4', x: 21.45, y: 16.34, signals: [analog(4), i2c('SCL')] },
    { name: 'A5', x: 23.99, y: 16.34, signals: [analog(5), i2c('SDA')] },
    { name: 'A6', x: 26.53, y: 16.34, signals: [analog(6)] },
    { name: 'A7', x: 29.07, y: 16.34, signals: [analog(7)] },
    { name: '5V.1', x: 31.61, y: 16.34, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: 'RESET.1', x: 34.15, y: 16.34, signals: [] }, // TODO: attach signal
    { name: 'GND.1', x: 36.69, y: 16.34, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'VIN', x: 39.23, y: 16.34, signals: [{ type: 'power', signal: 'VCC' }] },
    // top row
    { name: '12', x: 3.67, y: 1.15, signals: [spi('MISO')] },
    { name: '11', x: 6.21, y: 1.15, signals: [spi('MOSI'), { type: 'pwm' }] },
    { name: '10', x: 8.75, y: 1.15, signals: [spi('SS'), { type: 'pwm' }] },
    { name: '9', x: 11.29, y: 1.15, signals: [{ type: 'pwm' }] },
    { name: '8', x: 13.83, y: 1.15, signals: [] },
    { name: '7', x: 16.37, y: 1.15, signals: [] },
    { name: '6', x: 18.91, y: 1.15, signals: [{ type: 'pwm' }] },
    { name: '5', x: 21.45, y: 1.15, signals: [{ type: 'pwm' }] },
    { name: '4', x: 23.99, y: 1.15, signals: [] },
    { name: '3', x: 26.53, y: 1.15, signals: [{ type: 'pwm' }] },
    { name: '2', x: 29.07, y: 1.15, signals: [] },
    { name: 'GND.2', x: 31.61, y: 1.15, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'RESET.2', x: 34.15, y: 1.15, signals: [] }, // TODO attach signal
    { name: '1', x: 36.69, y: 1.15, signals: [usart('TX')] },
    { name: '0', x: 39.23, y: 1.15, signals: [usart('RX')] },
    // programming header
    { name: '12.2', x: 41.7, y: 11.27, signals: [spi('MISO')] },
    { name: '5V.2', x: 39.16, y: 11.27, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: '13.2', x: 41.7, y: 8.73, signals: [spi('SCK')] },
    { name: '11.2', x: 39.16, y: 8.73, signals: [spi('MOSI'), { type: 'pwm' }] },
    { name: 'RESET.3', x: 41.7, y: 6.19, signals: [] }, // TODO attach signal
    { name: 'GND.3', x: 39.16, y: 6.19, signals: [{ type: 'power', signal: 'GND' }] },
  ];

  render() {
    const { ledPower, led13, ledRX, ledTX, resetButton } = this;
    return html`
      <svg
        width="44.9mm"
        height="17.8mm"
        version="1.1"
        viewBox="-1.4 0 44.9 17.8"
        style="font-size: 1px; font-family: monospace; font-weight: bold"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="3" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1="0.6"
              k2="0.6"
              k3="1.2"
              k4="0.25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height="0.5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height="0.2" y="0.17" filter="url(#solderPlate)" />
          </pattern>
          <pattern id="pins-pth" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r="0.750" cx="1.27" cy="1.27" style="fill:#323232" filter="url(#solderPlate)" />
            <circle r="0.375" cx="1.27" cy="1.27" style="fill:#ffffff" />
          </pattern>
          <pattern id="pins-gold-pth" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r="0.750" cx="1.27" cy="1.27" style="fill:#484800" filter="url(#solderPlate)" />
            <circle r="0.375" cx="1.27" cy="1.27" style="fill:#ffffff" />
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        <!-- PCB -->
        <g id="pcb" style="fill:#fff">
          <rect width="43.5" height="17.8" x="0" y="0" style="fill:#1b7e84" />
          <circle cx="1.00" cy="1.00" r="0.889" />
          <circle cx="42.42" cy="1.00" r="0.889" />
          <circle cx="42.42" cy="16.6" r="0.889" />
          <circle cx="1.00" cy="16.6" r="0.889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" style="fill:#fff">
          <rect id="gnd-box1" x="30.60" y="0.000" width="2.59" height="3.56" />
          <rect id="gnd-box2" x="35.60" y="14.23" width="2.59" height="3.56" />
          <text style="fill: #1b7e84">
            <tspan x="30.93" y="3.28">GND</tspan>
            <tspan x="36.00" y="15.08">GND</tspan>
          </text>
          <text>
            <tspan x="2.93" y="3.28">D12</tspan>
            <tspan x="5.47" y="3.28">D11</tspan>
            <tspan x="8.00" y="3.28">D10</tspan>
            <tspan x="10.87" y="3.28">D9</tspan>
            <tspan x="13.41" y="3.28">D8</tspan>
            <tspan x="15.95" y="3.28">D7</tspan>
            <tspan x="18.50" y="3.28">D6</tspan>
            <tspan x="21.03" y="3.28">D5</tspan>
            <tspan x="23.57" y="3.28">D4</tspan>
            <tspan x="26.11" y="3.28">D3</tspan>
            <tspan x="28.65" y="3.28">D2</tspan>
            <tspan x="33.48" y="3.28">RST</tspan>
            <tspan x="36.00" y="4.39">RX0</tspan>
            <tspan x="38.50" y="4.39">TX0</tspan>
            <tspan x="2.93" y="15.08">D13</tspan>
            <tspan x="5.47" y="15.08">3V3</tspan>
            <tspan x="7.81" y="15.08">AREF</tspan>
            <tspan x="10.87" y="15.08">A0</tspan>
            <tspan x="13.41" y="15.08">A1</tspan>
            <tspan x="15.95" y="15.08">A2</tspan>
            <tspan x="18.50" y="15.08">A3</tspan>
            <tspan x="21.03" y="15.08">A4</tspan>
            <tspan x="23.57" y="15.08">A5</tspan>
            <tspan x="26.11" y="15.08">A6</tspan>
            <tspan x="28.65" y="15.08">A7</tspan>
            <tspan x="31.14" y="15.08">5V</tspan>
            <tspan x="33.43" y="15.08">RST</tspan>
            <tspan x="38.51" y="15.08">VIN</tspan>
          </text>
          <text style="font-size: 1.75px">
            <tspan x="36.5" y="3.25">↓</tspan>
            <tspan x="38.9" y="3.25">↑</tspan>
          </text>
          <text transform="rotate(90)" style="font-size: 1.75px">
            <tspan x="3.88" y="-31.4">↓</tspan>
            <tspan x="6.78" y="-31.4">↑</tspan>
          </text>
          <text transform="rotate(90)">
            <tspan x="7.13" y="-22.31">RESET</tspan>
            <tspan x="3.75" y="-32.5">TX</tspan>
            <tspan x="6.65" y="-32.5">RX</tspan>
            <tspan x="9.73" y="-31.4">ON</tspan>
            <tspan x="12.88" y="-31.4">L</tspan>
          </text>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins">
          <pattern id="pins-row1" patternTransform="translate(.076 -.2)" xlink:href="#pins-pth" />
          <pattern id="pins-row2" patternTransform="translate(.076 .2)" xlink:href="#pins-pth" />
          <rect x="2.9" y=".29" width="${15 * 2.54}" height="2.54" fill="url(#pins-row1)" />
          <rect x="2.9" y="15.52" width="${15 * 2.54}" height="2.54" fill="url(#pins-row2)" />
        </g>

        <!-- Programming Header -->
        <g id="pgm-header" fill="url(#pins-pth)">
          <rect x="38.1" y="5.09" width="${2 * 2.54}" height="${3 * 2.54}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" style="paint-order:stroke fill markers" stroke-width=".1">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".4" y="3.8" width="1.6" height="1.6" />
            <rect x="5.5" y="3.8" width="1.6" height="1.6" />
            <rect x="5.5" y="12" width="1.6" height="1.6" />
            <rect x=".4" y="12" width="1.6" height="1.6" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.2" y="5.1" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#000">
            <path d="m-0.62 7.6 4.3 0.3" stroke-linecap="round" stroke-width=".26px" />
            <path d="m-0.62 9.7 4.3-0.26" stroke-linecap="round" stroke-width=".26px" />
            <path d="m3.3 7.9v1.5" stroke-width="1" />
            <path d="m6 6.4v4.5" stroke-linecap="round" stroke-width=".35" />
            <path d="m-0.7 5.9h3.3" stroke-linecap="round" stroke-width=".29px" />
            <path d="m-0.7 6.8h3.3" stroke-linecap="round" stroke-width=".27px" />
            <path d="m-0.7 5.9v0.9" stroke-width=".27" />
            <path d="m-0.7 6.8h3.3" stroke-linecap="round" stroke-width=".27px" />
            <path d="m-0.7 10.5h3.3" stroke-linecap="round" stroke-width=".29px" />
            <path d="m-0.7 11.4h3.3" stroke-linecap="round" stroke-width=".27px" />
            <path d="m-0.7 10.5v0.9" stroke-width=".27" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.69 3.92)">
          <use xlink:href="#led-body" />
          ${ledTX &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(27.69 6.87)">
          <use xlink:href="#led-body" />
          ${ledRX &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(27.69 9.87)">
          <use xlink:href="#led-body" />
          ${ledPower &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(27.69 12.72)">
          <use xlink:href="#led-body" />
          ${led13 &&
          svg`<circle cx="1.3" cy="0.55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <!-- TODO: WIP -->
        <g style="paint-order:stroke fill markers">
          <g filter="url(#solderPlate)" fill="#333">
            <rect x="24.3" y="6.361" width="1" height=".6665" />
            <rect x="24.3" y="10.41" width="1" height=".6665" />
          </g>
          <rect x="23.54" y="6.805" width="2.54" height="3.81" fill="#c4c4c4" />
          <ellipse cx="24.83" cy="8.678" rx="1" ry="1" fill="#fffbe1" />
        </g>
      </svg>
    `;
  }
}
