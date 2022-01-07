import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin, GND, VCC } from './pin';

@customElement('wokwi-hx711')
export class Hx711Element extends LitElement {
  @property() value = 0;

  readonly pinInfo: ElementPin[] = [
    { name: 'VDD', y: 53, x: 109, number: 1, signals: [VCC()] },
    { name: 'DOUT', y: 35, x: 109, number: 2, signals: [] },
    { name: 'SCK', y: 44, x: 109, number: 3, signals: [] },
    { name: 'GND', y: 26, x: 109, number: 4, signals: [GND()] },
  ];

  render() {
    return html`
      <?xml version="1.0" encoding="UTF-8"?>
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }
      </style>
      <svg
        width="34mm"
        height="20mm"
        viewBox="0 0 340 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>HX711</title>
        <defs>
          <radialGradient
            cx="45.4232183%"
            cy="37.4460791%"
            fx="45.4232183%"
            fy="37.4460791%"
            r="71.4089358%"
            gradientTransform="translate(0.454232,0.374461),scale(0.588235,1.000000),rotate(88.619767),translate(-0.454232,-0.374461)"
            id="radialGradient-1"
          >
            <stop stop-color="#3FA35A" offset="0%"></stop>
            <stop stop-color="#216B34" offset="100%"></stop>
          </radialGradient>
          <path d="M0,0 L340,0 L340,200 L0,200 L0,0 Z" id="path-2"></path>
          <mask
            id="mask-3"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
            x="0"
            y="0"
            width="340"
            height="200"
            fill="white"
          >
            <use xlink:href="#path-2"></use>
          </mask>
          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-4">
            <stop stop-color="#767676" offset="0%"></stop>
            <stop stop-color="#FFFEDF" offset="100%"></stop>
          </linearGradient>
          <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="37.7940956%" id="radialGradient-5">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#000000" offset="100%"></stop>
          </radialGradient>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="board"
            fill="url(#radialGradient-1)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity="0.536433565"
            stroke-width="4"
          >
            <use mask="url(#mask-3)" xlink:href="#path-2"></use>
          </g>
          <g
            id="copper"
            transform="translate(46.000000, 44.000000)"
            stroke="#44E06D"
            stroke-linecap="round"
            stroke-width="6"
          >
            <path d="M143.5,1.5 L203.5,1.5" id="Line"></path>
            <path d="M205,3 L240,24" id="Line"></path>
            <path d="M142.5,51.5 L202.5,51.5" id="Line"></path>
            <path d="M16.5,63.5 L76.5,63.5" id="Line"></path>
            <path d="M48.5,126.5 L189,126.5" id="Line"></path>
            <path d="M48.5,137.5 L189,137.5" id="Line"></path>
            <path d="M16.5,63.5 L0,51" id="Line"></path>
            <path d="M204,53 L239,74" id="Line"></path>
            <path d="M143.5,39.5 L203.5,39.5" id="Line"></path>
            <path d="M205,40 L235,48" id="Line"></path>
          </g>
          <g id="board_io" transform="translate(36.000000, 37.000000)">
            <rect id="Rectangle" fill="#D2CDC3" x="244" y="22" width="17" height="18"></rect>
            <rect id="Rectangle" fill="#D2CDC3" x="0" y="0" width="17" height="18"></rect>
            <circle
              id="e_minus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="33"
              r="7"
            ></circle>
            <circle
              id="a_minus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="58"
              r="7"
            ></circle>
            <circle
              id="a_plus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="82"
              r="7"
            ></circle>
            <circle
              id="b_minus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="105"
              r="7"
            ></circle>
            <circle
              id="b_plus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="129"
              r="7"
            ></circle>
            <circle
              id="e_plus_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="9"
              cy="9"
              r="7"
            ></circle>
            <circle
              id="sck_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="253"
              cy="80"
              r="7"
            ></circle>
            <circle
              id="vcc_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="253"
              cy="104"
              r="7"
            ></circle>
            <circle
              id="dt_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="253"
              cy="55"
              r="7"
            ></circle>
            <circle
              id="gnd_pin"
              stroke="#CCCCCC"
              stroke-width="2"
              fill="#686F68"
              cx="253"
              cy="31"
              r="7"
            ></circle>
          </g>
          <g id="silk_screen" transform="translate(7.000000, 30.000000)">
            <text
              id="A-"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0.05859375" y="69">A-</tspan>
            </text>
            <text
              id="E+"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0.4921875" y="18">E+</tspan>
            </text>
            <rect
              id="Rectangle-3"
              stroke="#FFFFFF"
              stroke-width="2"
              x="25"
              y="1"
              width="26"
              height="147"
            ></rect>
            <rect
              id="Rectangle-3"
              stroke="#FFFFFF"
              stroke-width="2"
              x="270"
              y="22"
              width="25"
              height="102"
            ></rect>
            <text
              id="GND"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="14"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="297.444824" y="42">GND</tspan>
            </text>
            <text
              id="DT"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="14"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="297.168945" y="66">DT</tspan>
            </text>
            <text
              id="SCK"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="14"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="297.220703" y="91">SCK</tspan>
            </text>
            <text
              id="VCC"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="14"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="297.220703" y="116">VCC</tspan>
            </text>
            <text
              id="A+"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0.05078125" y="94">A+</tspan>
            </text>
            <text
              id="B-"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0.05859375" y="117">B-</tspan>
            </text>
            <text
              id="B+"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0.05078125" y="140">B+</tspan>
            </text>
            <text
              id="E-"
              font-family="Arial-BoldItalicMT, Arial"
              font-size="16"
              font-style="italic"
              font-weight="bold"
              fill="#FBFBFB"
            >
              <tspan x="0" y="45">E-</tspan>
            </text>
          </g>
          <g id="hx711_chip" transform="translate(122.000000, 28.000000)">
            <rect
              id="chip_package"
              stroke="#3B3939"
              fill="#434341"
              x="14.5"
              y="0.5"
              width="36"
              height="98"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="2"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="15"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="27"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="40"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="52"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="65"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="77"
              width="14"
              height="6"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="url(#linearGradient-4)"
              x="51"
              y="90"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pint_01"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 5.000000) scale(-1, 1) translate(-7.000000, -5.000000) "
              x="0"
              y="2"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_02"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 18.000000) scale(-1, 1) translate(-7.000000, -18.000000) "
              x="0"
              y="15"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_03"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 31.000000) scale(-1, 1) translate(-7.000000, -31.000000) "
              x="0"
              y="28"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_04"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 43.000000) scale(-1, 1) translate(-7.000000, -43.000000) "
              x="0"
              y="40"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_05"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 56.000000) scale(-1, 1) translate(-7.000000, -56.000000) "
              x="0"
              y="53"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_06"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 68.000000) scale(-1, 1) translate(-7.000000, -68.000000) "
              x="0"
              y="65"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_07"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 80.000000) scale(-1, 1) translate(-7.000000, -80.000000) "
              x="0"
              y="77"
              width="14"
              height="6"
            ></rect>
            <rect
              id="pin_08"
              fill="url(#linearGradient-4)"
              transform="translate(7.000000, 93.000000) scale(-1, 1) translate(-7.000000, -93.000000) "
              x="0"
              y="90"
              width="14"
              height="6"
            ></rect>
            <circle
              id="package_mark"
              stroke="#000000"
              fill="url(#radialGradient-5)"
              cx="20"
              cy="5"
              r="3"
            ></circle>
            <text
              id="HX711"
              transform="translate(27.000000, 52.000000) rotate(270.000000) translate(-27.000000, -52.000000) "
              font-family="Arial-BoldItalicMT, Arial"
              font-size="12"
              font-style="italic"
              font-weight="bold"
              fill="#BBBBBB"
            >
              <tspan x="9.09960938" y="56">HX711</tspan>
            </text>
          </g>
          <g
            id="drill"
            transform="translate(277.000000, 11.000000)"
            fill="#686F68"
            stroke="#0B7332"
          >
            <circle id="Oval" cx="11.5" cy="11.5" r="11.5"></circle>
            <circle id="Oval" cx="11.5" cy="167.5" r="11.5"></circle>
          </g>
        </g>
      </svg>
    `;
  }
}
