import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin, GND, VCC } from './pin';
import { RGB } from './types/rgb';
import { mmToPix } from './utils/units';

const pixelWidth = 5.66;
const pixelHeight = 5;

/**
 * Renders a matrix of NeoPixels (smart RGB LEDs).
 * Optimized for displaying large matrices (up to thousands of elements).
 *
 * The color of individual pixels can be set by calling `setPixel(row, col, { r, g, b })`
 * on this element, e.g. `element.setPixel(0, 0, { r: 1, g: 0, b: 0 })` to set the leftmost
 * pixel to red.
 */
@customElement('wokwi-neopixel-matrix')
export class NeopixelMatrixElement extends LitElement {
  /**
   * Number of rows in the matrix
   */
  @property() rows = 8;

  /**
   * Number of columns in the matrix
   */
  @property() cols = 8;

  /**
   * The spacing between two adjacent rows, in mm
   */
  @property({ attribute: 'rowspacing' }) rowSpacing = 1;

  /**
   * The spacing between two adjacent columns, in mm
   */
  @property({ attribute: 'colspacing' }) colSpacing = 1;

  /**
   * Whether to apply blur to the light. Blurring the light
   * creates a bit more realistic look, but negatively impacts
   * performance. It's recommended to leave this off for large
   * matrices.
   */
  @property() blurLight = false;

  /**
   * Animate the LEDs in the matrix. Used primarily for testing in Storybook.
   * The animation sequence is not guaranteed and may change in future releases of
   * this element.
   */
  @property() animation = false;

  get pinInfo(): ElementPin[] {
    const { cols, rows, rowSpacing, colSpacing } = this;
    const pinSpacing = 2.54;
    const p = pinSpacing * mmToPix;
    const cx = ((cols * (colSpacing + pixelWidth)) / 2) * mmToPix;
    const y = rows * (rowSpacing + pixelHeight) * mmToPix;

    return [
      {
        name: 'GND',
        x: cx - 1.5 * p,
        y,
        signals: [GND()],
      },
      { name: 'VCC', x: cx - 0.5 * p, y, signals: [VCC()] },
      { name: 'DIN', x: cx + 0.5 * p, y, signals: [] },
      { name: 'DOUT', x: cx + 1.5 * p, y, signals: [] },
    ];
  }

  private pixelElements: Array<[SVGElement, SVGElement, SVGElement, SVGElement]> | null = null;

  private animationFrame: number | null = null;

  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }

  private getPixelElements() {
    if (!this.shadowRoot) {
      return null;
    }
    if (!this.pixelElements) {
      this.pixelElements = Array.from(this.shadowRoot.querySelectorAll('g.pixel')).map(
        (e) =>
          Array.from(e.querySelectorAll('ellipse')) as unknown as [
            SVGElement,
            SVGElement,
            SVGElement,
            SVGElement,
          ],
      );
    }
    return this.pixelElements;
  }

  /**
   * Resets all the pixels to off state (r=0, g=0, b=0).
   */
  reset() {
    const pixelElements = this.getPixelElements();
    if (!pixelElements) {
      return;
    }

    for (const [rElement, gElement, bElement, colorElement] of pixelElements) {
      rElement.style.opacity = '0';
      gElement.style.opacity = '0';
      bElement.style.opacity = '0';
      colorElement.style.opacity = '0';
    }
  }

  /**
   * Sets the color of a single neopixel in the matrix
   * @param row Row number of the pixel to set
   * @param col Column number of the pixel to set
   * @param rgb An object containing the {r, g, b} values for the pixel
   */
  setPixel(row: number, col: number, rgb: RGB) {
    const pixelElements = this.getPixelElements();
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols || !pixelElements) {
      return null;
    }
    const { r, g, b } = rgb;
    const spotOpacity = (value: number) => (value > 0.001 ? 0.7 + value * 0.3 : 0);
    const maxOpacity = Math.max(r, g, b);
    const minOpacity = Math.min(r, g, b);
    const opacityDelta = maxOpacity - minOpacity;
    const multiplier = Math.max(1, 2 - opacityDelta * 20);
    const glowBase = 0.1 + Math.max(maxOpacity * 2 - opacityDelta * 5, 0);
    const glowColor = (value: number) => (value > 0.005 ? 0.1 + value * 0.9 : 0);
    const glowOpacity = (value: number) => (value > 0.005 ? glowBase + value * (1 - glowBase) : 0);
    const cssVal = (value: number) =>
      maxOpacity ? Math.floor(Math.min(glowColor(value / maxOpacity) * multiplier, 1) * 255) : 255;
    const cssColor = `rgb(${cssVal(r)}, ${cssVal(g)}, ${cssVal(b)})`;
    const pixelElement = pixelElements[row * this.cols + col];
    const [rElement, gElement, bElement, colorElement] = pixelElement;
    rElement.style.opacity = spotOpacity(r).toFixed(2);
    gElement.style.opacity = spotOpacity(g).toFixed(2);
    bElement.style.opacity = spotOpacity(b).toFixed(2);
    colorElement.style.opacity = glowOpacity(maxOpacity).toFixed(2);
    colorElement.style.fill = cssColor;
  }

  private animateStep = () => {
    const time = new Date().getTime();
    const { rows, cols } = this;
    const pixelValue = (n: number) => (n % 2000 > 1000 ? 1 - (n % 1000) / 1000 : (n % 1000) / 1000);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const radius = Math.sqrt((row - rows / 2 + 0.5) ** 2 + (col - cols / 2 + 0.5) ** 2);
        this.setPixel(row, col, {
          r: pixelValue(radius * 100 + time),
          g: pixelValue(radius * 100 + time + 200),
          b: pixelValue(radius * 100 + time + 400),
        });
      }
    }
    this.animationFrame = requestAnimationFrame(this.animateStep);
  };

  update(changedProperties: Map<string, unknown>) {
    if (
      changedProperties.has('rows') ||
      changedProperties.has('cols') ||
      changedProperties.has('rowSpacing') ||
      changedProperties.has('colSpacing')
    ) {
      this.dispatchEvent(new CustomEvent('pininfo-change'));
    }
    super.update(changedProperties);
  }

  updated() {
    if (this.animation && !this.animationFrame) {
      this.animationFrame = requestAnimationFrame(this.animateStep);
    } else if (!this.animation && this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private renderPixels() {
    const result = [];
    const { cols, rows, colSpacing, rowSpacing } = this;
    const patWidth = pixelWidth + colSpacing;
    const patHeight = pixelHeight + rowSpacing;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        result.push(svg`
        <g transform="translate(${patWidth * col}, ${patHeight * row})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);
      }
    }

    this.pixelElements = null;

    return result;
  }

  render() {
    const { cols, rows, rowSpacing, colSpacing, blurLight } = this;
    const patWidth = pixelWidth + colSpacing;
    const patHeight = pixelHeight + rowSpacing;
    const width = pixelWidth * cols + colSpacing * (cols - 1);
    const height = pixelHeight * rows + rowSpacing * (rows - 1);
    return html`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${patWidth}" height="${patHeight}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${width}" height="${height}" fill="url(#pixel)"></rect>
        <g style="${blurLight ? 'filter: url(#blurLight)' : ''}">${this.renderPixels()}</g>
      </svg>
    `;
  }
}
