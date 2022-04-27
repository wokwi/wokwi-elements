import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin, i2c } from './pin';

type CanvasContext = CanvasRenderingContext2D | null | undefined;
@customElement('wokwi-ssd1351')
export class Ssd1351Element extends LitElement {
  /**
   * The pixel data to draw on the element's internal &lt;canvas&gt;.
   * If you change the underlaying pixel data without updating the
   * `imageData` reference, call the `redraw()` method to update the
   * screen with your changes.
   */
  @property() imageData: ImageData;

  readonly width = 170;
  readonly height = 170;
  private screenWidth = 128;
  private screenHeight = 128;
  private canvas: HTMLCanvasElement | null | undefined = void 0;
  private ctx: CanvasContext = null;

  readonly pinInfo: ElementPin[] = [
    { name: 'GND', x: 103.5, y: 12, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'VIN', x: 93.5, y: 12.5, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'SCL', x: 45.5, y: 12.5, signals: [i2c('SCL')] },
    { name: 'SDA', x: 36.5, y: 12.5, signals: [i2c('SDA')] },
    { name: 'RES', x: 54.5, y: 12.5, signals: [] },
    { name: 'DC', x: 64.5, y: 12.5, signals: [] },
    { name: 'CS', x: 74.5, y: 12.5, signals: [] },
  ];

  static get styles() {
    return css`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 21px;
        top: 21px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `;
  }

  constructor() {
    super();
    this.imageData = new ImageData(this.screenWidth, this.screenHeight);
  }

  /**
   * Used for initiating update of an imageData data which its reference wasn't changed
   */
  public redraw() {
    this.ctx?.putImageData(this.imageData, 0, 0);
  }

  private initContext() {
    this.canvas = this.shadowRoot?.querySelector('canvas');
    // No need to clear canvas rect - all images will have full opacity
    this.ctx = this.canvas?.getContext('2d');
  }

  firstUpdated() {
    this.initContext();
    this.ctx?.putImageData(this.imageData, 0, 0);
  }

  updated() {
    if (this.imageData) {
      this.redraw();
    }
  }

  render() {
    const { width, height, screenWidth, screenHeight } = this;

    return html`<div class="container">
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect
          stroke="#BE9B72"
          fill="#025CAF"
          x=".5"
          y=".5"
          width="${width}"
          height="${height}"
          rx="13"
        />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="150" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="150" cy="148" r="5.5" />
          <circle cx="6" cy="148" r="5.5" />
        </g>

        <!-- 128 x 128 screen -->
        <rect
          x="${width / 2 - screenWidth / 2}"
          y="${height / 2 - screenHeight / 2}"
          fill="#1A1A1A"
          width="${screenWidth}"
          height="${screenHeight}"
        />

        <!-- All texts -->
        <g transform="translate(${width / 2 - (this.pinInfo.length * 10) / 2 + 1} 8)">
          <text
            fill="#FFF"
            text-anchor="middle"
            font-size="5"
            font-weight="300"
            font-family="monospace"
          >
            <tspan x="10" y="0">GND</tspan>
            <tspan x="20" y="0">VCC</tspan>
            <tspan x="30" y="0">SLC</tspan>
            <tspan x="40" y="0">SDA</tspan>
            <tspan x="50" y="0">RES</tspan>
            <tspan x="60" y="0">DC</tspan>
            <tspan x="70" y="0">CS</tspan>
          </text>
        </g>

        <!-- Star -->
        <g transform="translate(40,6)">
          <path
            fill="#FFF"
            d="M0 0l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
            stroke="#FF"
          />
        </g>

        <!-- PINS -->
        <g
          transform="translate(${width / 2 - (this.pinInfo.length * 10) / 2} 9)"
          fill="#9D9D9A"
          stroke-width="0.4"
        >
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="40.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="30.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="20.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="10.5" cy="3.5" r="3.5" />
        </g>
      </svg>
      <canvas width="${screenWidth}" height="${screenHeight}" class="pixelated"> </canvas>
    </div>`;
  }
}
