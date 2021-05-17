import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';
import { RGB } from './types/rgb';
import { mmToPix } from './utils/units';

const pinHeight = 3;
const pcbWidth = 6;

@customElement('wokwi-led-ring')
export class LEDRingElement extends LitElement {
  /**
   * Number of pixels to in the LED ring
   */
  @property() pixels = 16;

  /**
   * Space between pixels (in mm)
   */
  @property({ type: Number }) pixelSpacing = 0;

  /**
   * Background (PCB) color
   */
  @property() background = '#363';

  /**
   * Animate the LEDs in the matrix. Used primarily for testing in Storybook.
   * The animation sequence is not guaranteed and may change in future releases of
   * this element.
   */
  @property() animation = false;

  private pixelElements: SVGCircleElement[] | null = null;

  private animationFrame: number | null = null;

  get radius() {
    return ((this.pixelSpacing + 5) * this.pixels) / 2 / Math.PI + pcbWidth;
  }

  get pinInfo(): ElementPin[] {
    const { radius } = this;
    const pinSpacing = 2.54;
    const y = (radius * 2 + pinHeight) * mmToPix;
    const cx = radius * mmToPix;
    const p = pinSpacing * mmToPix;

    return [
      {
        name: 'GND',
        x: cx - 1.5 * p,
        y,
        signals: [{ type: 'power', signal: 'GND' }],
      },
      { name: 'VCC', x: cx - 0.5 * p, y, signals: [{ type: 'power', signal: 'VCC' }] },
      { name: 'DIN', x: cx + 0.5 * p, y, signals: [] },
      { name: 'DOUT', x: cx + 1.5 * p, y, signals: [] },
    ];
  }

  private getPixelElements() {
    if (!this.shadowRoot) {
      return null;
    }
    if (!this.pixelElements) {
      this.pixelElements = Array.from(this.shadowRoot.querySelectorAll('rect.pixel'));
    }
    return this.pixelElements;
  }

  setPixel(pixel: number, { r, g, b }: RGB) {
    const pixelElements = this.getPixelElements();
    if (!pixelElements) {
      return;
    }

    if (pixel < 0 || pixel >= pixelElements.length) {
      return;
    }
    pixelElements[pixel].style.fill = `rgb(${r * 255},${g * 255},${b * 255})`;
  }

  /**
   * Resets all the pixels to off state (r=0, g=0, b=0).
   */
  reset() {
    const pixelElements = this.getPixelElements();
    for (const element of pixelElements ?? []) {
      element.style.fill = '';
    }
  }

  private animateStep = () => {
    const time = new Date().getTime();
    const { pixels } = this;
    const pixelValue = (n: number) => (n % 2000 > 1000 ? 1 - (n % 1000) / 1000 : (n % 1000) / 1000);
    for (let pixel = 0; pixel < pixels; pixel++) {
      this.setPixel(pixel, {
        r: pixelValue(pixel * 100 + time),
        g: pixelValue(pixel * 100 + time + 200),
        b: pixelValue(pixel * 100 + time + 400),
      });
    }
    this.animationFrame = requestAnimationFrame(this.animateStep);
  };

  updated() {
    if (this.animation && !this.animationFrame) {
      this.animationFrame = requestAnimationFrame(this.animateStep);
    } else if (!this.animation && this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  render() {
    const { pixels, radius, background } = this;
    const pixelElements = [];
    const width = radius * 2;
    const height = radius * 2 + pinHeight;
    for (let i = 0; i < pixels; i++) {
      const angle = (i / pixels) * 360;
      pixelElements.push(
        svg`<rect
          class="pixel"
          x="${radius - 2.5}"
          y="${pcbWidth / 2 - 2.5}"
          width="5"
          height="5"
          fill="white"
          stroke="black"
          stroke-width="0.25"
          transform="rotate(${angle} ${radius} ${radius})"/>`
      );
    }
    this.pixelElements = null; // Invalidate element cache

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
            <rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />
          </pattern>
        </defs>
        <rect
          fill="url(#pin-pattern)"
          height="${pinHeight + 1}"
          width=${4 * 2.54}
          transform="translate(${radius - (4 * 2.54) / 2}, ${radius * 2 - 1})"
        />
        <circle
          cx="${radius}"
          cy="${radius}"
          r="${radius - pcbWidth / 2}"
          fill="transparent"
          stroke-width="${pcbWidth}"
          stroke="${background}"
        />
        ${pixelElements}
      </svg>
    `;
  }
}
