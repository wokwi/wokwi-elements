import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';
import { mmToPix } from './utils/units';


/**
 * NemaSpec describes a NEMA Stepper specification (for the purpose of visualisation)
 * 
 */
export interface NemaSpec {
  id: number;           // Nema common number representing the size shorthand (Nema11 Nema 17 etc)
  frameSize: number;    // the frame size in mm. Since Nema Steppers are square, only one side needed
  holeRadius: number;   // Fastening hole size
  shaftRadius: number;  // Motor shaft radius
  cornerRadius: number; // Frame corner radius
  cornerOffset: number; // Offset from corner to center of hole
  bodyRadius: number;   // the round motor body size
  textSize: number;     // Text size showing units etc
};

@customElement('wokwi-stepper-motor')
export class StepperMotorElement extends LitElement {
  @property() angle = 0;
  @property() arrow = '';
  @property() value = '';
  @property() units = '';
  @property() size : 8 | 11 | 14 | 17 | 23 | 34=17; // valid sizes are 8, 11, 14, 17, 21, 24. 8 is the default at 0.8"

  get pinInfo(): ElementPin[] {
    const spec = this.nemaSpecMap[this.size];

    // these offsets match the transform in renderFace
    const xOff = (spec.frameSize / 2 - 3.75) * mmToPix;
    const yOff = (spec.frameSize + 5) * mmToPix;

    const pi = [
      { name: 'A+', y: yOff, x: xOff, number: 1, signals: [] },
      { name: 'A-', y: yOff, x: xOff + 2.54 * mmToPix, number: 2, signals: [] },
      { name: 'B+', y: yOff, x: xOff + 5.08 * mmToPix, number: 3, signals: [] },
      { name: 'B-', y: yOff, x: xOff + 7.62 * mmToPix, number: 4, signals: [] },
    ];

    return pi; 
  }

  readonly nemaSpecMap : {[key:string] : NemaSpec } = {
    "8":  { "id": 8, "frameSize": 20.4, "holeRadius": 0.5, "shaftRadius": 3.5, "cornerRadius": 2.5, "cornerOffset": 2.5, "bodyRadius": 7.7, "textSize":8 },
    "11": { "id": 11, "frameSize": 28.2, "holeRadius": 1.25, "shaftRadius": 5, "cornerRadius": 2.5, "cornerOffset": 2.5, "bodyRadius": 11, "textSize":8 },
    "14": { "id": 14, "frameSize": 35.2, "holeRadius": 1.5, "shaftRadius": 5, "cornerRadius": 4.5, "cornerOffset": 4.5, "bodyRadius": 11, "textSize":10 },
    "17": { "id": 17, "frameSize": 42.3, "holeRadius": 1.5, "shaftRadius": 5, "cornerRadius": 5, "cornerOffset": 5.5, "bodyRadius": 14, "textSize":10 },
    "23": { "id": 23, "frameSize": 57.3, "holeRadius": 2.5, "shaftRadius": 6.35, "cornerRadius": 5, "cornerOffset": 5.5, "bodyRadius": 19.5, "textSize":16 },
    "34": { "id": 34, "frameSize": 86, "holeRadius": 3.25, "shaftRadius": 14, "cornerRadius": 3.25, "cornerOffset": 8.4, "bodyRadius": 36.5, "textSize":16 },
  }

  render() { 
    const spec = this.nemaSpecMap[this.size];

    // local vars    const ratio = 1; //100 / spec.frameSize;
    const cornerRadius = spec.cornerRadius;
    const holeRadius = spec.holeRadius;
    const shaftRadius = spec.shaftRadius;
    const frameSize = spec.frameSize;
    const cornerOffset = spec.cornerOffset;
    const bodyRadius = spec.bodyRadius;

    return html`<svg
      width="100mm"
      height="100mm"
      version="1.1"
      viewBox="0 0 ${100 * mmToPix} ${100 * mmToPix}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="motor-body" x1="0%" x2="120%" y1="0" y2="0" gradientUnits="userSpaceOnUse" > 
            <stop stop-color="#666" offset="0" />
            <stop stop-color="#fff" offset="1" />
          </linearGradient>
          <linearGradient id="shaft" x1="0%" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse" > 
            <stop stop-color="#9d9d9d" offset="0" />
            <stop stop-color="#fdfafa" stop-opacity="0" offset="1" />
          </linearGradient>
          <linearGradient id="linearGradient29501" x1="0%" x2="200%" y1="0%" y2="150%" gradientUnits="userSpaceOnUse" >
            <stop stop-color="#9d9d9d" offset="0" />
            <stop stop-color="#fdfafa" offset=".29501" />
            <stop offset="1" />
          </linearGradient>
      </defs>
      <!-- Body -->
      <g transform="scale(${mmToPix})">
        <g stroke-linecap="round" stroke-linejoin="round">
          <rect width="${frameSize}" height="${frameSize}" rx="${cornerRadius}" ry="${cornerRadius}" fill="url(#motor-body)" stroke="#000" stroke-width=".3245" />
          <circle cx="${cornerOffset}" cy="${cornerOffset}" r="${holeRadius}" fill="darkgrey" />
          <circle cx="${cornerOffset}" cy="${cornerOffset}" r="${holeRadius*0.9}" fill="lightgrey" />
          <circle cx="${frameSize - cornerOffset}" cy="${cornerOffset}" r="${holeRadius}" fill="darkgrey" />
          <circle cx="${frameSize - cornerOffset}" cy="${cornerOffset}" r="${holeRadius*0.9}" fill="lightgrey" />
          <circle cx="${cornerOffset}" cy="${frameSize - cornerOffset}" r="${holeRadius}" fill="darkgrey" />
          <circle cx="${cornerOffset}" cy="${frameSize - cornerOffset}" r="${holeRadius*0.9}" fill="lightgrey" />
          <circle cx="${frameSize - cornerOffset}" cy="${frameSize - cornerOffset}" r="${holeRadius}" fill="darkgrey" />
          <circle cx="${frameSize - cornerOffset}" cy="${frameSize - cornerOffset}" r="${holeRadius*0.9}" fill="lightgrey" />
          </g>

          <!-- motor body -->
          <circle cx="${frameSize / 2}" cy="${frameSize / 2}" r="${bodyRadius}" fill="#868686" fill-opacity=".89602" opacity=".73" stroke="url(#shaft)" stroke-width=".41429" /> 
          <!-- Rotator -->
          <g >
          <path transform="rotate(${this.angle}, ${frameSize/2},${frameSize/2}) translate(${frameSize/2} ${frameSize/2})" fill="${this.arrow || 'transparent'}" d="m 0 0 l -${shaftRadius} 0 l ${shaftRadius} -${frameSize/2 - 3} l ${shaftRadius} ${frameSize/2 - 3} z" />
          <path transform="rotate(${this.angle}, ${frameSize/2} ${frameSize/2}) translate(${(frameSize-shaftRadius)/2} ${(frameSize-2*shaftRadius)/2})" d="m 0 0 a ${shaftRadius} ${shaftRadius} 0 1 0 ${shaftRadius} 0 z" fill="#4d4d4d" stroke="url(#shaft)" stroke-width=".57968" /> 
          </g>

          <!-- Pins -->
          <path id="pin" transform="translate(${frameSize/2 - 3.75} ${frameSize})" fill="#9f9f9f" d="m 0 0 c .5 0 .5 0 .5 .5 v 5 c -.5 .5 -.5 .5 -1 0 v -5 c 0 -.5 0 -.5 .5 -.5" />
          <use xlink:href="#pin" x="2.54" />
          <use xlink:href="#pin" x="5.08" />
          <use xlink:href="#pin" x="7.62" />

          <!-- Text -->
          <text font-family="arial" font-size="14.667px" text-align="center" text-anchor="middle" > 
            <tspan x="${frameSize/ 2}" y="${frameSize - spec.textSize/2}" font-size="${spec.textSize/mmToPix}px">${this.value} ${this.units}</tspan>
          </text>         

        </g>
    </svg>`;
  }
}
