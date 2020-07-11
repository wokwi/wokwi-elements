import { css, customElement, html, LitElement, property, svg } from 'lit-element';

@customElement('wokwi-breadboard')
export class BreadboardElement extends LitElement {
  @property() size: 'full' | 'half' | 'mini' = 'full';

  static get styles() {
    return css`
      .container {
        border-radius: 3px;
        background: #eeefed;
      }
      .bottom {
        transform: translate(0, 166px);
      }
      .spot {
        font-size: 7px;
        opacity: 0.6;
      }
    `;
  }
  // Next value is the sum of the prev value + the amount we want to add
  private increaseBy(numToAdd: number, initValue: number, membersCount: number) {
    const xPositions = [initValue];
    for (let i = 1; i <= membersCount; i++) {
      xPositions.push(xPositions[i - 1] + numToAdd);
    }
    return xPositions;
  }

  private getFullSized(increaseFn: (num: number, init: number, count: number) => number[]) {
    const gapBetweenBlocks = increaseFn(55, 35, 10); // Will create a space between each pattern
    const textPositions = increaseFn(45, 53, 13);
    return html`
      <svg width="163mm" height="53mm" xmlns="http://www.w3.org/2000/svg" class="container">
        <defs>
          <pattern id="points" width="2mm" height="2mm" patternUnits="userSpaceOnUse" x="3" y="5">
            <rect width="1mm" height="1mm" fill-opacity="0.5" />
          </pattern>
          <pattern
            id="points-wide"
            width="2.5mm"
            height="2.5mm"
            patternUnits="userSpaceOnUse"
            x="5.3"
            y="5.5"
          >
            <rect width="1mm" height="1mm" fill-opacity="0.5" />
          </pattern>
        </defs>

        <g class="top">
          <g class="plus" transform="scale(0.5)">
            <line x1="4" x2="17" y1="10.5" y2="10.5" stroke="#F97466" stroke-width="1" />
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#F97466" stroke-width="1" />
          </g>
          <g class="minus" transform="translate(0 23) scale(0.5)">
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#8CE2F3" stroke-width="1" />
          </g>
          <rect x="6mm" y="5" width="149mm" height="1" fill-opacity="0.5" fill="#F97466" />
          <rect
            transform="translate(${gapBetweenBlocks[0]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[1]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[2]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[3]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[4]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[5]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[6]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[7]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[8]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[9]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect x="6mm" y="30" width="149mm" height="1" fill-opacity="0.5" fill="#8CE2F3" />
          <g class="plus" transform="translate(600 0) scale(0.5)">
            <line x1="4" x2="17" y1="10.5" y2="10.5" stroke="#F97466" stroke-width="1" />
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#F97466" stroke-width="1" />
          </g>
          <g class="minus" transform="translate(600 23) scale(0.5)">
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#8CE2F3" stroke-width="1" />
          </g>
        </g>

        <g class="mid" transform="translate(0, 5)">
          <g transform="translate(585, 0)">
            <text class="spot" transform="translate(16, 47)">a</text>
            <text class="spot" transform="translate(16, 57)">b</text>
            <text class="spot" transform="translate(16, 65)">c</text>
            <text class="spot" transform="translate(16, 76)">d</text>
            <text class="spot" transform="translate(16, 85)">e</text>
          </g>
          <g class="numbers">
            <text class="spot" transform="translate(${textPositions[0]}, 33) rotate(90)">60</text>
            <text class="spot" transform="translate(${textPositions[1]}, 33) rotate(90)">55</text>
            <text class="spot" transform="translate(${textPositions[2]}, 33) rotate(90)">50</text>
            <text class="spot" transform="translate(${textPositions[3]}, 33) rotate(90)">45</text>
            <text class="spot" transform="translate(${textPositions[4]}, 33) rotate(90)">40</text>
            <text class="spot" transform="translate(${textPositions[5]}, 33) rotate(90)">35</text>
            <text class="spot" transform="translate(${textPositions[6]}, 33) rotate(90)">30</text>
            <text class="spot" transform="translate(${textPositions[7]}, 33) rotate(90)">25</text>
            <text class="spot" transform="translate(${textPositions[8]}, 33) rotate(90)">20</text>
            <text class="spot" transform="translate(${textPositions[9]}, 33) rotate(90)">15</text>
            <text class="spot" transform="translate(${textPositions[10]}, 33) rotate(90)">10</text>
            <text class="spot" transform="translate(${textPositions[11]}, 36) rotate(90)">5</text>
            <text class="spot" transform="translate(${textPositions[12]}, 36) rotate(90)">1</text>
          </g>
          <g>
            <text class="spot" transform="translate(16, 47)">a</text>
            <text class="spot" transform="translate(16, 57)">b</text>
            <text class="spot" transform="translate(16, 65)">c</text>
            <text class="spot" transform="translate(16, 76)">d</text>
            <text class="spot" transform="translate(16, 85)">e</text>
          </g>
          <rect x="5mm" y="40" width="153mm" height="13mm" fill="url(#points-wide)" />
        </g>

        <g class="mid-2" transform="translate(0, 65)">
          <g transform="translate(585, 0)">
            <text class="spot" transform="translate(16, 47)">e</text>
            <text class="spot" transform="translate(16, 57)">f</text>
            <text class="spot" transform="translate(16, 65)">g</text>
            <text class="spot" transform="translate(16, 76)">h</text>
            <text class="spot" transform="translate(16, 85)">i</text>
          </g>
          <g class="numbers" transform="translate(0, 60)">
            <text class="spot" transform="translate(${textPositions[0]}, 33) rotate(90)">60</text>
            <text class="spot" transform="translate(${textPositions[1]}, 33) rotate(90)">55</text>
            <text class="spot" transform="translate(${textPositions[2]}, 33) rotate(90)">50</text>
            <text class="spot" transform="translate(${textPositions[3]}, 33) rotate(90)">45</text>
            <text class="spot" transform="translate(${textPositions[4]}, 33) rotate(90)">40</text>
            <text class="spot" transform="translate(${textPositions[5]}, 33) rotate(90)">35</text>
            <text class="spot" transform="translate(${textPositions[6]}, 33) rotate(90)">30</text>
            <text class="spot" transform="translate(${textPositions[7]}, 33) rotate(90)">25</text>
            <text class="spot" transform="translate(${textPositions[8]}, 33) rotate(90)">20</text>
            <text class="spot" transform="translate(${textPositions[9]}, 33) rotate(90)">15</text>
            <text class="spot" transform="translate(${textPositions[10]}, 33) rotate(90)">10</text>
            <text class="spot" transform="translate(${textPositions[11]}, 36) rotate(90)">5</text>
            <text class="spot" transform="translate(${textPositions[12]}, 36) rotate(90)">1</text>
          </g>
          <g>
            <text class="spot" transform="translate(16, 47)">e</text>
            <text class="spot" transform="translate(16, 57)">f</text>
            <text class="spot" transform="translate(16, 65)">g</text>
            <text class="spot" transform="translate(16, 76)">h</text>
            <text class="spot" transform="translate(16, 85)">i</text>
          </g>
          <rect x="5mm" y="40" width="153mm" height="13mm" fill="url(#points-wide)" />
        </g>

        <g class="bottom">
          <g class="plus" transform="scale(0.5)">
            <line x1="4" x2="17" y1="10.5" y2="10.5" stroke="#F97466" stroke-width="1" />
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#F97466" stroke-width="1" />
          </g>
          <g class="minus" transform="translate(0 23) scale(0.5)">
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#8CE2F3" stroke-width="1" />
          </g>
          <rect x="6mm" y="5" width="149mm" height="1" fill-opacity="0.5" fill="#F97466" />
          <rect
            transform="translate(${gapBetweenBlocks[0]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[1]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[2]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[3]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[4]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[5]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[6]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[7]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[8]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect
            transform="translate(${gapBetweenBlocks[9]})"
            y="12.55"
            width="40"
            height="3.6mm"
            fill="url(#points)"
          />
          <rect x="6mm" y="30" width="149mm" height="1" fill-opacity="0.5" fill="#8CE2F3" />
          <g class="plus" transform="translate(600 0) scale(0.5)">
            <line x1="4" x2="17" y1="10.5" y2="10.5" stroke="#F97466" stroke-width="1" />
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#F97466" stroke-width="1" />
          </g>
          <g class="minus" transform="translate(600 23) scale(0.5)">
            <line y1="4" y2="17" x1="10.5" x2="10.5" stroke="#8CE2F3" stroke-width="1" />
          </g>
        </g>
      </svg>
    `;
  }

  private getHalfSized() {
    return html` <svg
      width="85mm"
      height="55mm"
      xmlns="http://www.w3.org/2000/svg"
      class="container"
    ></svg>`;
  }

  private getMiniSized() {
    return html` <svg
      width="47mm"
      height="35mm"
      xmlns="http://www.w3.org/2000/svg"
      class="container"
    ></svg>`;
  }

  render() {
    const { size, getFullSized, increaseBy } = this;
    switch (size) {
      case 'full':
        return getFullSized(increaseBy);
      case 'half':
        return this.getHalfSized();
      case 'mini':
        this.getMiniSized();
    }
  }
}
