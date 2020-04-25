import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * Renders a piezo electric buzzer.
 */
@customElement('wokwi-buzzer')
export class BuzzerElement extends LitElement {
  /**
   * Boolean representing if an electric signal is coming in the buzzer
   * If true a music note will be displayed on top of the buzzer
   */
  @property() hasSignal = false;

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 -12c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `;
  }

  render() {
    const buzzerOn = this.hasSignal;
    return html`
      <div class="buzzer-container">
        <svg
          width="17mm"
          height="42.862mm"
          version="1.1"
          viewBox="0 0 17 42.862"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(.84999 0 0 .84999 8.5115e-5 -209.59)">
            <circle cx="10" cy="287" r="9.5001" stroke="#000" />
            <g transform="matrix(.98546 0 0 .98546 .14539 4.1728)">
              <circle cx="10" cy="287" r="1.3673" fill="#ccc" stroke="#000" stroke-width=".25" />
            </g>
          </g>
          <path
            class="music-note"
            style="visibility: ${buzzerOn ? '' : 'hidden'}"
            d="m9.4927 22.263c-1.9844 0-2.3812 0.39688-2.3812 0.39688v1.6232c-0.05954-0.01984-0.13096-0.03572-0.19844-0.03572-0.32941 0-0.59531 0.26591-0.59531 0.59531 0 0.32941 0.26591 0.59531 0.59531 0.59531 0.32941 0 0.59531-0.26591 0.59531-0.59531v-1.5756c0.28972-0.09128 0.78978-0.17462 1.5875-0.19844v0.81756c-0.05953-0.01984-0.13096-0.03572-0.19844-0.03572-0.32941 0-0.59531 0.26591-0.59531 0.59531 0 0.32941 0.26591 0.59531 0.59531 0.59531 0.32941 0 0.59531-0.26591 0.59531-0.59531z"
            stroke-width=".39688"
          />
        </svg>
      </div>
    `;
  }
}
