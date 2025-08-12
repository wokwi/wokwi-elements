import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';
import { mmToPix } from './utils/units';

type HandShape = 'arrow' | 'plain' | 'ornate';
type HandDesc = { xOff: number; yOff: number; path: string };

const SHAFT_X = 60; // x location of shaft point
const SHAFT_Y = 77; // y location of shaft point
const OUTER_OFFSET = 9; // offset to center of outer hand's ring
const INNER_OFFSET = 4.7; // offset to center of inner hand's ring
const ORNATE_OUTER_OFFSET = 9; // offset to center of outer ornate hand's ring
const ORNATE_INNER_OFFSET = 5; // offset to center of inner ornate hand's ring

@customElement('wokwi-biaxial-stepper')
export class BiaxialStepperElement extends LitElement {
  // length used to control outer hand length in mm
  @property() outerHandLength = 30;

  // the current hand angle in degrees
  @property({ type: Number }) outerHandAngle = 0;

  // the current outer hand color
  @property() outerHandColor = 'gold';

  // the current outer hand shape
  @property() outerHandShape: HandShape = 'plain';

  // length used to control inner hand length in mm
  @property() innerHandLength = 30;

  // the current hand angle in degrees
  @property({ type: Number }) innerHandAngle = 0;

  // the current inner hand color
  @property() innerHandColor = 'silver';

  // the current inner hand shape
  @property() innerHandShape: HandShape = 'plain';

  get pinInfo(): ElementPin[] {
    const pinXY = (y: number) => {
      return { x: 45, y: (28.9 + y * 2.54) * mmToPix };
    };

    return [
      { name: 'A1-', ...pinXY(0), number: 1, signals: [] },
      { name: 'A1+', ...pinXY(1), number: 2, signals: [] },
      { name: 'B1+', ...pinXY(2), number: 3, signals: [] },
      { name: 'B1-', ...pinXY(3), number: 4, signals: [] },
      { name: 'A2-', ...pinXY(4), number: 5, signals: [] },
      { name: 'A2+', ...pinXY(5), number: 6, signals: [] },
      { name: 'B2+', ...pinXY(6), number: 7, signals: [] },
      { name: 'B2-', ...pinXY(7), number: 8, signals: [] },
    ];
  }

  readonly handMap: { [key: string]: (len: number) => HandDesc } = {
    outerPlainHand: (len: number) => ({
      xOff: OUTER_OFFSET,
      yOff: OUTER_OFFSET,
      path: `m 0 0 c 0 5 4 9 9 9 c 3.3 0 6.1 -1.7 7.7 -4.3 h 24.9 h ${len} c 1.4 -1.5 1.9 -3.6 1.8 -4.7 c 0 -1.4 -0.4 -3.2 -1.9 -4.6 h -${len} h -24.8 c -1.6 -2.7 -4.5 -4.4 -7.8 -4.4 c -5 0 -9 4.1 -9 9 z m 3.5 0 c 0 -3 2.4 -5.4 5.5 -5.4 s 5.5 2.4 5.5 5.4 s -2.5 5.4 -5.5 5.4 s -5.5 -2.4 -5.5 -5.4 z`,
    }),

    outerArrowHand: (len: number): HandDesc => ({
      xOff: OUTER_OFFSET,
      yOff: OUTER_OFFSET,
      path: `m 0 0 c 0 5 4 9 9 9 c 3.89 0 7.16 -2.42 8.43 -5.85 c 0.3 -0.58 0.78 -1.16 1.27 -1.45 c 0.6 -0.3 1.29 -0.4 1.99 -0.2 c 0 0 0 0 0 0 h 0.01 l 0.9 3.3 h 20 l ${len} -4.7 l -${len} -4.9 h -20.138 l -0.9 3.3 c -0.7 0.2 -1.4 0.1 -2 -0.2 c -0.6 -0.3 -1.1 -0.8 -1.3 -1.5 c 0 0 -0.01 0.02 -0.02 0.02 c -1.38 -3.72 -4.38 -5.72 -8.38 -5.72 c -5 0 -9 4 -9 9 z m 3.5 0 c 0 -3.1 2.5 -5.5 5.5 -5.5 s 5.5 2.5 5.5 5.5 s -2.5 5.5 -5.5 5.5 s -5.5 -2.5 -5.5 -5.5 z`,
    }),

    outerOrnateHand: (): HandDesc => ({
      xOff: ORNATE_OUTER_OFFSET,
      yOff: ORNATE_OUTER_OFFSET,
      path: `m 0 0 c 0 5 4 9 9 9 c 4.951 0.028 9.683 -3.101 9.6 -7.6 c 0 0 1.1 1.4 3.3 1.2 c -0.2 1 0.3 1.2 0.3 1.2 c 0.6 -1.5 6.4 -6.3 8.6 -0.3 c -3.1 -0.3 -1.8 3.8 0.5 1.6 c 0 0 0.9 2.3 4 2.1 c -0.8 1.7 3.1 2.1 1.7 -0.4 c 0 0 2.7 -1 2.3 -3.9 c 0 0 0.8 0.6 2.6 0.6 c 2.7 0.2 6.2 -3.7 16 -2.9 l 0.6 -0.7 l -0.6 -0.8 c -8.9 0.7 -13 -2.3 -16 -3 c -1.9 0 -2.5 0.8 -2.5 0.8 c 0 0 0.3 -2.6 -2.5 -4.1 c 0.8 -0.8 0 -1.6 -0.8 -1.6 c -0.5 0 -1 0.4 -0.8 1.5 c 0 0 -2.8 -0.8 -4 2.1 c 0 0 -1.4 -2 -2.5 0.3 c 0.2 0.5 0 0.9 0.8 1.2 c 0.2 0.3 1.2 -0.2 1.2 -0.2 c 0 0 -0.6 3.2 -3.9 3 c 0 0 -2.7 0.1 -4.8 -3.3 c -0.3 0.5 -0.3 0.7 -0.3 0.7 v 0.7 c 0 0 -2.1 -0.4 -3.4 1.2 c -0.06 -4.37 -4.449 -7.347 -9.41 -7.385 c -5 0 -9 4 -9 9 z m 44 -2.2 c 2.1 1.2 4.1 1.5 4.1 1.5 c -0.4 0.7 -0.5 0.7 0 1.6 c 0 0 -2.6 0.2 -4.1 1.4 c 0 0 0.2 -1.7 -0.6 -2.2 c 1 -0.6 0.6 -2.2 0.6 -2.2 z m -2.3 -0.5 c 1.3 0.1 1.6 1.1 1.6 1.1 c 0.1 0.4 -1.2 0.8 -1.1 1.1 l 0.3 0.5 l -0.2 0.6 c 0 0.3 0.6 0.4 1.2 1 c -0.5 0.6 -0.5 1.3 -2.1 1.3 c -1.1 0 -3.1 -2.5 -4.2 -2.9 c 1.1 -0.1 2.5 -2.8 4.5 -2.8 z m -10.8 0.9 c 0.5 1 2 1.9 2 1.9 c -1.4 0.7 -2 1.7 -2 1.7 c -1 -1.2 -2.2 -1.9 -2.2 -1.9 c 1.3 -0.6 2.2 -1.8 2.2 -1.8 z m -10.1 0.4 c 1.4 0 1.5 1.1 3.656 1.552 c -2 0.3 -2.4 1.5 -3.6 1.4 c -1.5 -0.1 -1.6 -1.3 -1.6 -1.3 c 0 0 -0.2 -1.5 1.6 -1.6 c 0 0 0 0 0.1 0 z m 14.1 2.1 c 3.1 0.1 3.1 3.2 3.1 3.2 c -0.3 1.7 -2.5 2.6 -2.5 2.6 c -2.5 0.2 -3.3 -1.5 -3.3 -1.5 c 0 0 1.4 0.6 1.8 -1 c -0.4 -2 -2.2 -0.8 -2.2 -0.8 c 0.3 -2.3 3 -2.5 3 -2.5 z`,
    }),

    innerPlainHand: (len: number): HandDesc => ({
      xOff: INNER_OFFSET,
      yOff: INNER_OFFSET,
      path: `m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.3 0 1.3 0 2.4 -0.4 h 2 h 27.7 h ${len} c 1.2 -1.2 1.8 -3.3 1.8 -4.3 c 0 -1 -0.7 -3.3 -1.9 -4.2 h -${len} h -27.7 h -1.9 c -0.2 0 -1.3 -0.5 -2.6 -0.5 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`,
    }),

    innerArrowHand: (len: number): HandDesc => ({
      xOff: INNER_OFFSET,
      yOff: INNER_OFFSET,
      path: `m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.37 0 2.59 -0.59 3.44 -1.52 c 0.7 -0.7 1.5 -1.2 2.5 -1.5 s 2 -0.3 2.9 -0.1 l 0.46 3.37 l ${len}.44 -4.96 l -${len}.34 -5.03 l -0.75 3.53 c -0.81 0.1 -1.81 0.1 -2.71 -0.2 c -1 -0.3 -1.8 -0.8 -2.5 -1.5 c -0.86 -0.93 -2.08 -1.52 -3.44 -1.52 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`,
    }),

    innerOrnateHand: (): HandDesc => ({
      xOff: ORNATE_INNER_OFFSET,
      yOff: ORNATE_INNER_OFFSET,
      path: `m 0 0 c 0 5 5 5 5 5 c 5 0 4.6565 -5.696 5 -2.6 l 0.028 1.101 l 1.4525 0.016 l 0.55 -1.5 c 0 0 1.05 1.55 3.3 1.75 c 2.35 0.05 3.2 -0.85 3.2 -0.85 l 0.05 0.75 l 0.95 -0.05 l -0.05 1 l 4 -2.4 c 0.4 1.35 1.75 1.5 1.75 1.5 c 0.65 0.1 1.85 -0.95 1.85 -0.95 l 0.7 1.45 l 1 -1.75 l 1 1 l 0.35 -1.45 c 2.4 1.45 4.15 1.2 4.15 1.2 c 2.95 -0.1 3.9 -1.05 6.6 -1.95 c 4.85 -0.7 10.3 -0.1 10.3 -0.1 l -0.25 1.65 l 3.85 -1.45 l 15.2 -0.3 l 0.45 -0.4 l -0.55 -0.4 l -15.4 -0.25 l -3.6 -1.55 l 0.4 1.8 c 0 0 -4.75 -0.85 -10.1 -0.25 l -0.25 -1.05 l -1.05 0.85 c 0 0 0.45 -2.2 0.25 -3.8 c -1.15 2.55 -1.95 6.25 -6.45 6.3 c -4.4 -0.35 -5.7 -4.05 -5.7 -4.05 l -0.45 1 l -0.5 -0.5 l -0.55 0.75 c 0 0 -0.85 -0.6 -2.35 -0.75 c -1.85 0.15 -2.35 0.45 -2.35 0.45 l -0.25 -1.45 l -1.2 1.25 l -0.5 -0.8 l -1.05 1.05 l -0.6 -0.85 c -0.6 -0.45 -1.15 -0.55 -1.75 -0.3 c 0 0 -0.6 0.25 -0.8 0.75 c 0 0 -0.45 -0.7 -1.2 -0.85 c -0.75 -0.05 -2.3 1.3 -2.3 1.3 l -0.6175 -2.289 l -1.469 -0.032 l -0.0165 1.2265 c -0.3785 2.4515 0.0485 -3.212 -5.036 -3.228 c -4 0 -5.004 2.518 -5 5 z m 13.25 -1.2 c 0 0 0.15 1.3 1.05 1.3 c 0 0 0.5 -0.25 0.7 -0.8 c 0 0 0.35 0.85 0.75 0.9 c 0.9 -0.1 0.85 -1.25 1.15 -1.3 c 0 0 0.9 0.35 0.9 2.15 c 0 0 -0.6 1.7 -3 1.65 c 0 0 -2.05 -0.15 -2.55 -1.95 c 0 0 -0.15 -1.5 0.95 -2 z m 10.5 0.55 c 1.05 0 1.4 0.25 1.4 0.25 c 0.75 0.45 1 1.2 1 1.2 c 0.05 1.6 -0.85 1.55 -1.65 1.6 c 0 0 -0.95 -0.35 -1.3 -1.35 l -3.1 1.75 c 0 0 0.45 -2.5 2.8 -3.45 c 0.35 -0.05 0.6 -0.05 0.85 -0.05 z`,
    }),
  };

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

    return html` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56mm"
      height="67.5mm"
      viewBox="0 0 212 255"
    >
      <defs>
        <style>
          .cls-1 {
            fill: #939598;
          }
          .cls-2 {
            fill: #d2d2d2;
          }
          .cls-3 {
            fill: #808285;
          }
          .cls-4 {
            fill: #ed1f24;
          }
          .cls-5 {
            fill: #70bf44;
          }
          .cls-6 {
            fill: #414042;
          }
          .cls-h {
            fill: 'blue';
            stroke: #000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 0.1px;
            transform-box: fill-box;
          }
        </style>
        <linearGradient id="hole-gradient">
          <stop stop-color="#4f4f4f" offset="-25%" />
          <stop stop-color="grey" offset="75%" />
        </linearGradient>
      </defs>
      <g transform="translate(45 30)">
        <!-- pins - translate to top of base, between holes -->
        <g transform="scale(${mmToPix}) translate(2 20.5) ">
          <path id="pin-1" class="cls-3" d="m 0 0 h -2 c -0.5 0.5 -0.5 0.5 0 1 h 2 z" />
          <use href="#pin-1" y="2.54" />
          <use href="#pin-1" y="5.08" />
          <use href="#pin-1" y="7.62" />
          <use href="#pin-1" y="10.16" />
          <use href="#pin-1" y="12.70" />
          <use href="#pin-1" y="15.24" />
          <use href="#pin-1" y="17.78" />
        </g>

        <!-- scaled body -->
        <g>
          <!-- base -->
          <path
            class="cls-6"
            d="m 42.81 0 c -21.15 6.64 -37 25.23 -39.61 47.87 c -1.87 1.6 -3.08 3.95 -3.08 6.61 c 0 2.67 1.21 5.01 3.08 6.61 c 0.33 2.84 0.89 5.6 1.63 8.31 l 0 88.29 c -0.69 2.57 -1.23 5.2 -1.56 7.89 c -1.97 1.6 -3.27 4.01 -3.27 6.76 c 0 2.75 1.25 5.09 3.19 6.69 c 2.49 22.4 17.95 40.81 38.68 47.73 l 36.12 0 c 20.57 -6.87 35.96 -25.09 38.63 -47.27 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -0.35 -2.91 -0.93 -5.73 -1.71 -8.49 l 0 -87.35 c 0.77 -2.76 1.35 -5.59 1.71 -8.49 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -2.72 -22.52 -18.52 -40.96 -39.57 -47.59 l -34.23 0 z"
          />

          <!-- ribs -->
          <g>
            <path
              class="cls-3"
              d="M 62.89 0.01 l -5.96 0 l 0 29.99 c -1.17 0.25 -2.26 0.67 -3.32 1.17 l -13.17 -16.82 c -1.008 -1.717 -2.824 -3.461 -4.943 -2.697 c -1.398 0.505 -1.946 1.096 -1.423 4.207 l 0.006 0.01 l 14.77 18.86 c -1.36 1.51 -2.4 3.27 -3.06 5.22 l -39.71 -4.28 c -0.67 1.89 -1.24 3.82 -1.69 5.8 l 40.6 4.37 c 0.06 1.19 0.28 2.33 0.61 3.43 l -40.79 22.6 l 0 6.81 l 18.6 -10.32 l 0 42.07 l -18.6 0 l 0 5.96 l 18.6 0 l 0 41.9 l -18.58 -10.36 l 0 6.82 l 40.81 22.72 c -0.36 1.13 -0.59 2.32 -0.67 3.54 l -40.64 4.56 c 0.46 1.98 1.03 3.91 1.7 5.8 l 39.7 -4.45 c 0.64 1.91 1.64 3.61 2.94 5.11 l -14.06 18.38 l 0.04 0.04 c -0.34 0.51 -0.58 1.1 -0.58 1.75 c 0 1.77 1.44 3.2 3.2 3.2 c 1.6 0 2.88 -1.2 3.1 -2.75 l 13 -17 c 1.12 0.56 2.3 1.03 3.56 1.3 l 0 29.53 l 5.96 0 l 0 -29.44 c 1.35 -0.24 2.63 -0.68 3.83 -1.27 l 13.25 16.92 c 0.24 1.52 1.51 2.71 3.11 2.71 c 1.77 0 3.2 -1.44 3.2 -3.2 c 0 -1.05 -0.53 -1.95 -1.32 -2.52 l 0.13 -0.11 l -13.6 -17.37 c 1.31 -1.47 2.34 -3.16 3 -5.04 l 39.34 4.24 c 0.66 -1.89 1.24 -3.83 1.69 -5.8 l -40.17 -4.33 c -0.07 -1.4 -0.34 -2.74 -0.76 -4.02 l 40.33 -22.37 l 0 -6.81 l -18.8 10.42 l 0 -90.26 l 18.8 10.46 l 0 -6.81 l -40.27 -22.41 c 0.34 -1.08 0.56 -2.22 0.66 -3.39 l 40.22 -4.51 c -0.45 -1.97 -1.04 -3.9 -1.69 -5.8 l -39.25 4.4 c -0.7 -2.12 -1.82 -4.05 -3.31 -5.65 l 13 -17.01 c 1.16 -0.48 1.99 -1.63 1.99 -2.96 c 0 -1.78 -1.44 -3.2 -3.2 -3.2 c -1.08 0 -1.99 0.57 -2.58 1.38 l -0.02 -0.02 l -14.02 18.33 c -1.12 -0.51 -2.32 -0.89 -3.56 -1.12 l 0 -29.91 z m 27.27 116.38 l 0 45.41 l -18.53 10.28 c -2.23 -2.57 -5.27 -4.4 -8.75 -5.03 l 0 -38.57 c 6.17 -1.12 11.05 -5.93 12.24 -12.09 z m -45 0 c 1.16 6 5.81 10.74 11.77 12.01 l 0 38.72 c -3.37 0.72 -6.28 2.59 -8.42 5.13 l -18.66 -10.38 l 0 -45.5 l 15.31 0 z m -15.31 -5.96 l 0 -45.63 l 18.51 -10.27 c 2.15 2.64 5.12 4.58 8.57 5.31 l 0 2.56 c -7.02 1.37 -12.33 7.55 -12.33 14.97 c 0 7.43 5.31 13.62 12.33 14.98 l 0 6.2 c -5.9 1.26 -10.56 5.93 -11.76 11.88 z m 45.26 0 c -1.24 -6.1 -6.1 -10.84 -12.23 -11.95 l 0 -6.13 c 6.99 -1.4 12.27 -7.58 12.27 -14.98 c 0 -7.4 -5.27 -13.57 -12.27 -14.97 l 0 -2.49 c 3.57 -0.66 6.67 -2.56 8.91 -5.23 l 18.36 10.23 l 0 45.52 l -15.06 0 z"
            />
          </g>

          <!-- holes -->
          <g>
            <g>
              <circle cx="4" cy="54.25" r="6.5" class="cls-1" />
              <circle cx="4" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
            </g>
            <g>
              <circle cx="4" cy="172.25" r="6.5" class="cls-1" />
              <circle cx="4" cy="172.25" r="3.25" fill="url(#hole-gradient)" />
            </g>
            <g>
              <circle cx="115" cy="54.25" r="6.5" class="cls-1" />
              <circle cx="115" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
            </g>
            <g>
              <circle cx="115" cy="172.25" r="6.5" class="cls-1" />
              <circle cx="115" cy="172.25" r="3.25" fill="url(#hole-gradient)" />
            </g>
          </g>

          <!-- outer ('hours') hand -->
          <g>
            <path
              class="cls-h"
              transform="
                translate(${x} ${y + outerPathDesc.yOff})   
                rotate(${270 + this.outerHandAngle}) 
                translate(-${outerPathDesc.xOff}, -${outerPathDesc.yOff})"
              fill="${this.outerHandColor}"
              d="${outerPathDesc.path}"
            />
          </g>

          <!-- inner ('minutes') hand -->
          <g>
            <path
              class="cls-h"
              transform="
                  translate(${x} ${y + innerPathDesc.yOff})
                  rotate(${270 + this.innerHandAngle}) 
                  translate(-${innerPathDesc.xOff}, -${innerPathDesc.yOff})"
              fill="${this.innerHandColor}"
              d="${innerPathDesc.path}"
            />
          </g>
        </g>
      </g>
    </svg>`;
  }
}
