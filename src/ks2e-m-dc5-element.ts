import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementPin } from './pin';

const y1Pos = 5.1;
const y2Pos = 32.7;
const x1Pos = 7.6;
const x2Pos = 25.75;
const x3Pos = 44;
const x4Pos = 71.8;

@customElement('wokwi-ks2e-m-dc5')
export class KS2EMDC5Element extends LitElement {
  get pinInfo(): ElementPin[] {
    return [
      { name: 'NO2', x: x1Pos, y: y1Pos, signals: [], number: 8 },
      { name: 'NC2', x: x2Pos, y: y1Pos, signals: [], number: 6 },
      { name: 'P2', x: x3Pos, y: y1Pos, signals: [], number: 4 },
      { name: 'COIL2', x: x4Pos, y: y1Pos, signals: [{ type: 'power', signal: 'GND' }], number: 1 },
      { name: 'NO1', x: x1Pos, y: y2Pos, signals: [], number: 9 },
      { name: 'NC1', x: x2Pos, y: y2Pos, signals: [], number: 11 },
      { name: 'P1', x: x3Pos, y: y2Pos, signals: [], number: 13 },
      { name: 'COIL1', x: x4Pos, y: y2Pos, signals: [], number: 16 },
    ];
  }

  render() {
    return html`
      <svg
        width="21mm"
        height="10mm"
        version="1.1"
        viewBox="0 0 21 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x=".19797"
          y=".19797"
          width="20.604"
          height="9.6041"
          ry=".58463"
          fill="#f7b93c"
          stroke="#dda137"
          stroke-linecap="square"
          stroke-linejoin="round"
          stroke-width=".39594"
          style="paint-order:markers stroke fill"
        />
        <g fill="none" stroke="#dda137" stroke-linecap="square" stroke-linejoin="round">
          <ellipse
            cx="2"
            cy="1.35"
            rx=".76317"
            ry=".76317"
            stroke-width=".47366"
            style="paint-order:markers stroke fill"
          />
          <g stroke-width=".47362">
            <ellipse
              cx="6.8244"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
            <ellipse
              cx="11.649"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
            <ellipse
              cx="19"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
          </g>
        </g>
        <g
          transform="translate(-1.1921e-7 7.3)"
          fill="none"
          stroke="#dda137"
          stroke-linecap="square"
          stroke-linejoin="round"
        >
          <ellipse
            cx="2"
            cy="1.35"
            rx=".76317"
            ry=".76317"
            stroke-width=".47366"
            style="paint-order:markers stroke fill"
          />
          <g stroke-width=".47362">
            <ellipse
              cx="6.8244"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
            <ellipse
              cx="11.649"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
            <ellipse
              cx="19"
              cy="1.35"
              rx=".76319"
              ry=".76319"
              style="paint-order:markers stroke fill"
            />
          </g>
        </g>
        <rect
          x="20.208"
          y="4.4984"
          width=".40327"
          height="1.0033"
          fill="#dda137"
          stroke="#dda137"
          stroke-linecap="square"
          stroke-width=".39673"
          style="paint-order:markers stroke fill"
        />
        <text
          x="1.0733131"
          y="6.0273261"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.8222px"
          stroke-width=".26458"
          style="line-height:1.25"
          xml:space="preserve"
        >
          <tspan x="1.0733131" y="6.0273261">KS2E-M-DC5</tspan>
        </text>
      </svg>
    `;
  }
}
