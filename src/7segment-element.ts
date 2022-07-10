import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';
import { mmToPix } from './utils/units';

@customElement('wokwi-7segment')
export class SevenSegmentElement extends LitElement {
  /** The color of a lit segment */
  @property() color = 'red';

  /** The color of an unlit segment */
  @property() offColor = '#444';

  /** The background color of the 7-segment display */
  @property() background = 'black';

  /** Number of digits to display (1, 2 or 4 are common values) */
  @property({ type: Number }) digits = 1;

  /** Whether to show a colon (clock mode) */
  @property({ type: Boolean }) colon = false;

  /** Whether the colon is lit or not */
  @property({ type: Boolean }) colonValue = false;

  /**
   * Pin format. `top` to draw pins on top of the segment display panel,
   * `extend` to extend them to the sides of the panel, and `none` to
   * disable drawing the pins.
   */
  @property() pins: 'top' | 'extend' | 'none' = 'top';

  /**
   * The values for the individual segments. Each digit has 8
   * segment values in the following order: A, B, C, D, E, F, G, DP
   *
   * The values are 1 for a lit segment, and 0 for an unlit segment.
   */
  @property({ type: Array }) values: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  get pinInfo(): ElementPin[] {
    const pinXY = (n: number) => {
      const { startX, cols, bottomY } = this.pinPositions;
      const col = (n - 1) % cols;
      const row = 1 - Math.floor((n - 1) / cols);
      const xOffset = 1.27;
      const x = startX + xOffset + (row ? col : cols - col - 1) * 2.54;
      const y = this.pins === 'top' ? (row ? bottomY + 1 : 1) : row ? bottomY + 2 : 0;
      return { number: n, x: x * mmToPix, y: y * mmToPix };
    };

    switch (this.digits) {
      case 4:
        // Pinout based on KW4-56NALB model
        return [
          { name: 'A', ...pinXY(13), signals: [], description: 'Segment A' },
          { name: 'B', ...pinXY(9), signals: [], description: 'Segment B' },
          { name: 'C', ...pinXY(4), signals: [], description: 'Segment C' },
          { name: 'D', ...pinXY(2), signals: [], description: 'Segment D' },
          { name: 'E', ...pinXY(1), signals: [], description: 'Segment E' },
          { name: 'F', ...pinXY(12), signals: [], description: 'Segment F' },
          { name: 'G', ...pinXY(5), signals: [], description: 'Segment G' },
          { name: 'DP', ...pinXY(3), signals: [], description: 'Decimal Point' },
          { name: 'DIG1', ...pinXY(14), signals: [], description: 'Digit 1 Common' },
          { name: 'DIG2', ...pinXY(11), signals: [], description: 'Digit 2 Common' },
          { name: 'DIG3', ...pinXY(10), signals: [], description: 'Digit 3 Common' },
          { name: 'DIG4', ...pinXY(6), signals: [], description: 'Digit 4 Common' },
          { name: 'COM', ...pinXY(7), signals: [], description: 'Common pin' },
          { name: 'CLN', ...pinXY(8), signals: [], description: 'Colon' },
        ];

      case 3:
        // Pinout based on SP420281N model
        return [
          { name: 'A', ...pinXY(11), signals: [], description: 'Segment A' },
          { name: 'B', ...pinXY(7), signals: [], description: 'Segment B' },
          { name: 'C', ...pinXY(4), signals: [], description: 'Segment C' },
          { name: 'D', ...pinXY(2), signals: [], description: 'Segment D' },
          { name: 'E', ...pinXY(1), signals: [], description: 'Segment E' },
          { name: 'F', ...pinXY(10), signals: [], description: 'Segment F' },
          { name: 'G', ...pinXY(5), signals: [], description: 'Segment G' },
          { name: 'DP', ...pinXY(3), signals: [], description: 'Decimal Point' },
          { name: 'DIG1', ...pinXY(12), signals: [], description: 'Digit 1 Common' },
          { name: 'DIG2', ...pinXY(9), signals: [], description: 'Digit 2 Common' },
          { name: 'DIG3', ...pinXY(8), signals: [], description: 'Digit 3 Common' },
        ];

      case 2:
        // Pinout based on CL5621C model
        return [
          { name: 'DIG1', ...pinXY(8), signals: [], description: 'Digit 1 Common' },
          { name: 'DIG2', ...pinXY(7), signals: [], description: 'Digit 2 Common' },
          { name: 'A', ...pinXY(10), signals: [], description: 'Segment A' },
          { name: 'B', ...pinXY(9), signals: [], description: 'Segment B' },
          { name: 'C', ...pinXY(1), signals: [], description: 'Segment C' },
          { name: 'D', ...pinXY(4), signals: [], description: 'Segment D' },
          { name: 'E', ...pinXY(3), signals: [], description: 'Segment E' },
          { name: 'F', ...pinXY(6), signals: [], description: 'Segment F' },
          { name: 'G', ...pinXY(5), signals: [], description: 'Segment G' },
          { name: 'DP', ...pinXY(2), signals: [], description: 'Decimal Point' },
        ];

      case 1:
      default:
        // Pinout based on 5611BH model
        return [
          { name: 'COM.1', ...pinXY(3), signals: [], description: 'Common' },
          { name: 'COM.2', ...pinXY(8), signals: [], description: 'Common' },
          { name: 'A', ...pinXY(7), signals: [], description: 'Segment A' },
          { name: 'B', ...pinXY(6), signals: [], description: 'Segment B' },
          { name: 'C', ...pinXY(4), signals: [], description: 'Segment C' },
          { name: 'D', ...pinXY(2), signals: [], description: 'Segment D' },
          { name: 'E', ...pinXY(1), signals: [], description: 'Segment E' },
          { name: 'F', ...pinXY(9), signals: [], description: 'Segment F' },
          { name: 'G', ...pinXY(10), signals: [], description: 'Segment G' },
          { name: 'DP', ...pinXY(5), signals: [], description: 'Decimal Point' },
        ];
    }
  }

  static get styles() {
    return css`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `;
  }

  private get pinPositions() {
    const { digits } = this;
    const numPins = digits === 4 ? 14 : digits === 3 ? 12 : 10;
    const cols = Math.ceil(numPins / 2);
    return {
      startX: (12.55 * digits - cols * 2.54) / 2,
      bottomY: this.pins === 'extend' ? 21 : 17,
      cols,
    };
  }

  private get yOffset() {
    return this.pins === 'extend' ? 2 : 0;
  }

  renderDigit(x: number, startIndex: number) {
    const fill = (index: number) => (this.values[startIndex + index] ? this.color : this.offColor);
    return svg`
      <g transform="skewX(-8) translate(${x}, ${this.yOffset + 2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${fill(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${fill(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${fill(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${fill(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${fill(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${fill(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${fill(6)} />
      </g>
      <circle cx="${x + 7.4}" cy="${this.yOffset + 16}" r="0.89" fill="${fill(7)}" />
    `;
  }

  renderColon() {
    const { yOffset } = this;
    const colonPosition = 1.5 + 12.7 * Math.round(this.digits / 2);
    const colonFill = this.colonValue ? this.color : this.offColor;
    return svg`
      <g transform="skewX(-8)"  fill="${colonFill}">
        <circle cx="${colonPosition}" cy="${yOffset + 5.75}" r="0.89" />
        <circle cx="${colonPosition}" cy="${yOffset + 13.25}" r="0.89" />
      </g>
    `;
  }

  renderPins() {
    const { cols, bottomY, startX: x } = this.pinPositions;
    return svg`
      <g fill="url(#pin-pattern)" transform="translate(${x}, 0)">
        <rect height="2" width=${cols * 2.54} />
        <rect height="2" width=${cols * 2.54} transform="translate(0, ${bottomY})" />
      </g>
    `;
  }

  render() {
    const { digits, colon, pins, yOffset } = this;
    const width = 12.55 * digits;
    const height = pins === 'extend' ? 23 : 19;
    const digitShapes = [];
    for (let i = 0; i < digits; i++) {
      digitShapes.push(this.renderDigit(3.5 + i * 12.7, i * 8));
    }
    return html`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${pins === 'extend'
              ? svg`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`
              : svg`<circle cx="1.27" cy="1" r=0.5 fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${yOffset}" width="${width}" height="19" />
        ${digitShapes}<!-- -->
        ${colon ? this.renderColon() : null}<!-- -->
        ${pins !== 'none' ? this.renderPins() : null}
      </svg>
    `;
  }
}
