import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';

@customElement('wokwi-stepper-motor')
export class StepperMotorElement extends LitElement {
  @property() angle = 0;
  @property() value = '';
  @property() units = '';

  readonly pinInfo: ElementPin[] = [
    { name: 'A+', y: 237, x: 108, number: 1, signals: [] },
    { name: 'A-', y: 237, x: 98, number: 2, signals: [] },
    { name: 'B+', y: 237, x: 117, number: 3, signals: [] },
    { name: 'B-', y: 237, x: 127, number: 4, signals: [] },
  ];

  render() {
    return html`
      <svg
        width="57mm"
        height="63.349mm"
        version="1.1"
        viewBox="0 0 57 63.349"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="motor-body"
            x1="17.567"
            x2="197.27"
            y1="171.8"
            y2="171.8"
            gradientTransform="matrix(.31539 0 0 .31539 9.0021 56.33)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#666" offset="0" />
            <stop stop-color="#fff" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient5454"
            x1="339.07"
            x2="478.3"
            y1="660.79"
            y2="660.79"
            gradientTransform="matrix(.083446 0 0 .083446 9.845 56.471)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9d9d9d" offset="0" />
            <stop stop-color="#9d9d9d" stop-opacity="0" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient29501"
            x1="33.418"
            x2="53.905"
            y1="114.39"
            y2="113.37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9d9d9d" offset="0" />
            <stop stop-color="#fdfafa" offset=".29501" />
            <stop offset="1" />
          </linearGradient>
        </defs>

        <!-- Body -->
        <g transform="translate(-14.38 -82.486)">
          <g stroke-linecap="round" stroke-linejoin="round">
            <rect
              x="14.543"
              y="82.648"
              width="56.675"
              height="55.731"
              rx="4.7308"
              ry="4.6584"
              fill="url(#motor-body)"
              stroke="#000"
              stroke-width=".3245"
            />
            <circle cx="20.407" cy="88.675" r="1.7314" fill="#666" stroke-width=".47984" />
            <circle
              cx="65.732"
              cy="88.585"
              r="1.7314"
              fill="#666"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".47984"
            />
            <ellipse cx="65.704" cy="88.613" rx="1.0232" ry=".99314" fill="#e6e6e6" />
            <circle
              cx="66.278"
              cy="133.65"
              r="1.7314"
              fill="#666"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".47984"
            />
            <ellipse cx="66.25" cy="133.54" rx="1.0232" ry=".99314" fill="#e6e6e6" />
            <circle
              cx="19.6"
              cy="133.13"
              r="1.7314"
              fill="#666"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".47984"
            />
            <ellipse cx="19.572" cy="133.16" rx="1.0232" ry=".99314" fill="#ccc" />
            <ellipse cx="20.378" cy="88.702" rx="1.0232" ry=".99314" fill="#ccc" />

            <!-- Rotator -->
            <circle
              cx="43.816"
              cy="111.05"
              r="10.25"
              fill="#868686"
              fill-opacity=".89602"
              opacity=".73"
              stroke="url(#linearGradient29501)"
              stroke-width=".41429"
            />
            <path
              transform="rotate(${this.angle}, 43.82, 111.2)"
              d="m40.056 106.86a5.3616 5.3616 0 0 0-1.9696 4.1497 5.3616 5.3616 0 0 0 5.3616 5.3616 5.3616 5.3616 0 0 0 5.3616-5.3616 5.3616 5.3616 0 0 0-1.9672-4.1497z"
              fill="#4d4d4d"
              stroke="url(#linearGradient5454)"
              stroke-width=".57968"
            />
          </g>

          <g
            transform="matrix(-.0031398 -.26456 .26456 -.0031398 32.829 149.58)"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
          >
            <!-- Pins -->
            <path
              id="pin"
              fill="#9f9f9f"
              d="m15.259 56.3c-0.382-2.2e-5 -0.74801 0.15196-1.019 0.42194-0.27002 0.26998-0.42104 0.63698-0.42106 1.019-2.2e-5 0.382 0.15096 0.74801 0.42094 1.019 0.27098 0.27002 0.63698 0.42204 1.019 0.42206 5.242 2.96e-4 23.147 0.0013 26.132 0.0015 0.233 1.4e-5 0.42301-0.18998 0.42302-0.42398 3.1e-5 -0.545 8.4e-5 -1.489 1.15e-4 -2.035 1.3e-5 -0.233-0.18998-0.42301-0.42298-0.42302-2.985-1.68e-4 -20.89-0.0012-26.132-0.0015z"
            />

            <use xlink:href="#pin" y="-9.6" />
            <use xlink:href="#pin" y="-19.2" />
            <use xlink:href="#pin" y="-28.8" />

            <!-- Text -->
            <text
              transform="rotate(90)"
              font-family="arial"
              font-size="14.667px"
              text-align="center"
              text-anchor="middle"
            >
              <tspan x="45" y="-58.62619" font-size="14px">${this.units}</tspan>
              <tspan x="45" y="-75.066772" font-size="24px">${this.value}</tspan>
            </text>
          </g>
        </g>
      </svg>
    `;
  }
}
