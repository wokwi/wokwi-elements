import { customElement, html, property, svg } from 'lit-element';
import { LCD1602Element } from './lcd1602-element';

@customElement('wokwi-font-dump')
export class FontDumpElement extends LCD1602Element {
  @property({ type: Number }) from = 32;
  @property({ type: Number }) to = 127;
  @property({ type: Number }) lines = 14;

  render() {
    const indices = [];
    const { from, to, lines } = this;

    const lineHeight = 8;

    for (let i = from; i <= to; i++) {
      indices.push(i);
    }

    const total = to - from + 2;
    const columns = Math.ceil(total / lines);

    const translate = (index: number) => {
      const x = 10 + Math.floor(index / lines) * 24;
      const y = (index % lines) * lineHeight;
      return { x, y };
    };

    const width = columns * 24 - 8;
    const height = lines * lineHeight - 2;
    console.log(height);

    return html`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          path {
            fill: blue;
          }
          text {
            font-size: 5px;
            text-anchor: end;
          }
        </style>
        ${indices.map((char, index) => {
          const { x, y } = translate(index);
          return svg`
            <text x="${x - 3}" y="${y + 4}">${char}</text>
            <path transform="translate(${x}, ${y})" d=${this.path([char])} />
        `;
        })}
      </svg>
    `;
  }
}
