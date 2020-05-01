import { css, customElement, html, LitElement, property } from 'lit-element';

enum Digit {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}

enum Direction {
  normal = 'normal',
  reverse = 'reverse',
}
@customElement('wokwi-rotary-dialer')
export class RotaryDialerElement extends LitElement {
  @property() value: number | '' = 0;

  // todo: the degrees increases in ~40 when counting up the digits, would do that reusable if I could tweak the @keyframe from js
  static get styles() {
    return css`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      @keyframes dialOne {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(56deg);
        }
      }
      @keyframes dialTwo {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(87deg);
        }
      }
      @keyframes dialThree {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(115deg);
        }
      }
      @keyframes dialFour {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(143deg);
        }
      }
      @keyframes dialFive {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(173deg);
        }
      }
      @keyframes dialSix {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(204deg);
        }
      }
      @keyframes dialSeven {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(232deg);
        }
      }
      @keyframes dialEight {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(260deg);
        }
      }
      @keyframes dialNine {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(290deg);
        }
      }

      @keyframes dialZero {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(320deg);
        }
      }
      .dialer-anim {
        transform-origin: center;
      }
    `;
  }

  private static matchDigit(
    slots: SVGAElement,
    digit: Digit,
    direction: Direction = Direction.normal,
    duration = '1000ms',
    timingFn = 'ease'
  ) {
    switch (digit) {
      case Digit.zero:
        slots?.setAttribute('style', `animation: dialZero ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.one:
        slots?.setAttribute('style', `animation: dialOne ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.two:
        slots?.setAttribute('style', `animation: dialTwo ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.three:
        slots?.setAttribute(
          'style',
          `animation: dialThree ${duration} 1 ${direction} ${timingFn};`
        );
        break;
      case Digit.four:
        slots?.setAttribute('style', `animation: dialFour ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.five:
        slots?.setAttribute('style', `animation: dialFive ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.six:
        slots?.setAttribute('style', `animation: dialSix ${duration} 1 ${direction} ${timingFn};`);
        break;
      case Digit.seven:
        slots?.setAttribute(
          'style',
          `animation: dialSeven ${duration} 1 ${direction} ${timingFn};`
        );
        break;
      case Digit.eight:
        slots?.setAttribute(
          'style',
          `animation: dialEight ${duration} 1 ${direction} ${timingFn};`
        );
        break;
      case Digit.nine:
        slots?.setAttribute('style', `animation: dialNine ${duration} 1 ${direction} ${timingFn};`);
        break;
      default:
        slots?.removeAttribute('style');
    }
  }

  private static addReverseDialerAnim(slots: SVGAElement, digit: number) {
    // When the user leaves the mouse (eq of lifting the finger) it goes back
    RotaryDialerElement.matchDigit(slots, digit, Direction.reverse, '2000ms');
  }

  private addDialerAnim(digit: number) {
    this.handleRotation(digit);
  }

  private removeDialerAnim() {
    const slots = this.shadowRoot?.querySelector('#slots');
    slots?.classList.remove('dialer-anim');
    slots?.removeAttribute('style');
  }

  private down(num: number) {
    // When you click on a digit, the circle-hole of that digit
    // should go all the way until the finger stop.
    this.removeDialerAnim();
    this.addDialerAnim(num);
    this.dispatchEvent(
      new CustomEvent('dialer-grab', {
        detail: { num },
      })
    );
  }

  private onValueChange(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const lastValue = target.value;
    target.value = '';
    const digit = parseInt(lastValue);
    this.handleRotation(digit);
  }

  private handleRotation(digit: number) {
    const slots = this.shadowRoot?.querySelector('#slots') as SVGAElement;
    // Need to resolve an issue when typing the sam num twice in a row the onanimationend won't
    // get triggered
    slots.onanimationend = () => RotaryDialerElement.addReverseDialerAnim(slots, digit);
    const rAF = requestAnimationFrame(() => {
      slots?.classList.add('dialer-anim');
      RotaryDialerElement.matchDigit(slots, digit);
      cancelAnimationFrame(rAF);
    });
  }

  render() {
    return html`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="266" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)">
            <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
            <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
            <path
              d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
              id="slots"
              stroke="#fff"
              fill-opacity="0.5"
              fill="#D8D8D8"
            ></path>
          </g>
          <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
          <g class="text" font-family="Monaco" font-size="21" fill="#FFF">
            <text @mousedown=${() => this.down(0)} x="129" y="243">0</text>
            <text @mousedown=${() => this.down(9)} x="78" y="230">9</text>
            <text @mousedown=${() => this.down(8)} x="40" y="194">8</text>
            <text @mousedown=${() => this.down(7)} x="28" y="145">7</text>
            <text @mousedown=${() => this.down(6)} x="35" y="97">6</text>
            <text @mousedown=${() => this.down(5)} x="72" y="58">5</text>
            <text @mousedown=${() => this.down(4)} x="117" y="41">4</text>
            <text @mousedown=${() => this.down(3)} x="168" y="47">3</text>
            <text @mousedown=${() => this.down(2)} x="210" y="79">2</text>
            <text @mousedown=${() => this.down(1)} x="230" y="126">1</text>
          </g>
          <path
            d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
            id="Triangle"
            stroke="#979797"
            fill="#D8D8D8"
            transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231) "
          ></path>
        </g>
      </svg>
    `;
  }
}
