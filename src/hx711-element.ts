import { html, LitElement, svg } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementPin, GND, VCC } from './pin';

@customElement('wokwi-hx711')
export class HX711Element extends LitElement {
  readonly pinInfo: ElementPin[] = [
    { name: 'VDD', y: 53, x: 109, number: 1, signals: [VCC()] },
    { name: 'DOUT', y: 35, x: 109, number: 2, signals: [] },
    { name: 'SCK', y: 44, x: 109, number: 3, signals: [] },
    { name: 'GND', y: 26, x: 109, number: 4, signals: [GND()] },
  ];

  render() {
    return html`
      <svg
        width="34mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 340 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="e"
            d="m45 77c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-120c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm244 71c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-49c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-0.5 115c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm0-156c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm-288.5-34h340v200h-340v-200z"
          />
          <path id="c" d="m0 0h340v200h-340v-200z" />
          <mask id="f" x="0" y="0" width="340" height="200" fill="white">
            <use xlink:href="#c" />
          </mask>
          <linearGradient id="a" y1="50%" y2="50%">
            <stop stop-color="#767676" offset="0" />
            <stop stop-color="#FFFEDF" offset="1" />
          </linearGradient>
          <radialGradient id="d" r="37.794%">
            <stop stop-color="#fff" offset="0" />
            <stop offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="b" fill="white">
            <use xlink:href="#e" />
          </mask>
          <g
            fill="#1C8944"
            mask="url(#b)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity=".53643"
            stroke-width="4"
          >
            <use mask="url(#f)" xlink:href="#c" />
          </g>
          <g fill="#D2CDC3" mask="url(#b)">
            <g transform="translate(36 37)">
              <rect x="244" y="22" width="17" height="18" />
              <rect width="17" height="18" />
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(7 30)">
              <rect x="25" y="1" width="26" height="147" stroke="#fff" stroke-width="2" />
              <rect x="270" y="22" width="25" height="102" stroke="#fff" stroke-width="2" />
              <text
                font-family="Arial-BoldItalicMT, Arial"
                font-size="16"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="0.05859375" y="69" fill="#FBFBFB">A-</tspan>
                <tspan x="0.4921875" y="18" fill="#FBFBFB">E+</tspan>
                <tspan x="297.444824" y="42" fill="#FBFBFB">GND</tspan>
                <tspan x="297.168945" y="66" fill="#FBFBFB">DT</tspan>
                <tspan x="297.220703" y="91" fill="#FBFBFB">SCK</tspan>
                <tspan x="297.220703" y="116" fill="#FBFBFB">VCC</tspan>
                <tspan x="0.05078125" y="94" fill="#FBFBFB">A+</tspan>
                <tspan x="0.05859375" y="117" fill="#FBFBFB">B-</tspan>
                <tspan x="0.05078125" y="140" fill="#FBFBFB">B+</tspan>
                <tspan x="0" y="45" fill="#FBFBFB">E-</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(122 28)">
              <rect
                x="14.5"
                y=".5"
                width="36"
                height="98"
                fill="#434341"
                fill-rule="evenodd"
                stroke="#3B3939"
              />
              <rect x="51" y="2" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="15" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="27" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="40" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="52" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="65" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="77" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="90" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(7 5) scale(-1 1) translate(-7 -5)"
                y="2"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 18) scale(-1 1) translate(-7 -18)"
                y="15"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 31) scale(-1 1) translate(-7 -31)"
                y="28"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 43) scale(-1 1) translate(-7 -43)"
                y="40"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 56) scale(-1 1) translate(-7 -56)"
                y="53"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 68) scale(-1 1) translate(-7 -68)"
                y="65"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 80) scale(-1 1) translate(-7 -80)"
                y="77"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 93) scale(-1 1) translate(-7 -93)"
                y="90"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <circle cx="20" cy="5" r="3" fill="url(#d)" fill-rule="evenodd" stroke="#000" />
              <text
                transform="translate(27 52) rotate(-90) translate(-27 -52)"
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="9.09960938" y="56" fill="#BBBBBB">HX711</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}
