import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';

@customElement('wokwi-robot-arm')
export class RobotArmElement extends LitElement {
  /**
   * Angle of gripper Open=270 Closed=360
   */

  @property() handAngle = 0;
  /**
   * Arm Angle Down=250 UP=3328
   */
  @property() armAngle = 200;
  /**
   * The color of the gripper
   */
  @property() fingerColor = '#eeeedd';
  /**
   * The color of the arm
   */
  @property() armColor = '#ffffdd';
  /**
   * The color of the joints
   */
  @property() jointColor = '#111111';

  readonly pinInfo: ElementPin[] = [
    { name: 'VCC', y: 258, x: 38, number: 1, signals: [{ type: 'power', signal: 'VCC' }] },
    { name: 'GND', y: 258, x: 42.5, number: 2, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'PWM1', y: 258, x: 46.5, number: 3, signals: [{ type: 'pwm' }] },
    { name: 'PWM2', y: 258, x: 51, number: 3, signals: [{ type: 'pwm' }] },
  ];

  render() {
    return html`
      <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="350mm"
        height="100mm"
        xml:space="preserve"
        id="robotArmView"
      >
        <style type="text/css">
          <![CDATA[
              .fingerColor {
                   fill: ${this.fingerColor};
                   stroke: rgb(125, 125, 125);
              }
              .robotJointColor {
                   fill: ${this.jointColor};
                   stroke: rgb(125, 125, 125);
              }
              .armatureColor {
                   fill: ${this.armColor};
                   stroke: rgb(125, 125, 125);
              }
          ]]>
        </style>
        <g id="robotArmView-connector">
          <rect
            id="robotArmView-rectangle"
            stroke="none"
            class="robotJointColor"
            x="37"
            y="243"
            width="15"
            height="7"
          />
          <rect
            id="robotArmView-vCC_PIN"
            stroke="none"
            class="robotJointColor"
            x="38"
            y="250"
            width="1"
            height="9"
          />
          <rect
            id="robotArmView-gND_PIN"
            stroke="none"
            class="robotJointColor"
            x="42"
            y="250"
            width="1"
            height="9"
          />
          <rect
            id="robotArmView-pWM1_PIN"
            stroke="none"
            class="robotJointColor"
            x="46"
            y="250"
            width="1"
            height="9"
          />
          <rect
            id="robotArmView-pWM2_PIN"
            stroke="none"
            class="robotJointColor"
            x="50"
            y="250"
            width="1"
            height="9"
          />
        </g>
        <g id="robotArmView-variablesIllustration" transform="translate(0.28, 258.7) rotate(-0.08)">
          <g id="robotArmView-arm1" transform="translate(46.5, -48.06) rotate(-64.69)">
            <path
              id="robotArmView-bezier61"
              stroke-width="2"
              stroke-miterlimit="10"
              class="armatureColor"
              d="M 1,-36 C -18.63,-36 -35.04,-19.61 -35.04,-0 -35.04,19.61 -18.63,36 1,36 20.63,36 99.75,27 114.12,26 128.5,25 140.15,15 140.15,-0 140.15,-15 128.5,-24 114.12,-26 99.75,-28 20.63,-36 1,-36 Z M 1,-36"
              transform="translate(-1.27, -0)"
            />
            <g id="robotArmView-arm2" transform="translate(113, -0) rotate(-${this.armAngle})">
              <g id="robotArmView-arm3" transform="translate(98, -0) rotate(34.69)">
                <path
                  id="robotArmView-bezier63"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  class="armatureColor"
                  d="M 57,15 C 65.28,14 72,8.28 72,-0 72,-8.28 65.28,-14 57,-15 48.72,-16 11.6,-21 0,-21 -11.6,-21 -21,-11.6 -21,-0 -21,11.6 -11.6,21 0,21 11.6,21 48.72,16 57,15 Z M 57,15"
                />
                <g
                  id="robotArmView-fingerA1"
                  transform="translate(69.65, 10.9) rotate(-${this.handAngle})"
                >
                  <g
                    id="robotArmView-fingerA2"
                    transform="translate(38.91, -6.36) rotate(${this.handAngle})"
                  >
                    <path
                      id="robotArmView-bezier65"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      class="fingerColor"
                      d="M -7.5,8.54 C -10.97,8.13 -14.5,5.54 -14.5,1.04 -14.5,-3.46 -10.97,-6.06 -7.5,-6.46 -4.03,-6.87 25.83,-3.85 28.69,-3.35 31.6,-2.84 33.5,-1.54 33.5,1.15 33.5,3.85 31.6,5.15 28.69,5.65 25.83,6.15 -4.03,8.94 -7.5,8.54 Z M -7.5,8.54"
                    />
                  </g>
                  <path
                    id="robotArmView-bezier64"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="fingerColor"
                    d="M 36.5,8.14 C 39.97,7.73 43.5,5.14 43.5,0.64 43.5,-3.86 39.97,-6.46 36.5,-6.86 33.03,-7.27 5.17,-7.86 0.31,-7.86 -4.56,-7.86 -8.5,-4.06 -8.5,0.64 -8.5,5.33 -4.56,9.14 0.31,9.14 5.17,9.14 33.03,8.54 36.5,8.14 Z M 36.5,8.14"
                  />
                  <circle
                    id="robotArmView-oval56"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="robotJointColor"
                    cx="36"
                    cy="0.64"
                    r="3.5"
                  />
                  <circle
                    id="robotArmView-oval51"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="robotJointColor"
                    cx="-0"
                    cy="0.64"
                    r="4.5"
                  />
                </g>
                <g
                  id="robotArmView-fingerB1"
                  transform="translate(69.5, -10.5) rotate(${this.handAngle})"
                >
                  <g
                    id="robotArmView-fingerB2"
                    transform="translate(40.91, 4.68) rotate(-${this.handAngle})"
                  >
                    <path
                      id="robotArmView-bezier66"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      class="fingerColor"
                      d="M -7.5,9.54 C -10.97,9.13 -14.5,6.54 -14.5,2.04 -14.5,-2.46 -10.97,-5.06 -7.5,-5.46 -4.03,-5.87 25.83,-2.85 28.69,-2.35 31.6,-1.84 33.5,-0.54 33.5,2.15 33.5,4.85 31.6,6.15 28.69,6.65 25.83,7.15 -4.03,9.94 -7.5,9.54 Z M -7.5,9.54"
                    />
                  </g>
                  <path
                    id="robotArmView-bezier67"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="fingerColor"
                    d="M 35.89,7.18 C 39.31,6.78 42.79,4.18 42.79,-0.32 42.79,-4.82 39.31,-7.41 35.89,-7.82 32.46,-8.22 4.98,-8.82 0.19,-8.82 -4.61,-8.82 -8.5,-5.01 -8.5,-0.32 -8.5,4.38 -4.61,8.18 0.19,8.18 4.98,8.18 32.46,7.59 35.89,7.18 Z M 35.89,7.18"
                  />
                  <circle
                    id="robotArmView-oval57"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="robotJointColor"
                    cx="35"
                    cy="-0.32"
                    r="3.5"
                  />
                  <circle
                    id="robotArmView-oval58"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    class="robotJointColor"
                    cx="0"
                    cy="-0.32"
                    r="4.5"
                  />
                </g>
              </g>
              <path
                id="robotArmView-bezier62"
                stroke-width="2"
                stroke-miterlimit="10"
                class="armatureColor"
                d="M 99,21 C 110.6,20 120,11.6 120,0 120,-11.6 110.6,-20 99,-21 87.4,-22 14.36,-26 -0,-26 -14.36,-26 -26,-14.36 -26,0 -26,14.36 -14.36,26 -0,26 14.36,26 87.4,22 99,21 Z M 99,21"
              />
              <circle
                id="robotArmView-oval39"
                stroke-width="2"
                stroke-miterlimit="10"
                class="robotJointColor"
                cx="-0"
                cy="0"
                r="9"
              />
              <circle
                id="robotArmView-oval43"
                stroke-width="2"
                stroke-miterlimit="10"
                class="robotJointColor"
                cx="98"
                cy="0"
                r="8"
              />
              <g id="robotArmView-group" transform="translate(98, -0) rotate(458)"></g>
            </g>
            <circle
              id="robotArmView-oval46"
              stroke-width="2"
              stroke-miterlimit="10"
              class="robotJointColor"
              cx="0"
              cy="-0"
              r="12"
            />
          </g>
        </g>
      </svg>
    `;
  }
}
