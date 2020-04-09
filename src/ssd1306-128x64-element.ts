// Reference: https://cdn-learn.adafruit.com/assets/assets/000/036/494/original/lcds___displays_fabprint.png?1476374574
import { customElement, html, LitElement, property, SVGTemplateResult } from 'lit-element';

@customElement('wokwi-ssd1306-128x64-element')
export class Ssd1306128x64Element extends LitElement {
  readonly width = 150;
  readonly height = 116;
  private screenWidth = 128;
  private screenHeight = 64;
  @property() imageData: ImageData;

  constructor() {
    super();
    this.imageData = new ImageData(this.screenWidth, this.screenHeight);
  }

  putGivenImageData() {
    const canvas: HTMLCanvasElement | null | undefined = this.shadowRoot?.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    ctx.putImageData(this.imageData, 0, 0);
  }

  firstUpdated() {
    this.putGivenImageData();
  }

  render(): SVGTemplateResult {
    const { width, height, screenWidth, screenHeight } = this;
    return html`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <g transform="translate(8 26)">
          <!-- 128 x 64 screen -->
          <rect fill="#1A1A1A" width="${screenWidth}" height="${screenHeight}" />
          <!-- image holder -->
          <foreignObject width="${screenWidth}" height="${screenHeight}">
            <canvas width="${screenWidth}" height="${screenHeight}"></canvas>
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
          <!--Start -->
          <path
            d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
            stroke="#FFF"
          />

          <text transform="translate(25 3)" x="0" y="102">v2.1</text>

          <text transform="translate(40 3)">
            <tspan font-size="5" x="102" y="75">V5</tspan>
            <tspan font-size="3" x="102" y="81" font-weight="300">READY</tspan>
          </text>
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
