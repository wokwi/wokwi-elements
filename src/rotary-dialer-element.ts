import { customElement, html, LitElement, property, svg } from 'lit-element';

@customElement('wokwi-rotary-dialer')
export class RotaryDialerElement extends LitElement {
  @property() value = 0;

  render() {
    const { value } = this;
    return html`
      <svg
        width="266px"
        height="266px"
        viewBox="0 0 266 266"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>rotary-dialer</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="rotary-dialer">
            <g id="rotate-layer" transform="translate(1.000000, 1.000000)">
              <circle
                id="Oval"
                stroke="#979797"
                stroke-width="3"
                fill="#1F1F1F"
                cx="132.5"
                cy="132.5"
                r="131"
              ></circle>
              <circle
                id="Oval"
                stroke="#979797"
                stroke-width="2"
                fill="#D8D8D8"
                cx="134.5"
                cy="131.5"
                r="72.5"
              ></circle>
              <path
                d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,196 C96.4786916,196 107,206.521308 107,219.5 C107,232.478692 96.4786916,243 83.5,243 C70.5213084,243 60,232.478692 60,219.5 C60,206.521308 70.5213084,196 83.5,196 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M33.5,115 C46.4786916,115 57,125.521308 57,138.5 C57,151.478692 46.4786916,162 33.5,162 C20.5213084,162 10,151.478692 10,138.5 C10,125.521308 20.5213084,115 33.5,115 Z M236.5,98 C249.478692,98 260,108.521308 260,121.5 C260,134.478692 249.478692,145 236.5,145 C223.521308,145 213,134.478692 213,121.5 C213,108.521308 223.521308,98 236.5,98 Z M41.5,65 C54.4786916,65 65,75.5213084 65,88.5 C65,101.478692 54.4786916,112 41.5,112 C28.5213084,112 18,101.478692 18,88.5 C18,75.5213084 28.5213084,65 41.5,65 Z M216.5,50 C229.478692,50 240,60.5213084 240,73.5 C240,86.4786916 229.478692,97 216.5,97 C203.521308,97 193,86.4786916 193,73.5 C193,60.5213084 203.521308,50 216.5,50 Z M74.5,27 C87.4786916,27 98,37.5213084 98,50.5 C98,63.4786916 87.4786916,74 74.5,74 C61.5213084,74 51,63.4786916 51,50.5 C51,37.5213084 61.5213084,27 74.5,27 Z M174.5,16 C187.478692,16 198,26.5213084 198,39.5 C198,52.4786916 187.478692,63 174.5,63 C161.521308,63 151,52.4786916 151,39.5 C151,26.5213084 161.521308,16 174.5,16 Z M122.5,7 C135.478692,7 146,17.5213084 146,30.5 C146,43.4786916 135.478692,54 122.5,54 C109.521308,54 99,43.4786916 99,30.5 C99,17.5213084 109.521308,7 122.5,7 Z"
                id="slots"
                fill-opacity="0.5"
                fill="#D8D8D8"
              ></path>
            </g>
            <g id="static-back">
                <circle id="Oval" fill-opacity="0.5" fill="#070707" cx="132.5" cy="132.5" r="132.5"></circle>
                <text id="1" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="232" y="130">1</tspan>
                </text>
                <text id="0" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="129" y="243">0</tspan>
                </text>
                <text id="9" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                <tspan x="78" y="227">9</tspan>
                </text>
                <text id="8" opacity="0.699999988" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="40" y="194">8</tspan>
              </text>
                <text id="7" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="28" y="145">7</tspan>
              </text>
                <text id="6" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="35" y="97">6</tspan>
              </text>
                <text id="5" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="68" y="58">5</tspan>
              </text>
              <text id="4" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="117" y="41">4</tspan>
              </text>
                <text id="3" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="168" y="47">3</tspan>
                </text>
                <text id="2" font-family="Monaco" font-size="21" font-weight="normal" fill="#FFFFFF">
                    <tspan x="210" y="79">2</tspan>
                </text>
                <path d="M226.05174,157.374131 L219.146498,196.964187 L232.956982,196.964187 L226.05174,157.374131 Z" id="Triangle" stroke="#979797" fill="#D8D8D8" transform="translate(226.051740, 175.964187) rotate(-92.000000) translate(-226.051740, -175.964187) "></path>
            </g>
        </g>
      </svg>
    `;
  }
}
