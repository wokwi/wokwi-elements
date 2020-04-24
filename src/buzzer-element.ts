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
  @property() value = false;

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
        left: 50px;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
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
    const buzzerOn = this.value;
    return html`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${buzzerOn ? '' : 'hidden'}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>
        <svg
          width="17mm"
          height="17mm"
          version="1.1"
          viewBox="0 0 17 17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(.84999 0 0 .84999 8.5115e-5 -235.45)">
            <circle cx="10" cy="287" r="9.5001" stroke="#000" />
            <g transform="matrix(.98546 0 0 .98546 .14539 4.1728)">
              <circle cx="10" cy="287" r="1.3673" fill="#ccc" stroke="#000" stroke-width=".25" />
            </g>
          </g>
        </svg>
      </div>
    `;
  }
}
