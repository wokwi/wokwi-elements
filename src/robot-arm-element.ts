import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';

@customElement('wokwi-robot-arm')
export class RobotArmElement extends LitElement {
  /**
   * Angle of shoulder
   */
  @property() sholderAngle = 297;

  /**
   * Angle of elbow
   */
  @property() elbowAngle = 52;

  /**
   * Angle of wrist
   */
  @property() wristAngle = 56;

  /**
   * Angle of gripper
   */
  @property() gripperAngle = 270;

  /**
   * The color of the gripper
   */
  @property() gripperColor = '#eeeedd';

  /**
   * The color of the arm
   */
  @property() armColor = '#ffffdd';

  /**
   * The color of the joints
   */
  @property() jointColor = '#111111';

  readonly pinInfo: ElementPin[] = [
    { name: 'PWM1', y: 195, x: 25, number: 1, signals: [{ type: 'pwm' }] },
    { name: 'PWM2', y: 195, x: 30, number: 2, signals: [{ type: 'pwm' }] },
    { name: 'PWM3', y: 195, x: 35, number: 3, signals: [{ type: 'pwm' }] },
    { name: 'PWM4', y: 195, x: 40, number: 3, signals: [{ type: 'pwm' }] },
  ];

  render() {
    /* eslint-disable prettier/prettier */
    return html`
      <style>
        text {
          user-select: none;
        }
      </style>
      <svg version="1.1" width="70mm" height="52mm" viewBox="0 0 350 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <!-- Terminals -->
          <g>
              <rect x="29" y="243" width="28" height="7" fill="${this.armColor}"/>
              <rect x="32" y="250" width="1" height="9" fill="${this.jointColor}"/>
              <rect x="38" y="250" width="1" height="9" fill="${this.jointColor}"/>
              <rect x="45" y="250" width="1" height="9" fill="${this.jointColor}"/>
              <rect x="52" y="250" width="1" height="9" fill="${this.jointColor}"/>
          </g>
          <g transform="translate(46.71 210.57)">
              <!-- Shoulder -->
              <g transform="rotate(${this.sholderAngle})">
                  <path transform="translate(-1.27)" d="m1-36c-19.63 0-36.04 16.39-36.04 36s16.41 36 36.04 36 98.75-9 113.12-10c14.38-1 26.03-11 26.03-26s-11.65-24-26.03-26c-14.37-2-93.49-10-113.12-10z" fill="${this.armColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>

                  <!-- Elbow -->
                  <g transform="translate(113) rotate(${this.elbowAngle})">

                      <!-- Wrist -->
                      <g transform="translate(98) rotate(${this.wristAngle})">
                          <path d="m57 15c8.28-1 15-6.72 15-15s-6.72-14-15-15-45.4-6-57-6-21 9.4-21 21 9.4 21 21 21 48.72-5 57-6z" fill="${this.armColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>

                          <!-- Fingers -->
                          <g transform="translate(69.65 10.9) rotate(-${this.gripperAngle})">
                              <g transform="translate(38.91 -6.36) rotate(${this.gripperAngle})">
                                  <path d="m-7.5 8.54c-3.47-0.41-7-3-7-7.5s3.53-7.1 7-7.5c3.47-0.41 33.33 2.61 36.19 3.11 2.91 0.51 4.81 1.81 4.81 4.5 0 2.7-1.9 4-4.81 4.5-2.86 0.5-32.72 3.29-36.19 2.89z" fill="${this.gripperColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              </g>
                              <path d="m36.5 8.14c3.47-0.41 7-3 7-7.5s-3.53-7.1-7-7.5c-3.47-0.41-31.33-1-36.19-1-4.87 0-8.81 3.8-8.81 8.5 0 4.69 3.94 8.5 8.81 8.5 4.86 0 32.72-0.6 36.19-1z" fill="${this.gripperColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              <circle cx="36" cy=".64" r="3.5" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              <circle cy=".64" r="4.5" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                          </g>
                          <g transform="translate(69.5 -10.5) rotate(${this.gripperAngle})">
                              <g transform="translate(40.91 4.68) rotate(-${this.gripperAngle})">
                                  <path d="m-7.5 9.54c-3.47-0.41-7-3-7-7.5s3.53-7.1 7-7.5c3.47-0.41 33.33 2.61 36.19 3.11 2.91 0.51 4.81 1.81 4.81 4.5 0 2.7-1.9 4-4.81 4.5-2.86 0.5-32.72 3.29-36.19 2.89z" fill="${this.gripperColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              </g>
                              <path d="m35.89 7.18c3.42-0.4 6.9-3 6.9-7.5s-3.48-7.09-6.9-7.5c-3.43-0.4-30.91-1-35.7-1-4.8 0-8.69 3.81-8.69 8.5 0 4.7 3.89 8.5 8.69 8.5 4.79 0 32.27-0.59 35.7-1z" fill="${this.gripperColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              <circle cx="35" cy="-.32" r="3.5" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                              <circle cy="-.32" r="4.5" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                          </g>
                      </g>
                      <path d="m99 21c11.6-1 21-9.4 21-21s-9.4-20-21-21-84.64-5-99-5-26 11.64-26 26 11.64 26 26 26 87.4-4 99-5z" fill="${this.armColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                      <circle r="9" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                      <circle cx="98" r="8" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                  <circle r="12" fill="${this.jointColor}" stroke="${this.jointColor}" stroke-miterlimit="10" stroke-width="2"/>
              </g>
          </g>
      </svg>
    `;
  }
}
