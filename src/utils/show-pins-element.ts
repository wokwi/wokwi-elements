import { html, LitElement, PropertyPart, svg } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ElementPin } from '../pin';

export interface ElementWithPinInfo extends Element {
  pinInfo?: ElementPin[];
}

/**
 * Utility element to debug the pinInfo property. Pin locations are displayed using red dots.
 * Moving your mouse over one of the red dots shows a tooltip with the pin's name.
 *
 *
 * Usage:
 * 1. Import this file in your element's story file, e.g.
 *    ```
 *    import './utils/show-pins-element';
 *    ```
 * 2. Wrap your element with the <wokwi-show-pins> element, e.g.
 *    ```
 *    export const HCSR04 = () => html`
 *      <wokwi-show-pins>
 *        <wokwi-hc-sr04></wokwi-hc-sr04>
 *      </wokwi-show-pins>
 *    `;
 *    ```
 */

enum PinType {
  Circle = 'circle',
  Rect = 'rect',
}
@customElement('wokwi-show-pins')
export class ShowPinsElement extends LitElement {
  @property() pinColor = 'black';
  @property() pinType: PinType = PinType.Circle;
  @property() pinWidth = 5;
  @property() pinHeight = 5;
  @property() pinRadius = 2.5;
  // need to add properties that are functions that do something with the pins (like a callback), mouseover, click, etc.
  // the plan is to use this in another project where im going to write a function that sets to the state that the pin is clicked

  @query('#content') elementSlot!: HTMLSlotElement;

  activePinIndex = -1;
  previousSlotChild?: ElementWithPinInfo;

  get slotChild() {
    return this.elementSlot?.assignedElements()[0] as ElementWithPinInfo | undefined;
  }

  private pinInfoChangeCallback = () => {
    this.requestUpdate();
  };

  handleSlotChange() {
    const slotChild = this.slotChild;
    if (slotChild !== this.previousSlotChild) {
      this.previousSlotChild?.removeEventListener('pininfo-change', this.pinInfoChangeCallback);
      slotChild?.addEventListener('pininfo-change', this.pinInfoChangeCallback);
      this.previousSlotChild = slotChild;
    }
    this.requestUpdate();
  }

  handleMouseOver({ pin, idx }: { pin: ElementPin; idx: number }) {
    if (idx !== this.activePinIndex) {
      this.dispatchEvent(new CustomEvent('pin-mouseover', { detail: { pin, idx } }));
      this.activePinIndex = idx;
      this.requestUpdate();
    }
  }
  handleMouseOut({ pin, idx }: { pin: ElementPin; idx: number }) {
    this.activePinIndex = -1;
    this.dispatchEvent(new CustomEvent('pin-mouseout', { detail: { pin, index: idx } }));
    this.requestUpdate();
  }
  handlePinClick({ pin, idx }: { pin: ElementPin; idx: number }) {
    console.log('pin clicked', pin, idx);
    this.dispatchEvent(new CustomEvent('pin-click', { detail: { pin, index: idx } }));
  }

  render() {
    const pinInfo = this.slotChild?.pinInfo ?? [];
    const { pinColor, pinType, pinWidth, pinHeight, pinRadius } = this;
    return html`<div style="position: relative">
      <slot id="content" @slotchange=${() => this.handleSlotChange()}></slot>
      <svg style="position: absolute; top: 0; left: 0;" width="100%" height="100%">
        ${pinInfo.map((pin, idx) =>
          pinType === PinType.Rect
            ? svg`<rect 
        x="${pin.x - 2.5}"
        y="${pin.y - 2.5}"
        cursor="pointer"
        fill=${this.activePinIndex === idx ? 'green' : pinColor}
        width=${pinWidth}
        height=${pinHeight}
        style="transition: fill 0.3s;"  
        @mouseover=${this.handleMouseOver.bind(this, { pin, idx })}
        @mouseout=${this.handleMouseOut.bind(this, { pin, idx })}
        @click=${this.handlePinClick.bind(this, { pin, idx })}
      ><title>${pin.name}</title></rect>
      `
            : svg`
      <circle
        cx="${pin.x}"
        cy="${pin.y}"
        r="${pinRadius}"
        cursor="pointer"
        fill=${this.activePinIndex === idx ? 'green' : pinColor}
        style="transition: fill 0.3s;"
        @mouseover=${this.handleMouseOver.bind(this, { pin, idx })}
        @mouseout=${this.handleMouseOut.bind(this, { pin, idx })}
        @click=${this.handlePinClick.bind(this, { pin, idx })}
      ><title>${pin.name}</title></circle>
      `
        )}
      </svg>
    </div>`;
  }
}
