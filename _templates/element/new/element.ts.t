---
to: src/<%= name %>-element.ts
---
import { html, LitElement, svg } from 'lit';
import { customElement, property} from 'lit/decorators.js';

@customElement('wokwi-<%= name %>')
export class <%= h.className(name) %>Element extends LitElement {
  @property() value = 0;

  render() {
    const { value } = this;
    return html`
      <svg
        width="40mm"
        height="25mm"
        version="1.1"
        viewBox="0 0 40 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="12.5" r="${value}" fill="red" stroke="blue" />
      </svg>
    `;
  }
}
