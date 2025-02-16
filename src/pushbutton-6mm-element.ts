import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from './pin';
import { ctrlCmdPressed, SPACE_KEYS } from './utils/keys';

@customElement('wokwi-pushbutton-6mm')
export class Pushbutton6mmElement extends LitElement {
  @property() color = 'red';
  @property() pressed = false;
  @property() label = '';
  @property({ type: Boolean, attribute: 'xray' }) xray = false;
  private static pushbuttonCounter = 0;
  private uniqueId;

  readonly pinInfo: ElementPin[] = [
    { name: '1.l', x: 0, y: 2.2, signals: [] },
    { name: '2.l', x: 0, y: 21, signals: [] },
    { name: '1.r', x: 28, y: 2.2, signals: [] },
    { name: '2.r', x: 28, y: 21, signals: [] },
  ];

  constructor() {
    super();
    this.uniqueId = 'pushbutton' + Pushbutton6mmElement.pushbuttonCounter++;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .button-active-circle {
        opacity: 0;
      }

      button:active .button-active-circle {
        opacity: 1;
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `;
  }

  render() {
    const { color, label, uniqueId, xray } = this;
    const buttonFill = this.pressed ? `url(#grad-down-${uniqueId})` : `url(#grad-up-${uniqueId})`;

    return html`
      <button
        aria-label="${label} ${color} pushbutton 6mm"
        @mousedown=${this.down}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchend=${this.up}
        @pointerleave=${this.up}
        @keydown=${(e: KeyboardEvent) => SPACE_KEYS.includes(e.key) && this.down()}
        @keyup=${(e: KeyboardEvent) => SPACE_KEYS.includes(e.key) && this.up(e)}
      >
        <svg
          width="7.4129977mm"
          height="6mm"
          version="1.1"
          viewBox="-3 0 7.4954476 6"
          id="svg17"
          sodipodi:docname="pushbutton.svg"
          inkscape:version="1.3 (0e150ed, 2023-07-21)"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <sodipodi:namedview
            id="namedview17"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:showpageshadow="2"
            inkscape:pageopacity="0.0"
            inkscape:pagecheckerboard="0"
            inkscape:deskcolor="#d1d1d1"
            inkscape:document-units="mm"
            inkscape:zoom="16.962656"
            inkscape:cx="4.5983365"
            inkscape:cy="10.582069"
            inkscape:window-width="1920"
            inkscape:window-height="1200"
            inkscape:window-x="0"
            inkscape:window-y="0"
            inkscape:window-maximized="0"
            inkscape:current-layer="svg17"
          />
          <defs id="defs8">
            <linearGradient id="grad-up-${uniqueId}" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" id="stop1" />
              <stop stop-color="${color}" offset="0.3" id="stop2" />
              <stop stop-color="${color}" offset="0.5" id="stop3" />
              <stop offset="1" id="stop4" />
            </linearGradient>
            <linearGradient
              id="grad-down-${uniqueId}"
              x1="9.8219995"
              x2="2.178"
              y1="9.8219995"
              y2="2.178"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ffffff" offset="0" id="stop5" />
              <stop stop-color="${color}" offset="0.3" id="stop6" />
              <stop stop-color="${color}" offset="0.5" id="stop7" />
              <stop offset="1" id="stop8" />
            </linearGradient>
          </defs>
          <rect
            x="-2.2698734"
            y="-0.033367086"
            width="6.0667338"
            height="6.0667338"
            rx="0.22244692"
            ry="0.22244692"
            fill="#464646"
            id="rect8"
            style="stroke-width:0.505561"
          />
          <rect
            x="-1.8907025"
            y="0.3458038"
            width="5.3083925"
            height="5.3083925"
            rx="0.1066734"
            ry="0.1066734"
            fill="#eaeaea"
            id="rect9"
            style="stroke-width:0.505561"
          />
          <g
            class="clickable-element"
            id="g17"
            transform="matrix(0.50556117,0,0,0.50556117,-2.2698734,-0.03336708)"
          >
            <circle cx="6" cy="6" r="3.822" fill="${buttonFill}" id="circle15" />
            <circle
              class="button-active-circle"
              cx="6"
              cy="6"
              r="3.822"
              fill="url(#grad-down-${uniqueId})"
              id="circle16"
              style="fill:url(#grad-down-$%7BuniqueId%7D)"
            />
            <circle
              cx="6"
              cy="6"
              r="2.9000001"
              fill="${color}"
              stroke="#2f2f2f"
              stroke-opacity="0.47"
              stroke-width="0.08"
              id="circle17"
            />
            <rect
              style="fill:#b3b3b3;stroke-width:1.72987;paint-order:stroke markers fill"
              id="rect18"
              width="1.455145"
              height="0.85429525"
              x="-1.4441905"
              y="0.59993488"
              rx="0.014974313"
            />
            ${xray
              ? svg`
             <rect
       style="opacity:0.3;fill:#b3b3b3;stroke-width:3.86235;paint-order:stroke markers fill"
       id="rect18-7"
       width="12.124171"
       height="0.51113945"
       x="-0.047361366"
       y="0.90351838"
       rx="0.12476496" />
    <rect
       style="opacity:0.3;fill:#b3b3b3;stroke-width:3.86235;paint-order:stroke markers fill"
       id="rect18-7-4"
                width="12.124171"
                height="0.51113945"
                x="-0.098103404"
                y="10.614529"
                rx="0.12476496"
              />
            `
              : ''}
            <rect
              style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
              id="rect18-5"
              width="1.3927531"
              height="0.85429525"
              x="-1.3971666"
              y="10.694777"
              rx="0.014332262"
            />
            <rect
              style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
              id="rect18-0"
              width="1.3927531"
              height="0.85429525"
              x="11.989052"
              y="0.59516686"
              rx="0.014332262"
            />
            <rect
              style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
              id="rect18-0-4"
              width="1.3927531"
              height="0.85429525"
              x="11.985411"
              y="10.744086"
              rx="0.014332262"
            />
          </g>
        </svg>
      </button>
      <span class="label">${this.label}</span>
    `;
  }

  private down() {
    if (!this.pressed) {
      this.pressed = true;
      this.dispatchEvent(new Event('button-press'));
    }
  }

  private up(e: KeyboardEvent | MouseEvent) {
    if (this.pressed && !ctrlCmdPressed(e)) {
      this.pressed = false;
      this.dispatchEvent(new Event('button-release'));
    }
  }
}
