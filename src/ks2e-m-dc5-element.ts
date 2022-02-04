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
        <g stroke-width=".4" fill="#f7b93c" stroke="#dda137">
          <rect x=".20" y=".20" width="20.6" height="9.61" ry=".58" />
          <rect x="20.2" y="4.5" width=".40" height="1" fill="#dda137" />
        </g>
        <g fill="none" stroke="#dda137" stroke-width=".47">
          <ellipse cx="2" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="6.8244" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="11.649" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="19" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="2" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="6.8244" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="11.649" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="19" cy="8.65" rx=".76" ry=".76" />
        </g>
        <text fill="#000" font-family="sans-serif" font-size="2.8222px">
          <tspan x="1.07" y="6.03">KS2E-M-DC5</tspan>
        </text>
      </svg>
    `;
  }
}
