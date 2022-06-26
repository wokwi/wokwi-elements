// Reference: https://www.jaycar.com.au/medias/sys_master/images/images/9665859715102/XC3726-duinotech-1-5in-128x128-oled-colour-display-modulegallery5-300.jpg

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
    { name: 'GND', x: 55.5, y: 13.5, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'VIN', x: 65.5, y: 13.5, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'SCL', x: 75.5, y: 13.5, signals: [i2c('SCL')] },
    { name: 'SDA', x: 85.5, y: 13.5, signals: [i2c('SDA')] },
    { name: 'RES', x: 95.5, y: 13.5, signals: [] },
    { name: 'DC', x: 105.5, y: 13.5, signals: [] },
    { name: 'CS', x: 115.5, y: 13.5, signals: [] },
  ];

  static get styles() {
    return css`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 19px;
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
          width="${width - 5}"
          height="${height - 5}"
          rx="13"
        />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="${width - 21.5}" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="${width - 21.5}" cy="${height - 21.5}" r="5.5" />
          <circle cx="6" cy="${height - 21.5}" r="5.5" />
        </g>

        <!-- 128 x 128 screen -->
        <rect x="19" y="21" fill="#1A1A1A" width="${screenWidth}" height="${screenHeight}" />

        <!-- All texts -->
        <g transform="translate(46.5 8)">
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
            <tspan x="69" y="0">CS</tspan>
          </text>
        </g>

        <!-- PINS -->
        <g transform="translate(45 13.5)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="0" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="0" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="0" r="3.5" />
          <circle stroke="#009E9B" cx="40.5" cy="0" r="3.5" />
          <circle stroke="#E8D977" cx="30.5" cy="0" r="3.5" />
          <circle stroke="#C08540" cx="20.5" cy="0" r="3.5" />
          <circle stroke="#B4AEAB" cx="10.5" cy="0" r="3.5" />
        </g>
      </svg>
      <canvas width="${screenWidth}" height="${screenHeight}" class="pixelated"> </canvas>
    </div>`;
  }
}
