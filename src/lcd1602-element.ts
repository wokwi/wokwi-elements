import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fontA00 } from './lcd1602-font-a00';
import { ElementPin, i2c } from './pin';
import { mmToPix } from './utils/units';

const charXSpacing = 3.55;
const charYSpacing = 5.95;

const backgroundColors: { [key: string]: string } = {
  green: '#6cb201',
  blue: '#000eff',
};

@customElement('wokwi-lcd1602')
export class LCD1602Element extends LitElement {
  @property() color = 'black';
  @property() background = 'green';
  @property({ type: Array }) characters: number[] | Uint8Array = new Uint8Array(32);
  @property() font = fontA00;
  @property() cursor = false;
  @property() blink = false;
  @property() cursorX = 0;
  @property() cursorY = 0;
  @property() backlight = true;
  @property() pins: 'full' | 'i2c' | 'none' = 'full';
  @property() screenOnly = false;

  protected numCols = 16;
  protected numRows = 2;

  @property()
  get text() {
    return Array.from(this.characters)
      .map((c) => String.fromCharCode(c))
      .join('');
  }

  set text(value: string) {
    this.characters = new Uint8Array(value.split('').map((char) => char.charCodeAt(0)));
  }

  static get styles() {
    return css`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;
  }

  protected get panelHeight() {
    return this.rows * 5.75;
  }

  get pinInfo(): ElementPin[] {
    const { panelHeight } = this;
    const y = 87.5 + panelHeight * mmToPix;
    switch (this.pins) {
      case 'i2c':
        return [
          { name: 'GND', x: 4, y: 32, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
          { name: 'VCC', x: 4, y: 41.5, number: 2, signals: [{ type: 'power', signal: 'VCC' }] },
          { name: 'SDA', x: 4, y: 51, number: 3, signals: [i2c('SDA')] },
          { name: 'SCL', x: 4, y: 60.5, number: 4, signals: [i2c('SCL')] },
        ];

      case 'full':
      default:
        return [
          { name: 'VSS', x: 32, y, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
          { name: 'VDD', x: 41.5, y, number: 2, signals: [{ type: 'power', signal: 'VCC' }] },
          { name: 'V0', x: 51.5, y, number: 3, signals: [] },
          { name: 'RS', x: 60.5, y, number: 4, signals: [] },
          { name: 'RW', x: 70.5, y, number: 5, signals: [] },
          { name: 'E', x: 80, y, number: 6, signals: [] },
          { name: 'D0', x: 89.5, y, number: 7, signals: [] },
          { name: 'D1', x: 99.5, y, number: 8, signals: [] },
          { name: 'D2', x: 109, y, number: 9, signals: [] },
          { name: 'D3', x: 118.5, y, number: 10, signals: [] },
          { name: 'D4', x: 128, y, number: 11, signals: [] },
          { name: 'D5', x: 137.5, y, number: 12, signals: [] },
          { name: 'D6', x: 147, y, number: 13, signals: [] },
          { name: 'D7', x: 156.5, y, number: 14, signals: [] },
          { name: 'A', x: 166.5, y, number: 15, signals: [] },
          { name: 'K', x: 176, y, number: 16, signals: [] },
        ];
    }
  }

  get cols() {
    return this.numCols;
  }

  get rows() {
    return this.numRows;
  }

  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('pins')) {
      this.dispatchEvent(new CustomEvent('pininfo-change'));
    }
    super.update(changedProperties);
  }

  path(characters: Uint8Array | number[]) {
    const xSpacing = 0.6;
    const ySpacing = 0.7;
    const result = [];
    const { cols } = this;
    for (let i = 0; i < characters.length; i++) {
      const charX = (i % cols) * charXSpacing;
      const charY = Math.floor(i / cols) * charYSpacing;

      for (let py = 0; py < 8; py++) {
        const row = this.font[characters[i] * 8 + py];
        for (let px = 0; px < 5; px++) {
          if (row & (1 << px)) {
            const x = (charX + px * xSpacing).toFixed(2);
            const y = (charY + py * ySpacing).toFixed(2);
            result.push(`M ${x} ${y}h0.55v0.65h-0.55Z`);
          }
        }
      }
    }
    return result.join(' ');
  }

  renderCursor() {
    const { cols, rows, cursor, cursorX, cursorY, blink, color } = this;
    const xOffset = 12.45 + cursorX * charXSpacing;
    const yOffset = 12.55 + cursorY * charYSpacing;
    if (cursorX < 0 || cursorX >= cols || cursorY < 0 || cursorY >= rows) {
      return null;
    }

    const result = [];

    if (blink) {
      result.push(svg`
        <rect x="${xOffset}" y="${yOffset}" width="2.95" height="5.55" fill="${color}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `);
    }

    if (cursor) {
      const y = yOffset + 0.7 * 7;
      result.push(svg`<rect x="${xOffset}" y="${y}" width="2.95" height="0.65" fill="${color}" />`);
    }

    return result;
  }

  renderI2CPins() {
    return svg`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `;
  }

  renderPins(panelHeight: number) {
    const y = panelHeight + 21.1;
    return svg`
      <g transform="translate(0, ${y})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `;
  }

  render() {
    const { color, characters, background, pins, panelHeight, cols } = this;

    const darken = this.backlight ? 0 : 0.5;
    const actualBgColor =
      background in backgroundColors ? backgroundColors[background] : backgroundColors;

    const panelWidth = cols * 3.5125;
    const width = this.screenOnly ? panelWidth : panelWidth + 23.8;
    const height = this.screenOnly ? panelHeight : panelHeight + 24.5;

    const panelX = 12.45;
    const panelY = 12.55;
    const viewBox = this.screenOnly
      ? `${panelX} ${panelY} ${panelWidth} ${panelHeight}`
      : `0 0 ${width} ${height}`;

    // Dimensions according to:
    // https://www.winstar.com.tw/products/character-lcd-display-module/16x2-lcd.html
    return html`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="${viewBox}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${width}" height="${height}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${panelWidth + 15}" height="${panelHeight + 13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${panelWidth + 9.8}"
          height="${panelHeight + 4.5}"
          rx="1.5"
          ry="1.5"
          fill="${actualBgColor}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${panelWidth + 9.8}"
          height="${panelHeight + 4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${darken}"
        />
        ${pins === 'i2c' ? this.renderI2CPins() : null}
        ${pins === 'full' ? this.renderPins(panelHeight) : null}
        <rect
          x="${panelX}"
          y="${panelY}"
          width="${panelWidth}"
          height="${panelHeight}"
          fill="url(#characters)"
        />
        <path
          d="${this.path(characters)}"
          transform="translate(${panelX}, ${panelY})"
          fill="${color}"
        />
        ${this.renderCursor()}
      </svg>
    `;
  }
}
