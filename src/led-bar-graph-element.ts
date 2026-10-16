import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';
import { mmToPix } from './utils/units';

const mm = mmToPix;
const anodeX = 1.27 * mm;
const cathodeX = 8.83 * mm;

const green = '#9eff3c';
const blue = '#2c95fa';
const cyan = '#6cf9dc';
const yellow = '#f1d73c';
const red = '#dc012d';

interface PaletteDef {
  color: string;
  percent: number;
}

const paletteDefinitions: Record<string, PaletteDef[]> = {
  BCYR: [
    { color: blue, percent: 10 },
    { color: cyan, percent: 40 },
    { color: yellow, percent: 30 },
    { color: red, percent: 20 },
  ],
  BGYR: [
    { color: blue, percent: 10 },
    { color: green, percent: 40 },
    { color: yellow, percent: 30 },
    { color: red, percent: 20 },
  ],
  BRG: [
    { color: blue, percent: 10 },
    { color: red, percent: 20 },
    { color: green, percent: 70 },
  ],
  RYG: [
    { color: red, percent: 60 },
    { color: yellow, percent: 10 },
    { color: green, percent: 30 },
  ],
  GYR: [
    { color: green, percent: 50 },
    { color: yellow, percent: 30 },
    { color: red, percent: 20 },
  ],
  YR: [
    { color: yellow, percent: 50 },
    { color: red, percent: 50 },
  ],
};

@customElement('wokwi-led-bar-graph')
export class LedBarGraphElement extends LitElement {
  /** The color of a lit segment.
   * Either HTML color or the special values.
   * Special values are:
   * - "BCYR": Blue-Cyan-Yellow-Red palette
   * - "BGYR": Blue-Green-Yellow-Red palette
   * - "BRG": Blue-Red-Green palette
   * - "RYG": Red-Yellow-Green palette
   * - "GYR": Green-Yellow-Red palette
   * - "YR": Yellow-Red palette
   */
  @property() color = 'red';

  /** The color of an unlit segment */
  @property() offColor = '#444';

  get pinInfo(): readonly ElementPin[] {
    const { values } = this;
    const pinSpacing = 2.54 * mm;
    const pins: ElementPin[] = [];
    for (let i = 0; i < values.length; i++) {
      const y = 1.27 * mm + i * pinSpacing;
      pins.push({
        name: `A${i + 1}`,
        x: anodeX,
        y,
        number: i * 2 + 1,
        description: `Anode ${i + 1}`,
        signals: [],
      });
      pins.push({
        name: `C${i + 1}`,
        x: cathodeX,
        y,
        number: i * 2 + 2,
        description: `Cathode ${i + 1}`,
        signals: [],
      });
    }
    return pins;
  }

  /**
   * The values for the individual segments: 1 for a lit segment, and 0 for
   * an unlit segment.
   */
  @property({ type: Array }) values: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('values')) {
      const oldValues = changedProperties.get('values') as number[] | undefined;
      if (oldValues && oldValues.length !== this.values.length) {
        this.dispatchEvent(new CustomEvent('pininfo-change'));
      }
    }
    super.update(changedProperties);
  }

  private getPaletteColors(name: string, numLeds: number): string[] | null {
    const def = paletteDefinitions[name];
    if (!def) return null;

    // If numLeds is less than the number of colors in the palette, we can't respect the percentages. In that case, we just return the colors in order.
    if (numLeds < def.length) {
      return Array.from({ length: numLeds }, (_, i) => def[i % def.length].color);
    }

    // Compute the number of LEDs for each color based on the percentages
    const counts = def.map((d) => Math.round((d.percent / 100) * numLeds));

    // At least one LED per color
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] < 1) counts[i] = 1;
    }

    // Adjust the counts to match the total number of LEDs (due to rounding)
    let currentSum = counts.reduce((a, b) => a + b, 0);
    while (currentSum !== numLeds) {
      if (currentSum > numLeds) {
        // Remove from the one that has the most LEDs (and at least 2 to avoid removing a color completely)
        const index = counts.findIndex((c) => c === Math.max(...counts) && c > 1);
        counts[index]--;
        currentSum--;
      } else {
        // Add to the one that has the most percentage in the palette definition
        const index = def.findIndex((d) => d.percent === Math.max(...def.map((x) => x.percent)));
        counts[index]++;
        currentSum++;
      }
    }

    // Color array constructed based on the counts
    const colors: string[] = [];
    for (let i = 0; i < def.length; i++) {
      for (let j = 0; j < counts[i]; j++) {
        colors.push(def[i].color);
      }
    }
    return colors;
  }

  render() {
    const { values, color, offColor } = this;
    const numLeds = values.length;
    const palette = this.getPaletteColors(color, numLeds);
    const pinPatternHeight = 2.54;
    const rectHeight = numLeds * pinPatternHeight;
    const svgHeight = rectHeight + 0.1;
    const bodyPath = `m1.4 0h8.75v${svgHeight}h-10.1v-${svgHeight - 1.3}z`;

    return html`
      <svg
        width="10.1mm"
        height="${svgHeight}mm"
        version="1.1"
        viewBox="0 0 10.1 ${svgHeight}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="pin-pattern" height="2.54" width="10.1" patternUnits="userSpaceOnUse">
          <circle cx="1.27" cy="1.27" r="0.5" fill="#aaa" />
          <circle cx="8.83" cy="1.27" r="0.5" fill="#aaa" />
        </pattern>
        <path d=${bodyPath} />
        <rect width="10.1" height="${rectHeight}" fill="url(#pin-pattern)" />
        ${values.map(
          (value, index) =>
            svg`<rect x="2.5" y="${0.4 + index * pinPatternHeight}" width="5" height="1.74" fill="${
              value ? (palette?.[index] ?? color) : offColor
            }"/>`,
        )}
      </svg>
    `;
  }
}
