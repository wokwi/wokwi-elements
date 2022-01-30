import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementPin } from './pin';

@customElement('wokwi-ks2e-m-dc5')
export class KS2EMDC5Element extends LitElement {
  y1pos = 8.85;
  y2pos = 70.5;
  x1pos = 14.7;
  x2pos = 55;
  x3pos = 95.3;
  x4pos = 155.8;

  get pinInfo(): ElementPin[] {
    return [
      { name: '1', x: this.x1pos, y: this.y1pos, signals: [], description: '1' },
      { name: '4', x: this.x2pos, y: this.y1pos, signals: [], description: '4' },
      { name: '6', x: this.x3pos, y: this.y1pos, signals: [], description: '6' },
      {
        name: '8',
        x: this.x4pos,
        y: this.y1pos,
        signals: [{ type: 'power', signal: 'GND' }],
        description: '8',
      },
      { name: '9', x: this.x1pos, y: this.y2pos, signals: [], description: '9' },
      { name: '11', x: this.x2pos, y: this.y2pos, signals: [], description: '11' },
      { name: '13', x: this.x3pos, y: this.y2pos, signals: [], description: '13' },
      { name: '16', x: this.x4pos, y: this.y2pos, signals: [], description: '16' },
    ];
  }

  render() {
    return html`
      <svg
        width="44mm"
        height="21mm"
        version="1.1"
        viewBox="0 0 44 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="Dot-1-9"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-1"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-7"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-1-9-5"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-9"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-1-8"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
          <marker
            id="Dot-7-5"
            overflow="visible"
            orient="auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 5.6666667 5.6666667"
          >
            <path
              transform="scale(.5)"
              d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
              fill="context-stroke"
              fill-rule="evenodd"
              stroke="context-stroke"
              stroke-width="1pt"
            />
          </marker>
        </defs>
        <g transform="translate(13.701 -21.216)">
          <g fill="#f7b93c" stroke="#dda137" stroke-linejoin="round">
            <rect
              x="-13.011"
              y="21.905"
              width="42.62"
              height="19.62"
              ry=".97145"
              stroke-width="1.3796"
              style="paint-order:markers stroke fill"
            />
            <g transform="matrix(2.1 0 0 2.1 -16.665 -23.882)" stroke-width=".95238">
              <ellipse
                cx="3.2649"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="13.425"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="8.3449"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="21.045"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
            </g>
            <g transform="matrix(2.1 0 0 2.1 -16.665 -7.5676)" stroke-width=".95238">
              <ellipse
                cx="3.2649"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="13.425"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="8.3449"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
              <ellipse
                cx="21.045"
                cy="22.591"
                rx=".25858"
                ry=".25858"
                style="paint-order:markers stroke fill"
              />
            </g>
          </g>
          <g transform="matrix(2.6758 0 0 2.6758 -25.633 -36.842)" fill="none" stroke="#000">
            <g stroke-width=".1">
              <path d="m17.562 25.47v0.89433" marker-start="url(#Dot-1-9)" />
              <path d="m17.603 26.314h-2.4l0.38789-0.52508" />
            </g>
            <g>
              <path d="m14.562 25.47v0.5974" marker-start="url(#Dot)" stroke-width=".10016" />
              <path d="m14.556 26.017h0.35558" stroke-width=".1" />
            </g>
            <g stroke-width=".1">
              <path d="m16.062 25.47v0.5974" marker-start="url(#Dot-1)" />
              <path d="m16.107 26.016h-0.6665" />
            </g>
            <g stroke-width=".1">
              <path d="m19.562 25.452v0.94466" marker-start="url(#Dot-7)" />
              <rect
                x="19.128"
                y="26.364"
                width=".868"
                height=".40514"
                rx="0"
                stroke-linecap="square"
                stroke-miterlimit="3.6"
                style="paint-order:markers stroke fill"
              />
            </g>
            <g transform="matrix(1 0 0 -1 0 53.164)" stroke-width=".1">
              <path d="m17.562 25.47v0.89433" marker-start="url(#Dot-1-9-5)" />
              <path d="m17.603 26.314h-2.4l0.38789-0.52508" />
              <path d="m14.562 25.47v0.5974" marker-start="url(#Dot-9)" />
              <path d="m14.556 26.017h0.35558" />
              <path d="m16.062 25.47v0.5974" marker-start="url(#Dot-1-8)" />
              <path d="m16.107 26.016h-0.6665" />
              <path d="m19.562 25.452v0.94466" marker-start="url(#Dot-7-5)" />
            </g>
          </g>
          <g fill="#000000" font-family="sans-serif" stroke-width=".26458">
            <text
              x="-10.592069"
              y="28.565601"
              font-size="3.5278px"
              font-weight="bold"
              style="line-height:0"
              xml:space="preserve"
            >
              <tspan x="-10.592069" y="28.565601" style="line-height:1">KS2E-M-DC5</tspan>
              <tspan x="-10.592069" y="32.09338" style="line-height:1">⠀</tspan>
            </text>
            <text
              x="-10.511464"
              y="32.048359"
              font-size="2.4694px"
              style="line-height:0"
              xml:space="preserve"
            >
              <tspan x="-10.511464" y="32.048359" style="line-height:1">DC 5V</tspan>
              <tspan x="-10.511464" y="34.517799" style="line-height:1">1A/125V AC</tspan>
              <tspan x="-10.511464" y="36.98724" style="line-height:1">2A/⠀30V DC</tspan>
            </text>
          </g>
        </g>
      </svg>
    `;
  }
}
