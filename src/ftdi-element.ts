import { html, LitElement, svg } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementPin, GND, VCC } from './pin';

@customElement('wokwi-ftdi')
export class FTDIElement extends LitElement {
  readonly pinInfo: ElementPin[] = [
    { name: 'GND', y: 9, x: 9, number: 1, signals: [GND()] },
    { name: 'CTS', y: 18, x: 9, number: 2, signals: [] },
    { name: 'VCC', y: 27, x: 9, number: 3, signals: [VCC()] },
    { name: 'TX', y: 36, x: 9, number: 4, signals: [] },
    { name: 'TX', y: 45, x: 9, number: 5, signals: [] },
    { name: 'RTS', y: 55, x: 9, number: 6, signals: [] },
  ];

  render() {
    return html`
      <svg
        width="30mm"
        height="17mm"
        version="1.1"
        viewBox="0 0 301 174"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <style>
          text {
            user-select: none;
          }
        </style>
        <defs>
          <path
            id="d"
            d="m0 0h300v174h-300v-174zm21.5 32c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm1 50c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm0 24c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm0 25c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm0 25c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm0-99c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8z"
          />
          <linearGradient id="a" x1="50%" x2="50%" y2="100%">
            <stop stop-color="#BFD5DE" offset="0" />
            <stop stop-color="#71787F" offset="1" />
          </linearGradient>
          <radialGradient id="c">
            <stop stop-color="#36404D" offset="0" />
            <stop stop-color="#101B28" offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="b" fill="white">
            <use xlink:href="#d" />
          </mask>
          <rect width="295" height="174" fill="#003C74" mask="url(#b)" />
          <g mask="url(#b)" stroke="#A89978" stroke-width="3">
            <g transform="translate(12 15)">
              <ellipse cx="9.5" cy="9" rx="9.5" ry="9" />
              <ellipse cx="10.5" cy="34" rx="9.5" ry="9" />
              <ellipse cx="10.5" cy="59" rx="9.5" ry="9" />
              <ellipse cx="10.5" cy="83" rx="9.5" ry="9" />
              <ellipse cx="10.5" cy="108" rx="9.5" ry="9" />
              <ellipse cx="10.5" cy="133" rx="9.5" ry="9" />
            </g>
          </g>
          <g font-family="ArialMT, Arial" mask="url(#b)">
            <g transform="translate(14)">
              <text font-size="12">
                <tspan x="23" y="28" fill="#F6F6F6">GND</tspan>
                <tspan x="23" y="53" fill="#F6F6F6">CTS</tspan>
                <tspan x="23" y="78" fill="#F6F6F6">VCC</tspan>
                <tspan x="23" y="102" fill="#F6F6F6">TX</tspan>
                <tspan x="23" y="127" fill="#F6F6F6">RX</tspan>
                <tspan x="23" y="152" fill="#F6F6F6">RTS</tspan>
                <tspan x="0.163085938" y="169" fill="#F6F6F6">GREEN</tspan>
                <tspan x="0.82421875" y="11" fill="#F6F6F6">BLACK</tspan>
              </text>
              <text font-size="14">
                <tspan x="70" y="16" fill="#F6F6F6">FTDI Friend</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(91 45)">
              <rect x="6" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="12" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="18" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="25" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="31" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="37" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="44" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="50" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="56" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="63" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="69" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="75" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="82" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="88" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect x="6" width="4" height="17" rx="2" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(8 74.5) scale(1 -1) translate(-8 -74.5)"
                x="6"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(14 74.5) scale(1 -1) translate(-14 -74.5)"
                x="12"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(21 74.5) scale(1 -1) translate(-21 -74.5)"
                x="19"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(27 74.5) scale(1 -1) translate(-27 -74.5)"
                x="25"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(33 74.5) scale(1 -1) translate(-33 -74.5)"
                x="31"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(40 74.5) scale(1 -1) translate(-40 -74.5)"
                x="38"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(46 74.5) scale(1 -1) translate(-46 -74.5)"
                x="44"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(52 74.5) scale(1 -1) translate(-52 -74.5)"
                x="50"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(58 74.5) scale(1 -1) translate(-58 -74.5)"
                x="56"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(65 74.5) scale(1 -1) translate(-65 -74.5)"
                x="63"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(71 74.5) scale(1 -1) translate(-71 -74.5)"
                x="69"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(78 74.5) scale(1 -1) translate(-78 -74.5)"
                x="76"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(84 74.5) scale(1 -1) translate(-84 -74.5)"
                x="82"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(90 74.5) scale(1 -1) translate(-90 -74.5)"
                x="88"
                y="66"
                width="4"
                height="17"
                rx="2"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                x="2"
                y="17"
                width="94"
                height="48"
                fill="#333D4B"
                fill-rule="evenodd"
                stroke="#0A1722"
                stroke-width="4"
              />
              <text
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="33.1660156" y="34" fill="#545352">=FTDI</tspan>
              </text>
              <circle
                cx="13.5"
                cy="55.5"
                r="4.5"
                fill="url(#c)"
                fill-rule="evenodd"
                stroke="#000"
                stroke-opacity=".26559"
              />
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(200 27)">
              <rect x="4" y="2" width="25" height="18" fill="#C8D0DB" fill-rule="evenodd" />
              <rect x="52" width="37" height="18" fill="#C8D0DB" fill-rule="evenodd" />
              <rect x="52" y="92" width="37" height="18" fill="#C8D0DB" fill-rule="evenodd" />
              <rect y="37" width="10" height="4" fill="#C2D2DC" fill-rule="evenodd" />
              <rect y="45" width="10" height="4" fill="#C2D2DC" fill-rule="evenodd" />
              <rect y="53" width="10" height="4" fill="#C2D2DC" fill-rule="evenodd" />
              <rect y="61" width="10" height="4" fill="#C2D2DC" fill-rule="evenodd" />
              <rect y="69" width="10" height="4" fill="#C2D2DC" fill-rule="evenodd" />
              <rect x="52" y="89" width="37" height="18" fill="none" />
              <rect x="6" y="89" width="25" height="18" fill="#C8D0DB" fill-rule="evenodd" />
              <rect
                x="10.5"
                y="18.5"
                width="90"
                height="74"
                rx="8"
                fill="#808285"
                fill-rule="evenodd"
                stroke="#979797"
              />
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(137 143)">
              <rect width="33" height="12" fill="#8D9BA1" />
              <rect x="6" width="21" height="12" rx="6" fill="#F8E71C" />
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(176 143)">
              <rect width="33" height="12" fill="#8D9BA1" />
              <rect x="6" width="21" height="12" rx="6" fill="#F8E71C" />
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}
