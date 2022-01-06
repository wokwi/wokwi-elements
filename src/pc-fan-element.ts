import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin } from '.';

@customElement('wokwi-pc-fan')
export class PcFanElement extends LitElement {
  @property() angle = 0;

  readonly pinInfo: ElementPin[] = [
    { name: 'VCC', y: 95, x: 4, number: 1, signals: [] },
    { name: 'GND', y: 101, x: 4, number: 2, signals: [] },
    { name: 'PWM', y: 108, x: 4, number: 3, signals: [] },
  ];

  render() {
    return html`
      <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="113mm"
        height="113mm"
        xml:space="preserve"
        id="pc_fan"
      >
        >
        <style type="text/css">
          <![CDATA[
                .fanBodyColor {
                     fill: #222222;
                }
                .fanOpeningColor {
                     fill: #eeeeee;
                }
                .pc_fan-fan {

                }
                svg text{
                  user-select: none;
               }
            ]]>
        </style>
        <g id="pc_fan-fan_page">
          <g id="pc_fan-fan_cage">
            <rect
              id="pc_fan-cage_body"
              stroke="none"
              class="fanBodyColor"
              x="0"
              y="0"
              width="113.39"
              height="113.39"
            />
            <circle
              id="pc_fan-cage_opening"
              stroke="none"
              class="fanOpeningColor"
              cx="56.69"
              cy="56.69"
              r="52.91"
            />
            <circle
              id="pc_fan-mount_hole_ul"
              stroke="none"
              class="fanOpeningColor"
              cx="6.05"
              cy="5.29"
              r="2.27"
            />
            <circle
              id="pc_fan-mount_hole_ur"
              stroke="none"
              class="fanOpeningColor"
              cx="106.58"
              cy="5.29"
              r="2.27"
            />
            <!-- <circle id="pc_fan-mount_hole_ll" stroke="none" class="fanOpeningColor" cx="6.05" cy="107.72" r="2.27" /> -->
            <circle
              id="pc_fan-mount_hole_lr"
              stroke="none"
              class="fanOpeningColor"
              cx="106.58"
              cy="108.72"
              r="2.27"
            />
          </g>
          <g id="pc_fan-fan" transform="translate(56.88, 56.74) rotate(${this.angle})">
            <path
              id="pc_fan-fan_balde_"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(120)"
            />
            <path
              id="pc_fan-fan_balde_06"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(-300)"
            />
            <path
              id="pc_fan-fan_balde_05"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(-180)"
            />
            <path
              id="pc_fan-fan_balde_04"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(-120)"
            />
            <path
              id="pc_fan-fan_balde_03"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(-120)"
            />
            <path
              id="pc_fan-fan_balde_02"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform="rotate(-60)"
            />
            <path
              id="pc_fan-fan_balde_01"
              fill-rule="evenodd"
              stroke="none"
              class="fanBodyColor"
              d="M 9.18,-49.25 C 1.34,-49.77 -5.93,-49.81 -13.57,-47.89 -14.46,-47.67 -14.77,-47.06 -14.77,-46.01 -14.77,-44.33 -14.4,-44.04 -13.57,-42.42 -10.4,-36.3 -9.47,-36.98 -6.76,-30.53 -3.91,-23.73 -3.44,-21.69 -2.44,-15.93 0.75,-15.3 0.93,-15.47 4.07,-14.2 7.63,-12.75 7.59,-12.68 10.96,-10.44 11.24,-10.26 11.46,-10.12 11.59,-10.44 12.21,-11.94 13.79,-19.31 13.95,-21.19 14.93,-26.41 15.33,-28.21 15.33,-39.69 14.27,-46.46 15.47,-48.83 9.18,-49.25 Z M 9.18,-49.25"
              transform=""
            />
            <ellipse
              id="pc_fan-fan_mask_hub"
              stroke="none"
              class="fanOpeningColor"
              cx="-0.25"
              cy="-0.07"
              rx="17.5"
              ry="17.43"
            />
            <circle
              id="pc_fan-fan_inner_hub"
              stroke="none"
              class="fanBodyColor"
              cx="-0.19"
              cy="-0.04"
              r="15.12"
            />
          </g>
          <g id="pc_fan-terminals">
            <circle
              id="pc_fan-vcc_pad"
              stroke="rgb(198, 143, 17)"
              stroke-width="1"
              stroke-miterlimit="10"
              class="fanOpeningColor"
              cx="4"
              cy="95"
              r="2"
            />
            <circle
              id="pc_fan-gnd_pad"
              stroke="rgb(198, 143, 17)"
              stroke-width="1"
              stroke-miterlimit="10"
              class="fanOpeningColor"
              cx="4"
              cy="101.5"
              r="2"
            />
            <circle
              id="pc_fan-pwm_pad"
              stroke="rgb(198, 143, 17)"
              stroke-width="1"
              stroke-miterlimit="10"
              class="fanOpeningColor"
              cx="4"
              cy="108"
              r="2"
            />

            <text
              fill="rgb(255, 255, 255)"
              font-family="HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
              font-size="3.5"
              x="8"
              y="106"
            >
              <tspan x="8" y="109">PWM</tspan>
            </text>

            <text
              fill="rgb(255, 255, 255)"
              font-family="HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
              font-size="3.5"
              x="8"
              y="100"
            >
              <tspan x="8" y="103">GND</tspan>
            </text>

            <text
              fill="rgb(255, 255, 255)"
              font-family="HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
              font-size="3.5"
              x="8"
              y="93"
            >
              <tspan x="8" y="96">VCC</tspan>
            </text>
          </g>
        </g>
      </svg>
    `;
  }
}
