import { html, LitElement, svg } from 'lit';
import { customElement, property} from 'lit/decorators.js';
import { ElementPin } from '.';
import { mmToPix } from './utils/units';


export type HandShape = 'arrow' | 'plain'; // | 'fancy';

export class StepperHand {

  /**
   * length used to control hand length
   */
  length : number = 25;

  /**
   * colour used to paint the hand
   */
  colour : string = '';

  /**
   * hand shape selects from predefined shape paths
   */
  shape : HandShape = 'plain';

  /**
   * the current hand angle 
   */
  angle : number = 0;
  


  constructor(length = 25, colour = '', shape : HandShape = 'plain', angle = 0){
    this.angle = angle;
    this.colour = colour;
    this.shape = shape;
    this.length = length;
  }

}

@customElement('wokwi-vid2805-dual-stepper')
export class VID2805DualStepperElement extends LitElement { 

  @property() outerHand = new StepperHand();
  @property() innerHand = new StepperHand();


  private coords() {
    const x = 112.3;        // x location of shaft point
    const y = 50;           // y location of shaft point
    const innerOff = 4.7;   // offset to center of inner hand's ring
    const outerOff = 9;     // offset to center of outer hand's ring
    let trY = 0;


    const ml = Math.max(this.innerHand.length, this.outerHand.length);
    if (ml > 30) {
      trY = ml - 30;
    }
    return {
      x : x,
      y: y,
      innerOff : innerOff,
      outerOff: outerOff,
      trY : trY
    }
  }

  get pinInfo(): ElementPin[] {
    const { x, y, innerOff, outerOff, trY} = this.coords();

    return [
    { name: 'A1+', y: trY, x: 58 * mmToPix, number: 1, signals: [] },
    { name: 'A1-', y: trY, x: 65  * mmToPix, number: 2, signals: [] },
    { name: 'B1+', y: trY, x: 72  * mmToPix, number: 3, signals: [] },
    { name: 'B1-', y: trY, x: 79  * mmToPix, number: 4, signals: [] },
    { name: 'A2+', y: trY, x: 86  * mmToPix, number: 5, signals: [] },
    { name: 'A2-', y: trY, x: 93  * mmToPix, number: 6, signals: [] },
    { name: 'B2+', y: trY, x: 100  * mmToPix, number: 7, signals: [] },
    { name: 'B2-', y: trY, x: 107  * mmToPix, number: 8, signals: [] },
    ];

  }


  readonly handMap : {[key:string] : string } = {
    "outer_plain_hand" : "m0,0 c0,5,4,9,9,9,3.28,0,6.13-1.73,7.7-4.33v.03c.5-.8,1.2-1.6,2.1-2.1,.8-.5,1.8-.8,2.8-.8h${len}c1,0,1.8-.8,1.8-1.8s-.8-1.8-1.8-1.8h-${len}c-1,0-1.9-.3-2.8-.8-.8-.5-1.6-1.2-2.1-2h0c-1.56-2.64-4.43-4.4-7.74-4.4-5,0-9,4.1-9,9Zm3.5,0c0-3,2.4-5.4,5.5-5.4s5.5,2.4,5.5,5.4-2.5,5.4-5.5,5.4-5.5-2.4-5.5-5.4Z",
    "outer_arrow_hand" : "m 0 0 c 0 5 4 9 9 9 c 3.89 0 7.16 -2.42 8.43 -5.85 c 0.3 -0.58 0.78 -1.16 1.27 -1.45 c 0.6 -0.3 1.29 -0.4 1.99 -0.2 c 0 0 0 0 0 0 h 0.01 s 0.9 0.2 0.9 0.2 l ${len} -1.7 l -${len} -1.9 l -0.9 0.3 c -0.7 0.2 -1.4 0.1 -2 -0.2 c -0.6 -0.3 -1.1 -0.8 -1.3 -1.5 c 0 0 -0.01 0.02 -0.02 0.02 c -1.38 -3.72 -4.38 -5.72 -8.38 -5.72 c -5 0 -9 4 -9 9 Z m 3.5 0 c 0 -3.1 2.5 -5.5 5.5 -5.5 s 5.5 2.5 5.5 5.5 s -2.5 5.5 -5.5 5.5 s -5.5 -2.5 -5.5 -5.5 Z",
    "inner_plain_hand" : "m0,0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.27 0 2.41 -0.5 3.25 -1.31 h 0 c 0.5 -0.49 1.1 -0.89 1.8 -1.19 c 0.7 -0.3 1.4 -0.4 2.1 -0.4 h ${len} c 1 0 1.8 -0.8 1.8 -1.8 s -0.8 -1.8 -1.8 -1.8 h -${len} s -0.06 0 -0.06 0 c -0.7 0 -1.5 -0.1 -2.1 -0.4 c -0.7 -0.3 -1.3 -0.7 -1.8 -1.2 h 0 c -0.84 -0.8 -1.98 -1.3 -3.24 -1.3 c -2.6 0 -4.7 2.1 -4.7 4.7 Z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z",
    "inner_arrow_hand" : "m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.37 0 2.59 -0.59 3.44 -1.52 c 0.7 -0.7 1.5 -1.2 2.5 -1.5 s 2 -0.3 2.9 -0.1 l 0.9 0.2 l ${len} -1.8 l -${len} -1.8 l -0.9 0.2 c -1 0.2 -2 0.2 -2.9 -0.1 c -1 -0.3 -1.8 -0.8 -2.5 -1.5 c -0.86 -0.93 -2.08 -1.52 -3.44 -1.52 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z",
  }
  

  render() {

    // const x = 112.3;        // x location of shaft point
    // const y = 50;           // y location of shaft point
    // const innerOff = 4.7;   // offset to center of inner hand's ring
    // const outerOff = 9;     // offset to center of outer hand's ring
    // let trY = 0;

    let inner_svg = this.handMap['inner_' + this.innerHand.shape + '_hand'];
    let outer_svg = this.handMap['outer_' + this.outerHand.shape + '_hand'];
  
    // todo: validate hands

    // replace length from args
    if (this.innerHand.length > 70) {
      this.innerHand.length = 70;
    }
    if (this.outerHand.length > 70) {
      this.outerHand.length = 70;
    }

    inner_svg = inner_svg.split("${len}").join(this.innerHand.length.toString());
    outer_svg = outer_svg.split("${len}").join(this.outerHand.length.toString());

    const { x, y, innerOff, outerOff, trY} = this.coords();


    return html`
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" width=70mm height=70mm viewBox="0 0 180 180">
    <defs>
        <style>.cls-1{fill:#939598;}.cls-2{fill:#f1f2f2;}.cls-3{fill:#808285;}.cls-4{fill:#ed1f24;}.cls-5{fill:#70bf44;}.cls-6{fill:#414042;}
        .cls-h{fill:"blue";stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.1px;
        transform-box: fill-box;
        }

        </style>
    </defs>
    <g id="Layer_1-2" transform="translate(0,${trY})">
        <g id="scaled_body">
          <g id="pins" transform="scale(${mmToPix})>
          <path id="pin-1" class="cls-3" d="m 58 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-2" class="cls-3" d="m 65 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-3" class="cls-3" d="m 72 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-4" class="cls-3" d="m 79 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-5" class="cls-3" d="m 86 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-6" class="cls-3" d="m 93 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-7" class="cls-3" d="m 100 0 v 5 c 0 2 2 2 2 0 v -5 z" />
          <path id="pin-8" class="cls-3" d="m 107 0 v 5 c 0 2 2 2 2 0 v -5 z" />
        </g>
        <path id="base" class="cls-6" d="M170.08,32.12c-4.98-15.86-18.92-27.75-35.9-29.71-1.2-1.4-2.96-2.31-4.96-2.31s-3.76,.91-4.96,2.31c-2.13,.25-4.2,.67-6.23,1.22H51.81c-1.93-.52-3.9-.92-5.92-1.17-1.2-1.48-3.01-2.45-5.07-2.45s-3.82,.94-5.02,2.39C19,4.27,5.19,15.86,0,31.41v27.09c5.15,15.43,18.82,26.97,35.45,28.97,1.2,1.56,3.06,2.58,5.17,2.58s3.98-1.02,5.17-2.58c2.18-.26,4.3-.7,6.37-1.28H117.67c2.07,.58,4.19,1.01,6.37,1.28,1.2,1.56,3.06,2.58,5.17,2.58s3.98-1.02,5.17-2.58c16.89-2.04,30.72-13.89,35.69-29.68v-25.67Z" />
            <g id="ribs">
                <path class="cls-3" d="M51.36,17.58l7.77-13.95h-5.11l-17.04,30.61c-.85-.27-1.74-.44-2.66-.5L30.9,3.26c-1.48,.34-2.93,.77-4.35,1.27l3.34,29.78c-1.43,.48-2.71,1.23-3.83,2.2l-13.79-10.54-.03,.03c-.38-.26-.82-.44-1.31-.44-1.33,0-2.4,1.08-2.4,2.4,0,1.2,.9,2.16,2.06,2.33l12.75,9.75c-.42,.84-.77,1.72-.97,2.67H.22v4.47H22.3c.18,1.01,.51,1.97,.95,2.87l-12.69,9.94c-1.14,.18-2.03,1.13-2.03,2.33,0,1.33,1.08,2.4,2.4,2.4,.79,0,1.46-.4,1.89-.99l.08,.1,13.03-10.2c1.1,.98,2.37,1.75,3.78,2.25l-3.18,29.5c1.42,.5,2.87,.93,4.35,1.27l3.25-30.13c1.05-.05,2.05-.25,3.01-.57l16.78,30.25h5.11l-7.82-14.1H118.91l-7.85,14.1h5.11l16.81-30.2c.81,.25,1.66,.42,2.54,.49l3.38,30.17c1.48-.34,2.93-.78,4.35-1.27l-3.3-29.44c1.59-.52,3.04-1.36,4.24-2.48l12.76,9.75c.36,.87,1.22,1.49,2.22,1.49,1.33,0,2.4-1.08,2.4-2.4,0-.81-.43-1.49-1.04-1.93l.02-.02-13.75-10.51c.38-.84,.67-1.74,.84-2.67h22.43v-4.47h-22.49c-.19-.88-.5-1.7-.88-2.49l12.62-9.88c1.25-.09,2.24-1.1,2.24-2.37s-1.08-2.4-2.4-2.4c-.3,0-.58,.07-.85,.17l-.13-.17-14.15,11.08c-1.13-1.02-2.45-1.8-3.91-2.3l3.21-29.78c-1.42-.5-2.87-.93-4.35-1.27l-3.28,30.45c-.89,.05-1.75,.21-2.57,.46L116.18,3.62h-5.11l7.74,13.95h-31.55V3.62h-4.47v13.95h-31.43Zm31.43,50.05H48.73l-7.71-13.9c1.93-1.67,3.3-3.95,3.77-6.56h28.93c.84,4.63,4.45,8.29,9.07,9.18v11.28Zm0-33.75c-4.5,.87-8.06,4.36-9.01,8.83h-29.04c-.54-2.53-1.94-4.71-3.85-6.32l7.79-13.99h34.12v11.48Zm4.47-11.48h34.22l7.7,13.88c-1.98,1.61-3.43,3.84-3.98,6.43h-1.92c-1.03-5.27-5.66-9.25-11.23-9.25s-10.21,3.98-11.23,9.25h-4.65c-.95-4.43-4.45-7.92-8.91-8.82v-11.49Zm0,33.94c4.57-.93,8.13-4.57,8.96-9.17h4.6c1.05,5.24,5.68,9.2,11.23,9.2s10.18-3.95,11.23-9.2h1.87c.49,2.68,1.92,5,3.92,6.68l-7.67,13.77h-34.14v-11.29Z" />
            </g>
            <g id="holes">
                <g>
                    <circle class="cls-2" cx="40.81" cy="6.55" r="4.83" />
                    <path class="cls-1" d="M40.81,3.32c1.78,0,3.23,1.45,3.23,3.23s-1.45,3.23-3.23,3.23-3.23-1.45-3.23-3.23,1.45-3.23,3.23-3.23m0-3.2c-3.55,0-6.43,2.88-6.43,6.43s2.88,6.43,6.43,6.43,6.43-2.88,6.43-6.43S44.36,.12,40.81,.12h0Z" />
                </g>
                <g>
                    <path class="cls-2" d="M40.62,88.33c-2.66,0-4.83-2.17-4.83-4.83s2.17-4.83,4.83-4.83,4.83,2.17,4.83,4.83-2.17,4.83-4.83,4.83Z" />
                    <path class="cls-1" d="M40.62,80.26c1.78,0,3.23,1.45,3.23,3.23s-1.45,3.23-3.23,3.23-3.23-1.45-3.23-3.23,1.45-3.23,3.23-3.23m0-3.2c-3.55,0-6.43,2.88-6.43,6.43s2.88,6.43,6.43,6.43,6.43-2.88,6.43-6.43-2.88-6.43-6.43-6.43h0Z" />
                </g>
                <g>
                    <path class="cls-2" d="M129.22,88.32c-2.66,0-4.83-2.17-4.83-4.83s2.17-4.83,4.83-4.83,4.83,2.17,4.83,4.83-2.17,4.83-4.83,4.83Z" />
                    <path class="cls-1" d="M129.22,80.26c1.78,0,3.23,1.45,3.23,3.23s-1.45,3.23-3.23,3.23-3.23-1.45-3.23-3.23,1.45-3.23,3.23-3.23m0-3.2c-3.55,0-6.43,2.88-6.43,6.43s2.88,6.43,6.43,6.43,6.43-2.88,6.43-6.43-2.88-6.43-6.43-6.43h0Z" />
                </g>
                <g>
                    <path class="cls-2" d="M129.22,11.38c-2.66,0-4.83-2.17-4.83-4.83s2.17-4.83,4.83-4.83,4.83,2.17,4.83,4.83-2.17,4.83-4.83,4.83Z" />
                    <path class="cls-1" d="M129.22,3.32c1.78,0,3.23,1.45,3.23,3.23s-1.45,3.23-3.23,3.23-3.23-1.45-3.23-3.23,1.45-3.23,3.23-3.23m0-3.2c-3.55,0-6.43,2.88-6.43,6.43s2.88,6.43,6.43,6.43,6.43-2.88,6.43-6.43S132.77,.12,129.22,.12h0Z" />
                </g>
            </g>
            <g id="hours">
                <path class="cls-h" transform="
                  translate(${x} ${y+outerOff/2})
                  rotate(${this.innerHand.angle}) 
                  translate(-${outerOff}, -${outerOff})" 
                  fill="${this.outerHand.colour}" d=${outer_svg} />
            </g>
            <g id="minutes">
                <path class="cls-h" 
                  transform="
                    translate(${x} ${y})
                    rotate(${this.outerHand.angle}) 
                    translate(-${innerOff}, -${innerOff})" 
                  fill="${this.innerHand.colour}" d=${inner_svg} />
            </g>
    </svg>`;
  }
}





/**
 *     
 */


