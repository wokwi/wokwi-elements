import { customElement } from 'lit/decorators.js';
import { LCD1602Element } from './lcd1602-element';

@customElement('wokwi-lcd2004')
export class LCD2004Element extends LCD1602Element {
  protected numCols = 20;
  protected numRows = 4;
}
