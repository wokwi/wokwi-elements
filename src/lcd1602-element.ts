import { customElement, html, LitElement, property, css, svg } from 'lit-element';
import { fontA00 } from './lcd1602-font-a00';
import { ElementPin, i2c } from './pin';

const ROWS = 2;
const COLS = 16;

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

  get pinInfo(): ElementPin[] {
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
          { name: 'VSS', x: 32, y: 131, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
          { name: 'VDD', x: 41.5, y: 131, number: 2, signals: [{ type: 'power', signal: 'VCC' }] },
          { name: 'V0', x: 51.5, y: 131, number: 3, signals: [] },
          { name: 'RS', x: 60.5, y: 131, number: 4, signals: [] },
          { name: 'RW', x: 70.5, y: 131, number: 5, signals: [] },
          { name: 'E', x: 80, y: 131, number: 6, signals: [] },
          { name: 'D0', x: 89.5, y: 131, number: 7, signals: [] },
          { name: 'D1', x: 99.5, y: 131, number: 8, signals: [] },
          { name: 'D2', x: 109, y: 131, number: 9, signals: [] },
          { name: 'D3', x: 118.5, y: 131, number: 10, signals: [] },
          { name: 'D4', x: 128, y: 131, number: 11, signals: [] },
          { name: 'D5', x: 137.5, y: 131, number: 12, signals: [] },
          { name: 'D6', x: 147, y: 131, number: 13, signals: [] },
          { name: 'D7', x: 156.5, y: 131, number: 14, signals: [] },
          { name: 'A', x: 166.5, y: 131, number: 15, signals: [] },
          { name: 'K', x: 176, y: 131, number: 16, signals: [] },
        ];
    }
  }

  path(characters: Uint8Array | number[]) {
    const xSpacing = 0.6;
    const ySpacing = 0.7;
    const result = [];
    for (let i = 0; i < characters.length; i++) {
      const charX = (i % COLS) * charXSpacing;
      const charY = Math.floor(i / COLS) * charYSpacing;

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
    const xOffset = 12.45 + this.cursorX * charXSpacing;
    const yOffset = 12.55 + this.cursorY * charYSpacing;
    if (this.cursorX < 0 || this.cursorX >= COLS || this.cursorY < 0 || this.cursorY >= ROWS) {
      return null;
    }

    const result = [];

    if (this.blink) {
      result.push(svg`
        <rect x="${xOffset}" y="${yOffset}" width="2.95" height="5.55" fill="${this.color}">
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

    if (this.cursor) {
      const y = yOffset + 0.7 * 7;
      result.push(
        svg`<rect x="${xOffset}" y="${y}" width="2.95" height="0.65" fill="${this.color}" />`
      );
    }

    return result;
  }

  renderI2CPins() {
    return svg`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text y="6.8" x="0.7" fill="white">1</text>
      <text y="8.9" x="2.3" fill="white">GND</text>
      <text y="11.4" x="2.3" fill="white">VCC</text>
      <text y="14" x="2.3" fill="white">SDA</text>
      <text y="16.6" x="2.3" fill="white">SCL</text>
    `;
  }

  renderPins() {
    return svg`
      <rect x="7.55" y="33.5" height="2.5" width="40.64" fill="url(#pins)" />
      <text x="6" y="35.3" fill="white">1</text>
      <text x="7.2" y="33.3" fill="white">VSS</text>
      <text x="9.9" y="33.3" fill="white">VDD</text>
      <text x="12.7" y="33.3" fill="white">V0</text>
      <text x="15.2" y="33.3" fill="white">RS</text>
      <text x="17.8" y="33.3" fill="white">RW</text>
      <text x="20.8" y="33.3" fill="white">E</text>
      <text x="22.7" y="33.3" fill="white">D0</text>
      <text x="25.3" y="33.3" fill="white">D1</text>
      <text x="27.9" y="33.3" fill="white">D2</text>
      <text x="30.4" y="33.3" fill="white">D3</text>
      <text x="33" y="33.3" fill="white">D4</text>
      <text x="35.6" y="33.3" fill="white">D5</text>
      <text x="38.2" y="33.3" fill="white">D6</text>
      <text x="40.8" y="33.3" fill="white">D7</text>
      <text x="43.6" y="33.3" fill="white">A</text>
      <text x="46.2" y="33.3" fill="white">K</text>
      <text x="48" y="35.3" fill="white">16</text>
    `;
  }

  render() {
    const { color, characters, background } = this;

    const darken = this.backlight ? 0 : 0.5;
    const actualBgColor =
      background in backgroundColors ? backgroundColors[background] : backgroundColors;

    // Dimensions according to:
    // https://www.winstar.com.tw/products/character-lcd-display-module/16x2-lcd.html
    return html`
      <svg
        width="80mm"
        height="36mm"
        version="1.1"
        viewBox="0 0 80 36"
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
        <rect width="80" height="36" fill="#087f45" />
        <rect x="4.95" y="5.7" width="71.2" height="25.2" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" fill="${actualBgColor}" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" opacity="${darken}" />
        ${this.pins === 'i2c' ? this.renderI2CPins() : null}
        ${this.pins === 'full' ? this.renderPins() : null}
        <rect x="12.45" y="12.55" width="56.2" height="11.5" fill="url(#characters)" />
        <path d="${this.path(characters)}" transform="translate(12.45, 12.55)" fill="${color}" />
        ${this.renderCursor()}
      </svg>
    `;
  }
}
