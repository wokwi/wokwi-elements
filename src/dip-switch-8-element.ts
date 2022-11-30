import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';

@customElement('wokwi-dip-switch-8')
export class DipSwitch8Element extends LitElement {
  @property({ type: Array }) values = [0, 0, 0, 0, 0, 0, 0, 0];

  readonly pinInfo: ElementPin[] = [
    { name: '1a', number: 1, y: 51.3, x: 7.5, signals: [] },
    { name: '2a', number: 2, y: 51.3, x: 17.2, signals: [] },
    { name: '3a', number: 3, y: 51.3, x: 26.7, signals: [] },
    { name: '4a', number: 4, y: 51.3, x: 36.5, signals: [] },
    { name: '5a', number: 5, y: 51.3, x: 45.9, signals: [] },
    { name: '6a', number: 6, y: 51.3, x: 55.6, signals: [] },
    { name: '7a', number: 7, y: 51.3, x: 65.2, signals: [] },
    { name: '8a', number: 8, y: 51.3, x: 74.8, signals: [] },

    { name: '8b', number: 9, y: 1.7, x: 74.8, signals: [] },
    { name: '7b', number: 10, y: 1.7, x: 65.2, signals: [] },
    { name: '6b', number: 11, y: 1.7, x: 55.6, signals: [] },
    { name: '5b', number: 12, y: 1.7, x: 45.9, signals: [] },
    { name: '4b', number: 13, y: 1.7, x: 36.5, signals: [] },
    { name: '3b', number: 14, y: 1.7, x: 26.7, signals: [] },
    { name: '2b', number: 15, y: 1.7, x: 17.2, signals: [] },
    { name: '1b', number: 16, y: 1.7, x: 7.5, signals: [] },
  ];

  /**
   * Change switch state
   * @param index Which switch to change
   */
  private toggleSwitch(index: number) {
    this.values[index] = this.values[index] ? 0 : 1;
    this.dispatchEvent(new InputEvent('switch-change', { detail: index }));
    this.requestUpdate(); // force lit to render again
  }

  /** Change switch state by keyboard 1-8 press */
  private onKeyDown(e: KeyboardEvent) {
    e.stopPropagation(); // stop storybook reacting to the key press
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const keyIndex = keys.indexOf(e.key);
    if (keyIndex !== -1) {
      this.toggleSwitch(keyIndex);
    }
  }

  private drawSwitch(index: number, x: number) {
    return svg` 
        <rect
        @click=${() => this.toggleSwitch(index)}
        x="${x + 4.693}"
        y="21.2"
        width="5.8168"
        height="13"
      />
      <use
        @click=${() => this.toggleSwitch(index)}
        xlink:href="#switch"
        x="${x}"
        y=${this.values[index] ? -7.2 : 0}
      />`;
  }

  private preventTextSelection(e: MouseEvent) {
    if (e.detail > 1) {
      // On double click
      e.preventDefault();
    }
  }

  render() {
    return html`
      <svg
        tabindex="0"
        @keydown=${this.onKeyDown}
        @mousedown=${this.preventTextSelection}
        width="82.87"
        height="55.355"
        version="1.1"
        viewBox="0 0 82.87 55.355"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="switch"
            transform="translate(-66.856 -41.367)"
            fill="#fffef4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".77094"
            d="m72.096 69.764s1.3376 0.38247 2.1066 0.39196c0.76893 0.0095 2.44-0.39196 2.44-0.39196 0.39596-0.06361 0.72389 0.32286 0.72389 0.72389v4.3678c0 0.40104-0.52337 0.72389-0.72389 0.72389s-1.6592-0.41225-2.4288-0.40316c-0.76958 0.0091-2.1177 0.40316-2.1177 0.40316-0.39396 0.075-0.72389-0.32286-0.72389-0.72389v-4.3678c0-0.40104 0.32286-0.72389 0.72389-0.72389z"
          />
        </defs>

        <!-- Pins -->
        <g
          transform="translate(-66.856 -41.367)"
          fill="#454837"
          fill-opacity=".49194"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".76744"
        >
          <rect x="73.181" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="83.135" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.424" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="102.45" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.55" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121.12" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.78" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.62" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="73.516" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="83.469" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.758" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="102.78" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.89" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121.45" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="131.11" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.95" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
        </g>

        <!-- Board -->
        <rect x="0" y="8.5" width="90.5" height="38.0831" fill="#d72c2c" />

        <!-- Text -->
        <text fill="#fffef4" font-family="sans-serif" font-size="7.66px" style="line-height:1.25">
          <tspan x="6.340" y="18.03">ON</tspan>
          <tspan x="4.35" y="43.28">1</tspan>
          <tspan x="14.485" y="43.28">2</tspan>
          <tspan x="23.956" y="43.28">3</tspan>
          <tspan x="33.57" y="43.28">4</tspan>
          <tspan x="43.05" y="43.28">5</tspan>
          <tspan x="52.36" y="43.28">6</tspan>
          <tspan x="62.45" y="43.28">7</tspan>
          <tspan x="71.92" y="43.28">8</tspan>
        </text>

        <!-- Switches -->
        <g fill="#917c6f" stroke-width=".77094">
          ${this.drawSwitch(0, 0)}<!-- -->
          ${this.drawSwitch(1, 9.6)}<!-- -->
          ${this.drawSwitch(2, 19.4)}<!-- -->
          ${this.drawSwitch(3, 29.1)}<!-- -->
          ${this.drawSwitch(4, 38.5)}<!-- -->
          ${this.drawSwitch(5, 48.1)}<!-- -->
          ${this.drawSwitch(6, 57.7)}<!-- -->
          ${this.drawSwitch(7, 67.3)}<!-- -->
        </g>
      </svg>
    `;
  }
}
