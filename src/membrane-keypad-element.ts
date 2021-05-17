import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pinsFemalePattern } from './patterns/pins-female';
import { ElementPin } from './pin';
import { SPACE_KEYS } from './utils/keys';

const rowPositions = [10.7, 25, 39.3, 53.6];
const columnPositions = [7, 22, 37, 52];

function isNumeric(text: string) {
  return !isNaN(parseFloat(text));
}

@customElement('wokwi-membrane-keypad')
export class MembraneKeypadElement extends LitElement {
  /**
   * Number of columns (3 or 4)
   */
  @property() columns: '3' | '4' = '4';

  /**
   * Whether to display a connector beneath the keypad
   */
  @property() connector = false;

  // prettier-ignore
  /**
   * Key labels
   */
  @property({ type: Array }) keys = [
    '1',  '2',  '3',  'A',
    '4',  '5',  '6',  'B',
    '7',  '8',  '9',  'C',
    '*',  '0',  '#',  'D',
  ];

  get pinInfo(): ElementPin[] {
    switch (this.columns) {
      case '3':
        return [
          { name: 'R1', x: 76.5, y: 338, signals: [] },
          { name: 'R2', x: 86, y: 338, signals: [] },
          { name: 'R3', x: 95.75, y: 338, signals: [] },
          { name: 'R4', x: 105.25, y: 338, signals: [] },
          { name: 'C1', x: 115, y: 338, signals: [] },
          { name: 'C2', x: 124.5, y: 338, signals: [] },
          { name: 'C3', x: 134, y: 338, signals: [] },
        ];

      default:
        return [
          { name: 'R1', x: 100, y: 338, signals: [] },
          { name: 'R2', x: 110, y: 338, signals: [] },
          { name: 'R3', x: 119.5, y: 338, signals: [] },
          { name: 'R4', x: 129, y: 338, signals: [] },
          { name: 'C1', x: 138.5, y: 338, signals: [] },
          { name: 'C2', x: 148, y: 338, signals: [] },
          { name: 'C3', x: 157.75, y: 338, signals: [] },
          { name: 'C4', x: 167.5, y: 338, signals: [] },
        ];
    }
  }

  private pressedKeys = new Set<string>();

  renderKey(row: number, column: number) {
    const text = this.keys[row * 4 + column] ?? '';
    const keyClass = isNumeric(text) ? 'blue-key' : 'red-key';
    const keyName = text.toUpperCase();

    return svg`<g
      transform="translate(${columnPositions[column]} ${rowPositions[row]})"
      tabindex="0"
      class=${keyClass}
      data-key-name=${keyName}
      @blur=${(e: FocusEvent) => {
        this.up(text, e.currentTarget as SVGElement);
      }}
      @mousedown=${() => this.down(text)}
      @mouseup=${() => this.up(text)}
      @touchstart=${() => this.down(text)}
      @touchend=${() => this.up(text)}
      @keydown=${(e: KeyboardEvent) =>
        SPACE_KEYS.includes(e.key) && this.down(text, e.currentTarget as SVGElement)}
      @keyup=${(e: KeyboardEvent) =>
        SPACE_KEYS.includes(e.key) && this.up(text, e.currentTarget as SVGElement)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${text}</text>
    </g>`;
  }

  render() {
    const { connector } = this;
    const fourColumns = this.columns === '4';
    const columnWidth = 15;
    const pinWidth = 2.54;
    const width = fourColumns ? 70.336 : 70.336 - columnWidth;
    const connectorWidth = fourColumns ? pinWidth * 8 : pinWidth * 7;
    const height = 76 + (connector ? 15 : 0);

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

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${(e: KeyboardEvent) => this.keyStrokeDown(e.key)}
        @keyup=${(e: KeyboardEvent) => this.keyStrokeUp(e.key)}
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
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${pinsFemalePattern}
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

        <!-- Connector -->
        ${connector
          ? svg`
            <g transform="translate(${(width - connectorWidth) / 2}, 76)">
              <rect width="${connectorWidth}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${connectorWidth}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${connectorWidth}" height="2.54" fill="url(#pins-female)" />
            </g>
          `
          : null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0, 0)}</g>
          <g>${this.renderKey(0, 1)}</g>
          <g>${this.renderKey(0, 2)}</g>
          <g>${this.renderKey(1, 0)}</g>
          <g>${this.renderKey(1, 1)}</g>
          <g>${this.renderKey(1, 2)}</g>
          <g>${this.renderKey(2, 0)}</g>
          <g>${this.renderKey(2, 1)}</g>
          <g>${this.renderKey(2, 2)}</g>
          <g>${this.renderKey(3, 1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3, 0)}</g>
          <g>${this.renderKey(3, 2)}</g>
          ${fourColumns &&
          svg`
              <g>${this.renderKey(0, 3)}</g>
              <g>${this.renderKey(1, 3)}</g>
              <g>${this.renderKey(2, 3)}</g>
              <g>${this.renderKey(3, 3)}</g>
          `}
        </g>
      </svg>
    `;
  }

  private keyIndex(key: string) {
    const index = this.keys.indexOf(key);
    return { row: Math.floor(index / 4), column: index % 4 };
  }

  private down(key: string, element?: Element) {
    if (!this.pressedKeys.has(key)) {
      if (element) {
        element.classList.add('pressed');
      }
      this.pressedKeys.add(key);
      this.dispatchEvent(
        new CustomEvent('button-press', {
          detail: { key, ...this.keyIndex(key) },
        })
      );
    }
  }

  private up(key: string, element?: Element) {
    if (this.pressedKeys.has(key)) {
      if (element) {
        element.classList.remove('pressed');
      }
      this.pressedKeys.delete(key);
      this.dispatchEvent(
        new CustomEvent('button-release', {
          detail: { key, ...this.keyIndex(key) },
        })
      );
    }
  }

  private keyStrokeDown(key: string) {
    const text = key.toUpperCase();
    const selectedKey = this.shadowRoot?.querySelector(`[data-key-name="${text}"]`);
    if (selectedKey) {
      this.down(text, selectedKey as SVGElement);
    }
  }

  private keyStrokeUp(key: string) {
    const text = key.toUpperCase();
    const selectedKey = this.shadowRoot?.querySelector(`[data-key-name="${text}"]`);
    const pressedKeys: NodeListOf<SVGElement> | undefined =
      this.shadowRoot?.querySelectorAll('.pressed');

    if (key === 'Shift') {
      pressedKeys?.forEach((pressedKey) => {
        const pressedText = pressedKey.dataset.keyName;
        if (pressedText) {
          this.up(pressedText, pressedKey);
        }
      });
    }

    if (selectedKey) {
      this.up(text, selectedKey as SVGElement);
    }
  }
}
