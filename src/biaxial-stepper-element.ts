import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';
import { mmToPix } from './utils/units';

type HandShape = 'arrow' | 'plain' | 'ornate';
type HandDesc = { xOff: number; yOff: number; path: string };

const SHAFT_X = 112.3; // x location of shaft point
const SHAFT_Y = 45; // y location of shaft point
const OUTER_OFFSET = 9; // offset to center of outer hand's ring
const INNER_OFFSET = 4.7; // offset to center of inner hand's ring
const ORNATE_OUTER_OFFSET = 9; // offset to center of outer ornate hand's ring
const ORNATE_INNER_OFFSET = 5; // offset to center of inner ornate hand's ring
const BASE_MOVE_THOLD = 30; // threshold above which we need to move the base to allow for hands extending outside the base

@customElement('wokwi-biaxial-stepper')
export class BiaxialStepperElement extends LitElement {
  // length used to control outer hand length in mm
  @property() outerHandLength = 30;

  // the current hand angle in degrees
  @property() outerHandAngle = 0;

  // the current outer hand color
  @property() outerHandColor = 'gold';

  // the current outer hand shape
  @property() outerHandShape: 'arrow' | 'plain' | 'ornate' = 'plain';

  // length used to control inner hand length in mm
  @property() innerHandLength = 30;

  // the current hand angle in degrees
  @property() innerHandAngle = 0;

  // the current inner hand color
  @property() innerHandColor = 'silver';

  // the current inner hand shape
  @property() innerHandShape: 'arrow' | 'plain' | 'ornate' = 'plain';

  get pinInfo(): ElementPin[] {
    const pinXY = (x: number) => {
      return { x: 15 + this.trY(), y: (48.5 - x * 2.54) * mmToPix };
    };

    return [
      { name: 'A1+', ...pinXY(0), number: 1, signals: [] },
      { name: 'A1-', ...pinXY(1), number: 2, signals: [] },
      { name: 'B1+', ...pinXY(2), number: 3, signals: [] },
      { name: 'B1-', ...pinXY(3), number: 4, signals: [] },
      { name: 'A2+', ...pinXY(4), number: 5, signals: [] },
      { name: 'A2-', ...pinXY(5), number: 6, signals: [] },
      { name: 'B2+', ...pinXY(6), number: 7, signals: [] },
      { name: 'B2-', ...pinXY(7), number: 8, signals: [] },
    ];
  }

  readonly handMap: { [key: string]: (len: number) => HandDesc } = {
    outerPlainHand: (len: number) => ({
      xOff: OUTER_OFFSET,
      yOff: OUTER_OFFSET,
      path: `m0,0 c0,5,4,9,9,9,3.28,0,6.13-1.73,7.7-4.33v.03c.5-.8,1.2-1.6,2.1-2.1,.8-.5,1.8-.8,2.8-.8h${len}c1,0,1.8-.8,1.8-1.8s-.8-1.8-1.8-1.8h-${len}c-1,0-1.9-.3-2.8-.8-.8-.5-1.6-1.2-2.1-2h0c-1.56-2.64-4.43-4.4-7.74-4.4-5,0-9,4.1-9,9Zm3.5,0c0-3,2.4-5.4,5.5-5.4s5.5,2.4,5.5,5.4-2.5,5.4-5.5,5.4-5.5-2.4-5.5-5.4Z`,
    }),

    outerArrowHand: (len: number): HandDesc => ({
      xOff: OUTER_OFFSET,
      yOff: OUTER_OFFSET,
      path: `m 0 0 c 0 5 4 9 9 9 c 3.89 0 7.16 -2.42 8.43 -5.85 c 0.3 -0.58 0.78 -1.16 1.27 -1.45 c 0.6 -0.3 1.29 -0.4 1.99 -0.2 c 0 0 0 0 0 0 h 0.01 s 0.9 0.2 0.9 0.2 l ${len} -1.7 l -${len} -1.9 l -0.9 0.3 c -0.7 0.2 -1.4 0.1 -2 -0.2 c -0.6 -0.3 -1.1 -0.8 -1.3 -1.5 c 0 0 -0.01 0.02 -0.02 0.02 c -1.38 -3.72 -4.38 -5.72 -8.38 -5.72 c -5 0 -9 4 -9 9 Z m 3.5 0 c 0 -3.1 2.5 -5.5 5.5 -5.5 s 5.5 2.5 5.5 5.5 s -2.5 5.5 -5.5 5.5 s -5.5 -2.5 -5.5 -5.5 Z`,
    }),

    outerOrnateHand: (len: number): HandDesc => ({
      xOff: ORNATE_OUTER_OFFSET,
      yOff: ORNATE_OUTER_OFFSET,
      path: `m 0 0 c 0 5 4 9 9 9 c 4.951 0.028 9.683 -3.101 9.6 -7.6 c 0 0 1.1 1.4 3.3 1.2 c -0.2 1 0.3 1.2 0.3 1.2 c 0.6 -1.5 6.4 -6.3 8.6 -0.3 c -3.1 -0.3 -1.8 3.8 0.5 1.6 c 0 0 0.9 2.3 4 2.1 c -0.8 1.7 3.1 2.1 1.7 -0.4 c 0 0 2.7 -1 2.3 -3.9 c 0 0 0.8 0.6 2.6 0.6 c 2.7 0.2 6.2 -3.7 16 -2.9 l 0.6 -0.7 l -0.6 -0.8 c -8.9 0.7 -13 -2.3 -16 -3 c -1.9 0 -2.5 0.8 -2.5 0.8 c 0 0 0.3 -2.6 -2.5 -4.1 c 0.8 -0.8 0 -1.6 -0.8 -1.6 c -0.5 0 -1 0.4 -0.8 1.5 c 0 0 -2.8 -0.8 -4 2.1 c 0 0 -1.4 -2 -2.5 0.3 c 0.2 0.5 0 0.9 0.8 1.2 c 0.2 0.3 1.2 -0.2 1.2 -0.2 c 0 0 -0.6 3.2 -3.9 3 c 0 0 -2.7 0.1 -4.8 -3.3 c -0.3 0.5 -0.3 0.7 -0.3 0.7 v 0.7 c 0 0 -2.1 -0.4 -3.4 1.2 c -0.06 -4.37 -4.449 -7.347 -9.41 -7.385 c -5 0 -9 4 -9 9 z m 44 -2.2 c 2.1 1.2 4.1 1.5 4.1 1.5 c -0.4 0.7 -0.5 0.7 0 1.6 c 0 0 -2.6 0.2 -4.1 1.4 c 0 0 0.2 -1.7 -0.6 -2.2 c 1 -0.6 0.6 -2.2 0.6 -2.2 z m -2.3 -0.5 c 1.3 0.1 1.6 1.1 1.6 1.1 c 0.1 0.4 -1.2 0.8 -1.1 1.1 l 0.3 0.5 l -0.2 0.6 c 0 0.3 0.6 0.4 1.2 1 c -0.5 0.6 -0.5 1.3 -2.1 1.3 c -1.1 0 -3.1 -2.5 -4.2 -2.9 c 1.1 -0.1 2.5 -2.8 4.5 -2.8 z m -10.8 0.9 c 0.5 1 2 1.9 2 1.9 c -1.4 0.7 -2 1.7 -2 1.7 c -1 -1.2 -2.2 -1.9 -2.2 -1.9 c 1.3 -0.6 2.2 -1.8 2.2 -1.8 z m -10.1 0.4 c 1.4 0 1.5 1.1 3.656 1.552 c -2 0.3 -2.4 1.5 -3.6 1.4 c -1.5 -0.1 -1.6 -1.3 -1.6 -1.3 c 0 0 -0.2 -1.5 1.6 -1.6 c 0 0 0 0 0.1 0 z m 14.1 2.1 c 3.1 0.1 3.1 3.2 3.1 3.2 c -0.3 1.7 -2.5 2.6 -2.5 2.6 c -2.5 0.2 -3.3 -1.5 -3.3 -1.5 c 0 0 1.4 0.6 1.8 -1 c -0.4 -2 -2.2 -0.8 -2.2 -0.8 c 0.3 -2.3 3 -2.5 3 -2.5 z`,
    }),

    innerPlainHand: (len: number): HandDesc => ({
      xOff: INNER_OFFSET,
      yOff: INNER_OFFSET,
      path: `m0,0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.27 0 2.41 -0.5 3.25 -1.31 h 0 c 0.5 -0.49 1.1 -0.89 1.8 -1.19 c 0.7 -0.3 1.4 -0.4 2.1 -0.4 h ${len} c 1 0 1.8 -0.8 1.8 -1.8 s -0.8 -1.8 -1.8 -1.8 h -${len} s -0.06 0 -0.06 0 c -0.7 0 -1.5 -0.1 -2.1 -0.4 c -0.7 -0.3 -1.3 -0.7 -1.8 -1.2 h 0 c -0.84 -0.8 -1.98 -1.3 -3.24 -1.3 c -2.6 0 -4.7 2.1 -4.7 4.7 Z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z`,
    }),

    innerArrowHand: (len: number): HandDesc => ({
      xOff: INNER_OFFSET,
      yOff: INNER_OFFSET,
      path: `m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.37 0 2.59 -0.59 3.44 -1.52 c 0.7 -0.7 1.5 -1.2 2.5 -1.5 s 2 -0.3 2.9 -0.1 l 0.9 0.2 l ${len} -1.8 l -${len} -1.8 l -0.9 0.2 c -1 0.2 -2 0.2 -2.9 -0.1 c -1 -0.3 -1.8 -0.8 -2.5 -1.5 c -0.86 -0.93 -2.08 -1.52 -3.44 -1.52 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`,
    }),

    innerOrnateHand: (len: number): HandDesc => ({
      xOff: ORNATE_INNER_OFFSET,
      yOff: ORNATE_INNER_OFFSET,
      path: `m 0 0 c 0 5 5 5 5 5 c 5 0 4.6565 -5.696 5 -2.6 l 0.028 1.101 l 1.4525 0.016 l 0.55 -1.5 c 0 0 1.05 1.55 3.3 1.75 c 2.35 0.05 3.2 -0.85 3.2 -0.85 l 0.05 0.75 l 0.95 -0.05 l -0.05 1 l 4 -2.4 c 0.4 1.35 1.75 1.5 1.75 1.5 c 0.65 0.1 1.85 -0.95 1.85 -0.95 l 0.7 1.45 l 1 -1.75 l 1 1 l 0.35 -1.45 c 2.4 1.45 4.15 1.2 4.15 1.2 c 2.95 -0.1 3.9 -1.05 6.6 -1.95 c 4.85 -0.7 10.3 -0.1 10.3 -0.1 l -0.25 1.65 l 3.85 -1.45 l 15.2 -0.3 l 0.45 -0.4 l -0.55 -0.4 l -15.4 -0.25 l -3.6 -1.55 l 0.4 1.8 c 0 0 -4.75 -0.85 -10.1 -0.25 l -0.25 -1.05 l -1.05 0.85 c 0 0 0.45 -2.2 0.25 -3.8 c -1.15 2.55 -1.95 6.25 -6.45 6.3 c -4.4 -0.35 -5.7 -4.05 -5.7 -4.05 l -0.45 1 l -0.5 -0.5 l -0.55 0.75 c 0 0 -0.85 -0.6 -2.35 -0.75 c -1.85 0.15 -2.35 0.45 -2.35 0.45 l -0.25 -1.45 l -1.2 1.25 l -0.5 -0.8 l -1.05 1.05 l -0.6 -0.85 c -0.6 -0.45 -1.15 -0.55 -1.75 -0.3 c 0 0 -0.6 0.25 -0.8 0.75 c 0 0 -0.45 -0.7 -1.2 -0.85 c -0.75 -0.05 -2.3 1.3 -2.3 1.3 l -0.6175 -2.289 l -1.469 -0.032 l -0.0165 1.2265 c -0.3785 2.4515 0.0485 -3.212 -5.036 -3.228 c -4 0 -5.004 2.518 -5 5 z m 13.25 -1.2 c 0 0 0.15 1.3 1.05 1.3 c 0 0 0.5 -0.25 0.7 -0.8 c 0 0 0.35 0.85 0.75 0.9 c 0.9 -0.1 0.85 -1.25 1.15 -1.3 c 0 0 0.9 0.35 0.9 2.15 c 0 0 -0.6 1.7 -3 1.65 c 0 0 -2.05 -0.15 -2.55 -1.95 c 0 0 -0.15 -1.5 0.95 -2 z m 10.5 0.55 c 1.05 0 1.4 0.25 1.4 0.25 c 0.75 0.45 1 1.2 1 1.2 c 0.05 1.6 -0.85 1.55 -1.65 1.6 c 0 0 -0.95 -0.35 -1.3 -1.35 l -3.1 1.75 c 0 0 0.45 -2.5 2.8 -3.45 c 0.35 -0.05 0.6 -0.05 0.85 -0.05 z`,
    }),
  };

  private trY(): number {
    let ml = Math.max(this.innerHandLength, this.outerHandLength);

    if (ml > BASE_MOVE_THOLD) {
      ml -= BASE_MOVE_THOLD;
    }

    return ml;
  }

  private cap(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private constrain(v: number, min: number, max: number): number {
    return Math.max(min, Math.min(v, max));
  }

  private handPath(pfx: string, shape: string, len: number) {
    let path = this.handMap[pfx + this.cap(shape) + 'Hand'];

    // apply default values to properties if invalid
    if (path === undefined) {
      path = this.handMap[pfx + 'PlainHand'];
    }
    return path(len);
  }
  render() {
    const innerHandLength = this.constrain(this.innerHandLength, 20, 70);
    const outerHandLength = this.constrain(this.outerHandLength, 20, 70);

    const innerPathDesc = this.handPath('inner', this.innerHandShape, innerHandLength);
    const outerPathDesc = this.handPath('outer', this.outerHandShape, outerHandLength);

    const x = SHAFT_X;
    const y = SHAFT_Y;
    const trY = this.trY();

    return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="70mm" height="70mm" viewBox="0 0 265 265">
    <defs>
        <style>
          .cls-1{fill:#939598;}
          .cls-2{fill:#d2d2d2;}
          .cls-3{fill:#808285;}
          .cls-4{fill:#ed1f24;}
          .cls-5{fill:#70bf44;}
          .cls-6{fill:#414042;}
          .cls-h{fill:"blue";stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.1px;transform-box:fill-box;}
        </style>
        <linearGradient
            id="hole-gradient"
            >
            <stop stop-color="#4f4f4f" offset="-25%" />
            <stop stop-color="grey" offset="75%" />
        </linearGradient>
    </defs>
      <g transform="translate(15,265) rotate(270 0 0) translate(0,${trY})">

      <!-- pins - translate to top of base, between holes -->
        <g transform="scale(${mmToPix}) translate(21 3) ">
          <path id="pin-1" class="cls-3" d="m 0 0 v -3 c 0 -1 1 -1 1 0 v 3 z" />
          <use href="#pin-1" x="2.54" />
          <use href="#pin-1" x="5.08" />
          <use href="#pin-1" x="7.62" />
          <use href="#pin-1" x="10.16" />
          <use href="#pin-1" x="12.70" />
          <use href="#pin-1" x="15.24" />
          <use href="#pin-1" x="17.78" />
        </g>

        <!-- scaled body -->
        <g transform="scale(1.333)">

          <!-- base -->
          <path class="cls-6" d="M170.08,32.12c-4.98-15.86-18.92-27.75-35.9-29.71-1.2-1.4-2.96-2.31-4.96-2.31s-3.76,.91-4.96,2.31c-2.13,.25-4.2,.67-6.23,1.22H51.81c-1.93-.52-3.9-.92-5.92-1.17-1.2-1.48-3.01-2.45-5.07-2.45s-3.82,.94-5.02,2.39C19,4.27,5.19,15.86,0,31.41v27.09c5.15,15.43,18.82,26.97,35.45,28.97,1.2,1.56,3.06,2.58,5.17,2.58s3.98-1.02,5.17-2.58c2.18-.26,4.3-.7,6.37-1.28H117.67c2.07,.58,4.19,1.01,6.37,1.28,1.2,1.56,3.06,2.58,5.17,2.58s3.98-1.02,5.17-2.58c16.89-2.04,30.72-13.89,35.69-29.68v-25.67Z" />


          <!-- ribs -->
          <g>
              <path class="cls-3" d="M51.36,17.58l7.77-13.95h-5.11l-17.04,30.61c-.85-.27-1.74-.44-2.66-.5L30.9,3.26c-1.48,.34-2.93,.77-4.35,1.27l3.34,29.78c-1.43,.48-2.71,1.23-3.83,2.2l-13.79-10.54-.03,.03c-.38-.26-.82-.44-1.31-.44-1.33,0-2.4,1.08-2.4,2.4,0,1.2,.9,2.16,2.06,2.33l12.75,9.75c-.42,.84-.77,1.72-.97,2.67H.22v4.47H22.3c.18,1.01,.51,1.97,.95,2.87l-12.69,9.94c-1.14,.18-2.03,1.13-2.03,2.33,0,1.33,1.08,2.4,2.4,2.4,.79,0,1.46-.4,1.89-.99l.08,.1,13.03-10.2c1.1,.98,2.37,1.75,3.78,2.25l-3.18,29.5c1.42,.5,2.87,.93,4.35,1.27l3.25-30.13c1.05-.05,2.05-.25,3.01-.57l16.78,30.25h5.11l-7.82-14.1H118.91l-7.85,14.1h5.11l16.81-30.2c.81,.25,1.66,.42,2.54,.49l3.38,30.17c1.48-.34,2.93-.78,4.35-1.27l-3.3-29.44c1.59-.52,3.04-1.36,4.24-2.48l12.76,9.75c.36,.87,1.22,1.49,2.22,1.49,1.33,0,2.4-1.08,2.4-2.4,0-.81-.43-1.49-1.04-1.93l.02-.02-13.75-10.51c.38-.84,.67-1.74,.84-2.67h22.43v-4.47h-22.49c-.19-.88-.5-1.7-.88-2.49l12.62-9.88c1.25-.09,2.24-1.1,2.24-2.37s-1.08-2.4-2.4-2.4c-.3,0-.58,.07-.85,.17l-.13-.17-14.15,11.08c-1.13-1.02-2.45-1.8-3.91-2.3l3.21-29.78c-1.42-.5-2.87-.93-4.35-1.27l-3.28,30.45c-.89,.05-1.75,.21-2.57,.46L116.18,3.62h-5.11l7.74,13.95h-31.55V3.62h-4.47v13.95h-31.43Zm31.43,50.05H48.73l-7.71-13.9c1.93-1.67,3.3-3.95,3.77-6.56h28.93c.84,4.63,4.45,8.29,9.07,9.18v11.28Zm0-33.75c-4.5,.87-8.06,4.36-9.01,8.83h-29.04c-.54-2.53-1.94-4.71-3.85-6.32l7.79-13.99h34.12v11.48Zm4.47-11.48h34.22l7.7,13.88c-1.98,1.61-3.43,3.84-3.98,6.43h-1.92c-1.03-5.27-5.66-9.25-11.23-9.25s-10.21,3.98-11.23,9.25h-4.65c-.95-4.43-4.45-7.92-8.91-8.82v-11.49Zm0,33.94c4.57-.93,8.13-4.57,8.96-9.17h4.6c1.05,5.24,5.68,9.2,11.23,9.2s10.18-3.95,11.23-9.2h1.87c.49,2.68,1.92,5,3.92,6.68l-7.67,13.77h-34.14v-11.29Z" />
          </g>

          <!-- holes -->
          <g>
              <g>
                  <circle cx="40.75" cy="6.55" r="6.5" class="cls-1" />
                  <circle cx="40.75" cy="6.55" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="40.75" cy="83.5" r="6.5" class="cls-1" />
                  <circle cx="40.75" cy="83.5" r="3.25" fill="url(#hole-gradient)"/>
              </g>
              <g>
                  <circle cx="129.25" cy="6.55" r="6.5" class="cls-1" />
                  <circle cx="129.25" cy="6.55" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="129.25" cy="83.5" r="6.5" class="cls-1" />
                  <circle cx="129.25" cy="83.5" r="3.25" fill="url(#hole-gradient)" />
              </g>
          </g>

          <!-- outer ('hours') hand -->
          <g>
              <path class="cls-h" transform="
                translate(${x} ${y + outerPathDesc.yOff})   
                rotate(${this.outerHandAngle}) 
                translate(-${outerPathDesc.xOff}, -${outerPathDesc.yOff})" 
                fill="${this.outerHandColor}" d="${outerPathDesc.path}" />
          </g>

          <!-- inner ('minutes') hand -->
          <g>
              <path class="cls-h" 
                transform="
                  translate(${x} ${y + innerPathDesc.yOff})
                  rotate(${this.innerHandAngle}) 
                  translate(-${innerPathDesc.xOff}, -${innerPathDesc.yOff})" 
                fill="${this.innerHandColor}" d="${innerPathDesc.path}" />
          </g>
        </g>
    </svg>`;
  }
}
