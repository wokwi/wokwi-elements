import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';

type CanvasContext = CanvasRenderingContext2D | null | undefined;
@customElement('wokwi-glcd-128x64')
export class GLCD12864Element extends LitElement {
  /**
   * The pixel data to draw on the element's internal &lt;canvas&gt;.
   * If you change the underlaying pixel data without updating the
   * `imageData` reference, call the `redraw()` method to update the
   * screen with your changes.
   */
  @property() imageData: ImageData;

  readonly width = 93;
  readonly height = 70;
  private displayWidth = 128; // multiplied with 1.473125 to adjust for screen size
  private displayHeight = 64;
  readonly pixelScaler = 0.5; // pixel size
  private screenWidth = this.displayWidth * this.pixelScaler;
  private screenHeight = this.displayHeight * this.pixelScaler;

  private canvas: HTMLCanvasElement | null | undefined = void 0;
  private ctx: CanvasContext = null;

  readonly pinInfo: ElementPin[] = [
    { name: 'LED-', x: 38.5, y: 185, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'LED+', x: 44.5, y: 185, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'VEE', x: 50.5, y: 185, signals: [] },
    { name: 'RST', x: 56.5, y: 185, signals: [] },
    { name: 'CS2', x: 62.5, y: 185, signals: [] },
    { name: 'CS1', x: 68.5, y: 185, signals: [] },
    { name: 'DB7', x: 74.5, y: 185, signals: [] },
    { name: 'DB6', x: 80.5, y: 185, signals: [] },
    { name: 'DB5', x: 86.5, y: 185, signals: [] },
    { name: 'DB4', x: 92.5, y: 185, signals: [] },
    { name: 'DB3', x: 98.5, y: 185, signals: [] },
    { name: 'DB2', x: 104.5, y: 185, signals: [] },
    { name: 'DB1', x: 110.5, y: 185, signals: [] },
    { name: 'DB0', x: 116.5, y: 185, signals: [] },
    { name: 'EN', x: 122.5, y: 185, signals: [] },
    { name: 'RW', x: 128.5, y: 185, signals: [] },
    { name: 'DI', x: 134.5, y: 185, signals: [] },
    { name: 'VO', x: 140.5, y: 185, signals: [] },
    { name: 'VDD', x: 146.5, y: 185, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'VSS', x: 152.5, y: 185, signals: [{ type: 'power', signal: 'GND' }] },
  ];

  static get styles() {
    return css`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 54px;
        top: 70.5px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `;
  }

  constructor() {
    super();
    this.imageData = new ImageData(this.displayWidth, this.displayHeight);
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
    return html` <div class="container">
      <svg
        width="${width}mm"
        height="${height}mm"
        viewBox="0 0 93 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- svg decoratives -->
        <rect width="93" height="70" style="fill:#529f5c" />
        <rect width="84" height="50.5" x="4.5" y="9.75" rx="2" style="fill:#3d4956" />
        <rect width="70.7" height="38.8" x="11.15" y="15.6" rx="2" style="fill:#28303d" />
        <rect width="74" height="3" x="9.5" y="11.5" rx="1" style="fill:#28303d" />
        <rect width="74" height="3" x="9.5" y="55.25" rx="1" style="fill:#28303d" />
        <rect width="74" height="1" x="9.5" y="13.5" rx=".5" style="fill:#4a5866" />
        <rect width="74" height="1" x="9.5" y="57.25" rx=".5" style="fill:#4a5866" />
        <!-- mounting holes -->
        <g fill="#ececec">
          <circle cx="2.5" cy="2.5" r="1.35" />
          <circle cx="90.5" cy="2.5" r="1.35" />
          <circle cx="90.5" cy="67.5" r="1.35" />
          <circle cx="2.5" cy="67.5" r="1.35" />
        </g>
        <!-- display panel -->
        <rect
          width="${screenWidth}"
          height="${screenHeight}"
          x="14.5"
          y="19"
          style="fill:#215da2"
        />
        <!-- text -->
        <text
          fill="#fff"
          text-anchor="start"
          font-size="2"
          font-weight="300"
          font-family="monospace"
          transform="rotate(-90)"
        >
          <tspan x="-66.5" y="14.5">LED-</tspan>
          <tspan x="-66.5" y="17.04">LED+</tspan>
          <tspan x="-66.5" y="19.58">VEE</tspan>
          <tspan x="-66.5" y="22.12">RST</tspan>
          <tspan x="-66.5" y="24.66">CS2</tspan>
          <tspan x="-66.5" y="27.2">CS1</tspan>
          <tspan x="-66.5" y="29.74">DB7</tspan>
          <tspan x="-66.5" y="32.28">DB6</tspan>
          <tspan x="-66.5" y="34.82">DB5</tspan>
          <tspan x="-66.5" y="37.36">DB4</tspan>
          <tspan x="-66.5" y="39.9">DB3</tspan>
          <tspan x="-66.5" y="42.44">DB2</tspan>
          <tspan x="-66.5" y="44.98">DB1</tspan>
          <tspan x="-66.5" y="47.52">DB0</tspan>
          <tspan x="-66.5" y="50.06">EN</tspan>
          <tspan x="-66.5" y="52.6">R/W</tspan>
          <tspan x="-66.5" y="55.14">D/I</tspan>
          <tspan x="-66.5" y="57.68">VO</tspan>
          <tspan x="-66.5" y="60.22">VDD</tspan>
          <tspan x="-66.5" y="62.76">VSS</tspan>
        </text>
        <!-- PINS -->
        <g transform="translate(14 65.5)" fill="#9D9D9A" stroke-width="0.2">
          <circle stroke="#262626" cx="0" cy="2.5" r="0.5" />
          <circle stroke="#ff0000" cx="2.54" cy="2.5" r="0.5" />
          <circle stroke="#c0c0c0" cx="5.08" cy="2.5" r="0.5" />
          <circle stroke="#808080" cx="7.62" cy="2.5" r="0.5" />
          <circle stroke="#ffff00" cx="10.16" cy="2.5" r="0.5" />
          <circle stroke="#ffff00" cx="12.7" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="15.24" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="17.78" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="20.32" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="22.86" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="25.4" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="27.94" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="30.48" cy="2.5" r="0.5" />
          <circle stroke="#FF00FF" cx="33.02" cy="2.5" r="0.5" />
          <circle stroke="#008080" cx="35.02" cy="2.5" r="0.5" />
          <circle stroke="#0000FF" cx="38.1" cy="2.5" r="0.5" />
          <circle stroke="#00FFFF" cx="40.64" cy="2.5" r="0.5" />
          <circle stroke="#C08540" cx="43.18" cy="2.5" r="0.5" />
          <circle stroke="#ff0000" cx="45.72" cy="2.5" r="0.5" />
          <circle stroke="#262626" cx="48.26" cy="2.5" r="0.5" />
        </g>
      </svg>
      <canvas
        width="${this.displayWidth}"
        height="${this.displayHeight}"
        style="width:${this.screenWidth * 3.78}; height:${this.screenHeight * 3.78};"
      ></canvas>
    </div>`;
  }
}
