// Reference: https://cdn-learn.adafruit.com/assets/assets/000/036/494/original/lcds___displays_fabprint.png?1476374574
import { customElement, html, LitElement, property, SVGTemplateResult } from 'lit-element';

@customElement('wokwi-ssd1306-element')
export class Ssd1306ElementElement extends LitElement {
  @property() width = 141;
  @property() height = 108;
  @property() imageData: ImageData = new ImageData(128, 64);

  putGivenImageData() {
    const canvas: HTMLCanvasElement | null | undefined = this.shadowRoot?.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    ctx.putImageData(this.imageData, 0, 0);
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.putGivenImageData();
  }

  render(): SVGTemplateResult {
    const { width, height } = this;
    return html`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="140" height="106.5" rx="13" />
        <g transform="translate(4 6)" fill="#59340A" stroke="#BE9B72">
          <circle cx="126" cy="6" r="5.5" />
          <circle cx="126" cy="92" r="5.5" />
          <circle cx="6" cy="91" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
        </g>

        <!-- 128 x 64 screen -->
        <path fill="#1A1A1A" d="M21 26h100v54H21z" />

        <foreignObject transform="translate(21 26)" width="100" height="64">
          <canvas width="100" height="54"></canvas>
        </foreignObject>

        <path
          d="M21 80h100v8.411C99.405 93.471 82.739 96 71 96c-11.739 0-28.405-2.53-50-7.589V80z"
          fill="#070707"
        />

        <!-- All texts -->
        <g
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="MarkerFelt-Wide, Marker Felt"
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

          <text transform="translate(22 3)" x="0" y="102">v2.1</text>

          <text transform="translate(28.5 3)">
            <tspan font-size="7" x="102" y="75">V5</tspan>
            <tspan x="102" y="81" font-weight="300">READY</tspan>
          </text>
        </g>

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A">
          <circle cx="70.5" cy="3.5" r="3.5" />
          <circle cx="60.5" cy="3.5" r="3.5" />
          <circle cx="50.5" cy="3.5" r="3.5" />
          <circle cx="41.5" cy="3.5" r="3.5" />
          <circle cx="31.5" cy="3.5" r="3.5" />
          <circle cx="21.5" cy="3.5" r="3.5" />
          <circle cx="12.5" cy="3.5" r="3.5" />
          <circle cx="3.5" cy="3.5" r="3.5" />
        </g>
      </g>
    </svg> `;
  }
}
