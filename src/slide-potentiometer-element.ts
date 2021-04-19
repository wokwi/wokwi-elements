import { customElement, html, LitElement, property, svg } from 'lit-element';

@customElement('wokwi-slide-potentiometer')
export class SlidePotentiometerElement extends LitElement {
  @property() value = 0;

  render() {
    const { value } = this;
    return html`
      <svg
        width="45mm"
        height="19mm"
        version="1.1"
        viewBox="0 0 45 19"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="linearGradient1085">
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#6f6f6f" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient1003"
            x1="47.774"
            x2="60.67"
            y1="48.576"
            y2="48.643"
            gradientTransform="matrix(.81818 0 0 1 -106.69 -110.55)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#linearGradient1085"
          />
          <linearGradient
            id="linearGradient1089"
            x1="47.774"
            x2="60.439"
            y1="48.576"
            y2="48.549"
            gradientTransform="matrix(.81818 0 0 1 18.486 20.324)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#linearGradient1085"
          />
        </defs>
        <g transform="translate(-40.09 -55.937)">
          <rect
            x="40.09"
            y="60.937"
            width="45"
            height="9"
            rx=".2"
            ry=".2"
            fill="#767676"
            fill-rule="evenodd"
          />
          <rect x="43.352" y="63.366" width="38.5" height="4.1427" rx=".1" ry=".1" fill="#6e3333" />
          <g transform="rotate(13.024 41.817 65.256)" stroke="#000">
            <circle cx="41.817" cy="65.256" r=".92486" fill="#858585" stroke-width=".05" />
            <path d="m41.368 66.064 0.8975-1.6155" fill="none" stroke-width=".151" />
          </g>
          <g transform="rotate(16.386 62.16 209.21)" stroke="#000">
            <circle cx="41.817" cy="65.256" r=".92486" fill="#858585" stroke-width=".05" />
            <path d="m41.368 66.064 0.8975-1.6155" fill="none" stroke-width=".151" />
          </g>
          <g>
            <rect x="59.84" y="64.537" width="5.5" height="1.8" />
            <rect
              x="56.59"
              y="55.937"
              width="4.5"
              height="19"
              rx=".3"
              ry=".3"
              fill="url(#linearGradient1089)"
              style="mix-blend-mode:normal"
            />
            <rect
              transform="scale(-1)"
              x="-68.59"
              y="-74.937"
              width="4.5"
              height="19"
              rx=".3"
              ry=".3"
              fill="url(#linearGradient1003)"
              style="mix-blend-mode:normal"
            />
            <rect x="60.828" y="55.937" width="3.5" height="19" fill="#171717" />
            <rect x="62.29" y="55.937" width=".6" height="19" fill="#efefef" />
          </g>
        </g>
      </svg>
    `;
  }
}
