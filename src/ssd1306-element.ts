// Reference: https://cdn-learn.adafruit.com/assets/assets/000/036/494/original/lcds___displays_fabprint.png?1476374574
import { customElement, html, LitElement, property, SVGTemplateResult, css } from 'lit-element';
import { ElementPin, i2c } from './pin';

type CanvasContext = CanvasRenderingContext2D | null | undefined;
@customElement('wokwi-ssd1306')
export class SSD1306Element extends LitElement {
  /**
   * The pixel data to draw on the element's internal &lt;canvas&gt;.
   * If you change the underlaying pixel data without updating the
   * `imageData` reference, call the `redraw()` method to update the
   * screen with your changes.
   */
  @property() imageData: ImageData;

  readonly width = 150;
  readonly height = 116;
  private screenWidth = 128;
  private screenHeight = 64;
  private canvas: HTMLCanvasElement | null | undefined = void 0;
  private ctx: CanvasContext = null;

  readonly pinInfo: ElementPin[] = [
    { name: 'DATA', x: 36.5, y: 12.5, signals: [i2c('SDA')] },
    { name: 'CLK', x: 45.5, y: 12.5, signals: [i2c('SCL')] },
    { name: 'DC', x: 54.5, y: 12.5, signals: [] },
    { name: 'RST', x: 64.5, y: 12.5, signals: [] },
    { name: 'CS', x: 74.5, y: 12.5, signals: [] },
    { name: '3V3', x: 83.5, y: 12.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
    { name: 'VIN', x: 93.5, y: 12.5, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'GND', x: 103.5, y: 12, signals: [{ type: 'power', signal: 'GND' }] },
  ];

  static get styles() {
    return css`
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

  render(): SVGTemplateResult {
    const { width, height, screenWidth, screenHeight, imageData } = this;
    const visibility = imageData ? 'visible' : 'hidden';
    return html`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <g transform="translate(11.4 26)">
          <!-- 128 x 64 screen -->
          <rect fill="#1A1A1A" width="${screenWidth}" height="${screenHeight}" />
          <!-- image holder -->
          <foreignObject
            ?visibility="${visibility}"
            width="${screenWidth}"
            height="${screenHeight}"
          >
            <canvas width="${screenWidth}" height="${screenHeight}" class="pixelated"></canvas>
          </foreignObject>
        </g>

        <!-- All texts -->
        <g
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="MarkerFelt-Wide, Marker Felt, monospace"
        >
          <g transform="translate(37 3)">
            <text x="0" y="5">Data</text>
            <text x="19" y="5">SA0</text>
            <text x="41" y="5">CS</text>
            <text x="60" y="5">Vin</text>
          </g>

          <g transform="translate(41 17)">
            <text x="0" y="6">C1k</text>
            <text x="12" y="6">DC</text>
            <text x="23" y="6">Rst</text>
            <text x="39" y="6">3v3</text>
            <text x="58" y="6">Gnd</text>
          </g>
          <!-- Star -->
          <path
            d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
            stroke="#FFF"
          />
        </g>

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </g>
    </svg> `;
  }
}
