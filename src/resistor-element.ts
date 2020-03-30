import { customElement, html, LitElement, property } from 'lit-element';

const bandColors: { [key: number]: string } = {
  [-2]: 'silver',
  [-1]: '#c4a000', // gold
  0: 'black',
  1: 'brown',
  2: 'red',
  3: 'orange',
  4: 'yellow',
  5: 'green',
  6: 'blue',
  7: 'violet',
  8: 'gray',
  9: 'white',
};

@customElement('wokwi-resistor')
export class ResistorElement extends LitElement {
  @property() value = '1000';

  private breakValue(value: number) {
    const exponent =
      value >= 1e10
        ? 9
        : value >= 1e9
        ? 8
        : value >= 1e8
        ? 7
        : value >= 1e7
        ? 6
        : value >= 1e6
        ? 5
        : value >= 1e5
        ? 4
        : value >= 1e4
        ? 3
        : value >= 1e3
        ? 2
        : value >= 1e2
        ? 1
        : value >= 1e1
        ? 0
        : value >= 1
        ? -1
        : -2;
    const base = Math.round(value / 10 ** exponent);
    if (value === 0) {
      return [0, 0];
    }
    if (exponent < 0 && base % 10 === 0) {
      return [base / 10, exponent + 1];
    }
    return [Math.round(base % 100), exponent];
  }

  render() {
    const { value } = this;
    const numValue = parseFloat(value);
    const [base, exponent] = this.breakValue(numValue);
    const band1Color = bandColors[Math.floor(base / 10)];
    const band2Color = bandColors[base % 10];
    const band3Color = bandColors[exponent];
    return html`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.645" height=".63826" fill="#eaeaea" />
        <g stroke-width=".14479">
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="#d5b597"
          />
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="url(#a)"
            opacity=".44886"
          />
          <path
            d="m4.6917 0c-0.10922 0-0.21558 0.00884-0.31985 0.022624v2.955c0.10426 0.013705 0.21063 0.02234 0.31985 0.02234 0.15603 0 0.3074-0.015363 0.4522-0.043551v-2.9129c-0.1448-0.028193-0.29617-0.043551-0.4522-0.043552z"
            fill="${band1Color}"
          />
          <path d="m6.4482 0.29411v2.4117h0.77205v-2.4117z" fill="${band2Color}" />
          <path d="m8.5245 0.29411v2.4117h0.77205v-2.4117z" fill="${band3Color}" />
          <path
            d="m11.054 0c-0.15608 0-0.30749 0.015253-0.45277 0.043268v2.9134c0.14527 0.028012 0.29669 0.043268 0.45277 0.043268 0.10912 0 0.21539-0.00867 0.31957-0.02234v-2.955c-0.10418-0.013767-0.21044-0.022624-0.31957-0.022624z"
            fill="#c4a000"
          />
        </g>
      </svg>
    `;
  }
}
