import { customElement, html, LitElement, property, svg } from 'lit-element';

const SPACE_KEY = 32;

@customElement('wokwi-membrane-keypad')
export class MembraneKeypadElement extends LitElement {
  @property() threeColumns = false;

  private pressedKeys = new Set<string>();

  isNumeric(text: string) {
    return !isNaN(parseFloat(text));
  }

  renderKey(text: string, x: number, y: number) {
    const keyStyle = this.isNumeric(text) ? 'blueKey' : 'redKey';

    return svg`<g
      transform="translate(${x} ${y})"
      tabindex="0"
      class=${keyStyle}
      @mousedown=${(e: MouseEvent) => this.down(text, e)}
      @mouseup=${(e: MouseEvent) => this.up(text, e)}
      @touchstart=${(e: TouchEvent) => this.down(text, e)}
      @touchend=${(e: TouchEvent) => this.up(text, e)}
      @keydown=${(e: KeyboardEvent) => e.keyCode === SPACE_KEY && this.down(text, e)}
      @keyup=${(e: KeyboardEvent) => e.keyCode === SPACE_KEY && this.up(text, e)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${text}</text>
    </g>`;
  }

  render() {
    const fourColumns = !this.threeColumns;
    const columnWidth = 15;
    const width = fourColumns ? 70.336 : 70.336 - columnWidth;

    return html`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blueKey:focus,
        .redKey:focus {
          filter: url(#shadow);
        }

        .blueKey:active,
        .blueKey.pressed {
          fill: #4e50d7;
        }

        .redKey:active,
        .redKey.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${width}mm"
        height="76mm"
        version="1.1"
        viewBox="0 0 ${width} 76"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />

          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${width}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${fourColumns ? 65 : 65 - columnWidth}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey('1', 7, 10.7)}</g>
          <g>${this.renderKey('2', 22, 10.7)}</g>
          <g>${this.renderKey('3', 37, 10.7)}</g>
          <g>${this.renderKey('4', 7, 25)}</g>
          <g>${this.renderKey('5', 22, 25)}</g>
          <g>${this.renderKey('6', 37, 25)}</g>
          <g>${this.renderKey('7', 7, 39.3)}</g>
          <g>${this.renderKey('8', 22, 39.3)}</g>
          <g>${this.renderKey('9', 37, 39.3)}</g>
          <g>${this.renderKey('0', 22, 53.6)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey('*', 7, 53.6)}</g>
          <g>${this.renderKey('#', 37, 53.6)}</g>
          ${fourColumns &&
          svg`
              <g>${this.renderKey('A', 52, 10.7)}</g>
              <g>${this.renderKey('B', 52, 25)}</g>
              <g>${this.renderKey('C', 52, 39.3)}</g>
              <g>${this.renderKey('D', 52, 53.6)}</g>
          `}
        </g>
      </svg>
    `;
  }

  private down(key: string, event: any) {
    if (!this.pressedKeys.has(key)) {
      event.currentTarget.classList.add('pressed');
      this.pressedKeys.add(key);
      this.dispatchEvent(
        new CustomEvent('button-press', {
          detail: { key },
        })
      );
    }
  }

  private up(key: string, event: any) {
    if (this.pressedKeys.has(key)) {
      event.currentTarget.classList.remove('pressed');
      this.pressedKeys.delete(key);
      this.dispatchEvent(
        new CustomEvent('button-release', {
          detail: { key },
        })
      );
    }
  }
}
