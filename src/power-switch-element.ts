import { css, customElement, html, LitElement } from 'lit-element';

// Based on a codepen from Jon Kantner (@jonkantner)

@customElement('wokwi-power-switch')
export class PowerSwitchElement extends LitElement {
  static get styles() {
    return css`
      :host {
        zoom: 0.3;
      }
      label,
      label:before,
      input[type='checkbox']:before,
      input[type='checkbox']:after {
        box-sizing: border-box;
        display: block;
      }
      label {
        --transDur: 0.2s;
        --shadowA: -1.5em 0 1.5em #8d273100, 1.5em 0 1.5em #8d273100, 0 0 3em #8d273144,
          0 6.5em 3em #0002;
        --shadowB: -1.5em 0 1.5em #8d273100, 1.5em 0 1.5em #8d273100, 0 3.25em 3em #8d273144,
          0 6.5em 3em #0002;
        --shadowC: -1.5em 0 1.5em #8d273177, 1.5em 0 1.5em #8d273177, 0 3.25em 3em #8d273144,
          0 6.5em 3em #0002;
        --shadowD: -1.5em 0 1.5em #8d273177, 1.5em 0 1.5em #8d273177, 0 6.5em 3em #8d273144,
          0 6.5em 3em #0002;
        --switchOnA: linear-gradient(90deg, #ecc0, #ecc 0.05em 0.45em, #ecc0) 50% 50% / 0.5em 4em
            no-repeat,
          linear-gradient(90deg, #0000, #0002 0.25em 0.75em, #0000) 50% 50% / 1em 4em no-repeat,
          linear-gradient(#0000, #0003 0.25em 4.25em, #0000) 50% 50% / 0.5em 4.5em no-repeat,
          radial-gradient(12em 6em at 0 0, #95001100 25%, #95001100 50%),
          radial-gradient(12em 6em at 100% 0, #95001100 25%, #95001100 50%),
          radial-gradient(100% 75% at center, #ff002c, #ff002c00 50%) 0 0 / 0.6em 0.6em,
          radial-gradient(6em 9em at 50% 10%, #ff002c00, #ff002c00 50%),
          radial-gradient(12em 6em at 0 90%, #ff002c00, #ff002c00 50%),
          radial-gradient(12em 6em at 100% 90%, #ff002c00, #ff002c00 50%),
          radial-gradient(9em 9em at 53% 87.5%, #ffc56400 5%, #ff002c00 20%, #ff002c00 50%),
          linear-gradient(#a90020 87.5%, #d4001d);
        --switchOnB: linear-gradient(90deg, #ecc0, #ecc 0.05em 0.45em, #ecc0) 50% 50% / 0.5em 4em
            no-repeat,
          linear-gradient(90deg, #0000, #0002 0.25em 0.75em, #0000) 50% 50% / 1em 4em no-repeat,
          linear-gradient(#0000, #0003 0.25em 4.25em, #0000) 50% 50% / 0.5em 4.5em no-repeat,
          radial-gradient(12em 6em at 0 0, #950011 25%, #95001100 50%),
          radial-gradient(12em 6em at 100% 0, #950011 25%, #95001100 50%),
          radial-gradient(100% 75% at center, #ff002c, #ff002c00 50%) 0 0 / 0.6em 0.6em,
          radial-gradient(6em 9em at 50% 10%, #ff002c, #ff002c00 50%),
          radial-gradient(12em 6em at 0 90%, #ff002c, #ff002c00 50%),
          radial-gradient(12em 6em at 100% 90%, #ff002c, #ff002c00 50%),
          radial-gradient(9em 9em at 53% 87.5%, #ffc564 5%, #ff002c 20%, #ff002c00 50%),
          linear-gradient(#950011 87.5%, #c10017);
        --switchOffA: radial-gradient(4em 4em at center, #ecc0 1.45em, #ecc 1.5em 1.95em, #ecc0 2em),
          radial-gradient(5em 5em at center, #0000 1em, #0002 1.5em 2em, #0000 2.5em),
          radial-gradient(100% 75% at center, #ff002c 25%, #ff002c00 50%) 0 0 / 0.6em 0.6em,
          radial-gradient(4em 12em at 50% 100%, #ff002c00, #ff002c00 50%),
          radial-gradient(12em 6em at 0 10%, #ff002c00, #ff002c00 50%),
          radial-gradient(12em 6em at 100% 10%, #ff002c00, #ff002c00 50%),
          radial-gradient(9em 9em at 50% 12.5%, #ffc56400 5%, #ff002c00 20%, #ff002c00 50%),
          linear-gradient(#c10017, #c10017);
        --switchOffB: radial-gradient(4em 4em at center, #ecc0 1.45em, #ecc 1.5em 1.95em, #ecc0 2em),
          radial-gradient(5em 5em at center, #0000 1em, #0002 1.5em 2em, #0000 2.5em),
          radial-gradient(100% 75% at center, #ff002c 25%, #ff002c00 50%) 0 0 / 0.6em 0.6em,
          radial-gradient(4em 12em at 50% 100%, #ff002c, #ff002c00 50%),
          radial-gradient(12em 6em at 0 10%, #ff002c, #ff002c00 50%),
          radial-gradient(12em 6em at 100% 10%, #ff002c, #ff002c00 50%),
          radial-gradient(9em 9em at 50% 12.5%, #ffc564 5%, #ff002c 20%, #ff002c00 50%),
          linear-gradient(#c10017, #c10017);
        border-radius: 0.5em;
        box-shadow: 0 0.1em 0 #565057, 0 0 0 0.1em #2e3138, 0 0 0.2em 0.3em #000 inset,
          0 1em 0.2em 0 #000 inset, 0 -1em 0.2em 0 #000 inset, 0.5em 0 0.1em #e7454e inset,
          0.6em 0 0.1em #8d2731 inset, -0.5em 0 0.1em #e7454e inset, -0.6em 0 0.1em #8d2731 inset,
          0 1.5em 0.2em 0 #800007 inset, 0 2em 0.2em 0 #8d2731 inset, 0 3em 0.2em 0 #ff8a90 inset,
          0 4em 0.2em 0 #f8f4f6 inset, 0 -1.5em 0.3em 0 #a0001c inset, 0 -2em 0.2em 0 #9f0020 inset,
          0 -3em 0.2em 0 #ae1433 inset, 0 -3.5em 0.2em 0 #941028 inset;
        font-size: 16px;
        margin: 1.5em;
        position: relative;
        width: 13em;
        height: 17em;
        -webkit-tap-highlight-color: transparent;
      }
      label:before {
        background: linear-gradient(#454954, #2a272d);
        border-radius: 0.25em;
        box-shadow: 0 0 0 0.2em #000 inset, 0 0.3em 0 0 #737a8c inset;
        content: '';
        margin: auto;
        position: absolute;
        top: -1.5em;
        left: -1.5em;
        width: 16em;
        height: 20em;
        z-index: -1;
      }
      input[type='checkbox'],
      input[type='checkbox']:before,
      input[type='checkbox']:after {
        transform-style: preserve-3d;
      }
      input[type='checkbox'] {
        animation: shadowOff var(--transDur) ease-in-out;
        border: 0;
        box-shadow: var(--shadowA);
        cursor: pointer;
        font-size: 1em;
        margin: 0;
        padding: 0;
        position: relative;
        top: 1.5em;
        left: 0.5em;
        width: 12em;
        height: 14em;
        transform: rotateX(-20deg) translateZ(0.75em);
        transition: transform var(--transDur) ease-in-out;
        -webkit-appearance: none;
        appearance: none;
      }
      input[type='checkbox']:checked {
        animation: shadowOn var(--transDur) ease-in-out;
        box-shadow: var(--shadowD);
        transform: rotateX(20deg) translateZ(0.75em);
      }
      input[type='checkbox']:before,
      input[type='checkbox']:after {
        color: #fff;
        content: '';
        filter: brightness(0.7);
        -webkit-filter: brightness(0.7);
        position: absolute;
        text-align: center;
        transition: box-shadow var(--transDur) ease-in-out, filter var(--transDur) ease-in-out,
          -webkit-filter var(--transDur) ease-in-out;
        width: 100%;
        height: 50%;
      }
      input[type='checkbox']:before {
        animation: switchBeforeOff var(--transDur) steps(1, start);
        background: var(--switchOnA);
        box-shadow: 0 0.2em 0 0 #fff0 inset, -0.5em -0.5em 0.5em #0000, 0.5em -0.5em 0.5em #0000;
        top: 0;
        transform: rotateX(-20deg);
        transform-origin: 50% 100%;
        z-index: 1;
      }
      input[type='checkbox']:after {
        animation: switchAfterOff var(--transDur) steps(1, start);
        background: var(--switchOffA);
        box-shadow: 0 -0.2em 0 0 #fff0 inset, -0.5em 0 0.5em #0007, 0.5em 0 0.5em #0007;
        top: 50%;
        transform: rotateX(20deg);
        transform-origin: 50% 0%;
      }
      input[type='checkbox']:checked:before,
      input[type='checkbox']:checked:after {
        filter: brightness(1);
        -webkit-filter: brightness(1);
      }
      input[type='checkbox']:checked:before {
        animation: switchBeforeOn var(--transDur) steps(1, start) forwards;
        box-shadow: 0 0.2em 0 0 #fff inset, -0.5em -0.5em 0.5em #0007, 0.5em -0.5em 0.5em #0007;
      }
      input[type='checkbox']:checked:after {
        animation: switchAfterOn var(--transDur) steps(1, start) forwards;
        box-shadow: 0 -0.2em 0 0 #fff7 inset, -0.5em 0 0.5em #0000, 0.5em 0 0.5em #0000;
      }
      input[type='checkbox']:focus {
        outline: transparent;
      }
      input[type='checkbox'].pristine,
      input[type='checkbox'].pristine:before,
      input[type='checkbox'].pristine:after {
        animation: none;
      }

      /* Animations */
      @keyframes shadowOn {
        from {
          box-shadow: var(--shadowA);
        }
        50% {
          box-shadow: var(--shadowB);
        }
        51% {
          box-shadow: var(--shadowC);
        }
        to {
          box-shadow: var(--shadowD);
        }
      }
      @keyframes shadowOff {
        from {
          box-shadow: var(--shadowD);
        }
        50% {
          box-shadow: var(--shadowC);
        }
        51% {
          box-shadow: var(--shadowB);
        }
        to {
          box-shadow: var(--shadowA);
        }
      }
      @keyframes switchBeforeOn {
        from,
        50% {
          background: var(--switchOnA);
        }
        to {
          background: var(--switchOnB);
        }
      }
      @keyframes switchBeforeOff {
        from,
        50% {
          background: var(--switchOnB);
        }
        to {
          background: var(--switchOnA);
        }
      }
      @keyframes switchAfterOn {
        from,
        50% {
          background: var(--switchOffA);
        }
        to {
          background: var(--switchOffB);
        }
      }
      @keyframes switchAfterOff {
        from,
        50% {
          background: var(--switchOffB);
        }
        to {
          background: var(--switchOffA);
        }
      }
    `;
  }

  render() {
    return html`
      <label>
        <input class="pristine" type="checkbox" name="switch" value="on" />
      </label>
    `;
  }
}
