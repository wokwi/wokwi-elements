import { html, LitElement, svg, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementPin, i2c, GND, VCC  } from './pin';

@customElement('wokwi-ht16k33a')
export class Ht16k33aElement extends LitElement {

  get pinInfo(): readonly ElementPin[] {
    const pinXY = (isLeft: boolean, y: number) => {
      return { x: isLeft ? 5.75 : 71.75, y: (6.85 + y * 9.45) };
    };

    return [
      { name: 'GND', ...pinXY(true, 0), signals: [GND()] },
      { name: 'C0', ...pinXY(true, 1), signals: [] },
      { name: 'C1', ...pinXY(true, 2), signals: [] },
      { name: 'C2', ...pinXY(true, 3), signals: [] },
      { name: 'C3', ...pinXY(true, 4), signals: [] },
      { name: 'C4', ...pinXY(true, 5), signals: [] },
      { name: 'C5', ...pinXY(true, 6), signals: [] },
      { name: 'C6', ...pinXY(true, 7), signals: [] },
      { name: 'C7', ...pinXY(true, 8), signals: [] },
      { name: 'A15', ...pinXY(true, 9), signals: [] },
      { name: 'A14', ...pinXY(true, 10), signals: [] },
      { name: 'A13', ...pinXY(true, 11), signals: [] },
      { name: 'A12', ...pinXY(true, 12), signals: [] },
      { name: 'A11', ...pinXY(true, 13), signals: [] },

      { name: 'VCC', ...pinXY(false, 0), signals: [VCC(5)] },
      { name: 'SDA', ...pinXY(false, 1), signals: [i2c('SDA')] },
      { name: 'SCL', ...pinXY(false, 2), signals: [i2c('SCL')] },
      { name: 'A0', ...pinXY(false, 3), signals: [] },
      { name: 'A1', ...pinXY(false, 4), signals: [] },
      { name: 'A2', ...pinXY(false, 5), signals: [] },
      { name: 'A3', ...pinXY(false, 6), signals: [] },
      { name: 'A4', ...pinXY(false, 7), signals: [] },
      { name: 'A5', ...pinXY(false, 8), signals: [] },
      { name: 'A6', ...pinXY(false, 9), signals: [] },
      { name: 'A7', ...pinXY(false, 10), signals: [] },
      { name: 'A8', ...pinXY(false, 11), signals: [] },
      { name: 'A9', ...pinXY(false, 12), signals: [] },
      { name: 'A10', ...pinXY(false, 13), signals: [] }
    ];
  }

  static get styles() {
      return css`
        text {
          font-size: 1.75px;
          font-family: monospace;
          user-select: none;
          fill: #ffffff;
        }
        .brand {
          font-size: 2.5px;
          fill: #cccccc;
        }
        .model {
          font-size: 2.25px;
          fill: #cccccc;
        }
      `;
    }

  render() {
    return html`
      <svg 
        width="20.4mm" 
        height="35.8mm" 
        version="1.1" 
        viewBox="0 0 20.4 35.8" 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink>
        <defs>
          <rect id="lead" width="2.3" height=".7"/>
          <circle id="pad" r=".85"/>
          <g id="debug">
            <rect x="0" y="0" width="3.275" height="1.9" fill="#333"/>
            <rect x=".125" y=".15" width="1.2" height="1.6" fill="#fc0"/>
            <rect x="1.925" y=".15" width="1.2" height="1.6" fill="#fc0"/>
          </g>
        </defs>
        <rect x="0" y="0" width="20.4" height="35.8" fill="#0078d0"/>
        <g fill="#ccc">
          <g transform="translate(19, 0)">
            ${Array.from({ length: 14 }).map((_, i) => svg`<use xlink:href="#pad" y=${1.8 + i * 2.5}/>`)}
          </g>
          <g transform="translate(1.5, 0)">
            ${Array.from({ length: 14 }).map((_, i) => svg`<use xlink:href="#pad" y=${1.8 + i * 2.5}/>`)}
          </g>
          <circle cx="10.25" cy="2.7" r="2"/>
          <circle cx="10.25" cy="33.2" r="2"/>
        </g>
        <g stroke-width=".25">
          <rect x="6.45" y="6.1" width="7.55" height="17.6" fill="#333"/>
          <g fill="#ccc" transform="translate(4.2, 0)">
            ${Array.from({ length: 14 }).map((_, i) => svg`<use xlink:href="#lead" y=${6.4 + i * 1.25}/>`)}
          </g>
          <g fill="#ccc" transform="translate(13.975, 0)">
            ${Array.from({ length: 14 }).map((_, i) => svg`<use xlink:href="#lead" y=${6.4 + i * 1.25}/>`)}
          </g>
          <circle cx="8" cy="7.5" r=".75"/>
        </g>
        <g>
          <text x="2.5" y="2.4">GND</text>
          <g text-anchor="end">
            <text x="18" y="2.4">VDD</text>
            <text x="18" y="4.9">SDA</text>
          </g>
          <g transform="translate(2.6, 24.875)">
            ${['A15', 'A14', 'A13', 'A12', 'A11'].map((label, i) => svg`<text y=${i * 2.5}>${label}</text>`)}
          </g>
          <g transform="translate(17.85, 24.875)" text-anchor="end">
            ${['A6', 'A7', 'A8', 'A9', 'A10'].map((label, i) => svg`<text y=${i * 2.5}>${label}</text>`)}
          </g>
          <g transform="translate(4, 5.5) rotate(-90)">
            ${['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'].map(
              (label, i) => svg`<text x=${i * -2.45}>${label}</text>`,
            )}
          </g>
          <g transform="translate(17.8, 8.2) rotate(-90)">
            ${['SCL', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map(
              (label, i) => svg`<text x=${i * -2.45}>${label}</text>`,
            )}
          </g>
        </g>
        <rect x="10" y="24.5" width="3.5" height="6.2" fill="#ececec"/>
        <g transform="translate(10.125, 24.5)">
          ${Array.from({ length: 3 }).map((_, i) => svg`<use xlink:href="#debug" y=${0.125 + i * 2.025}/>`)}
        </g>
        <text transform="rotate(90)" x="9.5" y="-11" class="brand">Holtek</text>
        <text transform="rotate(90)" x="9.5" y="-9" class="model">HT16K33A</text>
        
      </svg>
    `;
  }
}
