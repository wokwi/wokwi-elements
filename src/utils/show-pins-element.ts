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
  @property() pinColor = 'red';
  @query('#content') elementSlot!: HTMLSlotElement;

  get slotChild() {
    return this.elementSlot?.assignedElements()[0] as ElementWithPinInfo | undefined;
  }

  render() {
    const pinInfo = this.slotChild?.pinInfo ?? [];
    const { pinColor } = this;
    return html`<div style="position: relative">
      <slot id="content" @slotchange=${() => this.requestUpdate()}></slot>

      <svg style="position: absolute; top: 0; left: 0" width="100%" height="100%" fill=${pinColor}>
        ${pinInfo.map(
          (pin) => svg`<circle cx=${pin.x} cy=${pin.y} r=2><title>${pin.name}</title></circle>`
        )}
      </svg>
    </div>`;
  }
}
