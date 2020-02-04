import { customElement, html, LitElement, property, css, svg } from 'lit-element';
import { font8x5 } from './font8x5';

export type ICursorType = 'off' | 'blink' | 'underline';

const charXSpacing = 3.55;
const charYSpacing = 5.95;

const backgroundColors: { [key: string]: string } = {
  green: '#6cb201',
  blue: '#000eff'
};

@customElement('wokwi-lcd1602')
export class LCD1602Element extends LitElement {
  @property() color = 'black';
  @property() background = 'green';
  @property({ type: Array }) characters: number[] | Uint8Array = new Uint8Array(32);
  @property() font = font8x5;
  @property() cursor: ICursorType = 'off';
  @property() cursorX = 0;
  @property() cursorY = 0;

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

  path(characters: Uint8Array | number[]) {
    const xSpacing = 0.6;
    const ySpacing = 0.7;
    const result = [];
    for (let i = 0; i < characters.length; i++) {
      const charX = (i % 16) * charXSpacing;
      const charY = Math.floor(i / 16) * charYSpacing;

      for (let py = 0; py < 8; py++) {
        const row = this.font[characters[i] * 8 + py];
        for (let px = 0; px < 5; px++) {
          if (row & (1 << (7 - px))) {
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
    switch (this.cursor) {
      case 'blink':
        return svg`
        <rect x="${xOffset}" y="${yOffset}" width="2.95" height="5.55" fill="${this.color}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `;

      case 'underline': {
        const y = yOffset + 0.7 * 7;
        return svg`<rect x="${xOffset}" y="${y}" width="2.95" height="0.65" fill="${this.color}" />`;
      }

      default:
        return null;
    }
  }

  render() {
    const { color, characters, background } = this;

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
        </defs>
        <rect width="80" height="36" fill="#087f45" />
        <rect x="4.95" y="5.7" width="71.2" height="25.2" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" fill="${actualBgColor}" />
        <rect x="12.45" y="12.55" width="56.2" height="11.5" fill="url(#characters)" />
        <path d="${this.path(characters)}" transform="translate(12.45, 12.55)" fill="${color}" />
        ${this.renderCursor()}
      </svg>
    `;
  }
}
