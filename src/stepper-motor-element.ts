import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';
import { mmToPix } from './utils/units';

/**
 * NemaSpec describes a NEMA Stepper specification (for the purpose of visualisation)
 *
 */
export interface NEMASpec {
  id: number; // Nema common number representing the size shorthand (Nema11 Nema 17 etc)
  frameSize: number; // the frame size in mm. Since Nema Steppers are square, only one side needed
  holeRadius: number; // Fastening hole size
  shaftRadius: number; // Motor shaft radius
  cornerRadius: number; // Frame corner radius
  cornerOffset: number; // Offset from corner to center of hole
  bodyRadius: number; // the round motor body size
  textSize: number; // Text size showing units etc
}

@customElement('wokwi-stepper-motor')
export class StepperMotorElement extends LitElement {
  @property() angle = 0;
  @property() arrow = '';
  @property() value = '';
  @property() units = '';
  @property() size: 8 | 11 | 14 | 17 | 23 | 34 = 17; // valid sizes are 8, 11, 14, 17, 21, 24. 8 is the default at 0.8"

  get pinInfo(): ElementPin[] {
    const spec = this.nemaSpecMap[this.size];

    // these offsets match the transform in renderFace
    const xOff = (spec.frameSize / 2 - 3.75) * mmToPix + 1;
    const yOff = (spec.frameSize + 5) * mmToPix;

    const pi = [
      { name: 'A+', y: yOff, x: xOff, number: 1, signals: [] },
      { name: 'A-', y: yOff, x: xOff + 2.54 * mmToPix, number: 2, signals: [] },
      { name: 'B+', y: yOff, x: xOff + 5.08 * mmToPix, number: 3, signals: [] },
      { name: 'B-', y: yOff, x: xOff + 7.62 * mmToPix, number: 4, signals: [] },
    ];

    return pi;
  }

  readonly nemaSpecMap: { [key: string]: NEMASpec } = {
    '8': {
      id: 8,
      frameSize: 20.4,
      holeRadius: 0.5,
      shaftRadius: 3.5,
      cornerRadius: 2.5,
      cornerOffset: 2.5,
      bodyRadius: 7.7,
      textSize: 8,
    },
    '11': {
      id: 11,
      frameSize: 28.2,
      holeRadius: 1.25,
      shaftRadius: 5,
      cornerRadius: 2.5,
      cornerOffset: 2.5,
      bodyRadius: 11,
      textSize: 11,
    },
    '14': {
      id: 14,
      frameSize: 35.2,
      holeRadius: 1.5,
      shaftRadius: 5,
      cornerRadius: 4.5,
      cornerOffset: 4.5,
      bodyRadius: 11,
      textSize: 14,
    },
    '17': {
      id: 17,
      frameSize: 42.3,
      holeRadius: 1.5,
      shaftRadius: 5,
      cornerRadius: 5,
      cornerOffset: 5.5,
      bodyRadius: 14,
      textSize: 16,
    },
    '23': {
      id: 23,
      frameSize: 57.3,
      holeRadius: 2.5,
      shaftRadius: 6.35,
      cornerRadius: 5,
      cornerOffset: 5.5,
      bodyRadius: 19.5,
      textSize: 24,
    },
    '34': {
      id: 34,
      frameSize: 86,
      holeRadius: 3.25,
      shaftRadius: 14,
      cornerRadius: 3.25,
      cornerOffset: 8.4,
      bodyRadius: 36.5,
      textSize: 32,
    },
  };

  render() {
    console.debug("Render");
    let spec = this.nemaSpecMap[this.size];

    if (spec === undefined) {
      spec = this.nemaSpecMap[17];
    }

    const cornerRadius = spec.cornerRadius;
    const holeRadius = spec.holeRadius;
    const shaftRadius = spec.shaftRadius;
    const frameSize = spec.frameSize;
    const cornerOffset = spec.cornerOffset;
    const bodyRadius = spec.bodyRadius;

    const halfShaft = shaftRadius / 2;
    const halfFrame = frameSize / 2;

    const innerHoleRadius = holeRadius * 0.9;
    const outerHoleRadius = holeRadius * 1.1;

    // shaft radius offset, needed for transform
    const rOff = Math.sqrt(0.75 * Math.pow(shaftRadius, 2));

    return html`<svg
      width="${frameSize + 1}mm"
      height="${frameSize + 5}mm"
      version="1.1"
      viewBox="0 0 ${(1 + frameSize) * mmToPix} ${(5 + frameSize) * mmToPix}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="frame-gradient"
          x1="-${frameSize * 0.2}"
          x2="${frameSize * 2}"
          y1="${frameSize}"
          y2="${frameSize}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#666" offset="0" />
          <stop stop-color="#fff" offset="1" />
        </linearGradient>
        <linearGradient
          id="shaft-gradient"
          x1="0"
          x2="0"
          y1="-5"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#9d9d9d" stop-opacity="0" offset="1" />
        </linearGradient>
        <linearGradient
          id="body-gradient"
          x1="${frameSize * 0.1}"
          x2="${frameSize * 0.7}"
          y1="${frameSize}"
          y2="${frameSize}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#fdfafa" offset=".29501" />
          <stop offset="1" stop-color="#2a2a2a" />
        </linearGradient>
      </defs>
      <!-- Body -->
      <g transform="translate(1,1)">
        <g transform="scale(${mmToPix})">
          <!-- Pins -->
          <path
            id="pin"
            transform="translate(${halfFrame - 3.75} ${frameSize})"
            fill="#9f9f9f"
            d="m 0 0 c .5 0 .5 0 .5 .5 v 4.55 c -.5 .5 -.5 .5 -1 0 v -4.5 c 0 -.5 0 -.5 .5 -.5"
          />
          <use xlink:href="#pin" x="2.54" />
          <use xlink:href="#pin" x="5.08" />
          <use xlink:href="#pin" x="7.62" />

          <g stroke-linecap="round" stroke-linejoin="round">
            <rect
              width="${frameSize}"
              height="${frameSize}"
              rx="${cornerRadius}"
              ry="${cornerRadius}"
              fill="url(#frame-gradient)"
              stroke="#000"
              stroke-width=".3245"
            />
            <circle cx="${cornerOffset}" cy="${cornerOffset}" r="${outerHoleRadius}" fill="#666" />
            <circle
              cx="${cornerOffset}"
              cy="${cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
          </g>

          <!-- motor body -->
          <circle
            cx="${halfFrame}"
            cy="${halfFrame}"
            r="${bodyRadius}"
            fill="#868686"
            fill-opacity=".89602"
            opacity=".73"
            stroke="url(#body-gradient)"
            stroke-width="1.41429"
          />
          <!-- Rotator -->
          <g>
            <path
              id="arrow-path"
              transform="
                rotate(${this.angle}, ${halfFrame},${halfFrame}) 
                translate(${halfFrame} ${halfFrame})"
              fill="${this.arrow || 'transparent'}"
              d="m 0 0 l -${shaftRadius} 0 l ${shaftRadius} 
                -${halfFrame - 3} l ${shaftRadius} ${halfFrame - 3} z"
            />
            <path
              id="shaft-path"
              transform="
                translate(${halfFrame}, ${halfFrame}) 
                rotate(${this.angle}) 
                translate(0, 0)"
              d="m -${halfShaft} -${rOff} a ${shaftRadius} ${shaftRadius} 0 1 0 ${shaftRadius} 0 z"
              fill="#4d4d4d"
              stroke="url(#shaft-gradient)"
              stroke-width=".57968"
            />
          </g>

          <!-- Text -->
          <text font-family="arial" font-size="14.667px" text-align="center" text-anchor="middle">
            <tspan
              x="${halfFrame}"
              y="${frameSize - spec.textSize / 2}"
              font-size="${spec.textSize / mmToPix}px"
            >
              ${this.value}
            </tspan>
            <tspan
              x="${halfFrame}"
              y="${frameSize - spec.textSize / 2 + spec.textSize / mmToPix}"
              font-size="${(0.67 * spec.textSize) / mmToPix}px"
            >
              ${this.units}
            </tspan>
          </text>
        </g>
      </g>
    </svg>`;
  }
}
