import { html, LitElement, svg } from 'lit';
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
@customElement('wokwi-show-pins')
export class ShowPinsElement extends LitElement {
  @property() pinColor = 'black';
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

  handleMouseOver(index: number) {
    if (index !== this.activePinIndex) {
      this.activePinIndex = index;
      this.requestUpdate();
    }
  }
  handleMouseOut() {
    this.activePinIndex = -1; // Reset active pin to none
    this.requestUpdate();
  }

  render() {
    const pinInfo = this.slotChild?.pinInfo ?? [];
    const { pinColor } = this;
    return html`<div style="position: relative">
      <slot id="content" @slotchange=${() => this.handleSlotChange()}></slot>
      <svg style="position: absolute; top: 0; left: 0;" width="100%" height="100%">
        ${pinInfo.map(
          (pin, idx) =>
            svg`<rect 
        x="${pin.x - 2.5}"
        y="${pin.y - 2.5}"
        fill=${this.activePinIndex === idx ? 'green' : pinColor}
        width="5" 
        height="5"
        style="transition: fill 0.3s;"  
        @mouseover=${this.handleMouseOver.bind(this, idx)}
        @mouseout=${this.handleMouseOut}
        @click=${() => console.log(pin)}
      ><title>${pin.name}</title></rect>`
        )}
      </svg>
    </div>`;
  }
}
