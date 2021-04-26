import { customElement, html, LitElement, property, svg } from 'lit-element';

@customElement('wokwi-slide-potentiometer')
export class SlidePotentiometerElement extends LitElement {
  @property() value = 0;
  @property() minValue = 0;
  @property() maxValue = 50;
  private isPressed = false;
  private caseRect: DOMRect | undefined;

  render() {
    const { value, minValue, maxValue } = this;
    const tipTravelInMM = 30;
    // Tip is centered by default
    const tipBaseOffsetX = -(tipTravelInMM / 2);
    const tipMovementX = (value / (maxValue - minValue)) * tipTravelInMM;
    const tipOffSetX = tipMovementX + tipBaseOffsetX;
    return html`
      <svg
        width="55mm"
        height="19mm"
        version="1.1"
        viewBox="0 0 55 19"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="tipGradient"
            x1="36.482"
            x2="50.447"
            y1="91.25"
            y2="91.25"
            gradientTransform="matrix(.8593 0 0 1.1151 -14.849 -92.256)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#595959" offset=".4" />
            <stop stop-color="#595959" offset=".6" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <radialGradient
            id="bodyGradient"
            cx="62.59"
            cy="65.437"
            r="22.5"
            gradientTransform="matrix(1.9295 3.7154e-8 0 .49697 -98.268 -23.02)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d2d2d2" offset="0" />
            <stop stop-color="#2a2a2a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <g transform="translate(5 0)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="45"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect x="3.25" y="8" width="38.5" height="3" rx=".1" ry=".1" fill="#3f1e1e" />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use id="#screw" />
          </g>
          <!-- Button -->
          <g
            transform="translate(${tipOffSetX} 0)"
            tabindex="0"
            @mousedown=${this.down}
            @mouseup=${this.up}
            @mousemove=${this.mouseMove}
            @mouseleave=${this.up}
            @touchstart=${this.down}
            @touchend=${this.up}
            @keydown=${this.down}
            @keyup=${this.up}
          >
            <rect x="19.75" y="8.6" width="5.5" height="1.8" />
            <rect
              x="16.5"
              y="0"
              width="12"
              height="19"
              fill="url(#tipGradient)"
              stroke-width="2.6518"
              rx=".1"
              ry=".1"
            />
            <rect x="22.2" y="0" width=".6" height="19" fill="#efefef" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(43.375 9.5) rotate(45)">
            <use id="#screw" />
          </g>
        </g>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="6" width="5" height="0.75" />
          <rect x="50" y="6" width="5" height="0.75" />
          <rect x="0" y="12.25" width="5" height="0.75" />
        </g>
      </svg>
    `;
  }

  private down(): void {
    this.dispatchEvent(new CustomEvent('button-press'));
    if (!this.isPressed) {
      this.updateCaseRect();
    }
    this.isPressed = true;
  }

  private up(): void {
    this.dispatchEvent(new CustomEvent('button-release'));
    this.isPressed = false;
  }

  private updateCaseRect(): void {
    const rect = this.shadowRoot?.querySelector('#sliderCase')?.getBoundingClientRect();
    this.caseRect = rect;
  }

  private mouseMove(event: MouseEvent): void {
    if (this.isPressed) {
      const width = this.caseRect?.width ?? 0;
      const pixelPerMM = width / 45;
      const travelInPixels = 30 * pixelPerMM;
      const pixelPerIncrement = travelInPixels / (this.maxValue - this.minValue);
      const tipPositionX = event.pageX - (this.caseRect?.left ?? 0) - pixelPerMM * 7.5;
      this.value = Math.round(tipPositionX / pixelPerIncrement);
      this.value = Math.min(this.value, this.maxValue);
      this.value = Math.max(this.value, 0);

      const details: any = {};
      details.clientX = event.clientX;
      details.clientY = event.clientY;
      details.pageX = event.pageX;
      details.pageY = event.pageY;
      details.caseLeft = this.caseRect?.left ?? 0;
      details.caseTop = this.caseRect?.top ?? 0;
      details.caseRight = this.caseRect?.right ?? 0;
      details.caseBottom = this.caseRect?.bottom ?? 0;
      details.calculatedX = event.pageX - details.caseLeft;
      details.calculatedY = event.pageY - details.caseTop;
      details.pixelPerIncrement = pixelPerIncrement;
      details.caseWidth = width;
      details.value = this.value;
      console.log(details);
    }
  }
}
