import { customElement, html, LitElement, property, svg } from 'lit-element';

const SPACE_KEY = 32;
const SHIFT_KEY = 16;

const customKeydownEvent = new KeyboardEvent('keydown', {
  code: 'Space',
});

const customKeyupEvent = new KeyboardEvent('keyup', {
  code: 'Space',
});

function isNumeric(text: string) {
  return !isNaN(parseFloat(text));
}

@customElement('wokwi-membrane-keypad')
export class MembraneKeypadElement extends LitElement {
  @property() threeColumns = false;

  private pressedKeys = new Set<string>();
  private shiftPressed = false;

  renderKey(text: string, x: number, y: number) {
    const keyClass = isNumeric(text) ? 'blue-key' : 'red-key';
    let keyId = `key${text}`;
    if (text === '*') {
      keyId = 'keyAsterisk';
    } else if (text === '#') {
      keyId = 'keyHash';
    }

    return svg`<g
      transform="translate(${x} ${y})"
      tabindex="0"
      class=${keyClass}
      id=${keyId}
      @blur=${(e: FocusEvent) => {
        this.up(text, e);
      }}
      @mousedown=${() => this.down(text)}
      @mouseup=${() => this.up(text)}
      @touchstart=${() => this.down(text)}
      @touchend=${() => this.up(text)}
      @keydown=${(e: KeyboardEvent) =>
        (e.keyCode === SPACE_KEY || e.code === 'Space') && this.down(text, e)}
      @keyup=${(e: KeyboardEvent) =>
        (e.keyCode === SPACE_KEY || e.code === 'Space') && this.up(text, e)}
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
        height="76mm"
        version="1.1"
        viewBox="0 0 ${width} 76"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${(e: KeyboardEvent) => this.keyStrokeDown(e.keyCode)}
        @keyup=${(e: KeyboardEvent) => this.keyStrokeUp(e.keyCode)}
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

  private down(key: string, event?: UIEvent) {
    if (!this.pressedKeys.has(key)) {
      if (event) {
        const currTarget = event.currentTarget as SVGElement;
        currTarget.classList.add('pressed');
      }
      this.pressedKeys.add(key);
      this.dispatchEvent(
        new CustomEvent('button-press', {
          detail: { key },
        })
      );
    }
  }

  private up(key: string, event?: UIEvent) {
    if (this.pressedKeys.has(key)) {
      if (event) {
        const currTarget = event.currentTarget as SVGElement;
        currTarget.classList.remove('pressed');
      }
      this.pressedKeys.delete(key);
      this.dispatchEvent(
        new CustomEvent('button-release', {
          detail: { key },
        })
      );
    }
  }

  private defineKey(key: number) {
    let keyName;
    const numKey = key - 48;

    switch (key) {
      case SHIFT_KEY:
        if (!this.shiftPressed) {
          this.shiftPressed = true;
        }
        break;
      case 48: // falls through
      case 49: // falls through
      case 50: // falls through
      case 51:
        if (this.shiftPressed) {
          keyName = '#keyHash';
          break;
        }
      // falls through
      case 52: // falls through
      case 53: // falls through
      case 54: // falls through
      case 55: // falls through
      case 56:
        if (this.shiftPressed) {
          keyName = '#keyAsterisk';
          break;
        }
      // falls through
      case 57:
        keyName = `#key${numKey}`;
        break;
      case 65:
        keyName = '#keyA';
        break;
      case 66:
        keyName = '#keyB';
        break;
      case 67:
        keyName = '#keyC';
        break;
      case 68:
        keyName = '#keyD';
        break;
      default:
        console.log('Not a key');
        break;
    }
    return keyName;
  }

  private keyStrokeDown(key: number) {
    let selectedKey;
    const keyName = this.defineKey(key);

    if (keyName) {
      selectedKey = this.shadowRoot?.querySelector(keyName);
      selectedKey?.dispatchEvent(customKeydownEvent);
    }
  }

  private keyStrokeUp(key: number) {
    let selectedKey = this.shadowRoot?.querySelector('.pressed');
    const keyName = this.defineKey(key);

    if (key === SHIFT_KEY) {
      this.shiftPressed = false;
      selectedKey?.classList.remove('pressed');
      return;
    }

    if (keyName) {
      selectedKey = this.shadowRoot?.querySelector(keyName);
      selectedKey?.dispatchEvent(customKeyupEvent);
    }
  }
}
