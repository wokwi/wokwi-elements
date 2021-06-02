import { customElement, html, LitElement, property, svg } from 'lit-element';
import { pinsFemalePattern } from './patterns/pins-female';
import { ElementPin } from './pin';

@customElement('wokwi-franzininho')
export class FranzininhoElement extends LitElement {
  @property() led1 = false;
  @property() ledPower = false;

  readonly pinInfo: ElementPin[] = [
    { name: 'GND', x: 166.7, y: 15.6, signals: [{ type: 'power', signal: 'GND' }] },
    { name: 'VCC', x: 166.7, y: 23, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
    { name: '5', x: 166.7, y: 30.5, signals: [] },
    { name: '4', x: 166.7, y: 37.9, signals: [] },
    { name: '3', x: 166.7, y: 45.3, signals: [] },
    { name: '2', x: 166.7, y: 52.8, signals: [] },
    { name: '1', x: 166.7, y: 60.2, signals: [] },
    { name: '0', x: 166.7, y: 67.7, signals: [] },
  ];

  render() {
    const { ledPower, led1 } = this;
    return html`
      <svg
        width="63.851mm"
        height="30.255mm"
        version="1.1"
        viewBox="0 0 63.851 30.255"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="a"
            x1="-267.88"
            x2="-253.58"
            y1="-465.35"
            y2="-465.35"
            gradientTransform="matrix(1.0474 0 0 -1.0474 314.25 -588.03)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#333" offset="0" />
            <stop stop-color="#3C3C3C" offset="1" />
          </linearGradient>
        </defs>
        <g transform="translate(-77.817 -118.84)">
          <text
            x="276.12292"
            y="96.868858"
            fill="#1a1a1a"
            font-family="Ubuntu"
            font-size="2.5695px"
            font-weight="bold"
            stroke-width=".077085"
            word-spacing="0px"
            style="line-height:1.25"
            xml:space="preserve"
          >
            <tspan x="276.12292" y="96.868858" fill="#1a1a1a" stroke-width=".077085" />
          </text>
          <text
            x="308.57144"
            y="154.79533"
            fill="#ffffff"
            font-family="Ubuntu"
            font-size="2.0627px"
            font-weight="bold"
            stroke-width=".061882"
            word-spacing="0px"
            style="line-height:1.25"
            xml:space="preserve"
          >
            <tspan x="308.57144" y="154.79533" fill="#ffffff" stroke-width=".061882" />
          </text>
          <g transform="matrix(.00254 0 0 .00254 74.455 118.03)">
            <text
              x="-30004.951"
              y="24665.82"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-27155.053"
              y="30534.459"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-25312.199"
              y="30545.188"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-22346.953"
              y="-28187.496"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-6501.8115"
              y="26553.596"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1666.7px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-170213.72"
              y="-14920.719"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-168001.39"
              y="-10365.015"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-166570.83"
              y="-10356.683"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="16720.805"
              y="-168802.86"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-151968.7"
              y="-13455.274"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-488517.97"
              y="-84827.992"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-470763.56"
              y="-48267.398"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-459282.91"
              y="-48200.559"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="99274.133"
              y="-477195.53"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-342097.5"
              y="-73067.477"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-130389.26"
              y="4363.7358"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-128176.94"
              y="8919.4453"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-126746.38"
              y="8927.7715"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-2563.6553"
              y="-128978.41"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-112144.27"
              y="5829.1802"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-448693.5"
              y="-65543.547"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-430939.12"
              y="-28982.949"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-419458.47"
              y="-28916.105"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="79989.68"
              y="-437371.03"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-302273.03"
              y="-53783.023"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-19175.088"
              y="9413.2686"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-18495.404"
              y="10812.908"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-18055.895"
              y="10815.468"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="-8860.2402"
              y="-18741.637"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-13569.732"
              y="9863.499"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="397.49px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-52614.031"
              y="-27.872713"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-52086.406"
              y="1058.6372"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-51745.227"
              y="1060.6196"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="457.18536"
              y="-52277.551"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-48262.707"
              y="321.62564"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="308.56px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-128527.67"
              y="-16700.342"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-124293.35"
              y="-7980.856"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-121555.28"
              y="-7964.9185"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="20145.656"
              y="-125827.34"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-93607.273"
              y="-13895.523"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="2476.3px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-43116.141"
              y="4571.3545"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-42588.516"
              y="5657.8525"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-42247.336"
              y="5659.8472"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="-4142.042"
              y="-42779.66"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-38764.82"
              y="4920.853"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="308.56px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-119029.77"
              y="-12101.113"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-114795.47"
              y="-3381.6345"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-112057.4"
              y="-3365.6909"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="15546.428"
              y="-116329.44"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-84109.375"
              y="-9296.3018"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="2476.3px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-640.15656"
              y="9329.1621"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="170.84px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="16.017"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-211.51375"
              y="10211.841"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="170.84px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="16.017"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="65.664574"
              y="10213.463"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="170.84px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="16.017"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-8980.3848"
              y="-366.79895"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="170.84px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="16.017"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="2894.8665"
              y="9613.0957"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="250.68px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-21728.469"
              y="3375.0864"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-21395.721"
              y="4060.3022"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-21180.555"
              y="4061.5518"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-3104.345"
              y="-21516.266"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-18984.301"
              y="3595.4978"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="194.6px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-69603.5"
              y="-7139.4209"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-66933.125"
              y="-1640.4657"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-65206.355"
              y="-1630.4093"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="9312.2129"
              y="-67900.531"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-47580.906"
              y="-5370.561"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1561.7px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-15738.611"
              y="6275.6021"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-15405.864"
              y="6960.8057"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-15190.697"
              y="6962.0552"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-6004.8486"
              y="-15526.41"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="132.62px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="12.433"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-12994.446"
              y="6496.0137"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="194.6px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-63613.637"
              y="-4238.9116"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-60943.27"
              y="1260.038"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-59216.504"
              y="1270.0944"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="6411.709"
              y="-61910.668"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1064.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="99.781"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-41591.047"
              y="-2470.0513"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1561.7px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-586984.19"
              y="-21571.689"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-584134.25"
              y="-15703.05"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-582291.44"
              y="-15692.321"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="23890.557"
              y="-585166.69"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-563481"
              y="-19683.912"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1666.7px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-727192.94"
              y="-61158.223"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-724980.62"
              y="-56602.52"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-723550.06"
              y="-56594.184"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="62958.312"
              y="-725782.06"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-708947.94"
              y="-59692.777"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-1045497.1"
              y="-131065.5"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-1027742.8"
              y="-94504.906"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-1016262.1"
              y="-94438.062"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="145511.64"
              y="-1034174.7"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-899076.69"
              y="-119304.98"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-687368.5"
              y="-41873.766"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-685156.12"
              y="-37318.062"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-683725.62"
              y="-37309.738"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="43673.852"
              y="-685957.62"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-669123.5"
              y="-40408.32"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-1005672.7"
              y="-111781.05"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-987918.31"
              y="-75220.453"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-976437.62"
              y="-75153.609"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="126227.19"
              y="-994350.25"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-859252.25"
              y="-100020.53"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-327363.81"
              y="35685.887"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-324513.94"
              y="41554.523"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-322671.09"
              y="41565.254"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-33367.02"
              y="-325546.38"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1135.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="106.49"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-303860.69"
              y="37573.664"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1666.7px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-467572.59"
              y="-3900.6528"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-465360.28"
              y="655.04498"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-463929.69"
              y="663.38324"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="5700.7393"
              y="-466161.72"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-449327.59"
              y="-2435.2083"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-785876.88"
              y="-73807.938"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-768122.44"
              y="-37247.336"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-756641.75"
              y="-37180.5"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="88254.07"
              y="-774554.38"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-639456.38"
              y="-62047.418"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-427748.12"
              y="15383.802"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-425535.81"
              y="19939.512"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-424105.28"
              y="19947.838"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="-13583.722"
              y="-426337.28"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="881.76px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="82.666"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-409503.12"
              y="16849.246"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="1293.8px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-746052.38"
              y="-54523.484"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-728298"
              y="-17962.889"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-716817.31"
              y="-17896.045"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="rotate(-90)"
              x="68969.617"
              y="-734729.94"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="7076.4px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="663.41"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              x="-599631.88"
              y="-42762.965"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="10383px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-330926.56"
              y="19924.568"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-330246.91"
              y="21324.207"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-329807.41"
              y="21326.768"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="-19371.539"
              y="-330493.12"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="270.9px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="25.397"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-325321.22"
              y="20374.799"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="397.49px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-364365.53"
              y="10483.427"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-363837.91"
              y="11569.937"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-363496.72"
              y="11571.919"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="-10054.114"
              y="-364029.03"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-360014.19"
              y="10832.925"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="308.56px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-440279.19"
              y="-6189.0415"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-436044.84"
              y="2530.4375"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-433306.75"
              y="2546.3811"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="9634.3564"
              y="-437578.84"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-405358.75"
              y="-3384.2297"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="2476.3px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-354867.66"
              y="15082.654"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-354340"
              y="16169.152"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-353998.81"
              y="16171.146"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="-14653.342"
              y="-354531.16"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="210.3px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="19.715"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-350516.31"
              y="15432.152"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="308.56px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-430781.25"
              y="-1589.8201"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-426546.97"
              y="7129.665"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-423808.91"
              y="7145.6084"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="matrix(0 -1.0484 .95383 0 0 0)"
              x="5035.1348"
              y="-428080.94"
              fill="#ffffff"
              font-family="sans-serif"
              font-size="1687.7px"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-width="158.22"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            />
            <text
              transform="scale(.95383 1.0484)"
              x="-395860.88"
              y="1214.9977"
              fill="#000000"
              font-family="'Keep Calm'"
              font-size="2476.3px"
              letter-spacing="0px"
              text-align="justify"
              word-spacing="0px"
              style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"
              xml:space="preserve"
            />
            <path
              transform="matrix(104.17 0 0 104.17 1323.8 317.11)"
              d="m47.271 0.13867v114.07h193.58v-114.07zm36.963 4.0137a5.6693 5.6693 0 0 1 0.0957 0 5.6693 5.6693 0 0 1 5.6699 5.668 5.6693 5.6693 0 0 1-5.6699 5.6699 5.6693 5.6693 0 0 1-5.668-5.6699 5.6693 5.6693 0 0 1 5.5723-5.668zm147.38 0a5.6693 5.6693 0 0 1 0.0957 0 5.6693 5.6693 0 0 1 5.6699 5.668 5.6693 5.6693 0 0 1-5.6699 5.6699 5.6693 5.6693 0 0 1-5.668-5.6699 5.6693 5.6693 0 0 1 5.5723-5.668zm-147.4 94.393a5.6693 5.6693 0 0 1 0.0957 0 5.6693 5.6693 0 0 1 5.6699 5.6699 5.6693 5.6693 0 0 1-5.6699 5.668 5.6693 5.6693 0 0 1-5.6699-5.668 5.6693 5.6693 0 0 1 5.5742-5.6699zm147.38 0.05469a5.6693 5.6693 0 0 1 0.0977 0 5.6693 5.6693 0 0 1 5.6699 5.6699 5.6693 5.6693 0 0 1-5.6699 5.668 5.6693 5.6693 0 0 1-5.6699-5.668 5.6693 5.6693 0 0 1 5.5723-5.6699z"
              fill="#2c8240"
              style="paint-order:fill markers stroke"
            />
            <path
              d="m22699 5008.4v-195.66h-304.58l-202.9 89.995v105.67z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path d="m22394 4583.7h304.58v427.23h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path d="m20363 4583.7h304.58v427.23h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <g
              transform="translate(455.37 -185.99)"
              fill="#848400"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
            >
              <path
                d="m14590 10334a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m14590 11334a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m7225 7365.7a216.54 216.54 0 0 1-216.54 216.54 216.54 216.54 0 0 1-216.54-216.54 216.54 216.54 0 0 1 216.54-216.54 216.54 216.54 0 0 1 216.54 216.54z"
              />
              <path
                d="m7225 5594a216.54 216.54 0 0 1-216.54 216.54 216.54 216.54 0 0 1-216.54-216.54 216.54 216.54 0 0 1 216.54-216.54 216.54 216.54 0 0 1 216.54 216.54z"
              />
              <path
                d="m7680.9 4196.4a633.07 633.07 0 0 1-633.07 633.07 633.07 633.07 0 0 1-633.07-633.07 633.07 633.07 0 0 1 633.07-633.07 633.07 633.07 0 0 1 633.07 633.07z"
              />
              <path
                d="m7680.9 8763.3a633.07 633.07 0 0 1-633.07 633.07 633.07 633.07 0 0 1-633.07-633.07 633.07 633.07 0 0 1 633.07-633.07 633.07 633.07 0 0 1 633.07 633.07z"
              />
              <path
                d="m8362.8 7857.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m8362.8 6923.5a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m8362.8 6036.1a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m8362.8 5101.9a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9970.4 8367.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m12970 8367.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9931.5 4682a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m12932 4682a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m15540 3633.9a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m14540 3633.9a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m13477 6050.5a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9476.9 6050.5a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m13502 7217.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9501.5 7217.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9501.5 9533.9a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m13502 9533.9a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m16590 10334a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m16590 11334a330 330 0 0 1-330 330 330 330 0 0 1-330-330 330 330 0 0 1 330-330 330 330 0 0 1 330 330z"
              />
              <path
                d="m15896 8717.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m15896 4717.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m12998 3563.3a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m9998.2 3563.3a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m14650 8717.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m14650 4717.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 2921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 3921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 4921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 5921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 6921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 7921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 8921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m24318 9921.8a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m14449 1345a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m15449 1345a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
              <path
                d="m16449 1345a370 370 0 0 1-370 370 370 370 0 0 1-370-370 370 370 0 0 1 370-370 370 370 0 0 1 370 370z"
              />
            </g>
            <g transform="translate(188.8 -52.083)" shape-rendering="auto">
              <path
                d="m22695 2937h-600"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22095 2637a300 300 0 0 0-300 300 300 300 0 0 0 300 300h600a300 300 0 0 0 300-300 300 300 0 0 0-300-300z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m20135 1157h-600"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19535 857.01a300 300 0 0 0-300 300 300 300 0 0 0 300 300h600a300 300 0 0 0 300-300 300 300 0 0 0-300-300z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m11415 1989v-583"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m11415 1106.8a299.21 299.21 0 0 0-299.21 299.21v583a299.21 299.21 0 0 0 299.21 299.21 299.21 299.21 0 0 0 299.21-299.21v-583a299.21 299.21 0 0 0-299.21-299.21z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13415 1989v-583"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13415 1106.8a299.21 299.21 0 0 0-299.21 299.21v583a299.21 299.21 0 0 0 299.21 299.21 299.21 299.21 0 0 0 299.21-299.21v-583a299.21 299.21 0 0 0-299.21-299.21z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m12415 1989v-583"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m12415 1106.8a299.21 299.21 0 0 0-299.21 299.21v583a299.21 299.21 0 0 0 299.21 299.21 299.21 299.21 0 0 0 299.21-299.21v-583a299.21 299.21 0 0 0-299.21-299.21z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22515 7590v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22515 7275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21515 7590v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21515 7275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20515 7590v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20515 7275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19515 7590v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19515 7275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#848400"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
            >
              <path
                d="m17575 4418.2a314.96 314.96 0 0 1-314.96 314.96 314.96 314.96 0 0 1-314.96-314.96 314.96 314.96 0 0 1 314.96-314.96 314.96 314.96 0 0 1 314.96 314.96z"
                stroke="#000"
              />
            </g>
            <g transform="translate(455.37 -185.99)" fill="#848400" stroke-width="0">
              <path
                d="m16945 3118h630v630h-630z"
                fill="#848400"
                fill-rule="evenodd"
                stroke-width="0"
              />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#840000"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="200"
            >
              <path d="m20180 1343h1760" />
              <path d="m19380 1343h800" />
              <path d="m19380 3123h2560" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
            >
              <path
                d="m14420 10334a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m14420 11334a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m7225 7365.7a216.54 216.54 0 0 1-216.54 216.54 216.54 216.54 0 0 1-216.54-216.54 216.54 216.54 0 0 1 216.54-216.54 216.54 216.54 0 0 1 216.54 216.54z"
                stroke="#000"
              />
              <path
                d="m7225 5594a216.54 216.54 0 0 1-216.54 216.54 216.54 216.54 0 0 1-216.54-216.54 216.54 216.54 0 0 1 216.54-216.54 216.54 216.54 0 0 1 216.54 216.54z"
                stroke="#000"
              />
              <path
                d="m7480.9 4196.4a433.07 433.07 0 0 1-433.07 433.07 433.07 433.07 0 0 1-433.07-433.07 433.07 433.07 0 0 1 433.07-433.07 433.07 433.07 0 0 1 433.07 433.07z"
                stroke="#000"
              />
              <path
                d="m7480.9 8763.3a433.07 433.07 0 0 1-433.07 433.07 433.07 433.07 0 0 1-433.07-433.07 433.07 433.07 0 0 1 433.07-433.07 433.07 433.07 0 0 1 433.07 433.07z"
                stroke="#000"
              />
              <path
                d="m8172.8 7857.8a180 180 0 0 1-180 180 180 180 0 0 1-180-180 180 180 0 0 1 180-180 180 180 0 0 1 180 180z"
                stroke="#000"
              />
              <path
                d="m8172.8 6923.5a180 180 0 0 1-180 180 180 180 0 0 1-180-180 180 180 0 0 1 180-180 180 180 0 0 1 180 180z"
                stroke="#000"
              />
              <path
                d="m8172.8 6036.1a180 180 0 0 1-180 180 180 180 0 0 1-180-180 180 180 0 0 1 180-180 180 180 0 0 1 180 180z"
                stroke="#000"
              />
              <path
                d="m8172.8 5101.9a180 180 0 0 1-180 180 180 180 0 0 1-180-180 180 180 0 0 1 180-180 180 180 0 0 1 180 180z"
                stroke="#000"
              />
              <path
                d="m9777.6 8367.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m12778 8367.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m9738.6 4682a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m12739 4682a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m15370 3633.9a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m14370 3633.9a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m13284 6050.5a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m9284.1 6050.5a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m13309 7217.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m9308.7 7217.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m9308.7 9533.9a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#fff"
              />
              <path
                d="m13309 9533.9a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m16420 10334a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m16420 11334a160 160 0 0 1-160 160 160 160 0 0 1-160-160 160 160 0 0 1 160-160 160 160 0 0 1 160 160z"
                stroke="#000"
              />
              <path
                d="m15703 8717.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m15703 4717.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m12805 3563.3a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m9805.4 3563.3a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m14457 8717.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m14457 4717.8a177.16 177.16 0 0 1-177.16 177.16 177.16 177.16 0 0 1-177.16-177.16 177.16 177.16 0 0 1 177.16-177.16 177.16 177.16 0 0 1 177.16 177.16z"
                stroke="#000"
              />
              <path
                d="m24148 2921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 3921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 4921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 5921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 6921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 7921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 8921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m24148 9921.8a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#000"
              />
              <path
                d="m14279 1345a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#fff"
              />
              <path
                d="m15279 1345a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#fff"
              />
              <path
                d="m16279 1345a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                stroke="#fff"
              />
            </g>
            <g transform="translate(644.17 -238.08)" fill="#fff" stroke-width="0">
              <g shape-rendering="auto">
                <path
                  d="m22140 3123.9c0 110.46-89.543 200-200 200s-200-89.543-200-200 89.543-200 200-200 200 89.543 200 200z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m21940 2923.9c-110.47 0-200.02 89.55-200.02 200.02s89.55 200.02 200.02 200.02c110.46 0 200.02-89.55 200.02-200.02s-89.55-200.02-200.02-200.02zm0 0.031c110.45 0 199.98 89.536 199.98 199.98s-89.536 199.98-199.98 199.98c-110.45 0-199.98-89.536-199.98-199.98s89.536-199.98 199.98-199.98z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#000"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <g transform="translate(0 -45.573)">
              <g shape-rendering="auto">
                <path
                  d="m20135 2937h-600"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19535 2637a300 300 0 0 0-300 300 300 300 0 0 0 300 300h600a300 300 0 0 0 300-300 300 300 0 0 0-300-300z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#e6e6e6"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
              <g
                transform="translate(455.37 -185.99)"
                fill="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
              >
                <path
                  d="m19580 3123.9a200 200 0 0 1-200 200 200 200 0 0 1-200-200 200 200 0 0 1 200-200 200 200 0 0 1 200 200z"
                  stroke="#000"
                />
              </g>
            </g>
            <g transform="translate(188.8)">
              <g shape-rendering="auto">
                <path
                  d="m22695 1157h-600"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22095 857.01a300 300 0 0 0-300 300 300 300 0 0 0 300 300h600a300 300 0 0 0 300-300 300 300 0 0 0-300-300z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#e6e6e6"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22596 1157.9c0 110.46-89.543 200-200 200s-200-89.543-200-200 89.543-200 200-200 200 89.543 200 200z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22396 957.93c-110.47 0-200.02 89.55-200.02 200.02s89.55 200.02 200.02 200.02 200.02-89.55 200.02-200.02-89.55-200.02-200.02-200.02zm0 0.0312c110.45 0 199.98 89.536 199.98 199.98s-89.536 199.98-199.98 199.98-199.98-89.536-199.98-199.98 89.536-199.98 199.98-199.98z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <g transform="translate(455.37 -185.99)" fill="#fff" stroke-width="0">
              <g shape-rendering="auto">
                <path
                  d="m19580 1343.9c0 110.46-89.543 200-200 200s-200-89.543-200-200 89.543-200 200-200 200 89.543 200 200z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19380 1143.9c-110.47 0-200.02 89.55-200.02 200.02s89.55 200.02 200.02 200.02c110.46 0 200.02-89.55 200.02-200.02s-89.55-200.02-200.02-200.02zm0 0.031c110.45 0 199.98 89.536 199.98 199.98s-89.536 199.98-199.98 199.98c-110.45 0-199.98-89.536-199.98-199.98s89.536-199.98 199.98-199.98z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#000"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#fff"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
            >
              <path
                d="m11118 1883.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m13118 1883.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m12118 1883.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m22218 7933.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m19515 4590v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19515 4275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#e6e6e6"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(1 0 0 1 460.04 -185.99)" fill="#fff" stroke-width="0">
              <g shape-rendering="auto">
                <path
                  d="m19197 4824.6c0 86.974-70.506 157.48-157.48 157.48s-157.48-70.506-157.48-157.48 70.506-157.48 157.48-157.48 157.48 70.506 157.48 157.48z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19040 4667.1c-86.982 0-157.49 70.514-157.49 157.5 0 86.982 70.512 157.5 157.49 157.5s157.5-70.514 157.5-157.5c0-86.982-70.514-157.5-157.5-157.5zm0 0.031c86.965 0 157.46 70.5 157.46 157.46 0 86.965-70.5 157.46-157.46 157.46s-157.46-70.5-157.46-157.46c0-86.965 70.498-157.46 157.46-157.46z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#000"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#fff"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
            >
              <path
                d="m21218 7933.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m20218 7933.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m19218 7933.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m17418 4418.2a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
              <path
                d="m17418 3433.9a157.48 157.48 0 0 1-157.48 157.48 157.48 157.48 0 0 1-157.48-157.48 157.48 157.48 0 0 1 157.48-157.48 157.48 157.48 0 0 1 157.48 157.48z"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m25566 5582v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m25566 5552a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m25611 8897h-270"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m6648.4 9678v-394"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6648.4 9254a30 30 0 0 0-30 30v394a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-394a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6648.4 9434 37-19h75l38 19 18 19 19 37v113l-19 37-18 19-38 19h-75l-37-19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6685.4 9385a30.003 30.003 0 0 0-13.703 3.3125l-37 19a30 30 0 0 0-12.982 40.391 30 30 0 0 0 40.391 12.982l30.549-15.686h60.664l26.939 13.469 11.416 12.049 13.727 26.734v98.494l-13.727 26.734-11.416 12.049-26.939 13.471h-60.664l-30.549-15.688a30 30 0 0 0-40.391 12.982 30 30 0 0 0 12.982 40.391l37 19a30.003 30.003 0 0 0 13.703 3.3145h75a30.003 30.003 0 0 0 13.418-3.168l38-19a30.003 30.003 0 0 0 8.3613-6.2012l18-19a30.003 30.003 0 0 0 4.9082-6.9277l19-37a30.003 30.003 0 0 0 3.3125-13.703v-113a30.003 30.003 0 0 0-3.3125-13.705l-19-37a30.003 30.003 0 0 0-4.9082-6.9278l-18-19a30.003 30.003 0 0 0-8.3613-6.2011l-38-19a30.003 30.003 0 0 0-13.418-3.166z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6966.4 9415 94 263"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6966.3 9385a30 30 0 0 0-10.076 1.75 30 30 0 0 0-18.154 38.346l94 263a30 30 0 0 0 38.348 18.154 30 30 0 0 0 18.152-38.348l-94-263a30 30 0 0 0-28.27-19.902z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7154.4 9415-94 263-37 93-19 19-38 19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7154.1 9385a30 30 0 0 0-27.955 19.902l-93.82 262.5-34.518 86.758-11.182 11.184-33.646 16.822a30 30 0 0 0-13.416 40.25 30 30 0 0 0 40.25 13.416l38-19a30.003 30.003 0 0 0 7.7968-5.6191l19-19a30.003 30.003 0 0 0 6.6602-10.123l37-93a30.003 30.003 0 0 0 0.375-0.9941l94-263a30 30 0 0 0-18.152-38.346 30 30 0 0 0-10.392-1.75z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6779.4 10122h-131"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6648.4 10092a30 30 0 0 0-30 30 30 30 0 0 0 30 30h131a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6648.4 10328v-394h187"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6648.4 9904a30.003 30.003 0 0 0-30 30v394a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-364h157a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7154.4 10328v-206l-19-38-37-18h-75l-38 18"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7023.4 10036a30.003 30.003 0 0 0-12.842 2.887l-38 18a30 30 0 0 0-14.27 39.955 30 30 0 0 0 39.955 14.269l31.902-15.111h61.344l21.631 10.521 11.279 22.561v198.92a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-206a30.003 30.003 0 0 0-3.166-13.418l-19-38a30.003 30.003 0 0 0-13.709-13.561l-37-18a30.003 30.003 0 0 0-13.125-3.021z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7154.4 10309-38 19h-93l-38-19-19-37v-38l19-37 38-19h93l38-19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7154.4 10129a30 30 0 0 0-13.469 3.166l-31.666 15.834h-85.918a30.003 30.003 0 0 0-13.416 3.166l-38 19a30.003 30.003 0 0 0-13.27 13.129l-19 37a30.003 30.003 0 0 0-3.3144 13.705v38a30.003 30.003 0 0 0 3.3144 13.703l19 37a30.003 30.003 0 0 0 13.27 13.129l38 19a30.003 30.003 0 0 0 13.416 3.168h93a30.003 30.003 0 0 0 13.418-3.168l38-19a30 30 0 0 0 13.416-40.25 30 30 0 0 0-40.25-13.416l-31.666 15.834h-78.836l-22.881-11.442-11.201-21.812v-23.494l11.201-21.813 22.881-11.439h85.918a30.003 30.003 0 0 0 13.418-3.168l38-19a30 30 0 0 0 13.416-40.25 30 30 0 0 0-26.781-16.582z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7098.4 9916-57 56"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7098.2 9886a30 30 0 0 0-20.902 8.5996l-57 56a30 30 0 0 0-0.375 42.424 30 30 0 0 0 42.424 0.375l57-56a30 30 0 0 0 0.375-42.424 30 30 0 0 0-21.522-8.9746z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7341.4 10328v-394"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7341.4 9904a30 30 0 0 0-30 30v394a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-394a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7341.4 10084 38-18h75l37 18 19 19 19 38v112l-19 38-19 18-37 19h-75l-38-19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7379.4 10036a30.003 30.003 0 0 0-12.842 2.887l-38 18a30 30 0 0 0-14.27 39.955 30 30 0 0 0 39.955 14.269l31.902-15.111h61.344l26.258 12.773 11.998 11.996 13.654 27.313v97.836l-13.469 26.937-12.049 11.416-26.734 13.729h-60.666l-31.664-15.834a30 30 0 0 0-40.25 13.416 30 30 0 0 0 13.416 40.25l38 19a30.003 30.003 0 0 0 13.416 3.168h75a30.003 30.003 0 0 0 13.705-3.315l37-19a30.003 30.003 0 0 0 6.9277-4.908l19-18a30.003 30.003 0 0 0 6.2012-8.361l19-38a30.003 30.003 0 0 0 3.166-13.416v-112a30.003 30.003 0 0 0-3.166-13.418l-19-38a30.003 30.003 0 0 0-5.6192-7.797l-19-19a30.003 30.003 0 0 0-8.0898-5.764l-37-18a30.003 30.003 0 0 0-13.125-3.021z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7697.4 10328v-262"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7697.4 10036a30 30 0 0 0-30 30v262a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-262a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7697.4 9934-18 19 18 19 19-19-19-19v38"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7697.1 9904a30 30 0 0 0-21.5 9.3671l-18 19a30.003 30.003 0 0 0 0 41.264l17.836 18.828a30 30 0 0 0 0.037 0.039l0.1269 0.1328a30 30 0 0 0 0.2735 0.2852 30.003 30.003 0 0 0 0.1133 0.1152 30 30 0 0 0 0.1796 0.1817 30.003 30.003 0 0 0 0.2754 0.2714 30.003 30.003 0 0 0 0.2852 0.2754 30 30 0 0 0 0.096 0.09 30.003 30.003 0 0 0 0.1719 0.1601 30 30 0 0 0 0.2519 0.2305 30 30 0 0 0 0.3438 0.3066 30 30 0 0 0 0.3437 0.2969 30.003 30.003 0 0 0 0.024 0.02 30 30 0 0 0 0.2519 0.2129 30.003 30.003 0 0 0 0.166 0.1368 30 30 0 0 0 0.2735 0.2207 30 30 0 0 0 0.3633 0.2851 30 30 0 0 0 0.3593 0.2754 30.003 30.003 0 0 0 0.016 0.012 30 30 0 0 0 0.3496 0.2559 30.003 30.003 0 0 0 0.031 0.023 30 30 0 0 0 0.3555 0.2539 30 30 0 0 0 0.3789 0.2617 30 30 0 0 0 0.3555 0.2383 30.003 30.003 0 0 0 0.09 0.061 30 30 0 0 0 0.291 0.1875 30.003 30.003 0 0 0 0.072 0.047 30 30 0 0 0 0.3457 0.2149 30.003 30.003 0 0 0 0.023 0.014 30 30 0 0 0 0.2871 0.1757 30.003 30.003 0 0 0 0.2657 0.1563 30 30 0 0 0 0.1132 0.066 30.003 30.003 0 0 0 0.1778 0.1016 30 30 0 0 0 0.332 0.1855 30 30 0 0 0 0.3926 0.2149 30.003 30.003 0 0 0 0.039 0.021 30 30 0 0 0 0.3809 0.1973 30 30 0 0 0 0.4102 0.207 30 30 0 0 0 0.416 0.2012 30 30 0 0 0 0.4043 0.1895 30.003 30.003 0 0 0 0.023 0.01 30 30 0 0 0 0.832 0.3653 30 30 0 0 0 0.418 0.1718 30.003 30.003 0 0 0 0.016 0.01 30 30 0 0 0 0.4219 0.1662 30 30 0 0 0 0.4316 0.162 30 30 0 0 0 0.4336 0.156 30 30 0 0 0 0.8731 0.291 30 30 0 0 0 0.4355 0.133 30.003 30.003 0 0 0 0.016 0 30 30 0 0 0 0.3652 0.107 30.003 30.003 0 0 0 0.1426 0.04 30 30 0 0 0 0.3574 0.1 30.003 30.003 0 0 0 0.029 0 30 30 0 0 0 0.4062 0.105 30.003 30.003 0 0 0 0.043 0.01 30 30 0 0 0 0.4258 0.102 30 30 0 0 0 0.4492 0.101 30 30 0 0 0 0.4512 0.09 30 30 0 0 0 0.4277 0.08 30.003 30.003 0 0 0 0.1 0.02 30 30 0 0 0 0.2949 0.05 30.003 30.003 0 0 0 0.1602 0.03 30 30 0 0 0 0.3789 0.06 30 30 0 0 0 0.9121 0.127 30 30 0 0 0 0.3985 0.05 30.003 30.003 0 0 0 0.2421 0.02 30 30 0 0 0 0.1934 0.02 30.003 30.003 0 0 0 0.1055 0.01 30 30 0 0 0 1.3554 0.09 30 30 0 0 0 0.459 0.01 30 30 0 0 0 0.461 0.01 30 30 0 0 0 0.4199 0 30 30 0 0 0 0.5019 0 30.003 30.003 0 0 0 0.8809-0.03 30 30 0 0 0 0.039 0 30.003 30.003 0 0 0 0.01 0 30 30 0 0 0 0.4512-0.03 30.003 30.003 0 0 0 0.418-0.03 30 30 0 0 0 0.041 0 30.003 30.003 0 0 0 0.418-0.03 30 30 0 0 0 0.064 0 30 30 0 0 0 0.8926-0.1 30.003 30.003 0 0 0 0.416-0.05 30 30 0 0 0 0.039 0 30 30 0 0 0 0.457-0.07 30 30 0 0 0 0.4531-0.08 30 30 0 0 0 1.3164-0.256 30 30 0 0 0 0.041 0 30.003 30.003 0 0 0 0.4082-0.09 30 30 0 0 0 0.041-0.01 30.003 30.003 0 0 0 0.01 0 30 30 0 0 0 0.8847-0.224 30.003 30.003 0 0 0 0.4043-0.11 30 30 0 0 0 0.039-0.01 30 30 0 0 0 0.8828-0.267 30.003 30.003 0 0 0 0.3984-0.129 30 30 0 0 0 0.039-0.01 30 30 0 0 0 0.8691-0.306 30 30 0 0 0 0.4297-0.1625 30.003 30.003 0 0 0 0.3907-0.1543 30 30 0 0 0 0.037-0.016 30 30 0 0 0 0.8496-0.3593 30.003 30.003 0 0 0 0.3828-0.1719 30 30 0 0 0 0.037-0.018 30.003 30.003 0 0 0 0.3789-0.1777 30 30 0 0 0 0.037-0.018 30.003 30.003 0 0 0 0.377-0.1836 30 30 0 0 0 0.037-0.02 30 30 0 0 0 0.4101-0.2071 30.003 30.003 0 0 0 0.3731-0.1953 30 30 0 0 0 0.035-0.02 30.003 30.003 0 0 0 0.3692-0.2012 30 30 0 0 0 0.035-0.02 30.003 30.003 0 0 0 0.3653-0.207 30 30 0 0 0 0.035-0.021 30.003 30.003 0 0 0 0.3614-0.211 30 30 0 0 0 0.035-0.021 30 30 0 0 0 0.3945-0.2403 30.003 30.003 0 0 0 0.2579-0.1601 30 30 0 0 0 0.1328-0.084 30.003 30.003 0 0 0 0.1484-0.098 30 30 0 0 0 0.2363-0.1543 30 30 0 0 0 0.3828-0.2578 30.003 30.003 0 0 0 0.3438-0.2383 30 30 0 0 0 0.033-0.023 30.003 30.003 0 0 0 0.3418-0.2441 30 30 0 0 0 0.033-0.025 30.003 30.003 0 0 0 0.3359-0.2481 30 30 0 0 0 0.033-0.025 30.003 30.003 0 0 0 0.334-0.2558 30 30 0 0 0 0.033-0.025 30.003 30.003 0 0 0 0.3282-0.2598 30 30 0 0 0 0.031-0.025 30.003 30.003 0 0 0 0.3262-0.2656 30 30 0 0 0 0.031-0.025 30.003 30.003 0 0 0 0.3203-0.2695 30 30 0 0 0 0.033-0.027 30.003 30.003 0 0 0 0.3164-0.2754 30 30 0 0 0 0.031-0.027 30.003 30.003 0 0 0 0.3105-0.2793 30 30 0 0 0 0.031-0.027 30.003 30.003 0 0 0 0.3086-0.2852 30 30 0 0 0 0.029-0.027 30.003 30.003 0 0 0 0.3047-0.2891 30 30 0 0 0 0.029-0.029 30.003 30.003 0 0 0 0.2988-0.293 30 30 0 0 0 0.029-0.029 30.003 30.003 0 0 0 0.023-0.021l19-19a30.003 30.003 0 0 0 0-42.428l-18.82-18.818a30 30 0 0 0-0.1797-0.1817 30.003 30.003 0 0 0-0.1465-0.1445 30 30 0 0 0-0.1835-0.1777 30 30 0 0 0-0.252-0.2422 30 30 0 0 0-0.08-0.076 30.003 30.003 0 0 0-0.2558-0.2383 30 30 0 0 0-0.082-0.074 30.003 30.003 0 0 0-0.2597-0.2344 30 30 0 0 0-0.084-0.074 30.003 30.003 0 0 0-0.012-0.01 30 30 0 0 0-0.6875-0.5879 30.003 30.003 0 0 0-0.2696-0.2226 30 30 0 0 0-0.086-0.07 30.003 30.003 0 0 0-0.2734-0.2168 30 30 0 0 0-0.088-0.068 30.003 30.003 0 0 0-0.2774-0.2148 30 30 0 0 0-0.088-0.066 30.003 30.003 0 0 0-0.092-0.066 30 30 0 0 0-0.2793-0.2071 30 30 0 0 0-0.75-0.5332 30 30 0 0 0-0.3828-0.2578 30 30 0 0 0-1.5664-0.9707 30 30 0 0 0-0.4004-0.2266 30 30 0 0 0-0.8105-0.4375 30 30 0 0 0-1.6602-0.7968 30 30 0 0 0-0.8496-0.3594 30 30 0 0 0-2.6035-0.9219 30 30 0 0 0-8.9727-1.289z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7941.4 10328-37-19-19-18-19-38v-112l19-38 19-19 37-18h56l38 18 19 19 18 38v112l-18 38-19 18-38 19h-56"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m7941.4 10036a30.003 30.003 0 0 0-13.123 3.021l-37 18a30.003 30.003 0 0 0-8.0898 5.764l-19 19a30.003 30.003 0 0 0-5.6191 7.797l-19 38a30.003 30.003 0 0 0-3.168 13.418v112a30.003 30.003 0 0 0 3.168 13.416l19 38a30.003 30.003 0 0 0 6.2011 8.361l19 18a30.003 30.003 0 0 0 6.9278 4.908l36.83 18.913 0.17 0.09a30 30 0 0 0 0.053 0.03 30 30 0 0 0 0.3125 0.158 30 30 0 0 0 0.1348 0.06 30 30 0 0 0 0.2695 0.131 30 30 0 0 0 0.1699 0.08 30 30 0 0 0 0.1836 0.09 30 30 0 0 0 0.2207 0.102 30 30 0 0 0 0.3203 0.142 30 30 0 0 0 0.3574 0.155 30 30 0 0 0 0.2481 0.103 30 30 0 0 0 0.094 0.04 30 30 0 0 0 0.2989 0.119 30 30 0 0 0 0.2246 0.09 30 30 0 0 0 0.1347 0.05 30 30 0 0 0 0.2735 0.104 30 30 0 0 0 0.1719 0.06 30 30 0 0 0 0.3203 0.113 30 30 0 0 0 0.1328 0.05 30 30 0 0 0 0.1621 0.06 30 30 0 0 0 0.2851 0.1 30 30 0 0 0 0.3008 0.1 30 30 0 0 0 0.033 0.01 30 30 0 0 0 0.3907 0.117 30 30 0 0 0 0.088 0.03 30 30 0 0 0 0.2871 0.08 30 30 0 0 0 0.1933 0.05 30 30 0 0 0 0.3477 0.09 30 30 0 0 0 0.375 0.1 30 30 0 0 0 0.1484 0.04 30 30 0 0 0 0.3477 0.08 30 30 0 0 0 0.07 0.02 30 30 0 0 0 0.3222 0.07 30 30 0 0 0 0.1485 0.03 30 30 0 0 0 0.3808 0.08 30 30 0 0 0 0.3594 0.07 30 30 0 0 0 0.3594 0.07 30 30 0 0 0 0.3691 0.06 30 30 0 0 0 0.2754 0.04 30 30 0 0 0 0.4531 0.07 30 30 0 0 0 0.3965 0.05 30 30 0 0 0 0.1504 0.02 30 30 0 0 0 0.3477 0.04 30 30 0 0 0 0.02 0 30 30 0 0 0 0.2695 0.03 30 30 0 0 0 0.4571 0.04 30 30 0 0 0 0.3164 0.02 30 30 0 0 0 0.2832 0.02 30 30 0 0 0 0.1 0 30 30 0 0 0 0.4121 0.02 30 30 0 0 0 0.3789 0.01 30 30 0 0 0 0.3145 0.01 30 30 0 0 0 0.053 0 30 30 0 0 0 0.4434 0 30 30 0 0 0 0.066 0 30 30 0 0 0 0.078 0 30 30 0 0 0 0.047 0h55.953a30.003 30.003 0 0 0 13.418-3.168l38-19a30.003 30.003 0 0 0 7.2148-5.055l19-18a30.003 30.003 0 0 0 6.4805-8.935l18-38a30.003 30.003 0 0 0 2.8867-12.842v-112a30.003 30.003 0 0 0-2.8867-12.844l-18-38a30.003 30.003 0 0 0-5.8985-8.371l-19-19a30.003 30.003 0 0 0-8.3711-5.898l-38-18a30.003 30.003 0 0 0-12.844-2.887zm6.9101 60h42.344l27.209 12.887 11.65 11.65 12.887 27.209v98.508l-12.707 26.828-11.691 11.076-27.684 13.842h-41.664l-26.734-13.729-12.049-11.416-13.471-26.937v-97.836l13.656-27.313 11.996-11.996z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m8522.4 10309 57 19h93l38-19 19-18 18-38v-37l-18-38-19-19-38-18-75-19-37-19-19-19-19-37v-38l19-37 19-19 37-19h94l56 19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m8597.4 9904a30.003 30.003 0 0 0-13.703 3.3125l-37 19a30.003 30.003 0 0 0-7.5098 5.4726l-19 19a30.003 30.003 0 0 0-5.4727 7.5098l-19 37a30.003 30.003 0 0 0-3.3144 13.705v38a30.003 30.003 0 0 0 3.3144 13.703l19 37a30.003 30.003 0 0 0 5.4727 7.51l19 19a30.003 30.003 0 0 0 7.5098 5.472l37 19a30.003 30.003 0 0 0 6.3359 2.395l72.168 18.283 30.662 14.524 11.65 11.65 12.887 27.209v23.508l-12.707 26.828-11.691 11.076-27.684 13.842h-81.049l-52.381-17.461a30 30 0 0 0-37.947 18.973 30 30 0 0 0 18.973 37.947l57 19a30.003 30.003 0 0 0 9.4863 1.541h93a30.003 30.003 0 0 0 13.418-3.168l38-19a30.003 30.003 0 0 0 7.2148-5.055l19-18a30.003 30.003 0 0 0 6.4805-8.935l18-38a30.003 30.003 0 0 0 2.8867-12.842v-37a30.003 30.003 0 0 0-2.8867-12.844l-18-38a30.003 30.003 0 0 0-5.8985-8.371l-19-19a30.003 30.003 0 0 0-8.3711-5.898l-38-18a30.003 30.003 0 0 0-5.4765-1.969l-71.695-18.162-29.783-15.295-12.35-12.35-13.539-26.365v-23.494l13.539-26.365 12.35-12.35 26.365-13.537h81.797l51.31 17.408a30 30 0 0 0 38.049-18.77 30 30 0 0 0-18.771-38.049l-56-19a30.003 30.003 0 0 0-9.6387-1.5898z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m8972.4 10328-37-19-19-18-19-38v-112l19-38 19-19 37-18h57l37 18 19 19 19 38v112l-19 38-19 18-37 19h-57"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m8972.4 10036a30.003 30.003 0 0 0-13.123 3.021l-37 18a30.003 30.003 0 0 0-8.0898 5.764l-19 19a30.003 30.003 0 0 0-5.6191 7.797l-19 38a30.003 30.003 0 0 0-3.168 13.418v112a30.003 30.003 0 0 0 3.168 13.416l19 38a30.003 30.003 0 0 0 6.2011 8.361l19 18a30.003 30.003 0 0 0 6.9278 4.908l36.83 18.913 0.17 0.09a30 30 0 0 0 0.053 0.03 30 30 0 0 0 0.3125 0.158 30 30 0 0 0 0.1348 0.06 30 30 0 0 0 0.2695 0.131 30 30 0 0 0 0.1699 0.08 30 30 0 0 0 0.1836 0.09 30 30 0 0 0 0.2207 0.102 30 30 0 0 0 0.3203 0.142 30 30 0 0 0 0.3574 0.155 30 30 0 0 0 0.2481 0.103 30 30 0 0 0 0.094 0.04 30 30 0 0 0 0.2989 0.119 30 30 0 0 0 0.2246 0.09 30 30 0 0 0 0.1347 0.05 30 30 0 0 0 0.2735 0.104 30 30 0 0 0 0.1719 0.06 30 30 0 0 0 0.3203 0.113 30 30 0 0 0 0.1328 0.05 30 30 0 0 0 0.1621 0.06 30 30 0 0 0 0.2851 0.1 30 30 0 0 0 0.3008 0.1 30 30 0 0 0 0.033 0.01 30 30 0 0 0 0.3907 0.117 30 30 0 0 0 0.088 0.03 30 30 0 0 0 0.2871 0.08 30 30 0 0 0 0.1933 0.05 30 30 0 0 0 0.3477 0.09 30 30 0 0 0 0.375 0.1 30 30 0 0 0 0.1484 0.04 30 30 0 0 0 0.3477 0.08 30 30 0 0 0 0.07 0.02 30 30 0 0 0 0.3222 0.07 30 30 0 0 0 0.1485 0.03 30 30 0 0 0 0.3808 0.08 30 30 0 0 0 0.3594 0.07 30 30 0 0 0 0.3594 0.07 30 30 0 0 0 0.3691 0.06 30 30 0 0 0 0.2754 0.04 30 30 0 0 0 0.4531 0.07 30 30 0 0 0 0.3965 0.05 30 30 0 0 0 0.1504 0.02 30 30 0 0 0 0.3477 0.04 30 30 0 0 0 0.019 0 30 30 0 0 0 0.2695 0.03 30 30 0 0 0 0.4571 0.04 30 30 0 0 0 0.3164 0.02 30 30 0 0 0 0.2832 0.02 30 30 0 0 0 0.1 0 30 30 0 0 0 0.4121 0.02 30 30 0 0 0 0.3789 0.01 30 30 0 0 0 0.3145 0.01 30 30 0 0 0 0.053 0 30 30 0 0 0 0.4434 0 30 30 0 0 0 0.066 0 30 30 0 0 0 0.078 0 30 30 0 0 0 0.047 0h56.953a30.003 30.003 0 0 0 13.705-3.315l37-19a30.003 30.003 0 0 0 6.9277-4.908l19-18a30.003 30.003 0 0 0 6.2012-8.361l19-38a30.003 30.003 0 0 0 3.166-13.416v-112a30.003 30.003 0 0 0-3.166-13.418l-19-38a30.003 30.003 0 0 0-5.6192-7.797l-19-19a30.003 30.003 0 0 0-8.0898-5.764l-37-18a30.003 30.003 0 0 0-13.125-3.021zm6.9101 60h43.18l26.258 12.773 11.998 11.996 13.654 27.313v97.836l-13.469 26.937-12.049 11.416-26.734 13.729h-42.494l-26.734-13.729-12.049-11.416-13.471-26.937v-97.836l13.656-27.313 11.996-11.996z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9441.4 10066v262"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9441.4 10036a30 30 0 0 0-30 30v262a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-262a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9272.4 10066v206l19 37 37 19h57l37-19 19-18"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9272.4 10036a30 30 0 0 0-30 30v206a30.003 30.003 0 0 0 3.3144 13.703l19 37a30.003 30.003 0 0 0 12.982 12.982l37 19a30.003 30.003 0 0 0 13.703 3.315h57a30.003 30.003 0 0 0 13.705-3.315l37-19a30.003 30.003 0 0 0 6.9277-4.908l19-18a30 30 0 0 0 1.1465-42.41 30 30 0 0 0-42.41-1.146l-15.887 15.05-26.734 13.729h-42.494l-21.971-11.283-11.283-21.971v-198.75a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9591.4 10066h206l-206 262h206"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9591.4 10036a30 30 0 0 0-30 30 30 30 0 0 0 30 30h144.25l-167.83 213.46a30.003 30.003 0 0 0 23.582 48.543h206a30 30 0 0 0 30-30 30 30 0 0 0-30-30h-144.25l167.83-213.46a30.003 30.003 0 0 0-23.584-48.541z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m10116 10328v-206l-19-38-37-18h-75l-38 18"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m9985.4 10036a30.003 30.003 0 0 0-12.842 2.887l-38 18a30 30 0 0 0-14.27 39.955 30 30 0 0 0 39.955 14.269l31.902-15.111h61.344l21.631 10.521 11.279 22.561v198.92a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-206a30.003 30.003 0 0 0-3.166-13.418l-19-38a30.003 30.003 0 0 0-13.709-13.561l-37-18a30.003 30.003 0 0 0-13.125-3.021z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <rect
              x="22318"
              y="10147"
              width="1300"
              height="900"
              ry="51.679"
              fill="none"
              stroke="#fff"
              stroke-width="78.74"
            />
            <path
              d="m22521 10856v-472h113l67 22 45 45 23 45 22 90v68l-22 90-23 45-45 45-67 22h-113"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="118.11"
            />
            <rect
              x="22934"
              y="10329"
              width="122.28"
              height="584.86"
              ry="74.572"
              fill="#fff"
              fill-rule="evenodd"
            />
            <rect
              x="23250"
              y="10603"
              width="122.28"
              height="311.76"
              ry="61.138"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m23151 10384 158 247 157-247"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="118.11"
            />
            <text
              x="16676.4"
              y="15384.854"
              fill="none"
              fill-opacity="0"
              font-family="'Bebas Neue'"
              font-size="1666.7px"
              font-weight="bold"
              letter-spacing="0px"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12303"
              word-spacing="0px"
              style="line-height:1.25"
              xml:space="preserve"
            >
              <tspan x="16676.4" y="15384.854" stroke-width="12303" />
            </text>
            <g
              transform="translate(455.37 -185.99)"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="72"
            >
              <g shape-rendering="auto" stroke="none">
                <path
                  d="m6312 2938-15 15-45 15h-30l-45-15-30-30-15-30-15-60v-45l15-60 15-30 30-30 45-15h30l45 15 15 15"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m6222 2617a36.004 36.004 0 0 0-11.385 1.8477l-45 15a36.004 36.004 0 0 0-14.07 8.6972l-30 30a36.004 36.004 0 0 0-6.7441 9.3555l-15 30a36.004 36.004 0 0 0-2.7266 7.3691l-15 60a36.004 36.004 0 0 0-1.0742 8.7305v45a36.004 36.004 0 0 0 1.0742 8.7305l15 60a36.004 36.004 0 0 0 2.7266 7.3691l15 30a36.004 36.004 0 0 0 6.7441 9.3555l30 30a36.004 36.004 0 0 0 14.07 8.6972l45 15a36.004 36.004 0 0 0 11.385 1.8477h30a36.004 36.004 0 0 0 11.385-1.8477l45-15a36.004 36.004 0 0 0 14.07-8.6972l15-15a36 36 0 0 0 0-50.91 36 36 0 0 0-50.91 0l-8.9922 8.9903-31.394 10.465h-18.316l-31.394-10.465-19.861-19.859-10.619-21.24-12.967-51.867v-36.137l12.967-51.867 10.619-21.24 19.861-19.859 31.394-10.465h18.316l31.394 10.465 8.9922 8.9903a36 36 0 0 0 50.91 0 36 36 0 0 0 0-50.91l-15-15a36.004 36.004 0 0 0-14.07-8.6972l-45-15a36.004 36.004 0 0 0-11.385-1.8477z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m6627 2938-15 15-45 15h-30l-45-15-30-30-15-30-15-60v-45l15-60 15-30 30-30 45-15h30l45 15 15 15"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m6537 2617a36.004 36.004 0 0 0-11.385 1.8477l-45 15a36.004 36.004 0 0 0-14.07 8.6972l-30 30a36.004 36.004 0 0 0-6.7441 9.3555l-15 30a36.004 36.004 0 0 0-2.7266 7.3691l-15 60a36.004 36.004 0 0 0-1.0742 8.7305v45a36.004 36.004 0 0 0 1.0742 8.7305l15 60a36.004 36.004 0 0 0 2.7266 7.3691l15 30a36.004 36.004 0 0 0 6.7441 9.3555l30 30a36.004 36.004 0 0 0 14.07 8.6972l45 15a36.004 36.004 0 0 0 11.385 1.8477h30a36.004 36.004 0 0 0 11.385-1.8477l45-15a36.004 36.004 0 0 0 14.07-8.6972l15-15a36 36 0 0 0 0-50.91 36 36 0 0 0-50.91 0l-8.9922 8.9903-31.394 10.465h-18.316l-31.394-10.465-19.861-19.859-10.619-21.24-12.967-51.867v-36.137l12.967-51.867 10.619-21.24 19.861-19.859 31.394-10.465h18.316l31.394 10.465 8.9922 8.9903a36 36 0 0 0 50.91 0 36 36 0 0 0 0-50.91l-15-15a36.004 36.004 0 0 0-14.07-8.6972l-45-15a36.004 36.004 0 0 0-11.385-1.8477z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7107 2803 44 15 15 15 15 30v45l-15 30-15 15-29 15h-120v-315h105l30 15 14 15 15 30v30l-15 30-14 15-30 15h-105"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7002 2617a36.004 36.004 0 0 0-36 36v149.96a36 36 0 0 0 0 0.041v165a36.004 36.004 0 0 0 36 36h120a36.004 36.004 0 0 0 16.539-4.0234l29-15a36.004 36.004 0 0 0 8.916-6.5215l15-15a36.004 36.004 0 0 0 6.7441-9.3555l15-30a36.004 36.004 0 0 0 3.8008-16.1v-45a36.004 36.004 0 0 0-3.8008-16.1l-15-30a36.004 36.004 0 0 0-6.7441-9.3555l-12.217-12.217a36.004 36.004 0 0 0 3.9609-6.2285l15-30a36.004 36.004 0 0 0 3.8008-16.1v-30a36.004 36.004 0 0 0-3.8008-16.1l-15-30a36.004 36.004 0 0 0-5.8808-8.4629l-14-15a36.004 36.004 0 0 0-10.219-7.6367l-30-15a36.004 36.004 0 0 0-16.1-3.8008zm36 72h60.502l16.602 8.3008 6.0254 6.457 8.8711 17.74v13.004l-8.8711 17.74-6.0254 6.457-16.602 8.3008h-60.502zm0 150h63.033l30.43 10.373 4.9512 4.9512 8.5859 17.174v28.004l-8.5859 17.174-6.918 6.916-16.256 8.4082h-75.24z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7376 2818v150"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7376 2782a36 36 0 0 0-36 36v150a36 36 0 0 0 36 36 36 36 0 0 0 36-36v-150a36 36 0 0 0-36-36z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7271 2653 105 165 105-165"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7270.8 2617a36 36 0 0 0-19.148 5.6289 36 36 0 0 0-11.043 49.699l105 165a36.004 36.004 0 0 0 60.742 0l105-165a36 36 0 0 0-11.043-49.699 36 36 0 0 0-49.699 11.043l-74.629 117.27-74.629-117.27a36 36 0 0 0-30.551-16.672z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7586 2848h240"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7586 2812a36 36 0 0 0-36 36 36 36 0 0 0 36 36h240a36 36 0 0 0 36-36 36 36 0 0 0-36-36z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m7961 2953 45 15h75l30-15 15-15 15-30v-30l-15-30-15-15-30-15-60-15-30-15-15-15-15-30v-30l15-30 15-15 30-15h75l45 15"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8021 2617a36.004 36.004 0 0 0-16.1 3.8008l-30 15a36.004 36.004 0 0 0-9.3555 6.7441l-15 15a36.004 36.004 0 0 0-6.7441 9.3555l-15 30a36.004 36.004 0 0 0-3.8008 16.1v30a36.004 36.004 0 0 0 3.8008 16.1l15 30a36.004 36.004 0 0 0 6.7441 9.3555l15 15a36.004 36.004 0 0 0 9.3555 6.7441l30 15a36.004 36.004 0 0 0 7.3691 2.7266l56.166 14.041 21.24 10.619 6.7383 6.7383 8.5859 17.174v13.004l-8.5859 17.174-6.7383 6.7383-17.174 8.5859h-60.66l-39.457-13.152a36 36 0 0 0-45.537 22.768 36 36 0 0 0 22.768 45.537l45 15a36.004 36.004 0 0 0 11.385 1.8477h75a36.004 36.004 0 0 0 16.1-3.8008l30-15a36.004 36.004 0 0 0 9.3555-6.7441l15-15a36.004 36.004 0 0 0 6.7441-9.3555l15-30a36.004 36.004 0 0 0 3.8008-16.1v-30a36.004 36.004 0 0 0-3.8008-16.1l-15-30a36.004 36.004 0 0 0-6.7441-9.3555l-15-15a36.004 36.004 0 0 0-9.3555-6.7441l-30-15a36.004 36.004 0 0 0-7.3691-2.7266l-56.166-14.041-21.24-10.619-6.7383-6.7383-8.5859-17.174v-13.004l8.5859-17.174 6.7383-6.7383 17.174-8.5859h60.66l39.457 13.152a36 36 0 0 0 45.537-22.768 36 36 0 0 0-22.768-45.537l-45-15a36.004 36.004 0 0 0-11.385-1.8477z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8261 2878h150"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8261 2842a36 36 0 0 0-36 36 36 36 0 0 0 36 36h150a36 36 0 0 0 36-36 36 36 0 0 0-36-36z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8231 2968 105-315 105 315"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8336.1 2617a36.004 36.004 0 0 0-34.205 24.607l-105 315a36 36 0 0 0 22.768 45.537 36 36 0 0 0 45.537-22.768l70.848-212.54 70.848 212.54a36 36 0 0 0 45.537 22.768 36 36 0 0 0 22.768-45.537l-105-315a36.004 36.004 0 0 0-34.1-24.607z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8921 2758v210"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8921 2722a36 36 0 0 0-36 36v210a36 36 0 0 0 36 36 36 36 0 0 0 36-36v-210a36 36 0 0 0-36-36z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8846 2638-75 225h195"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m8846 2602a36 36 0 0 0-34.131 24.615l-75 225a36.004 36.004 0 0 0 34.152 47.385h195a36 36 0 0 0 36-36 36 36 0 0 0-36-36h-145.05l59.205-177.62a36 36 0 0 0-22.768-45.537 36 36 0 0 0-11.406-1.8477z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m9086 2938 15 15-15 15-15-15 15-15v30"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m9086 2902a36 36 0 0 0-19.1 5.4746 36.004 36.004 0 0 0-0.037 0.021 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.42 0.2676 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.012 0.01 36 36 0 0 0-1.2344 0.8359 36 36 0 0 0-1.2188 0.9004 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3907 0.3067 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3867 0.3144 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3828 0.3184 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3769 0.3223 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.373 0.3301 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3691 0.3339 36 36 0 0 0-0.01 0 36.004 36.004 0 0 0-0.3633 0.3398 36 36 0 0 0-0.3183 0.3027 36.004 36.004 0 0 0-0.047 0.045 36 36 0 0 0-0.01 0.01 36.004 36.004 0 0 0-0.3554 0.3496 36 36 0 0 0-0.031 0.033l-15 15a36.004 36.004 0 0 0 0 50.91l14.867 14.867a36 36 0 0 0 0.1172 0.1191l0.016 0.014a36 36 0 0 0 0.3438 0.3418 36.004 36.004 0 0 0 0.016 0.014 36 36 0 0 0 0.3477 0.334 36.004 36.004 0 0 0 0.2031 0.1895 36 36 0 0 0 0.166 0.1562 36.004 36.004 0 0 0 0.016 0.014 36 36 0 0 0 0.3594 0.3242 36.004 36.004 0 0 0 0.3555 0.3145 36 36 0 0 0 0.025 0.023 36.004 36.004 0 0 0 0.076 0.064 36 36 0 0 0 0.3028 0.2597 36.004 36.004 0 0 0 0.017 0.014 36 36 0 0 0 0.3711 0.3106 36.004 36.004 0 0 0 0.016 0.012 36 36 0 0 0 0.3769 0.3047 36.004 36.004 0 0 0 0.291 0.2285 36 36 0 0 0 0.1055 0.084 36.004 36.004 0 0 0 0.016 0.012 36 36 0 0 0 0.3965 0.3027 36.004 36.004 0 0 0 0.031 0.023 36 36 0 0 0 0.3613 0.2696 36.004 36.004 0 0 0 0.018 0.012 36 36 0 0 0 0.3925 0.2832 36.004 36.004 0 0 0 0.2442 0.1719 36 36 0 0 0 0.1679 0.1172 36.004 36.004 0 0 0 0.018 0.012 36 36 0 0 0 0.4121 0.2793 36.004 36.004 0 0 0 0.023 0.016 36 36 0 0 0 0.4043 0.2656 36 36 0 0 0 0.4062 0.2618 36.004 36.004 0 0 0 0.018 0.01 36 36 0 0 0 0.4121 0.2559 36.004 36.004 0 0 0 0.018 0.01 36 36 0 0 0 0.8515 0.5039 36.004 36.004 0 0 0 0.018 0.01 36 36 0 0 0 0.4278 0.2402 36.004 36.004 0 0 0 0.012 0.01 36 36 0 0 0 0.4258 0.2324 36.004 36.004 0 0 0 0.2402 0.127 36 36 0 0 0 0.2051 0.1074 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.4395 0.2226 36.004 36.004 0 0 0 0.049 0.025 36 36 0 0 0 0.8711 0.418 36 36 0 0 0 0.4394 0.2012 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.4414 0.1953 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.4453 0.1894 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.4473 0.1816 36.004 36.004 0 0 0 0.022 0.01 36 36 0 0 0 0.4492 0.1758 36.004 36.004 0 0 0 0.1328 0.051 36 36 0 0 0 0.3594 0.1328 36 36 0 0 0 0.4551 0.1641 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.4785 0.1641 36 36 0 0 0 0.459 0.1504 36.004 36.004 0 0 0 0.02 0.01 36 36 0 0 0 0.461 0.1446 36.004 36.004 0 0 0 0.022 0.01 36 36 0 0 0 1.416 0.3985 36 36 0 0 0 0.02 0.01 36.004 36.004 0 0 0 0.1387 0.035 36 36 0 0 0 0.8633 0.209 36 36 0 0 0 0.4707 0.1054 36.004 36.004 0 0 0 0.022 0 36 36 0 0 0 0.4726 0.098 36.004 36.004 0 0 0 0.022 0 36 36 0 0 0 0.9668 0.1797 36.004 36.004 0 0 0 0.1152 0.02 36 36 0 0 0 0.9043 0.1387 36 36 0 0 0 0.4785 0.066 36.004 36.004 0 0 0 0.022 0 36 36 0 0 0 0.9805 0.1114 36.004 36.004 0 0 0 0.021 0 36 36 0 0 0 2.0137 0.1426 36 36 0 0 0 0.4824 0.018 36.004 36.004 0 0 0 0.022 0 36 36 0 0 0 1.0273 0.016 36 36 0 0 0 0.4863 0 36.004 36.004 0 0 0 0.018 0 36 36 0 0 0 1.4961-0.053 36 36 0 0 0 1.4277-0.1075 36 36 0 0 0 0.08-0.01 36.004 36.004 0 0 0 0.018 0 36 36 0 0 0 0.4844-0.051 36.004 36.004 0 0 0 0.017 0 36 36 0 0 0 0.9844-0.125 36.004 36.004 0 0 0 0.018 0 36 36 0 0 0 0.4805-0.072 36.004 36.004 0 0 0 0.017 0 36 36 0 0 0 0.4805-0.078 36.004 36.004 0 0 0 0.018 0 36 36 0 0 0 0.4805-0.086 36 36 0 0 0 1.9726-0.4199 36.004 36.004 0 0 0 0.018 0 36 36 0 0 0 0.9609-0.248 36.004 36.004 0 0 0 0.016 0 36 36 0 0 0 1.4355-0.4239 36.004 36.004 0 0 0 0.016 0 36 36 0 0 0 0.4649-0.1523 36 36 0 0 0 0.9511-0.332 36.004 36.004 0 0 0 0.018-0.01 36 36 0 0 0 0.9258-0.3535 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.4532-0.1836 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.4492-0.1914 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.4453-0.1953 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.4433-0.2031 36 36 0 0 0 1.3613-0.666 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.875-0.4687 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.4258-0.2383 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.4219-0.2461 36.004 36.004 0 0 0 0.016-0.01 36 36 0 0 0 0.418-0.25 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.4161-0.2579 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.4121-0.2636 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.4082-0.2696 36.004 36.004 0 0 0 0.418-0.2832 36 36 0 0 0 0.2207-0.1543 36 36 0 0 0 0.1933-0.1328 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.3769-0.2714 36.004 36.004 0 0 0 0.033-0.023 36 36 0 0 0 0.3926-0.291 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.3867-0.2949 36.004 36.004 0 0 0 0.014-0.01 36 36 0 0 0 0.3847-0.3028 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.3809-0.3066 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.375-0.3125 36 36 0 0 0 0.3848-0.3281 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.3672-0.3243 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.3613-0.3282 36.004 36.004 0 0 0 0.012-0.01 36 36 0 0 0 0.3593-0.334 36.004 36.004 0 0 0 0.01-0.01 36 36 0 0 0 0.3535-0.3379 36.004 36.004 0 0 0 0.012-0.012 36 36 0 0 0 0.023-0.023 36.004 36.004 0 0 0 0.3359-0.3301 36 36 0 0 0 0.014-0.016l0.164-0.1641a36 36 0 0 0 0.1778-0.1797l14.658-14.656a36.004 36.004 0 0 0 0-50.91l-15-15a36 36 0 0 0-25.407-10.52z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m9296 2653h30l30 15 15 15 15 30 15 60v75l-15 60-15 30-15 15-30 15h-30l-30-15-15-15-15-30-15-60v-75l15-60 15-30 15-15 30-15"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m9296 2617a36 36 0 0 0-0.5039 0 36 36 0 0 0-0.5039 0.01 36 36 0 0 0-0.5039 0.017 36 36 0 0 0-1.0078 0.057 36 36 0 0 0-1.5605 0.1445 36 36 0 0 0-0.9473 0.1211 36 36 0 0 0-0.998 0.1543 36 36 0 0 0-0.4961 0.088 36 36 0 0 0-1.0782 0.2168 36 36 0 0 0-0.8007 0.1836 36 36 0 0 0-0.1934 0.045 36 36 0 0 0-0.7754 0.2012 36 36 0 0 0-0.2383 0.064 36 36 0 0 0-0.834 0.2422 36 36 0 0 0-0.6386 0.1992 36 36 0 0 0-0.3242 0.1075 36 36 0 0 0-1.8946 0.6914 36 36 0 0 0-0.4668 0.1894 36 36 0 0 0-0.4648 0.1973 36 36 0 0 0-0.461 0.2012 36 36 0 0 0-0.457 0.2071 36 36 0 0 0-0.2402 0.1133 36 36 0 0 0-0.4375 0.2109 36 36 0 0 0-0.2305 0.1113 36 36 0 0 0-0.037 0.02 36 36 0 0 0-0.076 0.037l-29.924 14.963a36.004 36.004 0 0 0-9.3555 6.7441l-15 15a36.004 36.004 0 0 0-6.7441 9.3555l-15 30a36.004 36.004 0 0 0-2.7266 7.3691l-15 60a36.004 36.004 0 0 0-1.0784 8.7381v75a36.004 36.004 0 0 0 1.0742 8.7305l15 60a36.004 36.004 0 0 0 2.7266 7.3691l15 30a36.004 36.004 0 0 0 6.7441 9.3555l15 15a36.004 36.004 0 0 0 9.3555 6.7441l30 15a36.004 36.004 0 0 0 16.1 3.8008h30a36.004 36.004 0 0 0 16.1-3.8008l30-15a36.004 36.004 0 0 0 9.3555-6.7441l15-15a36.004 36.004 0 0 0 6.7441-9.3555l15-30a36.004 36.004 0 0 0 2.7266-7.3691l15-60a36.004 36.004 0 0 0 1.0742-8.7305v-75a36.004 36.004 0 0 0-1.0742-8.7305l-15-60a36.004 36.004 0 0 0-2.7266-7.3691l-15-30a36.004 36.004 0 0 0-6.7441-9.3555l-15-15a36.004 36.004 0 0 0-9.3555-6.7441l-30-15a36.004 36.004 0 0 0-16.1-3.8008h-30zm8.5 72h13.004l17.174 8.5859 6.7383 6.7383 10.619 21.24 12.967 51.867v66.137l-12.967 51.867-10.619 21.24-6.7383 6.7383-17.174 8.5859h-13.004l-17.174-8.5859-6.7383-6.7383-10.619-21.24-12.967-51.867v-66.137l12.967-51.867 10.619-21.24 6.7383-6.7383z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <path
              d="m25038 3579 132 393 131-393"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m25657 3935-19 19-56 18h-37l-57-18-37-38-19-37-19-75v-57l19-75 19-37 37-38 57-18h37l56 18 19 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m25588 4425h-225l-22 225 22-23 45-22h113l45 22 22 23 23 45v112l-23 45-22 23-45 22h-113l-45-22-22-23"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m25453 5402-112 338h292"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m25453 5372a30 30 0 0 0-28.404 20.562l-112 338a30.003 30.003 0 0 0 28.476 39.438h292a30 30 0 0 0 30-30 30 30 0 0 0-30-30h-250.45l98.932-298.56a30 30 0 0 0-19.041-37.914 30 30 0 0 0-9.51-1.5214z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m25318 6425h293l-158 180h68l45 22 22 23 23 45v112l-23 45-22 23-45 22h-135l-45-22-23-23"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m25341 7470 22-23 45-22h113l45 22 22 23 23 45v45l-23 67-270 270h293"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m25476 8897v-472l-45 67-45 45-45 23"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m26051 3935-19 19-56 18h-38l-56-18-37-38-19-37-19-75v-57l19-75 19-37 37-38 56-18h38l56 18 19 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m25453 9550h45l45 22 23 23 22 45 23 90v112l-23 90-22 45-23 23-45 22h-45l-45-22-22-23-23-45-22-90v-112l22-90 23-45 22-23 45-22"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m16645 11776 90 315 90-225 90 225 90-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16645 11746a30 30 0 0 0-8.328 1.154 30 30 0 0 0-20.603 37.088l90 315a30.003 30.003 0 0 0 56.699 2.901l62.144-155.36 62.147 155.36a30.003 30.003 0 0 0 56.701-2.901l90-315a30 30 0 0 0-20.604-37.088 30 30 0 0 0-37.087 20.604l-65.893 230.62-57.408-143.52a30.003 30.003 0 0 0-55.709 0l-57.408 143.52-65.891-230.62a30 30 0 0 0-28.76-21.758z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17140 11776 90 315 90-225 90 225 90-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17140 11746a30 30 0 0 0-8.328 1.154 30 30 0 0 0-20.603 37.088l90 315a30.003 30.003 0 0 0 56.699 2.901l62.144-155.36 62.147 155.36a30.003 30.003 0 0 0 56.701-2.901l90-315a30 30 0 0 0-20.604-37.088 30 30 0 0 0-37.087 20.604l-65.893 230.62-57.408-143.52a30.003 30.003 0 0 0-55.709 0l-57.408 143.52-65.891-230.62a30 30 0 0 0-28.76-21.758z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17635 11776 90 315 90-225 90 225 90-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17635 11746a30 30 0 0 0-8.328 1.154 30 30 0 0 0-20.603 37.088l90 315a30.003 30.003 0 0 0 56.699 2.901l62.144-155.36 62.147 155.36a30.003 30.003 0 0 0 56.701-2.901l90-315a30 30 0 0 0-20.604-37.088 30 30 0 0 0-37.087 20.604l-65.893 230.62-57.408-143.52a30.003 30.003 0 0 0-55.709 0l-57.408 143.52-65.891-230.62a30 30 0 0 0-28.76-21.758z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18175 12046 23 23-23 22-22-22 22-23v45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18175 12016a30 30 0 0 0-12.031 2.488 30 30 0 0 0-2.48 1.217 30 30 0 0 0-0.06 0.03 30 30 0 0 0-0.715 0.409 30.003 30.003 0 0 0-0.05 0.03 30 30 0 0 0-0.03 0.02 30 30 0 0 0-1.121 0.7 30 30 0 0 0-1.138 0.781 30 30 0 0 0-0.372 0.271 30 30 0 0 0-0.05 0.04 30.003 30.003 0 0 0-0.317 0.243 30 30 0 0 0-0.05 0.04 30.003 30.003 0 0 0-0.314 0.246 30 30 0 0 0-0.357 0.289 30 30 0 0 0-0.05 0.04 30.003 30.003 0 0 0-0.307 0.256 30 30 0 0 0-0.227 0.193 30.003 30.003 0 0 0-0.144 0.125 30 30 0 0 0-0.03 0.02 30 30 0 0 0-0.936 0.857 30.003 30.003 0 0 0-0.05 0.05 30 30 0 0 0-0.03 0.03 30 30 0 0 0-0.432 0.424 30 30 0 0 0-0.06 0.06 30.003 30.003 0 0 0-0.217 0.22 30 30 0 0 0-0.16 0.164 30.003 30.003 0 0 0-0.03 0.03l-0.106 0.109a30 30 0 0 0-0.08 0.08l-21.818 22.811a30.003 30.003 0 0 0 0.466 41.949l21.95 21.949 0.05 0.05a30.003 30.003 0 0 0 0.05 0.05 30 30 0 0 0 0.27 0.265 30.003 30.003 0 0 0 0.04 0.04 30 30 0 0 0 0.242 0.233 30.003 30.003 0 0 0 0.05 0.05 30 30 0 0 0 0.294 0.273 30.003 30.003 0 0 0 0.157 0.141 30 30 0 0 0 0.23 0.207 30 30 0 0 0 0.348 0.302 30 30 0 0 0 0.342 0.289 30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.338 0.275 30 30 0 0 0 0.314 0.25 30.003 30.003 0 0 0 0.04 0.04 30 30 0 0 0 0.309 0.237 30.003 30.003 0 0 0 0.242 0.181 30 30 0 0 0 0.125 0.09 30.003 30.003 0 0 0 0.06 0.04 30 30 0 0 0 0.374 0.27 30 30 0 0 0 0.318 0.222 30.003 30.003 0 0 0 0.06 0.04 30 30 0 0 0 0.323 0.217 30.003 30.003 0 0 0 0.269 0.178 30 30 0 0 0 0.143 0.09 30.003 30.003 0 0 0 0.123 0.08 30 30 0 0 0 0.301 0.189 30 30 0 0 0 0.384 0.236 30.003 30.003 0 0 0 0.07 0.04 30 30 0 0 0 0.324 0.189 30.003 30.003 0 0 0 0.08 0.05 30 30 0 0 0 0.27 0.154 30.003 30.003 0 0 0 0.06 0.03 30 30 0 0 0 0.361 0.2 30.003 30.003 0 0 0 0.235 0.125 30 30 0 0 0 0.201 0.105 30.003 30.003 0 0 0 0.1 0.05 30 30 0 0 0 0.293 0.148 30.003 30.003 0 0 0 0.166 0.08 30 30 0 0 0 0.214 0.106 30.003 30.003 0 0 0 0.07 0.03 30 30 0 0 0 0.363 0.172 30.003 30.003 0 0 0 0.264 0.121 30 30 0 0 0 0.183 0.08 30.003 30.003 0 0 0 0.225 0.1 30 30 0 0 0 0.18 0.08 30.003 30.003 0 0 0 0.181 0.08 30 30 0 0 0 0.219 0.09 30.003 30.003 0 0 0 0.07 0.03 30 30 0 0 0 0.428 0.17 30 30 0 0 0 0.406 0.154 30.003 30.003 0 0 0 0.229 0.08 30 30 0 0 0 0.178 0.07 30.003 30.003 0 0 0 0.14 0.05 30 30 0 0 0 0.785 0.262 30 30 0 0 0 0.881 0.268 30 30 0 0 0 0.373 0.103 30.003 30.003 0 0 0 0.153 0.04 30 30 0 0 0 0.722 0.184 30 30 0 0 0 0.02 0 30.003 30.003 0 0 0 0.174 0.04 30 30 0 0 0 0.797 0.174 30 30 0 0 0 0.431 0.09 30.003 30.003 0 0 0 0.08 0.01 30 30 0 0 0 0.389 0.07 30 30 0 0 0 0.455 0.07 30 30 0 0 0 0.383 0.06 30.003 30.003 0 0 0 0.07 0.01 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.05 30.003 30.003 0 0 0 0.02 0 30 30 0 0 0 0.439 0.05 30 30 0 0 0 0.918 0.07 30 30 0 0 0 0.92 0.04 30 30 0 0 0 0.461 0.01 30 30 0 0 0 0.531 0 30 30 0 0 0 0.391 0 30 30 0 0 0 0.92-0.02 30 30 0 0 0 0.459-0.02 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.03 30 30 0 0 0 0.459-0.04 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.04 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.04 30 30 0 0 0 0.457-0.06 30 30 0 0 0 0.455-0.07 30 30 0 0 0 0.396-0.06 30 30 0 0 0 0.06-0.01 30.003 30.003 0 0 0 0.07-0.01 30 30 0 0 0 0.383-0.07 30 30 0 0 0 0.385-0.07 30 30 0 0 0 0.07-0.01 30.003 30.003 0 0 0 0.07-0.01 30 30 0 0 0 0.382-0.08 30 30 0 0 0 0.897-0.209 30 30 0 0 0 0.375-0.09 30 30 0 0 0 0.07-0.02 30.003 30.003 0 0 0 0.07-0.02 30 30 0 0 0 0.797-0.224 30 30 0 0 0 0.02 0 30.003 30.003 0 0 0 0.07-0.02 30 30 0 0 0 0.373-0.115 30 30 0 0 0 0.819-0.269 30 30 0 0 0 0.06-0.02 30.003 30.003 0 0 0 0.07-0.02 30 30 0 0 0 0.367-0.133 30 30 0 0 0 0.431-0.162 30 30 0 0 0 0.428-0.168 30 30 0 0 0 0.315-0.127 30 30 0 0 0 0.113-0.05 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.358-0.155 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.358-0.16 30 30 0 0 0 0.398-0.184 30 30 0 0 0 0.02-0.01 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.352-0.172 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.06-0.03 30.003 30.003 0 0 0 0.347-0.176 30 30 0 0 0 0.348-0.182 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.03-0.02 30 30 0 0 0 0.713-0.395 30 30 0 0 0 0.398-0.232 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.334-0.203 30 30 0 0 0 0.353-0.218 30 30 0 0 0 0.04-0.02 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.328-0.213 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.326-0.217 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.323-0.222 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.319-0.229 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.317-0.232 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.311-0.239 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.308-0.242 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.305-0.248 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.301-0.252 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.297-0.256 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.293-0.261 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.289-0.266 30.003 30.003 0 0 0 0.05-0.05 30.003 30.003 0 0 0 0.239-0.224l23-22a30.003 30.003 0 0 0 0.476-42.893l-23-23a30 30 0 0 0-21.141-8.787z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18333 11776h180"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18333 11746a30 30 0 0 0-30 30 30 30 0 0 0 30 30h180a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18400 12091v-405l23-45 45-22h45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18468 11589a29.924 29.924 0 0 0-13.142 3.041l-45 22a29.924 29.924 0 0 0-13.5 13.264l-23 45a29.924 29.924 0 0 0-3.28 13.617v405a29.921 29.921 0 0 0 29.922 29.922 29.921 29.921 0 0 0 29.922-29.922v-397.8l15.182-29.703 29.818-14.578h38.078a29.921 29.921 0 0 0 29.922-29.922 29.921 29.921 0 0 0-29.922-29.922z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m18670 12091v-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18670 11746a29.921 29.921 0 0 0-29.922 29.922v315a29.921 29.921 0 0 0 29.922 29.922 29.921 29.921 0 0 0 29.922-29.922v-315a29.921 29.921 0 0 0-29.922-29.922z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18670 11866 23-45 22-22 45-23h45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m18760 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30.003 30.003 0 0 0-5.5 7.559l-23 45a30 30 0 0 0 13.059 40.367 30 30 0 0 0 40.367-13.059l20.846-40.787 15.308-15.308 34.356-17.559h37.777a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m19165 12091v-247l-22-45-45-23h-90l-45 23"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19008 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30 30 0 0 0-13.059 40.367 30 30 0 0 0 40.366 13.059l38.57-19.713h75.555l29.664 15.162 14.558 29.779v240.06a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-13.298-13.537l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19165 12069-45 22h-112l-45-22-23-45v-45l23-45 45-23h112l45-22"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19165 11859a30 30 0 0 0-13.036 3.049l-38.765 18.951h-105.06a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-13.059 13.059l-23 45a30.003 30.003 0 0 0-3.287 13.654v45a30.003 30.003 0 0 0 3.287 13.654l23 45a30.003 30.003 0 0 0 13.537 13.297l45 22a30.003 30.003 0 0 0 13.176 3.049h112a30.003 30.003 0 0 0 13.176-3.049l45-22a30 30 0 0 0 13.775-40.127 30 30 0 0 0-40.127-13.775l-38.765 18.951h-98.117l-29.782-14.559-15.16-29.664v-30.554l15.295-29.928 29.928-15.295h104.78a30.003 30.003 0 0 0 13.176-3.049l45-22a30 30 0 0 0 13.775-40.127 30 30 0 0 0-27.091-16.824z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19390 11776v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19390 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19390 11821 22-22 45-23h68l45 23 22 45v247"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19457 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30 30 0 0 0 0 42.426 30 30 0 0 0 42.426 0l18.654-18.654 34.356-17.559h53.555l29.664 15.162 14.558 29.779v240.06a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-13.298-13.537l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19772 11776h248l-248 315h248"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19772 11746a30 30 0 0 0-30 30 30 30 0 0 0 30 30h186.2l-209.77 266.44a30.003 30.003 0 0 0 23.572 48.559h248a30 30 0 0 0 30-30 30 30 0 0 0-30-30h-186.2l209.77-266.44a30.003 30.003 0 0 0-23.571-48.559z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20200 12091v-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20200 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20200 11619-23 22 23 23 22-23-22-22v45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20200 11589a30 30 0 0 0-20.555 8.32l-23 22a30.003 30.003 0 0 0-0.477 42.893l22.95 22.949 0.05 0.05a30.003 30.003 0 0 0 0.05 0.05 30 30 0 0 0 0.27 0.265 30.003 30.003 0 0 0 0.04 0.04 30 30 0 0 0 0.242 0.233 30.003 30.003 0 0 0 0.05 0.05 30 30 0 0 0 0.294 0.273 30.003 30.003 0 0 0 0.157 0.141 30 30 0 0 0 0.23 0.207 30 30 0 0 0 0.348 0.302 30 30 0 0 0 0.342 0.289 30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.338 0.275 30 30 0 0 0 0.314 0.25 30.003 30.003 0 0 0 0.04 0.04 30 30 0 0 0 0.309 0.237 30.003 30.003 0 0 0 0.242 0.181 30 30 0 0 0 0.125 0.09 30.003 30.003 0 0 0 0.06 0.04 30 30 0 0 0 0.374 0.27 30 30 0 0 0 0.318 0.222 30.003 30.003 0 0 0 0.06 0.04 30 30 0 0 0 0.323 0.217 30.003 30.003 0 0 0 0.269 0.178 30 30 0 0 0 0.143 0.09 30.003 30.003 0 0 0 0.123 0.08 30 30 0 0 0 0.301 0.189 30 30 0 0 0 0.384 0.236 30.003 30.003 0 0 0 0.07 0.04 30 30 0 0 0 0.324 0.189 30.003 30.003 0 0 0 0.08 0.05 30 30 0 0 0 0.27 0.154 30.003 30.003 0 0 0 0.06 0.03 30 30 0 0 0 0.361 0.2 30.003 30.003 0 0 0 0.235 0.125 30 30 0 0 0 0.201 0.105 30.003 30.003 0 0 0 0.1 0.05 30 30 0 0 0 0.293 0.148 30.003 30.003 0 0 0 0.166 0.08 30 30 0 0 0 0.214 0.106 30.003 30.003 0 0 0 0.07 0.03 30 30 0 0 0 0.363 0.172 30.003 30.003 0 0 0 0.264 0.121 30 30 0 0 0 0.183 0.08 30.003 30.003 0 0 0 0.225 0.1 30 30 0 0 0 0.18 0.08 30.003 30.003 0 0 0 0.181 0.08 30 30 0 0 0 0.219 0.09 30.003 30.003 0 0 0 0.07 0.03 30 30 0 0 0 0.428 0.17 30 30 0 0 0 0.406 0.154 30.003 30.003 0 0 0 0.08 0.03 30 30 0 0 0 0.378 0.136 30 30 0 0 0 0.873 0.295 30 30 0 0 0 0.881 0.268 30 30 0 0 0 0.373 0.103 30.003 30.003 0 0 0 0.153 0.04 30 30 0 0 0 0.722 0.184 30 30 0 0 0 0.02 0 30.003 30.003 0 0 0 0.174 0.04 30 30 0 0 0 0.797 0.174 30 30 0 0 0 0.431 0.09 30.003 30.003 0 0 0 0.08 0.01 30 30 0 0 0 0.389 0.07 30 30 0 0 0 0.455 0.07 30 30 0 0 0 0.383 0.06 30.003 30.003 0 0 0 0.07 0.01 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.05 30.003 30.003 0 0 0 0.02 0 30 30 0 0 0 0.439 0.05 30 30 0 0 0 0.918 0.07 30 30 0 0 0 0.92 0.04 30 30 0 0 0 0.461 0.01 30 30 0 0 0 0.531 0 30 30 0 0 0 0.391 0 30 30 0 0 0 0.92-0.02 30 30 0 0 0 0.459-0.02 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.03 30 30 0 0 0 0.459-0.04 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.04 30.003 30.003 0 0 0 0.07 0 30 30 0 0 0 0.389-0.04 30 30 0 0 0 0.457-0.06 30 30 0 0 0 0.455-0.07 30 30 0 0 0 0.396-0.06 30 30 0 0 0 0.06-0.01 30.003 30.003 0 0 0 0.07-0.01 30 30 0 0 0 0.383-0.07 30 30 0 0 0 0.385-0.07 30 30 0 0 0 0.07-0.01 30.003 30.003 0 0 0 0.07-0.01 30 30 0 0 0 0.382-0.08 30 30 0 0 0 0.897-0.209 30 30 0 0 0 1.31-0.355 30 30 0 0 0 0.02 0 30.003 30.003 0 0 0 0.07-0.02 30 30 0 0 0 0.373-0.115 30 30 0 0 0 1.309-0.445 30 30 0 0 0 0.431-0.162 30 30 0 0 0 0.428-0.168 30 30 0 0 0 0.315-0.127 30 30 0 0 0 0.113-0.05 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.358-0.155 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.358-0.16 30 30 0 0 0 0.769-0.365 30 30 0 0 0 0.06-0.03 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.06-0.03 30.003 30.003 0 0 0 0.347-0.176 30 30 0 0 0 0.348-0.182 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.03-0.02 30 30 0 0 0 0.713-0.395 30 30 0 0 0 0.398-0.232 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.334-0.203 30 30 0 0 0 0.353-0.218 30 30 0 0 0 0.04-0.02 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.328-0.213 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.326-0.217 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.323-0.222 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.319-0.229 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.317-0.232 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.311-0.239 30.003 30.003 0 0 0 0.06-0.04 30 30 0 0 0 0.308-0.242 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.305-0.248 30.003 30.003 0 0 0 0.05-0.04 30 30 0 0 0 0.301-0.252 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.297-0.256 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.293-0.261 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.289-0.266 30.003 30.003 0 0 0 0.05-0.05 30.003 30.003 0 0 0 0.334-0.318 30 30 0 0 0 0.282-0.274 30.003 30.003 0 0 0 0.373-0.374 30 30 0 0 0 0.193-0.202l0.125-0.131 21.875-22.869a30.003 30.003 0 0 0-0.467-41.949l-21.855-21.853a30 30 0 0 0-0.145-0.147 30.003 30.003 0 0 0-0.182-0.18 30 30 0 0 0-0.01-0.01 30.003 30.003 0 0 0-0.239-0.231 30.003 30.003 0 0 0-0.08-0.08 30 30 0 0 0-0.15-0.141 30.003 30.003 0 0 0-0.186-0.173 30 30 0 0 0-0.152-0.141 30.003 30.003 0 0 0-0.187-0.17 30 30 0 0 0-0.155-0.137 30.003 30.003 0 0 0-0.191-0.168 30 30 0 0 0-0.156-0.134 30.003 30.003 0 0 0-0.02-0.02 30 30 0 0 0-0.306-0.26 30 30 0 0 0-0.02-0.02 30.003 30.003 0 0 0-0.197-0.162 30 30 0 0 0-0.16-0.129 30 30 0 0 0-0.362-0.287 30 30 0 0 0-0.365-0.28 30 30 0 0 0-0.369-0.275 30 30 0 0 0-0.33-0.238 30 30 0 0 0-0.04-0.03 30.003 30.003 0 0 0-0.209-0.146 30 30 0 0 0-0.17-0.117 30.003 30.003 0 0 0-0.05-0.03 30 30 0 0 0-0.33-0.223 30 30 0 0 0-1.17-0.738 30 30 0 0 0-0.797-0.461 30 30 0 0 0-1.222-0.645 30 30 0 0 0-1.672-0.771 30 30 0 0 0-0.426-0.178 30 30 0 0 0-0.428-0.17 30 30 0 0 0-0.863-0.32 30 30 0 0 0-10.189-1.721z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20425 11776v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20425 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20425 11821 22-22 45-23h68l45 23 22 45v247"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20492 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30 30 0 0 0 0 42.426 30 30 0 0 0 42.426 0l18.654-18.654 34.356-17.559h53.555l29.664 15.162 14.558 29.779v240.06a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-13.298-13.537l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20852 12091v-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20852 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20852 11619-22 22 22 23 23-23-23-22v45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20852 11589a30 30 0 0 0-21.285 8.787l-22 22a30.003 30.003 0 0 0-0.466 41.949l21.775 22.764 0.225 0.236a30.003 30.003 0 0 0 0.03 0.03 30 30 0 0 0 0.148 0.151 30.003 30.003 0 0 0 0.139 0.144 30 30 0 0 0 0.1 0.1 30.003 30.003 0 0 0 0.277 0.276 30 30 0 0 0 0.05 0.05 30.003 30.003 0 0 0 0.236 0.227 30 30 0 0 0 0.336 0.314 30 30 0 0 0 0.332 0.303 30.003 30.003 0 0 0 0.01 0.01 30 30 0 0 0 0.342 0.301 30 30 0 0 0 0.349 0.298 30 30 0 0 0 0.102 0.09 30.003 30.003 0 0 0 0.254 0.209 30 30 0 0 0 0.232 0.188 30.003 30.003 0 0 0 0.217 0.174 30 30 0 0 0 0.06 0.05 30.003 30.003 0 0 0 0.291 0.224 30 30 0 0 0 0.106 0.08 30.003 30.003 0 0 0 0.236 0.178 30 30 0 0 0 0.305 0.223 30.003 30.003 0 0 0 0.02 0.01 30 30 0 0 0 0.375 0.264 30 30 0 0 0 0.246 0.17 30.003 30.003 0 0 0 0.199 0.135 30 30 0 0 0 0.05 0.03 30.003 30.003 0 0 0 0.273 0.18 30 30 0 0 0 0.371 0.238 30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.257 0.16 30.003 30.003 0 0 0 0.194 0.119 30 30 0 0 0 0.103 0.06 30.003 30.003 0 0 0 0.326 0.196 30 30 0 0 0 0.02 0.01 30.003 30.003 0 0 0 0.346 0.196 30 30 0 0 0 0.04 0.02 30.003 30.003 0 0 0 0.287 0.158 30 30 0 0 0 0.406 0.219 30 30 0 0 0 0.408 0.211 30 30 0 0 0 0.412 0.205 30 30 0 0 0 0.416 0.199 30 30 0 0 0 0.344 0.159 30.003 30.003 0 0 0 0.106 0.05 30 30 0 0 0 0.39 0.172 30 30 0 0 0 0.424 0.18 30 30 0 0 0 0.33 0.135 30.003 30.003 0 0 0 0.135 0.05 30 30 0 0 0 0.289 0.112 30.003 30.003 0 0 0 0.226 0.09 30 30 0 0 0 0.11 0.04 30.003 30.003 0 0 0 0.25 0.09 30 30 0 0 0 0.07 0.03 30.003 30.003 0 0 0 0.311 0.107 30 30 0 0 0 0.347 0.119 30.003 30.003 0 0 0 0.151 0.05 30 30 0 0 0 0.06 0.02 30.003 30.003 0 0 0 0.313 0.1 30 30 0 0 0 0.875 0.258 30.003 30.003 0 0 0 0.02 0 30 30 0 0 0 0.117 0.03 30.003 30.003 0 0 0 0.317 0.08 30 30 0 0 0 0.416 0.106 30.003 30.003 0 0 0 0.06 0.01 30 30 0 0 0 0.1 0.02 30.003 30.003 0 0 0 0.318 0.07 30 30 0 0 0 0.451 0.1 30 30 0 0 0 0.387 0.08 30.003 30.003 0 0 0 0.08 0.02 30 30 0 0 0 1.328 0.229 30.003 30.003 0 0 0 0.03 0 30 30 0 0 0 0.41 0.06 30.003 30.003 0 0 0 0.04 0 30 30 0 0 0 0.447 0.06 30 30 0 0 0 0.385 0.04 30.003 30.003 0 0 0 0.1 0.01 30 30 0 0 0 0.435 0.04 30 30 0 0 0 0.459 0.04 30 30 0 0 0 0.443 0.03 30 30 0 0 0 0.02 0 30 30 0 0 0 0.455 0.02 30 30 0 0 0 0.451 0.01 30 30 0 0 0 0.01 0 30 30 0 0 0 0.459 0 30 30 0 0 0 0.277 0 30 30 0 0 0 0.184 0 30 30 0 0 0 0.461 0 30 30 0 0 0 0.461-0.01 30 30 0 0 0 1.379-0.08 30 30 0 0 0 0.459-0.04 30 30 0 0 0 0.457-0.05 30 30 0 0 0 0.457-0.06 30 30 0 0 0 0.447-0.06 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.02 0 30 30 0 0 0 0.395-0.06 30 30 0 0 0 0.04 0 30.003 30.003 0 0 0 0.273-0.05 30 30 0 0 0 0.182-0.03 30.003 30.003 0 0 0 0.09-0.02 30 30 0 0 0 0.361-0.07 30 30 0 0 0 0.902-0.187 30 30 0 0 0 0.45-0.106 30 30 0 0 0 0.447-0.111 30 30 0 0 0 0.383-0.102 30 30 0 0 0 0.06-0.01 30.003 30.003 0 0 0 0.266-0.07 30 30 0 0 0 0.178-0.05 30.003 30.003 0 0 0 0.263-0.08 30 30 0 0 0 0.178-0.05 30 30 0 0 0 0.875-0.283 30 30 0 0 0 0.422-0.149 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.02 0 30 30 0 0 0 0.371-0.136 30 30 0 0 0 0.04-0.01 30.003 30.003 0 0 0 0.04-0.02 30 30 0 0 0 0.387-0.148 30 30 0 0 0 0.428-0.172 30.003 30.003 0 0 0 0.255-0.105 30 30 0 0 0 0.17-0.07 30.003 30.003 0 0 0 0.1-0.04 30 30 0 0 0 0.324-0.142 30 30 0 0 0 0.834-0.389 30.003 30.003 0 0 0 0.248-0.121 30 30 0 0 0 0.04-0.02 30.003 30.003 0 0 0 0.272-0.137 30.003 30.003 0 0 0 0.1-0.05 30 30 0 0 0 0.164-0.09 30.003 30.003 0 0 0 0.245-0.129 30 30 0 0 0 0.162-0.09 30 30 0 0 0 0.404-0.222 30 30 0 0 0 0.367-0.211 30 30 0 0 0 0.03-0.02 30.003 30.003 0 0 0 0.239-0.141 30 30 0 0 0 0.158-0.1 30 30 0 0 0 0.361-0.223 30 30 0 0 0 0.03-0.02 30.003 30.003 0 0 0 0.05-0.03 30 30 0 0 0 0.323-0.205 30 30 0 0 0 0.02-0.01 30.003 30.003 0 0 0 0.231-0.151 30 30 0 0 0 0.154-0.101 30.003 30.003 0 0 0 0.228-0.155 30 30 0 0 0 0.153-0.105 30 30 0 0 0 0.377-0.266 30.003 30.003 0 0 0 0.222-0.16 30 30 0 0 0 0.151-0.109 30.003 30.003 0 0 0 0.1-0.07 30 30 0 0 0 0.252-0.189 30 30 0 0 0 0.02-0.01 30.003 30.003 0 0 0 0.02-0.02 30 30 0 0 0 0.315-0.242 30 30 0 0 0 0.02-0.02 30.003 30.003 0 0 0 0.215-0.17 30 30 0 0 0 0.145-0.117 30.003 30.003 0 0 0 0.212-0.174 30 30 0 0 0 0.143-0.119 30.003 30.003 0 0 0 0.211-0.178 30 30 0 0 0 0.141-0.121 30.003 30.003 0 0 0 0.207-0.18 30 30 0 0 0 0.138-0.123 30.003 30.003 0 0 0 0.04-0.03 30 30 0 0 0 0.303-0.275 30.003 30.003 0 0 0 0.201-0.186 30 30 0 0 0 0.02-0.02 30.003 30.003 0 0 0 0.316-0.301 30.003 30.003 0 0 0 0.305-0.297 30.003 30.003 0 0 0 0.02-0.03 30 30 0 0 0 0.05-0.05l0.274-0.275 22.726-22.725a30.003 30.003 0 0 0-0.476-42.893l-22.852-21.857-0.148-0.143a30.003 30.003 0 0 0-0.172-0.162 30.003 30.003 0 0 0-0.01-0.01 30 30 0 0 0-0.15-0.14 30.003 30.003 0 0 0-0.04-0.04 30 30 0 0 0-0.299-0.272 30.003 30.003 0 0 0-0.19-0.17 30 30 0 0 0-0.04-0.04 30.003 30.003 0 0 0-0.257-0.224 30.003 30.003 0 0 0-0.05-0.04 30 30 0 0 0-0.157-0.133 30.003 30.003 0 0 0-0.06-0.05 30 30 0 0 0-0.268-0.221 30 30 0 0 0-0.03-0.02 30.003 30.003 0 0 0-0.197-0.16 30 30 0 0 0-0.16-0.129 30.003 30.003 0 0 0-0.05-0.04 30 30 0 0 0-0.315-0.244 30 30 0 0 0-0.338-0.256 30 30 0 0 0-0.03-0.02 30.003 30.003 0 0 0-0.205-0.15 30 30 0 0 0-0.166-0.121 30.003 30.003 0 0 0-0.06-0.05 30 30 0 0 0-0.692-0.482 30 30 0 0 0-0.771-0.504 30 30 0 0 0-0.391-0.243 30 30 0 0 0-0.363-0.218 30 30 0 0 0-0.03-0.02 30.003 30.003 0 0 0-0.02-0.01 30 30 0 0 0-0.375-0.215 30 30 0 0 0-0.4-0.225 30 30 0 0 0-0.407-0.219 30 30 0 0 0-0.82-0.418 30 30 0 0 0-1.254-0.58 30 30 0 0 0-1.281-0.521 30 30 0 0 0-0.432-0.16 30 30 0 0 0-10.174-1.807z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21077 11776v315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21077 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21077 11821 23-22 45-23h67l45 23 23 45v247"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21145 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.082 5.033l-23 22a30 30 0 0 0-0.943 42.416 30 30 0 0 0 42.416 0.944l19.826-18.965 34.66-17.715h52.555l29.925 15.295 15.297 29.928v239.78a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.287-13.654l-23-45a30.003 30.003 0 0 0-13.06-13.059l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21505 12091v-472"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21505 11589a30 30 0 0 0-30 30v472a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-472a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21707 12091v-247l-22-45-45-23h-68l-45 23-22 22"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m21572 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30 30 0 0 0 0 42.426 30 30 0 0 0 42.426 0l18.654-18.654 34.356-17.559h53.555l29.664 15.162 14.558 29.779v240.06a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-13.298-13.537l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22000 12091-45-22-23-23-22-45v-135l22-45 23-22 45-23h67l45 23 23 22 22 45v135l-22 45-23 23-45 22h-67"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22000 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.082 5.033l-23 22a30.003 30.003 0 0 0-6.215 8.504l-22 45a30.003 30.003 0 0 0-3.049 13.176v135a30.003 30.003 0 0 0 3.049 13.176l22 45a30.003 30.003 0 0 0 5.738 8.037l23 23a30.003 30.003 0 0 0 8.037 5.738l44.711 21.858 0.289 0.142a30 30 0 0 0 0.08 0.04 30 30 0 0 0 0.102 0.05 30 30 0 0 0 0.357 0.17 30 30 0 0 0 0.42 0.191 30 30 0 0 0 0.418 0.182 30 30 0 0 0 0.01 0 30 30 0 0 0 0.389 0.162 30 30 0 0 0 0.103 0.04 30 30 0 0 0 0.289 0.115 30 30 0 0 0 0.219 0.08 30 30 0 0 0 0.244 0.09 30 30 0 0 0 0.09 0.03 30 30 0 0 0 0.342 0.127 30 30 0 0 0 0.08 0.03 30 30 0 0 0 0.353 0.125 30 30 0 0 0 0.133 0.04 30 30 0 0 0 0.305 0.102 30 30 0 0 0 0.08 0.02 30 30 0 0 0 0.361 0.114 30 30 0 0 0 0.137 0.04 30 30 0 0 0 0.289 0.09 30 30 0 0 0 0.1 0.03 30 30 0 0 0 0.39 0.107 30 30 0 0 0 0.409 0.11 30 30 0 0 0 0.1 0.02 30 30 0 0 0 0.387 0.09 30 30 0 0 0 0.377 0.09 30 30 0 0 0 0.193 0.04 30 30 0 0 0 0.328 0.07 30 30 0 0 0 0.448 0.09 30 30 0 0 0 0.32 0.06 30 30 0 0 0 0.453 0.08 30 30 0 0 0 0.305 0.05 30 30 0 0 0 0.289 0.04 30 30 0 0 0 0.426 0.06 30 30 0 0 0 0.111 0.01 30 30 0 0 0 0.369 0.05 30 30 0 0 0 0.02 0 30 30 0 0 0 0.387 0.04 30 30 0 0 0 0.215 0.02 30 30 0 0 0 0.211 0.02 30 30 0 0 0 0.344 0.03 30 30 0 0 0 0.09 0 30 30 0 0 0 0.311 0.02 30 30 0 0 0 0.18 0.01 30 30 0 0 0 0.158 0 30 30 0 0 0 0.379 0.01 30 30 0 0 0 0.32 0.01 30 30 0 0 0 0.02 0 30 30 0 0 0 0.439 0 30 30 0 0 0 0.285 0 30 30 0 0 0 0.176 0h66.824a30.003 30.003 0 0 0 13.176-3.049l45-22a30.003 30.003 0 0 0 8.037-5.738l23-23a30.003 30.003 0 0 0 5.738-8.037l22-45a30.003 30.003 0 0 0 3.049-13.176v-135a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-6.214-8.504l-23-22a30.003 30.003 0 0 0-7.084-5.033l-45-23a30.003 30.003 0 0 0-13.653-3.287zm7.223 60h52.555l34.658 17.715 15.963 15.267 16.601 33.959v121.12l-16.754 34.267-15.92 15.922-34.267 16.752h-53.119l-34.266-16.752-15.922-15.922-16.752-34.267v-121.12l16.602-33.959 15.961-15.267z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22360 12046 22 23-22 22-23-22 23-23v45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22360 12016a30 30 0 0 0-6.084 0.664 30 30 0 0 0-4.842 1.471 30 30 0 0 0-0.428 0.174 30 30 0 0 0-0.424 0.179 30 30 0 0 0-0.838 0.381 30 30 0 0 0-0.416 0.199 30 30 0 0 0-0.412 0.205 30 30 0 0 0-0.408 0.213 30 30 0 0 0-0.406 0.219 30 30 0 0 0-0.799 0.455 30 30 0 0 0-0.397 0.238 30 30 0 0 0-0.39 0.243 30 30 0 0 0-0.387 0.248 30 30 0 0 0-0.385 0.256 30 30 0 0 0-0.379 0.259 30 30 0 0 0-0.376 0.268 30 30 0 0 0-0.37 0.269 30 30 0 0 0-0.365 0.278 30 30 0 0 0-0.33 0.256 30.003 30.003 0 0 0-0.1 0.08 30 30 0 0 0-0.18 0.142 30.003 30.003 0 0 0-0.111 0.09 30 30 0 0 0-0.313 0.26 30.003 30.003 0 0 0-0.228 0.193 30 30 0 0 0-0.07 0.06 30.003 30.003 0 0 0-0.289 0.25 30 30 0 0 0-0.07 0.07 30.003 30.003 0 0 0-0.196 0.176 30 30 0 0 0-0.193 0.176 30.003 30.003 0 0 0-0.07 0.07 30 30 0 0 0-0.291 0.275 30.003 30.003 0 0 0-0.33 0.323 30.003 30.003 0 0 0-0.147 0.144 30 30 0 0 0-0.179 0.18l-22.821 22.82a30.003 30.003 0 0 0 0.477 42.893l22.799 21.806 0.201 0.194a30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.268 0.252 30.003 30.003 0 0 0 0.06 0.06 30 30 0 0 0 0.323 0.293 30 30 0 0 0 0.308 0.275 30.003 30.003 0 0 0 0.06 0.06 30 30 0 0 0 0.322 0.275 30 30 0 0 0 0.287 0.24 30.003 30.003 0 0 0 0.1 0.08 30 30 0 0 0 0.324 0.262 30 30 0 0 0 0.363 0.283 30 30 0 0 0 0.276 0.209 30.003 30.003 0 0 0 0.144 0.11 30 30 0 0 0 0.09 0.07 30.003 30.003 0 0 0 0.227 0.164 30 30 0 0 0 0.31 0.221 30.003 30.003 0 0 0 0.147 0.103 30 30 0 0 0 0.251 0.172 30.003 30.003 0 0 0 0.08 0.05 30 30 0 0 0 0.246 0.164 30.003 30.003 0 0 0 0.16 0.104 30 30 0 0 0 0.332 0.212 30 30 0 0 0 0.322 0.201 30.003 30.003 0 0 0 0.119 0.07 30 30 0 0 0 0.27 0.162 30.003 30.003 0 0 0 0.117 0.07 30 30 0 0 0 0.295 0.172 30.003 30.003 0 0 0 0.09 0.05 30 30 0 0 0 0.367 0.205 30 30 0 0 0 0.388 0.211 30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.396 0.206 30 30 0 0 0 0.412 0.205 30 30 0 0 0 0.276 0.132 30.003 30.003 0 0 0 0.279 0.133 30 30 0 0 0 0.06 0.03 30.003 30.003 0 0 0 0.305 0.138 30 30 0 0 0 0.07 0.03 30.003 30.003 0 0 0 0.256 0.112 30 30 0 0 0 0.287 0.123 30.003 30.003 0 0 0 0.25 0.105 30 30 0 0 0 0.143 0.06 30.003 30.003 0 0 0 0.24 0.1 30 30 0 0 0 0.338 0.13 30.003 30.003 0 0 0 0.05 0.02 30 30 0 0 0 0.14 0.05 30.003 30.003 0 0 0 0.07 0.02 30.003 30.003 0 0 0 0.304 0.113 30 30 0 0 0 0.06 0.02 30.003 30.003 0 0 0 0.264 0.09 30 30 0 0 0 0.422 0.142 30.003 30.003 0 0 0 0.03 0.01 30 30 0 0 0 0.394 0.125 30.003 30.003 0 0 0 0.04 0.01 30 30 0 0 0 0.43 0.129 30 30 0 0 0 0.442 0.126 30 30 0 0 0 0.41 0.112 30.003 30.003 0 0 0 0.05 0.01 30 30 0 0 0 0.433 0.111 30 30 0 0 0 0.35 0.08 30.003 30.003 0 0 0 0.131 0.03 30 30 0 0 0 0.355 0.08 30.003 30.003 0 0 0 0.131 0.03 30 30 0 0 0 0.328 0.07 30.003 30.003 0 0 0 0.08 0.02 30 30 0 0 0 0.428 0.08 30 30 0 0 0 0.908 0.15 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.05 30 30 0 0 0 0.918 0.08 30 30 0 0 0 0.344 0.02 30.003 30.003 0 0 0 0.195 0.01 30 30 0 0 0 0.381 0.02 30 30 0 0 0 0.461 0.01 30 30 0 0 0 0.785 0.01 30 30 0 0 0 0.135 0 30 30 0 0 0 0.922-0.02 30 30 0 0 0 0.459-0.02 30 30 0 0 0 0.461-0.03 30 30 0 0 0 0.459-0.03 30 30 0 0 0 0.447-0.04 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.03 0 30 30 0 0 0 0.422-0.04 30 30 0 0 0 0.457-0.06 30 30 0 0 0 0.898-0.129 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.04 0 30 30 0 0 0 0.41-0.07 30 30 0 0 0 0.41-0.07 30 30 0 0 0 0.03 0 30.003 30.003 0 0 0 0.319-0.06 30 30 0 0 0 0.132-0.03 30.003 30.003 0 0 0 0.03 0 30 30 0 0 0 0.871-0.195 30 30 0 0 0 0.89-0.229 30.003 30.003 0 0 0 0.315-0.09 30 30 0 0 0 0.131-0.04 30.003 30.003 0 0 0 0.125-0.04 30 30 0 0 0 0.316-0.1 30 30 0 0 0 0.44-0.136 30 30 0 0 0 0.437-0.145 30 30 0 0 0 0.434-0.152 30.003 30.003 0 0 0 0.306-0.11 30 30 0 0 0 0.127-0.05 30.003 30.003 0 0 0 0.113-0.04 30 30 0 0 0 0.317-0.123 30.003 30.003 0 0 0 0.303-0.12 30 30 0 0 0 0.125-0.05 30.003 30.003 0 0 0 0.3-0.125 30 30 0 0 0 0.125-0.05 30.003 30.003 0 0 0 0.297-0.129 30 30 0 0 0 0.125-0.06 30.003 30.003 0 0 0 0.1-0.05 30 30 0 0 0 0.32-0.146 30 30 0 0 0 0.418-0.197 30.003 30.003 0 0 0 0.291-0.143 30 30 0 0 0 0.121-0.06 30.003 30.003 0 0 0 0.289-0.146 30 30 0 0 0 0.121-0.06 30.003 30.003 0 0 0 0.168-0.09 30 30 0 0 0 0.239-0.127 30 30 0 0 0 0.404-0.223 30 30 0 0 0 0.4-0.228 30.003 30.003 0 0 0 0.28-0.165 30 30 0 0 0 0.117-0.07 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.327-0.201 30.003 30.003 0 0 0 0.274-0.172 30 30 0 0 0 0.115-0.07 30.003 30.003 0 0 0 0.272-0.178 30 30 0 0 0 0.113-0.08 30 30 0 0 0 0.375-0.254 30.003 30.003 0 0 0 0.01-0.01 30 30 0 0 0 0.348-0.242 30 30 0 0 0 0.02-0.01 30.003 30.003 0 0 0 0.261-0.189 30.003 30.003 0 0 0 0.325-0.238 30.003 30.003 0 0 0 0.05-0.03 30 30 0 0 0 0.11-0.08 30.003 30.003 0 0 0 0.256-0.198 30 30 0 0 0 0.107-0.08 30.003 30.003 0 0 0 0.254-0.201 30 30 0 0 0 0.107-0.09 30.003 30.003 0 0 0 0.25-0.205 30 30 0 0 0 0.106-0.09 30.003 30.003 0 0 0 0.248-0.209 30 30 0 0 0 0.103-0.09 30.003 30.003 0 0 0 0.245-0.213 30 30 0 0 0 0.103-0.09 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.283-0.256 30.003 30.003 0 0 0 0.236-0.219 30 30 0 0 0 0.1-0.09 30.003 30.003 0 0 0 0.234-0.225 30.003 30.003 0 0 0 0.309-0.301 30.003 30.003 0 0 0 0.02-0.02 30 30 0 0 0 0.05-0.05l0.274-0.275 21.726-21.725a30.003 30.003 0 0 0 0.467-41.949l-22-23a30 30 0 0 0-21.861-9.264z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22787 12069-45 22h-90l-45-22-22-23-23-45v-135l23-45 22-22 45-23h90l45 23"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22652 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30.003 30.003 0 0 0-5.5 7.559l-23 45a30.003 30.003 0 0 0-3.287 13.654v135a30.003 30.003 0 0 0 3.287 13.654l23 45a30.003 30.003 0 0 0 5.034 7.082l22 23a30.003 30.003 0 0 0 8.503 6.215l45 22a30.003 30.003 0 0 0 13.176 3.049h90a30.003 30.003 0 0 0 13.176-3.049l45-22a30 30 0 0 0 13.775-40.127 30 30 0 0 0-40.127-13.775l-38.765 18.951h-76.117l-33.959-16.602-15.268-15.96-17.715-34.661v-120.55l17.559-34.356 15.308-15.308 34.356-17.559h75.555l38.568 19.713a30 30 0 0 0 40.367-13.059 30 30 0 0 0-13.06-40.367l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23057 12091-45-22-22-23-23-45v-135l23-45 22-22 45-23h68l45 23 22 22 23 45v135l-23 45-22 23-45 22h-68"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23057 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30.003 30.003 0 0 0-5.5 7.559l-23 45a30.003 30.003 0 0 0-3.287 13.654v135a30.003 30.003 0 0 0 3.287 13.654l23 45a30.003 30.003 0 0 0 5.034 7.082l22 23a30.003 30.003 0 0 0 8.503 6.215l44.711 21.858 0.289 0.142a30 30 0 0 0 0.08 0.04 30 30 0 0 0 0.102 0.05 30 30 0 0 0 0.357 0.17 30 30 0 0 0 0.42 0.191 30 30 0 0 0 0.418 0.182 30 30 0 0 0 0.01 0 30 30 0 0 0 0.389 0.162 30 30 0 0 0 0.103 0.04 30 30 0 0 0 0.289 0.115 30 30 0 0 0 0.219 0.08 30 30 0 0 0 0.244 0.09 30 30 0 0 0 0.09 0.03 30 30 0 0 0 0.342 0.127 30 30 0 0 0 0.08 0.03 30 30 0 0 0 0.353 0.125 30 30 0 0 0 0.133 0.04 30 30 0 0 0 0.305 0.102 30 30 0 0 0 0.08 0.02 30 30 0 0 0 0.361 0.114 30 30 0 0 0 0.137 0.04 30 30 0 0 0 0.289 0.09 30 30 0 0 0 0.1 0.03 30 30 0 0 0 0.39 0.107 30 30 0 0 0 0.409 0.11 30 30 0 0 0 0.1 0.02 30 30 0 0 0 0.387 0.09 30 30 0 0 0 0.377 0.09 30 30 0 0 0 0.193 0.04 30 30 0 0 0 0.328 0.07 30 30 0 0 0 0.448 0.09 30 30 0 0 0 0.32 0.06 30 30 0 0 0 0.453 0.08 30 30 0 0 0 0.305 0.05 30 30 0 0 0 0.289 0.04 30 30 0 0 0 0.426 0.06 30 30 0 0 0 0.111 0.01 30 30 0 0 0 0.369 0.05 30 30 0 0 0 0.02 0 30 30 0 0 0 0.387 0.04 30 30 0 0 0 0.215 0.02 30 30 0 0 0 0.211 0.02 30 30 0 0 0 0.344 0.03 30 30 0 0 0 0.09 0 30 30 0 0 0 0.311 0.02 30 30 0 0 0 0.18 0.01 30 30 0 0 0 0.158 0 30 30 0 0 0 0.379 0.01 30 30 0 0 0 0.32 0.01 30 30 0 0 0 0.02 0 30 30 0 0 0 0.439 0 30 30 0 0 0 0.285 0 30 30 0 0 0 0.176 0h67.824a30.003 30.003 0 0 0 13.176-3.049l45-22a30.003 30.003 0 0 0 8.504-6.215l22-23a30.003 30.003 0 0 0 5.033-7.082l23-45a30.003 30.003 0 0 0 3.287-13.654v-135a30.003 30.003 0 0 0-3.287-13.654l-23-45a30.003 30.003 0 0 0-5.5-7.559l-22-22a30.003 30.003 0 0 0-7.56-5.5l-45-23a30.003 30.003 0 0 0-13.653-3.287zm7.223 60h53.555l34.355 17.559 15.307 15.308 17.56 34.356v120.55l-17.715 34.661-15.267 15.96-33.959 16.602h-54.119l-33.957-16.602-15.268-15.96-17.715-34.661v-120.55l17.559-34.356 15.308-15.308z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23417 12091v-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23417 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23417 11821 22-22 45-23h68l45 23 22 45v247"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23484 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30 30 0 0 0 0 42.426 30 30 0 0 0 42.426 0l18.654-18.654 34.356-17.559h53.555l29.664 15.162 14.558 29.779v240.06a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.049-13.176l-22-45a30.003 30.003 0 0 0-13.298-13.537l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23619 11844 23-45 45-23h67l45 23 23 45v247"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-13.059 13.059l-23 45a30 30 0 0 0 13.059 40.367 30 30 0 0 0 40.367-13.059l18.582-36.359 29.928-15.295h52.555l29.925 15.295 15.297 29.928v239.78a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-247a30.003 30.003 0 0 0-3.287-13.654l-23-45a30.003 30.003 0 0 0-13.06-13.059l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24047 12046 22 23-22 22-23-22 23-23v45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24047 12016a30 30 0 0 0-6.084 0.664 30 30 0 0 0-4.842 1.471 30 30 0 0 0-0.428 0.174 30 30 0 0 0-0.424 0.179 30 30 0 0 0-0.838 0.381 30 30 0 0 0-0.416 0.199 30 30 0 0 0-0.412 0.205 30 30 0 0 0-0.408 0.213 30 30 0 0 0-0.406 0.219 30 30 0 0 0-0.799 0.455 30 30 0 0 0-0.397 0.238 30 30 0 0 0-0.39 0.243 30 30 0 0 0-0.387 0.248 30 30 0 0 0-0.385 0.256 30 30 0 0 0-0.379 0.259 30 30 0 0 0-0.376 0.268 30 30 0 0 0-0.37 0.269 30 30 0 0 0-0.365 0.278 30 30 0 0 0-0.33 0.256 30.003 30.003 0 0 0-0.1 0.08 30 30 0 0 0-0.18 0.142 30.003 30.003 0 0 0-0.111 0.09 30 30 0 0 0-0.313 0.26 30.003 30.003 0 0 0-0.228 0.193 30 30 0 0 0-0.07 0.06 30.003 30.003 0 0 0-0.289 0.25 30 30 0 0 0-0.07 0.07 30.003 30.003 0 0 0-0.196 0.176 30 30 0 0 0-0.193 0.176 30.003 30.003 0 0 0-0.07 0.07 30 30 0 0 0-0.291 0.275 30.003 30.003 0 0 0-0.33 0.323 30.003 30.003 0 0 0-0.147 0.144 30 30 0 0 0-0.179 0.18l-22.821 22.82a30.003 30.003 0 0 0 0.477 42.893l22.799 21.806 0.201 0.194a30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.268 0.252 30.003 30.003 0 0 0 0.06 0.06 30 30 0 0 0 0.323 0.293 30 30 0 0 0 0.308 0.275 30.003 30.003 0 0 0 0.06 0.06 30 30 0 0 0 0.322 0.275 30 30 0 0 0 0.287 0.24 30.003 30.003 0 0 0 0.1 0.08 30 30 0 0 0 0.324 0.262 30 30 0 0 0 0.363 0.283 30 30 0 0 0 0.276 0.209 30.003 30.003 0 0 0 0.144 0.11 30 30 0 0 0 0.09 0.07 30.003 30.003 0 0 0 0.227 0.164 30 30 0 0 0 0.31 0.221 30.003 30.003 0 0 0 0.147 0.103 30 30 0 0 0 0.251 0.172 30.003 30.003 0 0 0 0.08 0.05 30 30 0 0 0 0.246 0.164 30.003 30.003 0 0 0 0.16 0.104 30 30 0 0 0 0.332 0.212 30 30 0 0 0 0.322 0.201 30.003 30.003 0 0 0 0.119 0.07 30 30 0 0 0 0.27 0.162 30.003 30.003 0 0 0 0.117 0.07 30 30 0 0 0 0.295 0.172 30.003 30.003 0 0 0 0.09 0.05 30 30 0 0 0 0.367 0.205 30 30 0 0 0 0.388 0.211 30.003 30.003 0 0 0 0.03 0.02 30 30 0 0 0 0.396 0.206 30 30 0 0 0 0.412 0.205 30 30 0 0 0 0.276 0.132 30.003 30.003 0 0 0 0.279 0.133 30 30 0 0 0 0.06 0.03 30.003 30.003 0 0 0 0.305 0.138 30 30 0 0 0 0.07 0.03 30.003 30.003 0 0 0 0.256 0.112 30 30 0 0 0 0.287 0.123 30.003 30.003 0 0 0 0.25 0.105 30 30 0 0 0 0.143 0.06 30.003 30.003 0 0 0 0.24 0.1 30 30 0 0 0 0.338 0.13 30.003 30.003 0 0 0 0.05 0.02 30 30 0 0 0 0.14 0.05 30.003 30.003 0 0 0 0.07 0.02 30.003 30.003 0 0 0 0.304 0.113 30 30 0 0 0 0.06 0.02 30.003 30.003 0 0 0 0.264 0.09 30 30 0 0 0 0.422 0.142 30.003 30.003 0 0 0 0.03 0.01 30 30 0 0 0 0.394 0.125 30.003 30.003 0 0 0 0.04 0.01 30 30 0 0 0 0.43 0.129 30 30 0 0 0 0.442 0.126 30 30 0 0 0 0.41 0.112 30.003 30.003 0 0 0 0.05 0.01 30 30 0 0 0 0.433 0.111 30 30 0 0 0 0.35 0.08 30.003 30.003 0 0 0 0.131 0.03 30 30 0 0 0 0.355 0.08 30.003 30.003 0 0 0 0.131 0.03 30 30 0 0 0 0.328 0.07 30.003 30.003 0 0 0 0.08 0.02 30 30 0 0 0 0.428 0.08 30 30 0 0 0 0.908 0.15 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.06 30 30 0 0 0 0.457 0.05 30 30 0 0 0 0.918 0.08 30 30 0 0 0 0.344 0.02 30.003 30.003 0 0 0 0.195 0.01 30 30 0 0 0 0.381 0.02 30 30 0 0 0 0.461 0.01 30 30 0 0 0 0.785 0.01 30 30 0 0 0 0.135 0 30 30 0 0 0 0.922-0.02 30 30 0 0 0 0.459-0.02 30 30 0 0 0 0.461-0.03 30 30 0 0 0 0.459-0.03 30 30 0 0 0 0.447-0.04 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.03 0 30 30 0 0 0 0.422-0.04 30 30 0 0 0 0.457-0.06 30 30 0 0 0 0.898-0.129 30 30 0 0 0 0.01 0 30.003 30.003 0 0 0 0.04 0 30 30 0 0 0 0.41-0.07 30 30 0 0 0 0.41-0.07 30 30 0 0 0 0.03 0 30.003 30.003 0 0 0 0.319-0.06 30 30 0 0 0 0.132-0.03 30.003 30.003 0 0 0 0.03 0 30 30 0 0 0 0.871-0.195 30 30 0 0 0 0.89-0.229 30.003 30.003 0 0 0 0.315-0.09 30 30 0 0 0 0.131-0.04 30.003 30.003 0 0 0 0.125-0.04 30 30 0 0 0 0.316-0.1 30 30 0 0 0 0.44-0.136 30 30 0 0 0 0.437-0.145 30 30 0 0 0 0.434-0.152 30.003 30.003 0 0 0 0.306-0.11 30 30 0 0 0 0.127-0.05 30.003 30.003 0 0 0 0.113-0.04 30 30 0 0 0 0.317-0.123 30.003 30.003 0 0 0 0.303-0.12 30 30 0 0 0 0.125-0.05 30.003 30.003 0 0 0 0.3-0.125 30 30 0 0 0 0.125-0.05 30.003 30.003 0 0 0 0.297-0.129 30 30 0 0 0 0.125-0.06 30.003 30.003 0 0 0 0.1-0.05 30 30 0 0 0 0.32-0.146 30 30 0 0 0 0.418-0.197 30.003 30.003 0 0 0 0.291-0.143 30 30 0 0 0 0.121-0.06 30.003 30.003 0 0 0 0.289-0.146 30 30 0 0 0 0.121-0.06 30.003 30.003 0 0 0 0.168-0.09 30 30 0 0 0 0.239-0.127 30 30 0 0 0 0.404-0.223 30 30 0 0 0 0.4-0.228 30.003 30.003 0 0 0 0.28-0.165 30 30 0 0 0 0.117-0.07 30.003 30.003 0 0 0 0.06-0.03 30 30 0 0 0 0.327-0.201 30.003 30.003 0 0 0 0.274-0.172 30 30 0 0 0 0.115-0.07 30.003 30.003 0 0 0 0.272-0.178 30 30 0 0 0 0.113-0.08 30 30 0 0 0 0.375-0.254 30.003 30.003 0 0 0 0.01-0.01 30 30 0 0 0 0.348-0.242 30 30 0 0 0 0.02-0.01 30.003 30.003 0 0 0 0.261-0.189 30.003 30.003 0 0 0 0.325-0.238 30.003 30.003 0 0 0 0.05-0.03 30 30 0 0 0 0.11-0.08 30.003 30.003 0 0 0 0.256-0.198 30 30 0 0 0 0.107-0.08 30.003 30.003 0 0 0 0.254-0.201 30 30 0 0 0 0.107-0.09 30.003 30.003 0 0 0 0.25-0.205 30 30 0 0 0 0.106-0.09 30.003 30.003 0 0 0 0.248-0.209 30 30 0 0 0 0.103-0.09 30.003 30.003 0 0 0 0.245-0.213 30 30 0 0 0 0.103-0.09 30.003 30.003 0 0 0 0.05-0.05 30 30 0 0 0 0.283-0.256 30.003 30.003 0 0 0 0.236-0.219 30 30 0 0 0 0.1-0.09 30.003 30.003 0 0 0 0.234-0.225 30.003 30.003 0 0 0 0.309-0.301 30.003 30.003 0 0 0 0.02-0.02 30 30 0 0 0 0.05-0.05l0.274-0.275 21.726-21.725a30.003 30.003 0 0 0 0.467-41.949l-22-23a30 30 0 0 0-21.861-9.264z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24272 12091v-472"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24272 11589a30 30 0 0 0-30 30v472a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-472a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24272 11799 45-23h90l45 23 22 22 23 45v135l-23 45-22 23-45 22h-90l-45-22"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24317 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30 30 0 0 0-13.059 40.367 30 30 0 0 0 40.366 13.059l38.57-19.713h75.555l34.355 17.559 15.307 15.308 17.56 34.356v120.55l-17.715 34.661-15.267 15.96-33.959 16.602h-76.117l-38.766-18.951a30 30 0 0 0-40.127 13.775 30 30 0 0 0 13.775 40.127l45 22a30.003 30.003 0 0 0 13.176 3.049h90a30.003 30.003 0 0 0 13.176-3.049l45-22a30.003 30.003 0 0 0 8.504-6.215l22-23a30.003 30.003 0 0 0 5.033-7.082l23-45a30.003 30.003 0 0 0 3.287-13.654v-135a30.003 30.003 0 0 0-3.287-13.654l-23-45a30.003 30.003 0 0 0-5.5-7.559l-22-22a30.003 30.003 0 0 0-7.56-5.5l-45-23a30.003 30.003 0 0 0-13.653-3.287z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24699 12091v-315"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24699 11746a30 30 0 0 0-30 30v315a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-315a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24699 11866 23-45 22-22 45-23h45"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m24789 11746a30.003 30.003 0 0 0-13.654 3.287l-45 23a30.003 30.003 0 0 0-7.559 5.5l-22 22a30.003 30.003 0 0 0-5.5 7.559l-23 45a30 30 0 0 0 13.059 40.367 30 30 0 0 0 40.367-13.059l20.846-40.787 15.308-15.308 34.356-17.559h37.777a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m16390 2874 394-131-394-132"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16746 2255 19 19 19 56v38l-19 56-37 37-38 19-75 19h-56l-75-19-38-19-37-37-19-56v-38l19-56 19-19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16746 1861 19 19 19 56v38l-19 56-37 38-38 18-75 19h-56l-75-19-38-18-37-38-19-56v-38l19-56 19-19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m14302 2621 394-131-394-132"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m14696 2227h-394"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m14302 2197a30 30 0 0 0-30 30 30 30 0 0 0 30 30h394a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m14696 2040h-394l394-225h-394"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="50"
            >
              <path d="m13740 11713h-310" />
              <path d="m13580 11853v-290" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="100"
            >
              <path d="m14657 11528a800 800 0 0 0 403-694.6" />
              <path d="m15060 10834a800 800 0 0 0-283.2-610.7" />
              <path d="m13460 10834a800 800 0 0 0 423.6 705.9" />
              <path d="m13748 10219a800 800 0 0 0-287.9 614.5" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            >
              <path d="m14629 11308a600 600 0 0 0 231.6-473.7" />
              <path d="m14860 10834a600 600 0 0 0-231.6-473.6" />
              <path d="m13660 10834a600 600 0 0 0 240 480" />
              <path d="m13912 10346a600 600 0 0 0-251.3 488.2" />
            </g>
            <path
              d="m7896.4 7868v-3149"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g shape-rendering="auto">
              <path
                d="m6321.4 8656h394"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6321.4 8616a40 40 0 0 0-40 40 40 40 0 0 0 40 40h394a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6321.4 3931h394"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6321.4 3891a40 40 0 0 0-40 40 40 40 0 0 0 40 40h394a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6321.4 3931v4725"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m6321.4 3891a40 40 0 0 0-40 40v4725a40 40 0 0 0 40 40 40 40 0 0 0 40-40v-4725a40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m10805 8431v-500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12555 8181h100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10555 8181h-100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12555 8181v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12555 7881v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10555 7881h2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10555 8181v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10555 8481v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12555 8481h-2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10766 4746v-500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12516 4496h100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10516 4496h-100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12516 4496v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12516 4196v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10516 4196h2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10516 4496v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10516 4796v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12516 4796h-2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            >
              <path d="m14610 3633h-50" stroke="#000" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="100"
            >
              <path d="m14610 3633v300" />
              <path d="m14610 3333v300" />
              <path d="m14810 3633v300" />
              <path d="m14810 3633v-300" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              shape-rendering="auto"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            >
              <path
                d="m14860 3633h-50"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m14810 3603a30 30 0 0 0-30 30 30 30 0 0 0 30 30h50a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13760 4033.9c0 55.228 44.772 100 100 100"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13760 4003.9a30 30 0 0 0-30 30c0 71.442 58.558 130 130 130a30 30 0 0 0 30-30 30 30 0 0 0-30-30c-39.015 0-70-30.985-70-70a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15560 4133.9c55.228 0 100-44.772 100-100"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15660 4003.9a30 30 0 0 0-30 30c0 39.015-30.985 70-70 70a30 30 0 0 0-30 30 30 30 0 0 0 30 30c71.441 0 130-58.558 130-130a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13860 3133.9c-55.228 0-100 44.772-100 100"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13860 3103.9c-71.442 0-130 58.558-130 130a30 30 0 0 0 30 30 30 30 0 0 0 30-30c0-39.015 30.985-70 70-70a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15660 3233.9c0-55.228-44.772-100-100-100"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15560 3103.9a30 30 0 0 0-30 30 30 30 0 0 0 30 30c39.015 0 70 30.985 70 70a30 30 0 0 0 30 30 30 30 0 0 0 30-30c0-71.442-58.559-130-130-130z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13760 3233v800"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13760 3203a30 30 0 0 0-30 30v800a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-800a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15660 3233v800"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15660 3203a30 30 0 0 0-30 30v800a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-800a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m15560 4133h-1700"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13860 4103a30 30 0 0 0-30 30 30 30 0 0 0 30 30h1700a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13860 3133h1700"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m13860 3103a30 30 0 0 0-30 30 30 30 0 0 0 30 30h1700a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            >
              <path d="m12347 6522h-2481" />
              <path d="m12347 5578v944" />
              <path d="m9866 5578h2481" />
              <path d="m9866 6522v-944" />
              <path d="m12371 7690h-2480" />
              <path d="m12371 6745v945" />
              <path d="m9891 6745h2480" />
              <path d="m9891 7690v-945" />
              <path d="m9891 9061h2480" />
              <path d="m9891 10006v-945" />
              <path d="m12371 10006h-2480" />
              <path d="m12371 9061v945" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="50"
            >
              <path d="m15740 11713h-310" />
              <path d="m15580 11853v-290" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="100"
            >
              <path d="m16657 11528a800 800 0 0 0 403-694.6" />
              <path d="m17060 10834a800 800 0 0 0-283.2-610.7" />
              <path d="m15460 10834a800 800 0 0 0 423.6 705.9" />
              <path d="m15748 10219a800 800 0 0 0-287.9 614.5" />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            >
              <path d="m16629 11308a600 600 0 0 0 231.6-473.7" />
              <path d="m16860 10834a600 600 0 0 0-231.6-473.6" />
              <path d="m15660 10834a600 600 0 0 0 240 480" />
              <path d="m15912 10346a600 600 0 0 0-251.3 488.2" />
            </g>
            <path
              d="m15508 7771v-2480"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m16453 7771h-945"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m16453 5291v2480"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15508 5291h945"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12333 3127v500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10583 3377h-100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12583 3377h100"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10583 3377v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10583 3677v-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12583 3677h-2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12583 3377v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m12583 3077v300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m10583 3077h2e3"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m14262 7771v-2480"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15207 7771h-945"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15207 5291v2480"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m14262 5291h945"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g
              transform="translate(455.37 -185.99)"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            >
              <path d="m24448 2671v500" />
              <path d="m24198 3421 250-250" />
              <path d="m23448 3171 250 250" />
              <path d="m24198 2421 250 250" />
              <path d="m23698 2421h500" />
              <path d="m23448 2671 250-250" />
              <path d="m23448 3171v-500" />
              <path d="m24448 9671v500" />
              <path d="m24198 10421 250-250" />
              <path d="m23448 10171 250 250" />
              <path d="m23698 10421h500" />
              <path d="m24448 9171-250 250" />
              <path d="m24448 8671v500" />
              <path d="m24198 8421 250 250" />
              <path d="m23448 8671 250-250" />
              <path d="m23448 9171v-500" />
              <path d="m23698 9421-250-250" />
              <path d="m24198 9421 250 250" />
              <path d="m23448 9671 250-250" />
              <path d="m23448 10171v-500" />
              <path d="m24448 6671v500" />
              <path d="m24198 7421 250-250" />
              <path d="m23448 7171 250 250" />
              <path d="m24448 8171-250 250" />
              <path d="m24448 7671v500" />
              <path d="m24198 7421 250 250" />
              <path d="m23448 7671 250-250" />
              <path d="m23448 8171v-500" />
              <path d="m23698 8421-250-250" />
              <path d="m24448 6171-250 250" />
              <path d="m24448 5671v500" />
              <path d="m24198 5421 250 250" />
              <path d="m23448 5671 250-250" />
              <path d="m23448 6171v-500" />
              <path d="m23698 6421-250-250" />
              <path d="m24198 6421 250 250" />
              <path d="m23448 6671 250-250" />
              <path d="m23448 7171v-500" />
              <path d="m24448 3671v500" />
              <path d="m24198 4421 250-250" />
              <path d="m23448 4171 250 250" />
              <path d="m24448 5171-250 250" />
              <path d="m24448 4671v500" />
              <path d="m24198 4421 250 250" />
              <path d="m23448 4671 250-250" />
              <path d="m23448 5171v-500" />
              <path d="m23698 5421-250-250" />
              <path d="m24198 3421 250 250" />
              <path d="m23448 3671 250-250" />
              <path d="m23448 4171v-500" />
            </g>
            <g transform="translate(455.37 -185.99)" fill="#fff" stroke-width="0">
              <path
                d="m7919 2359 99-52 248 202 169-170-201-247 85-206 318-33v-240l-318-32-34-107-51-99 201-248-169-169-248 202-99-52-107-34-32-317h-240l-32 317-107 34-100 52-247-202-170 169 202 248-85 206-318 32v240l318 33 85 206-202 247 170 170 247-202 49 28 51 24 141-341-77-47-61-67-39-81-13-90 9-73 26-69 42-60 54-50 65-34 72-19h73l72 16 66 34 56 48 43 59 27 69 10 73-7 73-24 69-41 62-117 87z"
                fill="#fff"
                fill-rule="evenodd"
                stroke-width="0"
              />
            </g>
            <path
              d="m14034 1409v-500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15784 659.01 250 250"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15284 659.01h500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g transform="matrix(1 0 0 1 -1062.6 -15.276)" shape-rendering="auto">
              <path
                d="m16339 617.72h559.64"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 575.4a42.318 42.318 0 0 0-42.318 42.318 42.318 42.318 0 0 0 42.318 42.318h559.64a42.318 42.318 0 0 0 42.318-42.318 42.318 42.318 0 0 0-42.318-42.318z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m15034 909.01 250-250"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g transform="matrix(1 0 0 1.0499 -1064.4 -73.8)" shape-rendering="auto">
              <path
                d="m17153 1408.1v-540.34"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17153 826.14a41.582 41.582 0 0 0-41.582 41.582v540.34a41.582 41.582 0 0 0 41.582 41.582 41.582 41.582 0 0 0 41.584-41.582v-540.34a41.582 41.582 0 0 0-41.584-41.582z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(-1 0 0 1 31110 -5.8256)" shape-rendering="auto">
              <path
                d="m16339 617.72h559.64"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 575.4a42.318 42.318 0 0 0-42.318 42.318 42.318 42.318 0 0 0 42.318 42.318h559.64a42.318 42.318 0 0 0 42.318-42.318 42.318 42.318 0 0 0-42.318-42.318z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m14784 659.01 250 250"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g transform="matrix(-1 0 0 1.0499 31111 -64.349)" shape-rendering="auto">
              <path
                d="m17153 1408.1v-540.34"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17153 826.14a41.582 41.582 0 0 0-41.582 41.582v540.34a41.582 41.582 0 0 0 41.582 41.582 41.582 41.582 0 0 0 41.584-41.582v-540.34a41.582 41.582 0 0 0-41.584-41.582z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m14284 659.01h500"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g transform="matrix(-1 0 0 1 31125 -7.4373)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m14034 909.01 250-250"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <g transform="translate(96.675 -27.621)" shape-rendering="auto">
              <path
                d="m20265 3247h1700"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20265 3207a40 40 0 0 0-40 40 40 40 0 0 0 40 40h1700a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(116.26)" shape-rendering="auto">
              <path
                d="m21965 847.01h-1700"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m20265 807.01a40 40 0 0 0-40 40 40 40 0 0 0 40 40h1700a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(123.7)" shape-rendering="auto">
              <path
                d="m19915 2440v-793"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m19915 1607a40 40 0 0 0-40 40v793a40 40 0 0 0 40 40 40 40 0 0 0 40-40v-793a40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g shape-rendering="auto">
              <path
                d="m22348 2452v-805"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m22348 1607a40 40 0 0 0-40 40v805a40 40 0 0 0 40 40 40 40 0 0 0 40-40v-805a40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m21816 2047.9a700 700 0 0 1-700 700 700 700 0 0 1-700-700 700 700 0 0 1 700-700 700 700 0 0 1 700 700z"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
            />
            <path
              d="m15030 1374.9a40 40 0 0 1 28.322 11.715 40 40 0 0 1 0 56.568l-250 250a40 40 0 0 1-56.568 0 40 40 0 0 1 0-56.568l250-250a40 40 0 0 1 28.246-11.715z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#fff"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <g transform="translate(-1078 -16.888)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(-1.154 0 0 1 31251 7.322)" shape-rendering="auto">
              <path
                d="m14784 1659h-500"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m14284 1619a40 40 0 0 0-40 40 40 40 0 0 0 40 40h500a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            >
              <g shape-rendering="auto" stroke="none">
                <path
                  d="m12669 2612.3c48.187-46.902 91.6-98.472 129.6-153.95"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m12798 2434.7a23.622 23.622 0 0 0-19.371 10.272c-37.116 54.189-79.52 104.56-126.59 150.37a23.622 23.622 0 0 0-0.451 33.404 23.622 23.622 0 0 0 33.405 0.4511c49.307-47.992 93.728-100.76 132.61-157.53a23.622 23.622 0 0 0-6.139-32.838 23.622 23.622 0 0 0-13.467-4.1328z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m12803 1302.7c-191.08-277-506.09-442.39-842.6-442.38"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11960 836.69a23.622 23.622 0 0 0-23.623 23.621 23.622 23.622 0 0 0 23.623 23.623c328.77-2e-3 636.47 161.55 823.15 432.18a23.622 23.622 0 0 0 32.857 6.0312 23.622 23.622 0 0 0 6.032-32.857c-195.47-283.37-517.8-452.6-862.04-452.59z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11960 860.32c-336.51-2e-3 -651.52 165.39-842.6 442.38"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11960 836.69c-344.25-2e-3 -666.57 169.23-862.04 452.59a23.622 23.622 0 0 0 6.031 32.857 23.622 23.622 0 0 0 32.858-6.0312c186.68-270.63 494.39-432.18 823.16-432.18a23.622 23.622 0 0 0 23.621-23.623 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11126 2463.8c37.118 53.408 79.278 103.13 125.9 148.48"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11126 2440.2a23.622 23.622 0 0 0-13.354 4.2246 23.622 23.622 0 0 0-5.916 32.879c37.982 54.65 81.121 105.53 128.83 151.93a23.622 23.622 0 0 0 33.404-0.4629 23.622 23.622 0 0 0-0.463-33.402c-45.538-44.296-86.717-92.863-122.97-145.03a23.622 23.622 0 0 0-19.525-10.141z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11251 2612h1417"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m11251 2588.4a23.622 23.622 0 0 0-23.621 23.621 23.622 23.622 0 0 0 23.621 23.621h1417a23.622 23.622 0 0 0 23.621-23.621 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22607 8500v-4133"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22607 4343.4a23.622 23.622 0 0 0-23.621 23.621v4133a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.621-23.621v-4133a23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18513 8500h4094"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18513 8476.4a23.622 23.622 0 0 0-23.621 23.621 23.622 23.622 0 0 0 23.621 23.621h4094a23.622 23.622 0 0 0 23.621-23.621 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18513 4367v4133"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18513 4343.4a23.622 23.622 0 0 0-23.621 23.621v4133a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.621-23.621v-4133a23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22607 4367h-4094"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18513 4343.4a23.622 23.622 0 0 0-23.621 23.621 23.622 23.622 0 0 0 23.621 23.621h4094a23.622 23.622 0 0 0 23.621-23.621 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22583 7319v-492"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22583 6803.4a23.622 23.622 0 0 0-23.621 23.621v492a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.621-23.621v-492a23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18536 7319h4047"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18536 7295.4a23.622 23.622 0 0 0-23.621 23.621 23.622 23.622 0 0 0 23.621 23.621h4047a23.622 23.622 0 0 0 23.621-23.621 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18536 5548v1771"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18536 5524.4a23.622 23.622 0 0 0-23.621 23.621v1771a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.621-23.621v-1771a23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22583 5548h-4047"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m18536 5524.4a23.622 23.622 0 0 0-23.621 23.621 23.622 23.622 0 0 0 23.621 23.621h4047a23.622 23.622 0 0 0 23.621-23.621 23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22583 6040v-492"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22583 5524.4a23.622 23.622 0 0 0-23.621 23.621v492a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.621-23.621v-492a23.622 23.622 0 0 0-23.621-23.621z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22584 6040.2c-217.09 0.4893-392.81 176.61-392.81 393.7 0 104.26 41.357 204.27 115 278.07 73.642 73.808 173.55 115.39 277.82 115.63"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m22584 6016.6c-229.84 0.518-416.38 187.49-416.38 417.32 0 110.51 43.845 216.53 121.9 294.76 78.053 78.23 183.98 122.31 294.48 122.56a23.622 23.622 0 0 0 23.674-23.568 23.622 23.622 0 0 0-23.568-23.676c-98.016-0.2209-191.92-39.302-261.14-108.69s-108.1-163.38-108.1-261.39c0-204.34 164.9-369.62 369.24-370.08a23.622 23.622 0 0 0 23.568-23.674 23.622 23.622 0 0 0-23.674-23.57z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#fff"
                  fill-opacity="1"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
            </g>
            <g transform="translate(455.37 -185.99)" fill="#fff" fill-rule="evenodd">
              <path d="m17773 9685 36 25 16 37-9 44-11 20-26 22-39 9h-66v-167h45z" />
              <path
                d="m18357 9745 14 25 18 46 2 4 16 49 12 38 5 20v1l-13 6-32 4-25 1-39-1-25-2-5-2 4-14 25-75 15-44 13-37 7-19z"
              />
              <path
                d="m23018 9694 35 21 17 17 21 23 12 23 6 30 2 45v88l-4 36-8 24-16 20-17 16-53 32-58 9-56-14-15-9-37-40-24-59-10-68v-5l9-77 29-59 45-40 60-17 17-1z"
              />
              <path
                d="m23218 9492 42 34 37 42 4 7 12 20 8 20 6 25 3 34 2 49 1 67v185l-1 67-2 49-3 35-6 26-8 20-11 19-1 1-33 42-43 36-7 5-51 32-2979 2-342 1h-631l-289-1h-519l-229-1-208-1h-186l-163-1-140-1-115-1-90-2-64-1-38-1-11-1-52-28-50-45-15-22h4961l146-8 4-122 4-121h249v250h153v-313h94l8 85 27 78 46 66 24 23 79 46 87 22 91-2 88-28 10-4 65-48 51-67 32-80 14-87-6-88-28-85-3-6-50-70-66-52-78-31-85-9-86 14-77 35-62 54-44 69-28 80-9 85h-94v-326h-153v250h-249l-4-122-4-121-146-8v641h-4961l-24-34-16-39-6-40-4-63-1-82v-96l3-85 2-62 4-45 5-32 8-24 12-21 3-6 9-11h8v639h153v-250h208v-125h-208v-139h222v-125h97v639h153v-238l38 4 21 7 21 17 25 32 33 52 7 12 70 114 318-7 21-67 20-66 112 4 111 4 38 132h84l47-2 24-4 6-10-7-21-15-41-21-58-26-73-29-83-17-47-107-300h295v639h139l1-438 142 219 142 218h80l80 1v-29h70l6 18 2 2 16 3 40 2 58 2 72 1 78 1h255v-125h-153l-61-1-50-1-32-3-10-2 8-13 22-32 33-47 41-58 48-66 1-1 60-85 44-65 30-49 15-33 4-18v-40h83v639h153v-639h125v639h153v-424l139 212 140 212h151v-639h139v639h153v-639h125v639h153v-424l276 424h154v-639h-138l-4 209-4 210-136-210-137-209h-720v424l-279-424h-1026v124l293 8-160 214-63 85-46 66-30 51-17 36-4 26h-70v-610h-153l-1 205v205l-134-205-135-205h-543l-51 2-29 5-14 12-3 5-7 21-16 41-21 59-26 72-29 79-1 3-29 80-27 73-22 61-17 45-8 23-7 14-9 2-14-13-22-31-28-43-35-50-32-45-26-31-26-26v-10l18-7 28-16 31-29 5-6 24-37 10-43 1-31-6-60-20-47-36-33-55-22-76-13-101-4h-644l25-31 42-37 7-4 52-32h6e3z"
              />
              <path
                d="m17212 7168 23 4 25 7 50 18 21 11 16 9 7 5 4 2 5 2 8 6 11 9 12 11 13 12 12 13 12 12 10 11 7 8 1 3 6 8 5 7 6 8 7 12 8 16 8 17 8 18 6 16 4 11 6 22 5 21 2 20 2 22v26l-1 16-1 26-2 22-3 18-3 12-4 8-3-1-7-5-9-8-21-21-16-15-16-14-14-12-12-11-11-10-9-7-5-5v-1l-6-4-8-7-6-4-10-8-13-10-11-9-15-11-19-13-22-15-23-15-24-15-22-14-20-11-15-9-10-5-7-4-42-21-16-7-15-8-14-6-12-6-3-1-21-9-27-11-30-11-25-9-17-5-14-5-11-5-7-2-3-1 1-3 6-6 9-8 11-8 14-10 28-18 11-6 44-20 46-14 48-8 49-1z"
              />
              <path
                d="m16841 7345 7 2 8 4 9 3 10 3 13 3 33 11 17 6 15 5 10 4 7 3 10 4 12 5h1l9 4 13 5 16 7 17 8 16 8 15 7 13 6 12 6 8 5 12 7 13 7 11 7 7 3 10 5 9 6 1 1 6 3 9 6 12 9 15 10 12 7 38 27 33 25 31 24 20 17 11 10 10 9 8 7 3 2 7 6 55 55 9 11 8 7 4 5v1l-2 4-5 8-8 11-9 11-9 12-10 10-3 4-14 14-17 14-16 14-16 11-7 4-27 16-31 13-30 11-29 8-7 1-13 2-17 2-19 1-18 1-17 1h-13l-16-2-11-1-13-2h-3l-15-3-18-4-16-5-2-1-13-5-30-12-13-6-10-6-4-2-5-4-7-5-3-2-10-6-11-7-1-1-7-6-10-8-34-34-9-10-7-7-1-2-13-19-9-15-8-12-7-12-8-16-3-8-2-4v-1l-1-4-3-7-2-4-7-21-4-16-3-14-7-47-1-47 5-47 12-47 17-45 7-15 6-10 4-5 3-2z"
              />
              <path
                d="m18132 8152h-1941v-619h174l8 7 6 5 10 8 11 8 5 4 12 8 11 9 12 8 7 5 22 16 4 3 13 9 15 12 16 11 6 5 12 8 9 7 7 4 6 3 3 3 7 6 10 7 12 9 13 9 6 5 6 4 10 7 12 9 14 10 4 3 18 13 38 28 16 11 11 9 11 8 12 8 13 10 15 11 18 13 21 15 26 19 11 9 11 7 8 6 1 1 7 5 10 7 11 8 2 1 10 7 9 7 6 4v1l5 4 9 6 7 5 11 7 15 12 7 4 10 8 13 9 13 10 3 2 16 12 57 42 5 3 14 10 13 9 10 7 7 4 2 1 5-1 7-5 2-1 7-5 10-7 24-18 14-10 13-9 11-9 7-5 5-4 6-4 8-6 10-7 13-9 36-27 21-14 10-8 12-9 5-3 20-15 14-10 12-8 41-30 37-27 32-23 28-20 22-17 19-13 13-10 10-7 5-4 8-6 11-8 12-9 5-3 13-10 15-11 17-12 11-8 14-11 15-10 14-10 9-6 11-8 10-7 8-6 14-11 17-12 20-15 16-11 12-9 13-9 14-10 12-9 15-12 8-7-8-6-6-5-11-7-13-10-14-11-15-11-15-10-12-9-6-4-10-7-7-5-10-8-7-5-8-5-10-8-12-8-12-9-9-7-5-3-4-4-9-6-11-8-6-5-12-9-11-7-9-6-3-3-6-4-10-7-11-9-7-5-12-8-10-7-8-6-3-2-5-4-9-6-11-8-2-2-12-9-10-7-8-6-1-1-18-12-13-10-9-6-6-5-4-2v-1l-6-4-8-6-7-5-5-3-5-4-7-6-11-7-10-8-10-7-1-1-11-7-14-11-34-24-10-8-11-8-15-11-16-11-14-11-15-10-16-12-13-10-11-7-28-21-24-17-19-14-14-11-11-7-3-2-13-9-14 9-8 5-11 8-13 10-10 8-13 9-11 8-9 6-4 3-5 3-8 7-12 8-14 11-16 11-1 1-30 22-13 9-9 7-5 4-7 4-10 8-11 8-6 4-11 8-15 11-16 12-18 12-10 8-16 12-17 12-16 11-13 10-6 4-22 16-9 6-2 2-7 5-10 7-12 9-5 4-12 9-11 8-12 8-7 6-11 8-12 8-5 4-12 9-10 7-10 8-12 8-14 10-13 9-13 10-16 11-13 10-11 8-10 8-8 5-1 1-7 5-5 3-1 1-3 2-8 6-10 8-13 9-22 16-19 14-17 12-13 9-8 7-2 1-6 5h-174v-618h1941z"
              />
            </g>
            <g fill="#fff" shape-rendering="auto">
              <path
                d="m17971 2409.7h-512"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17459 2386a23.622 23.622 0 0 0-23.621 23.623 23.622 23.622 0 0 0 23.621 23.621h512a23.622 23.622 0 0 0 23.623-23.621 23.622 23.622 0 0 0-23.623-23.623z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17715 2172.7v473"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17715 2149a23.622 23.622 0 0 0-23.621 23.623v473a23.622 23.622 0 0 0 23.621 23.621 23.622 23.622 0 0 0 23.623-23.621v-473a23.622 23.622 0 0 0-23.623-23.623z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m17854 4748h-279"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17935 4732h-440"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17993 4716h-557"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18041 4701h-653"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18083 4685h-736"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18120 4669h-810"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18153 4653h-876"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18183 4638h-936"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18211 4622h-993"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4606h-137"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18237 4606h-136"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4590h-161"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18262 4590h-161"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4575h-184"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18285 4575h-184"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4559h-206"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18307 4559h-206"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4543h-227"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18327 4543h-226"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4527h-246"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18347 4527h-246"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4512h-265"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18366 4512h-265"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4496h-283"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18384 4496h-283"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4480h-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18401 4480h-300"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4464h-316"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18417 4464h-316"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4449h-332"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18433 4449h-332"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4433h-347"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18448 4433h-347"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4417h-361"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18462 4417h-361"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4401h-375"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18475 4401h-374"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4386h-388"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18488 4386h-387"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4370h-400"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18501 4370h-400"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4354h-413"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18513 4354h-412"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4338h-424"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18525 4338h-424"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4323h-435"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18536 4323h-435"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4307h-446"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18547 4307h-446"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4291h-457"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18557 4291h-456"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4275h-467"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18567 4275h-466"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4260h-476"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18577 4260h-476"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4244h-485"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18586 4244h-485"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4228h-494"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18594 4228h-493"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4212h-502"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18603 4212h-502"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4197h-510"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18611 4197h-510"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4181h-518"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18619 4181h-518"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4165h-526"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18626 4165h-525"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4149h-533"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18633 4149h-532"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4134h-539"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18640 4134h-539"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4118h-546"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18646 4118h-545"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4102h-552"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18653 4102h-552"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4086h-557"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18658 4086h-557"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4071h-563"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18664 4071h-563"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4055h-568"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18669 4055h-568"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4039h-573"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18674 4039h-573"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4023h-578"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18679 4023h-578"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 4007h-583"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18683 4007h-582"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3992h-587"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18687 3992h-586"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3976h-591"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18691 3976h-590"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3960h-594"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18695 3960h-594"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3944h-598"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18698 3944h-597"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3929h-601"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18701 3929h-600"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3913h-604"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18704 3913h-603"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3897h-606"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18707 3897h-606"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3881h-608"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18709 3881h-608"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3866h-611"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18711 3866h-610"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17329 3850h-612"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18713 3850h-612"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18714 3834h-1999"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18716 3818h-2002"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18717 3803h-2005"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18718 3787h-2006"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18718 3771h-2007"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18719 3755h-2008"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18719 3740h-2008"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17251 4647.8a1019.7 1019.7 0 0 0 929-0.06"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m17251 2832.4a1019.7 1019.7 0 0 0 0.1 1815.5"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m18180 4647.8a1019.7 1019.7 0 0 0 0.1-1815.5"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="47.244"
            />
            <path
              d="m26001 2666 32 20 25 28 6 11 7 25-4 23-7 13-23 29-32 23-34 9h-3l-9-2-5-8-3-18-1-32v-79l2-28 3-15 6-6 9-2z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m25784 2487h91l85 1 79 2 69 1 56 2 43 2 26 3 7 1 18 10 13 14 10 19 7 28 4 40 2 53 1 70v19l-1 75-1 57-4 43-6 30-9 21-13 15-16 10-5 2-16 3-34 3-49 2-63 2-73 1-82 1-88 1h-280l-90-1-86-1-79-2-69-1-57-2-43-3-27-3-8-2-17-10-12-13-9-19-6-27-4-37-2-51-1-67v-1h143l15 49 27 39 37 26 14 4 28 5 37 1 39-1 21-3h459l92-1 50-3 41-5 26-7 2-1 23-15 22-21 15-21 4-15c-1.06-6.1619 3.679-11.772 5-16l10-18v-28l-8-34-16-35-21-31-9-9-14-12-16-7-22-5-33-3-47-2-104-4v293h-459l14-1 24-6 5-3 14-6 5 2 3-6 3-21 1-33v-87h-150v28l2 19 9 7 23-2h1l23-1 10 6 2 20v4l-1 21-8 8-20-2-7-1-41-14-30-25-16-32v-36l6-17 16-25 16-17 27-12 36-3 35 7 16 9 23 15 12-1 5-18 1-17-2-23-8-16-17-9-19-3h106v290h80v-97l1-44 1-26 3-11 4 2 4 7 11 21 18 32 22 36 6 9 22 35 16 21 13 11 16 4h63v-290h-70v129l-1 24-3 9-4-3-8-13v-1l-14-24-20-33-18-30-37-57-105-1h-106l-12-2-41-2-63 4-51 18-36 33-22 45-5 21-1 54h-143v-98l2-58 3-43 6-30 9-22 12-14 17-11 6-3 16-2 33-3 50-2 62-2 73-1 82-1 88-1h186z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m15433 1911 21-32 27-24 12-7 25-7 22 5 14 6 29 23 22 33 10 33v3l-2 9-8 5-19 3-32 1h-78l-28-1-15-4-7-6-1-9z"
              fill="#fff"
              fill-rule="evenodd"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3.937"
            />
            <g transform="matrix(0 -.92754 -.9219 0 14754 15762)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m15017 1365.5a40 40 0 0 0-28.322 11.715 40 40 0 0 0 0 56.568l250 250a40 40 0 0 0 56.568 0 40 40 0 0 0 0-56.568l-250-250a40 40 0 0 0-28.246-11.715z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#fff"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m15254 2128 1-90 1-86 1-78 1-69 2-57 3-43 2-26 2-7 10-18 13-13 19-10 29-7 39-4 53-2 71-1h19l74 1 57 2 43 3 30 6 22 9 14 13 11 17 2 4 3 17 2 33 2 50 2 62 2 73 1 82v88l1 92v94l-1 94-1 91-1 85-1 79-2 69-2 57-2 44-3 27-2 7-11 17-13 12-19 9-26 7-38 3-51 2-67 1h-1v-143l49-14 39-27 26-38 5-14 4-28 2-36-2-39-2-22v-459l-2-92-2-50-5-40-7-27-1-2-16-23-21-21-21-15-15-5-2 1-11-2-3-3-17-11h-28l-35 9-35 15-31 22-9 9-11 14-8 16-5 22-2 33-2 46-4 104h293v459l-2-13-5-24-3-6-6-14 2-5-6-3-22-2-33-2h-86v150h28l18-1 7-10-1-22v-2l-2-23 7-10 19-2h4l21 2 8 7-1 20-1 8-15 40-25 30-32 16h-35l-17-6-25-16-18-15-12-28-2-36 7-34 9-16 15-24-1-12-19-5-16-1-24 2-15 8-9 18-3 18v-106h290v-80h-98l-44-1-26-1-11-2 2-4 8-5 21-10 31-19 36-22 9-5 35-23 21-15 11-14 4-16 1-20v-43h-290v70h87l42 1 24 1 9 2-4 5-13 7v0l-24 14-34 20-30 19-57 36v211l-2 13-3 40 4 64 19 50 32 37 46 22 20 4 54 1v143h-98l-57-2-43-3-31-6-21-9-15-12-11-17-2-5-3-16-2-34-2-49-2-63-2-73-1-82-1-88v-186z"
              fill="#fff"
              fill-rule="evenodd"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3.937"
            />
            <path
              d="m13052 10120 19 15 25 22 27 27 26 28 24 26 18 23 10 16 1 5-7 9-17 19-103 103-47 46-50 49-1 2-62 59-51 49-41 38-31 29-24 19-15 11-9 4h-2l-11 1-19 13-27 23-15 15-31 29-27 21-28 16-36 16-16 7-35 13-29 12-20 8-6 2-11-3-4-5 1-12 6-24 3-8h37l2 4 4-1 10-4 21-9 29-11 5-3 38-17 32-21 33-29 9-10 53-53-41-42-41-41-52 51-31 34-23 31-18 36-6 14-14 36-8 23-2 12h-37l8-24 12-31 16-41 15-30 16-25 21-24 24-25 27-28 16-20 7-12-2-8v-1l-3-3-1-4 2-6 1-1h36l106 106 14 12 4 3 7-6 17-16 26-25 33-32 39-39 43-42 186-186-63-63-63-62-175 175-174 175h-36l4-7 10-13 16-17 22-24 29-30 38-39 48-48 57-59 73-73 42-41 21-20h47l62 62 62 63 19-18 13-14 6-9v-1l-6-7-16-16-23-22-18-17-63-57-36 36h-47l16-15 30-29 23-20 13-10 2-1z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m12486 10104 16 17 22 27 28 35 31 39 10 13 38 50 28 38 19 29 11 19 2 12-4 5-5 1-8-6-15-18-23-26-27-33-31-39-1-1-30-39-28-33-22-28-15-18-7-7-8 5-19 13-28 21-34 26-40 31-88 68-44 35-41 33-36 29-30 24-21 18-11 11 4 8 14 19 21 26 27 32 16 19 32 37 24 26 17 17 12 9 10 4h10l7-1h34l28 13 20 22 11 27 1 29-9 28-22 23-13 8-32 11-26-1-25-16-6-5-21-29-4-18h29l10 19 18 14 22 5 23-7 9-7 13-21 1-24-10-23-18-15-18-3-20 6-16 10-14 23v23h-29l-3-18 7-32v-9l-5-13-11-18-20-25-30-35-11-13-29-33-26-28-21-21-13-12-3-1-9 5-19 13-26 19-31 22-31 24-29 24-24 20-17 14-5 7 4 8 14 19 22 28 28 36 48 60 47 57 37 43 29 30 19 17 6 3 16 1 16-9 17-16 20-19 19-8 25-2 30 3 20 10 5 6 20 30 5 33-9 30-19 25-29 16-31 5-29-7-25-18-16-24-1-4-8-15-15-7-14-1-10-2-10-4-7-4h93l4 21 14 19 20 11 22 2 22-10 4-3 9-18 4-20-7-24-17-16-23-6-24 5-18 16-10 23h-93l-5-3-14-13-19-21-24-28-33-39-30-36-35-43-31-38-26-32-20-24-12-13-2-3-9 2-17 10-22 16-22 17-20 17-13 13-2 5 5 8 15 19 24 30 30 38 37 46 42 52 45 57 32 40 229 283 164-135v-29h35l11 22 6 5 25 11 23-6 20-19 11-18 1-13-8-15-18-18-24-8-24 4-11 8-12 22v25h-35v-10l2-27 7-18 15-16 1-1 33-18 33-3 31 14 12 10 18 29 7 34-7 32-6 12-23 19-30 11h-31l-7-3-19-6-11-2-8 5-19 13-24 18-58 46-27 21-21 18-5 4 2 9 11 17 16 23 20 25 20 24 18 20 13 12 5 1 8-5 20-15 29-21 37-28 43-33 48-37 1-1 54-41 41-32 32-25 22-20 15-14 9-11 5-9 1-9v-3l-3-21-13-10-1-1-19-13-13-25-7-30h31l7 23 7 10 21 13h25l22-11 5-6 12-26-4-24-11-15-23-13-23-1-20 10-13 17-5 23h-31l1-23 11-28 22-18 34-15 32 2 30 18 3 3 18 20 8 20 1 17-7 36-21 28-23 13-14 13-8 26v1l-3 10-4 10-7 10-12 13-18 17-26 22-36 28-46 36-37 29-48 37-43 34-37 30-29 24-19 16-7 8 5 12 14 19 18 22 19 21 18 16 12 9h2l9-6 20-14 30-22 40-29 46-35 53-39 57-42 59-44 62-46 61-46 60-45 57-43 52-39 47-36 39-30 31-23 21-17 9-7-5-8-14-18-21-29-28-36-33-42-36-46-44-57-35-45-25-34-17-26-9-18-3-12 2-7 6-2 7 5 15 17 23 27 27 33 31 39 68 86 33 43 31 41 26 35 21 29 13 20 5 9-7 6-18 16-29 23-38 29-46 36-53 40-57 43-60 46-63 48-64 47-62 48-61 45-57 42-52 39-45 33-38 27-29 21-18 12-6 3-6-6-16-19-24-29-32-39-40-47-45-56-51-62-56-68-58-72-40-49-61-75-57-72-54-66-49-61-42-54-37-46-29-37-20-27-12-16-2-4 7-6 18-16 28-24 38-30 45-37 51-42 57-45 60-48 62-49 62-50 63-49 60-48 57-44 52-41 46-36 39-30 30-22 19-15 9-5z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path d="m10915 11956h-183v-59h183z" fill="#fff" fill-rule="evenodd" />
            <path
              d="m14141 11762 39 7 28 14 22 21 16 27 15 43 5 50-4 50-14 44-2 4-18 28-21 19-28 12-38 6-51 2h-44l-27-2-19-4-16-7-11-7-28-25-19-32-9-42-1-47h57l4 48 10 33 18 21 20 8 37 4h40l36-4 22-6 22-12 14-17 8-25 2-36 1-14-1-33-4-22-7-16-9-10-10-11-11-7-15-4-24-1-35-1-36 1-25 2-16 4-12 7-7 6-11 12-7 14-3 19-1 30v10h-57v-10l3-38 4-27 8-19 7-13 21-24 24-17 30-10 41-4 36-1z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m13590 11897h208v-133h59v325h-59v-133h-208v133h-58v-325h58z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m13182 11773 26 23 36 35 39 40 36 36 32 31 25 26 18 17 9 8 1-8 1-21 1-32v-40l1-11v-113h50l-2 161-1 63-2 47-4 32-8 17-12 3-20-11-26-25-37-37-35-37-34-36-30-31-25-24-17-16-8-6-2 8-2 21-1 32-1 40v124h-50v-222l1-48 3-34 7-18 12-4z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path d="m13065 12089h-58v-325h58z" fill="#fff" fill-rule="evenodd" />
            <path
              d="m12648 11762 10 6 16 13 21 20 29 30 39 40 3 3 115 119v-114l1-115h58l-2 161-1 62-2 47-4 32-7 18-13 4-19-10-27-23-35-35-44-45-112-115v115l-1 114h-58v-254l1-28 2-19 3-12 4-7 6-4 2-2 7-2z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path d="m12548 12089h-58v-325h58z" fill="#fff" fill-rule="evenodd" />
            <path
              d="m12334 11764 40 1 27 2 18 3 10 4 2 2 4 6 2 7-3 9-9 14-15 19-24 27-32 37-20 22-31 35-27 30-21 24-12 15-3 5 8 2 21 1 31 1 36 1h96v58h-195l-43-2-28-3-15-4-1-1-9-14-1-6 5-10 15-19 23-27 28-33 29-33 99-110-199-5v-58h140z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m11799 11761 17 16 25 25 32 30 35 36 6 7 117 118v-114l1-115h58v198l-1 44-1 36-2 24-1 10-7 11-11 3-16-6-22-15-29-27-38-38-26-27-34-36-30-31-25-24-17-16-8-6-2 8-3 21-1 32-1 40v124h-50v-216l1-45 2-32 4-21 5-12 8-6 6-1z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m11660 11766 20 4 6 3 4 6 4 13 2 22 1 32 1 45v198h-58v-83h-208v83h-59v-101l2-59 1-13h56v31h208v-125h-67l-55 4-41 12-27 20-15 29-3 29h-56l4-32 10-35 16-27 23-22 13-9 16-10 16-7 19-4 26-2 38-2 18-1h50z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m11192 11764 35 1 25 1 17 3 11 4 8 6 7 6 12 13 6 13 2 19-1 29-1 7-2 31-4 21-8 15-16 16-23 16-24 12-30 6 36 30 50 44 10 9 25 23h-42l-20-1-16-3-17-8-20-15-28-23-4-4-39-31-28-18-18-5-15-2-6-10-1-17v-30h79l43-1 30-4 18-8 10-15 3-23 1-12v-37h-209v267h-58v-214l2-46 2-31 3-19 3-5 11-4 25-3 40-2 55-1h11z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="m10940 11822h-233v267h-59v-152l1-62 1-46 2-31 4-19 2-5 11-4 25-3 39-2 55-1h152z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            >
              <path
                d="m13883 9311h90l45 22 45 45 23 90v158l-23 90-45 45-45 22h-90l-45-22-45-45-22-90v-158l22-90 45-45 45-22"
              />
              <path d="m14288 9783v-472l270 472v-472" />
            </g>
            <path
              d="m11101 8382v-393h94l56 18 37 38 19 37 19 75v57l-19 75-19 37-37 38-56 18h-94"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11476 8026 19-19 37-18h94l37 18 19 19 19 38v37l-19 56-225 225h244"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11181 4682v-393h94l56 18 37 38 19 37 19 75v57l-19 75-19 37-37 38-56 18h-94"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11781 4682h-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11668 4682v-393l-37 56-38 37-37 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m13763 4166-19 18-56 19h-37l-57-19-37-37-19-38-19-75v-56l19-75 19-37 37-38 57-19h37l56 19 19 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m14138 4203h-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m14026 4203v-394l-38 57-37 37-38 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11536 6025-157-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11266 6025v-473h180l45 23 23 22 22 45v68l-22 45-23 22-45 23h-180"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11986 6025h-270"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11851 6025v-473l-45 68-45 45-45 22"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11536 7225-157-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11266 7225v-473h180l45 23 23 22 22 45v68l-22 45-23 22-45 23h-180"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11716 6797 23-22 45-23h112l45 23 23 22 22 45v45l-22 68-270 270h292"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11536 9625-157-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11266 9625v-473h180l45 23 23 22 22 45v68l-22 45-23 22-45 23h-180"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11694 9152h292l-157 180h67l45 23 23 22 22 45v113l-22 45-23 22-45 23h-135l-45-23-22-22"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16331 9597h-225v-472"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m16488 9350h158"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16488 9320a30 30 0 0 0-30 30 30 30 0 0 0 30 30h158a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m16713 9597h-225v-472h225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16916 9597v-472h112l68 22 45 45 22 45 23 90v68l-23 90-22 45-45 45-68 22h-112"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16265 6726-225 158"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m16265 6996h-473v-180l23-45 22-22 45-23h68l45 23 22 22 23 45v180"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m15792 6299v225l225 22-22-22-23-45v-113l23-45 22-22 45-23h113l45 23 22 22 23 45v113l-23 45-22 22"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11348 3569v-394h93l57 19 37 37 19 38 19 75v56l-19 75-19 37-37 38-57 19h-93"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m11704 3175h243l-131 150h57l37 19 19 18 18 38v94l-18 37-19 19-37 19h-113l-37-19-19-19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m15005 6646-225 158"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m15005 6916h-473v-180l23-45 22-22 45-23h68l45 23 22 22 23 45v180"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m14690 6241h315"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m14510 6354 337 112v-292"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m17516 1029v281l-19 56-37 38-56 18h-38"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m17910 1422h-225"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m17797 1422v-393l-37 56-38 37-37 19"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g shape-rendering="auto">
              <path
                d="m23687 2551-226 158"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 2521a30 30 0 0 0-16.992 5.4121l-226 158a30 30 0 0 0-7.399 41.777 30 30 0 0 0 41.776 7.3965l226-158a30 30 0 0 0 7.398-41.775 30 30 0 0 0-24.783-12.81z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 2822h-475v-181l23-45 22-23 46-22h68l45 22 22 23 23 45v181"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23303 2521a30.003 30.003 0 0 0-12.943 2.9355l-46 22a30.003 30.003 0 0 0-8.735 6.3262l-22 23a30.003 30.003 0 0 0-5.035 7.084l-23 45a30.003 30.003 0 0 0-3.287 13.654v181a30.003 30.003 0 0 0 30 30h475a30 30 0 0 0 30-30 30 30 0 0 0-30-30h-196v-151a30.003 30.003 0 0 0-3.287-13.654l-23-45a30.003 30.003 0 0 0-5.033-7.084l-22-23a30.003 30.003 0 0 0-8.502-6.2149l-45-22a30.003 30.003 0 0 0-13.178-3.0468zm6.805 60h54.256l33.959 16.602 15.267 15.961 17.713 34.658v143.78h-189v-143.78l17.715-34.658 15.176-15.865z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23438 2347v-158"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23438 2159a30 30 0 0 0-30 30v158a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-158a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 2121v226h-475v-226"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23212 2091a30 30 0 0 0-30 30v226a30.003 30.003 0 0 0 30 30h475a30.003 30.003 0 0 0 30-30v-226a30 30 0 0 0-30-30 30 30 0 0 0-30 30v196h-415v-196a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23665 1940 22-68v-113l-22-45-23-23-45-22h-45l-46 22-22 23-23 45-23 91-22 45-23 22-45 23h-45l-46-23-22-22-23-45v-114l23-67"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23235 1639a30 30 0 0 0-28.162 20.258l-23 67a30.003 30.003 0 0 0-1.627 9.7422v114a30.003 30.003 0 0 0 3.287 13.652l23 45a30.003 30.003 0 0 0 5.5 7.5606l22 22a30.003 30.003 0 0 0 7.797 5.6191l46 23a30.003 30.003 0 0 0 13.416 3.168h45a30.003 30.003 0 0 0 13.654-3.2871l45-23a30.003 30.003 0 0 0 7.084-5.0352l23-22a30.003 30.003 0 0 0 6.215-8.502l22-45a30.003 30.003 0 0 0 2.133-5.8261l22.17-87.715 19.459-38.072 15.176-15.865 34.914-16.697h31.256l34.267 16.752 15.92 15.92 16.752 34.268v101.33l-20.543 63.496a30 30 0 0 0 19.309 37.779 30 30 0 0 0 37.779-19.309l22-68a30.003 30.003 0 0 0 1.455-9.2343v-113a30.003 30.003 0 0 0-3.047-13.178l-22-45a30.003 30.003 0 0 0-5.738-8.0371l-23-23a30.003 30.003 0 0 0-8.037-5.7383l-45-22a30.003 30.003 0 0 0-13.178-3.0468h-45a30.003 30.003 0 0 0-12.943 2.9355l-46 22a30.003 30.003 0 0 0-8.735 6.3262l-22 23a30.003 30.003 0 0 0-5.035 7.084l-23 45a30.003 30.003 0 0 0-2.371 6.3027l-22.236 87.977-18.281 37.392-15.961 15.268-34.659 17.715h-30.697l-35.31-17.656-15.211-15.211-17.561-34.356v-101.77l21.375-62.266a30 30 0 0 0-18.633-38.115 30 30 0 0 0-9.953-1.625z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23438 1465v-158"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23438 1277a30 30 0 0 0-30 30v158a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-158a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 1239v226h-475v-226"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23212 1209a30 30 0 0 0-30 30v226a30.003 30.003 0 0 0 30 30h475a30.003 30.003 0 0 0 30-30v-226a30 30 0 0 0-30-30 30 30 0 0 0-30 30v196h-415v-196a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23212 1103v-271"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23212 802.01a30 30 0 0 0-30 30v271a30 30 0 0 0 30 30 30 30 0 0 0 30-30v-271a30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23687 967.01h-475"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m23212 937.01a30 30 0 0 0-30 30 30 30 0 0 0 30 30h475a30 30 0 0 0 30-30 30 30 0 0 0-30-30z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(2031.1 .118)">
              <g shape-rendering="auto">
                <path
                  d="m19515 4590v315"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19515 4275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#e6e6e6"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
              <g transform="matrix(1 0 0 1 460.04 -185.99)" fill="#fff" stroke-width="0">
                <g shape-rendering="auto">
                  <path
                    d="m19197 4824.6c0 86.974-70.506 157.48-157.48 157.48s-157.48-70.506-157.48-157.48 70.506-157.48 157.48-157.48 157.48 70.506 157.48 157.48z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#fff"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                  <path
                    d="m19040 4667.1c-86.982 0-157.49 70.514-157.49 157.5 0 86.982 70.512 157.5 157.49 157.5s157.5-70.514 157.5-157.5c0-86.982-70.514-157.5-157.5-157.5zm0 0.031c86.965 0 157.46 70.5 157.46 157.46 0 86.965-70.5 157.46-157.46 157.46s-157.46-70.5-157.46-157.46c0-86.965 70.498-157.46 157.46-157.46z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#000"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                </g>
              </g>
            </g>
            <g
              transform="translate(455.37 -185.99)"
              fill="#008484"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="59.055"
            >
              <path d="m9980 2378v319l19 37 18 19 38 19h75l37-19 19-19 19-37v-319" />
              <path d="m10599 2772h-225" />
              <path d="m10486 2772v-394l-37 56-38 38-37 18" />
              <path d="m20878 6838h-394" />
              <path
                d="m20840 6425 19 19 19 56v38l-19 56-37 38-38 18-75 19h-56l-75-19-38-18-37-38-19-56v-38l19-56 19-19"
              />
              <path d="m20878 6050v225" />
              <path d="m20878 6163h-394l56 37 38 38 19 37" />
              <path
                d="m17294 5574-19 19-56 19h-37l-57-19-37-38-19-37-19-75v-56l19-75 19-38 37-37 57-19h37l56 19 19 18"
              />
              <path d="m17444 5255 19-18 37-19h94l38 19 18 18 19 38v37l-19 57-225 225h244" />
            </g>
            <g transform="matrix(1.154 0 0 1 -1203.6 -2.1287)" shape-rendering="auto">
              <path
                d="m14784 1659h-500"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m14284 1619a40 40 0 0 0-40 40 40 40 0 0 0 40 40h500a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(-.91416 0 0 .94432 28890 846.43)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(3045.6 .061399)">
              <g shape-rendering="auto">
                <path
                  d="m19515 4590v315"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19515 4275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#e6e6e6"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
              <g transform="matrix(1 0 0 1 460.04 -185.99)" fill="#fff" stroke-width="0">
                <g shape-rendering="auto">
                  <path
                    d="m19197 4824.6c0 86.974-70.506 157.48-157.48 157.48s-157.48-70.506-157.48-157.48 70.506-157.48 157.48-157.48 157.48 70.506 157.48 157.48z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#fff"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                  <path
                    d="m19040 4667.1c-86.982 0-157.49 70.514-157.49 157.5 0 86.982 70.512 157.5 157.49 157.5s157.5-70.514 157.5-157.5c0-86.982-70.514-157.5-157.5-157.5zm0 0.031c86.965 0 157.46 70.5 157.46 157.46 0 86.965-70.5 157.46-157.46 157.46s-157.46-70.5-157.46-157.46c0-86.965 70.498-157.46 157.46-157.46z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#000"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                </g>
              </g>
            </g>
            <path d="m22699 5012.2h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m21683 5012.2h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <g transform="translate(1014.5 -.056711)">
              <g shape-rendering="auto">
                <path
                  d="m19515 4590v315"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill-opacity="0"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
                <path
                  d="m19515 4275a314.96 314.96 0 0 0-314.96 314.96v315a314.96 314.96 0 0 0 314.96 314.96 314.96 314.96 0 0 0 314.96-314.96v-315a314.96 314.96 0 0 0-314.96-314.96z"
                  color="#000000"
                  color-rendering="auto"
                  dominant-baseline="auto"
                  fill="#e6e6e6"
                  image-rendering="auto"
                  solid-color="#000000"
                  stop-color="#000000"
                  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                />
              </g>
              <g transform="matrix(1 0 0 1 460.04 -185.99)" fill="#fff" stroke-width="0">
                <g shape-rendering="auto">
                  <path
                    d="m19197 4824.6c0 86.974-70.506 157.48-157.48 157.48s-157.48-70.506-157.48-157.48 70.506-157.48 157.48-157.48 157.48 70.506 157.48 157.48z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#fff"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                  <path
                    d="m19040 4667.1c-86.982 0-157.49 70.514-157.49 157.5 0 86.982 70.512 157.5 157.49 157.5s157.5-70.514 157.5-157.5c0-86.982-70.514-157.5-157.5-157.5zm0 0.031c86.965 0 157.46 70.5 157.46 157.46 0 86.965-70.5 157.46-157.46 157.46s-157.46-70.5-157.46-157.46c0-86.965 70.498-157.46 157.46-157.46z"
                    color="#000000"
                    color-rendering="auto"
                    dominant-baseline="auto"
                    fill="#000"
                    image-rendering="auto"
                    solid-color="#000000"
                    stop-color="#000000"
                    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                  />
                </g>
              </g>
            </g>
            <path d="m20667 5012.2h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 5012.2h-304.41v-425.08h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 7819.1h-304.41v-425.08h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m20667 7819.1h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m21683 7819.1h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m22699 7819.1h-304.69v-425.08h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 4881h-304.41v-293.82h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 7819.1h-304.41v-293.82h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m20667 7819.1h-304.69v-293.82h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m21683 7819.1h-304.69v-293.82h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m22699 7819.1h-304.69v-293.82h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 5241.4h-304.41v-654.29h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m22699 7819.1h-304.69v-654.29h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m21683 7819.1h-304.69v-654.29h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m20667 7819.1h-304.69v-654.29h304.69z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19652 7819.1h-304.41v-654.29h304.41z" fill="#8c8c8c" stroke-width="138.52" />
            <path d="m19068 6692.9h3986.3v832.35h-4062.6z" fill="#3d3d3d" stroke-width="138.52" />
            <path d="m18992 4881h4062.6v832.48h-3986.3z" stroke-width="138.52" />
            <path
              d="m22191 4906.5v105.69h507.81v-195.88h-304.69z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m21175 4906.5v105.69h710.94v-105.69l-203.27-90.186h-304.55z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m22699 7590v-196.01h-507.81v105.96l203.12 90.049z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m21886 7500v-105.96h-710.94v105.96l203.13 90.049h304.55z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m19855 7500v-105.96h-507.39v196.01h304.41z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m20871 7500v-105.96h-711.08v105.96l203.27 90.049h304.69z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m19347 4816.3v195.88h507.39v-105.69l-202.98-90.186z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m20160 4906.5v105.69h711.08v-105.69l-203.13-90.186h-304.69z"
              fill="#8c8c8c"
              stroke-width="138.52"
            />
            <path
              d="m19068 5121.9-76.313-240.9v2644.2l76.313-240.77h141.76v-2161.6z"
              fill="#141414"
              stroke-width="138.52"
            />
            <path
              d="m22978 5121.9 76.313-240.9v2644.2l-76.313-240.77v-591.58h-431.64v-979.39h431.64z"
              fill="#1f1f1f"
              stroke-width="138.52"
            />
            <path
              d="m22997 6204.2h-450.97v488.74l431.64 3.8087 19.325-207.58z"
              fill="#1c1c1c"
              stroke-width="138.52"
            />
            <path
              d="m22997 6204.2v-287.02l-19.325-208.53h-431.64v495.54z"
              fill="#383838"
              stroke-width="138.52"
            />
            <path
              d="m22978 7284.5v-586.68c-241.63-43.664-425.58-247.43-425.58-493.5 0-245.94 182.81-450.66 425.58-494.73v-586.68h-3910v2161.6z"
              fill="#303030"
              stroke-width="138.52"
            />
            <path
              d="m22997 6489.1v-570.63c-149.24 16.323-266.04 136.71-266.04 285.66 0 148.81 115.81 268.52 266.04 284.98z"
              fill="#262626"
              stroke-width="138.52"
            />
            <path
              d="m22185 5520.5a209.19 201.73 0 0 1 209.19-201.73 209.19 201.73 0 0 1 209.19 201.73 209.19 201.73 0 0 1-209.19 201.73 209.19 201.73 0 0 1-209.19-201.73z"
              fill="#212121"
              stroke-width="138.52"
            />
            <path d="m19349 7387.9h304.58v432.24h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path d="m20363 7387.9h304.58v432.24h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path d="m21379 7387.9h304.58v432.24h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path d="m22394 7387.9h304.58v432.24h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path
              d="m19855 5008.5v-105.77l-202.9-89.886h-304.58v195.66z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m19349 7387.9v195.66h304.58l202.9-89.886v-105.77z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m22192 7387.9v105.77l202.9 89.886h304.58v-195.66z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m20160 7387.9v105.77l202.9 89.886h304.58l203.01-89.886v-105.77z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m21176 7387.9v105.77l202.9 89.886h304.58l202.9-89.886v-105.77z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m19855 5008.5v-105.77l-202.9-89.886h-304.58v195.66z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <path
              d="m20871 5008.4v-105.67l-203.01-89.995h-304.58l-202.9 89.995v105.67z"
              fill="#8c8c8c"
              stroke-width="110.82"
            />
            <g transform="matrix(112.85 0 0 108.82 18992 4964.6)">
              <g
                transform="matrix(1.25,0,0,1.25,3.1592,7.5861)"
                fill="#f2f2f2"
                aria-label="attiny85"
              >
                <path
                  d="m1.4566-1.1682q-0.4627 0-0.64114 0.10582-0.17844 0.10582-0.17844 0.36103 0 0.20334 0.13279 0.32368 0.13487 0.11827 0.36518 0.11827 0.31746 0 0.50835-0.22409 0.19297-0.22616 0.19297-0.59965v-0.085071zm0.76149-0.15769v1.3259h-0.38178v-0.35273q-0.13072 0.21164-0.32576 0.31331-0.19504 0.099595-0.47723 0.099595-0.35688 0-0.56852-0.19919-0.20957-0.20127-0.20957-0.5374 0-0.39216 0.26144-0.59135 0.26351-0.19919 0.78431-0.19919h0.53532v-0.037348q0-0.26351-0.17429-0.40668-0.17222-0.14524-0.48553-0.14524-0.19919 0-0.38801 0.047723t-0.36311 0.14317v-0.35273q0.20957-0.080921 0.40668-0.12034 0.19712-0.041498 0.38386-0.041498 0.5042 0 0.75319 0.26144t0.24899 0.79261z"
                />
                <path
                  d="m3.3821-2.9837v0.65982h0.78639v0.29671h-0.78639v1.2615q0 0.28426 0.076771 0.36518 0.078846 0.080921 0.31746 0.080921h0.39216v0.31953h-0.39216q-0.44195 0-0.61002-0.16392-0.16807-0.16599-0.16807-0.60172v-1.2615h-0.28011v-0.29671h0.28011v-0.65982z"
                />
                <path
                  d="m5.0482-2.9837v0.65982h0.78639v0.29671h-0.78639v1.2615q0 0.28426 0.076771 0.36518 0.078846 0.080921 0.31746 0.080921h0.39216v0.31953h-0.39216q-0.44195 0-0.61002-0.16392-0.16807-0.16599-0.16807-0.60172v-1.2615h-0.28011v-0.29671h0.28011v-0.65982z"
                />
                <path
                  d="m6.3368-2.3239h0.38178v2.3239h-0.38178zm0-0.90466h0.38178v0.48345h-0.38178z"
                />
                <path
                  d="m9.4491-1.4026v1.4026h-0.38178v-1.3902q0-0.32991-0.12864-0.49383-0.12864-0.16392-0.38593-0.16392-0.30916 0-0.4876 0.19712-0.17844 0.19712-0.17844 0.5374v1.3134h-0.38386v-2.3239h0.38386v0.36103q0.13694-0.20957 0.32161-0.31331 0.18674-0.10375 0.4295-0.10375 0.40046 0 0.60587 0.24899 0.20542 0.24691 0.20542 0.72829z"
                />
                <path
                  d="m11.177 0.21579q-0.16184 0.41498-0.31538 0.54155t-0.41083 0.12657h-0.30501v-0.31953h0.22409q0.15769 0 0.24484-0.074696 0.08715-0.074696 0.19297-0.35273l0.06847-0.17429-0.93993-2.2865h0.40461l0.72622 1.8176 0.72622-1.8176h0.40461z"
                />
                <path
                  d="m13.676-1.4711q-0.29879 0-0.471 0.15977-0.17014 0.15977-0.17014 0.43988 0 0.28011 0.17014 0.43988 0.17222 0.15977 0.471 0.15977t0.471-0.15977q0.17222-0.16184 0.17222-0.43988 0-0.28011-0.17222-0.43988-0.17014-0.15977-0.471-0.15977zm-0.41913-0.17844q-0.26974-0.066397-0.4212-0.25106-0.14939-0.18467-0.14939-0.45025 0-0.37141 0.26351-0.5872 0.26559-0.21579 0.72622-0.21579 0.4627 0 0.72622 0.21579 0.26351 0.21579 0.26351 0.5872 0 0.26559-0.15147 0.45025-0.14939 0.18467-0.41706 0.25106 0.30294 0.070547 0.471 0.27596 0.17014 0.20542 0.17014 0.50213 0 0.45025-0.27596 0.69094-0.27389 0.24069-0.78639 0.24069t-0.78846-0.24069q-0.27389-0.24069-0.27389-0.69094 0-0.29671 0.17014-0.50213t0.47308-0.27596zm-0.15354-0.66189q0 0.24069 0.14939 0.37556 0.15147 0.13487 0.42328 0.13487 0.26974 0 0.4212-0.13487 0.15354-0.13487 0.15354-0.37556t-0.15354-0.37556q-0.15147-0.13487-0.4212-0.13487-0.27181 0-0.42328 0.13487-0.14939 0.13487-0.14939 0.37556z"
                />
                <path
                  d="m15.487-3.0978h1.6454v0.35273h-1.2615v0.75941q0.0913-0.031124 0.18259-0.045648 0.0913-0.016599 0.18259-0.016599 0.51873 0 0.82166 0.28426 0.30294 0.28426 0.30294 0.76979 0 0.50005-0.31124 0.77809-0.31124 0.27596-0.87768 0.27596-0.19504 0-0.39838-0.033198-0.20127-0.033198-0.41706-0.099595v-0.42121q0.18674 0.10167 0.38593 0.15147 0.19919 0.049798 0.4212 0.049798 0.35896 0 0.56852-0.18882 0.20956-0.18882 0.20956-0.5125t-0.20956-0.5125q-0.20957-0.18882-0.56852-0.18882-0.16807 0-0.33613 0.037348-0.16599 0.037348-0.34028 0.11619z"
                />
              </g>
            </g>
            <path d="m19348 4583.9h304.58v427.23h-304.58z" fill="#8c8c8c" stroke-width="110.82" />
            <path d="m22391 7387.7h305.82v432.43h-305.82z" fill="none" stroke-width="138.52" />
            <path d="m22392 4586.4h304.12v432.29h-304.12z" fill="none" stroke-width="138.52" />
            <path d="m21379 4583.7h304.41v432.29h-304.41z" fill="none" stroke-width="138.52" />
            <path d="m20363 4583.7h304.55v432.29h-304.55z" fill="none" stroke-width="138.52" />
            <path d="m19347 4583.7h304.55v432.29h-304.55z" fill="none" stroke-width="138.52" />
            <path d="m19349 7387.7h304.55v432.43h-304.55z" fill="none" stroke-width="138.52" />
            <path d="m20363 7387.7h304.55v432.43h-304.55z" fill="none" stroke-width="138.52" />
            <path d="m21379 7387.7h304.55v432.43h-304.55z" fill="none" stroke-width="138.52" />
            <path
              d="m6327.4 12199h20105"
              fill="none"
              stroke="#2c8240"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="59.058"
            />
            <path
              d="m26432 12199v-11822"
              fill="none"
              stroke="#2c8240"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="59.058"
            />
            <path
              d="m26432 377.01h-20105"
              fill="none"
              stroke="#2c8240"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="59.058"
            />
            <g shape-rendering="auto">
              <path
                d="m10116 10309-38 19h-93l-38-19-19-37v-38l19-37 38-19h93l38-19"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m10116 10129a30 30 0 0 0-13.469 3.166l-31.666 15.834h-85.918a30.003 30.003 0 0 0-13.416 3.166l-38 19a30.003 30.003 0 0 0-13.27 13.129l-19 37a30.003 30.003 0 0 0-3.3144 13.705v38a30.003 30.003 0 0 0 3.3144 13.703l19 37a30.003 30.003 0 0 0 13.27 13.129l38 19a30.003 30.003 0 0 0 13.416 3.168h93a30.003 30.003 0 0 0 13.418-3.168l38-19a30 30 0 0 0 13.416-40.25 30 30 0 0 0-40.25-13.416l-31.666 15.834h-78.836l-22.881-11.442-11.201-21.812v-23.494l11.201-21.813 22.881-11.439h85.918a30.003 30.003 0 0 0 13.418-3.168l38-19a30 30 0 0 0 13.416-40.25 30 30 0 0 0-26.781-16.582z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path d="m9511.6 9235.2h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path d="m13583 9235.2h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m9606.6 9207.6v289.57h3920.5v-289.57z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m9606.6 9207.6a144.79 144.79 0 0 0-144.79 144.79 144.79 144.79 0 0 0 144.79 144.79h144.79a144.79 144.79 0 0 0 144.79-144.79 144.79 144.79 0 0 0-144.79-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m13443 9207.6a144.79 144.79 0 0 0-144.78 144.79 144.79 144.79 0 0 0 144.78 144.79h144.78a144.79 144.79 0 0 0 144.78-144.79 144.79 144.79 0 0 0-144.78-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m10878 8946.4c-49.755-22.879-135.33-40.799-190.06-40.799h-274.65c-54.73 0-99.51 44.779-99.51 99.509v740.25c0 54.828 44.78 99.509 99.51 99.509h274.65c54.73 0 140.31-18.805 190.06-40.799l9.95-4.8971c49.755-22.879 135.33-40.799 190.06-40.799h993.1c54.829 0 140.21 18.805 189.96 40.799l10.049 4.8971c49.755 22.879 135.13 40.799 190.06 40.799h274.65c54.929 0 99.509-44.681 99.509-99.509v-740.25c0-54.73-44.58-99.509-99.509-99.509h-274.65c-54.929 0-140.31 18.922-190.06 40.799l-10.049 4.9755c-49.754 22.879-135.13 40.799-189.96 40.799h-993.1c-54.73 0-140.31-18.922-190.06-40.799z"
              fill="#d9b477"
              stroke-width="99.509"
            />
            <path d="m12505 8904.7h97.121v939.17h-97.121z" fill="#ad9f4e" stroke-width="99.509" />
            <path d="m11697 8992.2h255.74v765.23h-255.74z" fill="#c40808" stroke-width="99.509" />
            <path d="m11186 8992.2h255.74v765.23h-255.74z" fill="#008000" stroke-width="99.509" />
            <path
              d="m10931 8966.3c-15.922-4.9755-30.848-9.951-42.789-15.906l-9.951-4.9754c-49.755-22.801-135.33-40.799-190.06-40.799h-11.941v939.27h11.941c54.73 0 140.31-18.805 190.06-40.799l9.951-4.8972c11.941-6.1507 26.867-11.048 42.789-15.906z"
              fill="#8a3d06"
              stroke-width="99.509"
            />
            <path
              d="m12739 9443.2c0 52.442-18.009 96.622-40.799 96.622h-265.69c-52.541 0-135.13-7.7571-184.19-16.924l-10.048-2.3506c-47.665-8.9715-131.15-16.924-184.29-16.924h-960.07c-52.74 0-135.33 7.9529-184.09 16.924l-9.951 1.9589c-47.765 9.0498-130.36 16.924-184.09 16.924h-224.89c-52.74 0-96.524 40.599-96.524 89.159v79.999c0 49.755 43.784 89.159 96.524 89.159h223.9c52.74 0 135.33-16.924 184.09-36.905l9.95-3.9177c47.765-19.51 131.35-36.63 184.09-36.63h960.07c52.442 0 135.03 17.12 184.39 36.709l10.249 3.9177c47.665 20.019 130.56 36.905 184.29 36.905h307.48c52.64 0 96.624-40.799 96.624-89.163v-464.01c-38.312 14.926-97.022 56.72-97.022 198.22z"
              opacity=".3"
              stroke-width="99.509"
            />
            <path d="m12505 9359.4h97.121v435.75h-97.121z" opacity=".4" stroke-width="99.509" />
            <path
              d="m12192 9028c31.745 0 67.865-13.947 91.548-23.898 27.863-10.93 79.707-19.902 133.54-19.902h201.9c31.048 0 31.048 33.849 31.048 51.745 0 17.904-2.076 52.74-31.048 52.74h-422.91c-14.829 0-31.843-15.906-31.843-30.95 0.901-11.832 10.848-29.774 27.764-29.774z"
              fill="#fff"
              opacity=".25"
              stroke-width="99.509"
            />
            <path
              d="m10489 9035a59.706 59.706 0 0 1-59.705 59.706 59.706 59.706 0 0 1-59.706-59.706 59.706 59.706 0 0 1 59.706-59.706 59.706 59.706 0 0 1 59.705 59.706z"
              fill="#fff"
              opacity=".35"
              stroke-width="99.509"
            />
            <path
              d="m12505 8936.5h97.121v223.9h-97.121z"
              fill="#ff3"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m12505 8986.2h97.121v103.49h-97.121z"
              fill="#fff"
              opacity=".5"
              stroke-width="99.509"
            />
            <g transform="matrix(393.7 0 0 393.7 21373 -101469)">
              <path
                d="m-13.051 266.6c0.22222-0.60187-1.7558-1.1593-2.8192-1.0884-0.94572 0.063-2.9247 0.6097-2.214 1.2825 1.2114 1.1467 4.6043 0.96738 5.0331-0.19408z"
                fill="#f60"
                stroke="#f60"
                stroke-width=".22386px"
              />
              <path
                d="m-14.443 266.03c0.1026-0.20627-0.8099-0.39729-1.3004-0.37301-0.43625 0.0216-1.3491 0.20895-1.0213 0.43953 0.55881 0.39298 2.1239 0.33152 2.3216-0.0665z"
                stroke="#000"
                stroke-width=".089006px"
              />
            </g>
            <g transform="matrix(391.77 0 0 391.77 -23792 -50931)">
              <path
                d="m97.443 155.73a1.5358 1.5817 0 0 0-0.6103 1.2609 1.5358 1.5817 0 0 0 1.5358 1.5813 1.5358 1.5817 0 0 0 1.5358-1.5813 1.5358 1.5817 0 0 0-0.61185-1.2609z"
                fill="#00d300"
                opacity=".94"
                stroke="#00d200"
                stroke-width=".26458"
              />
              <path
                d="m99.566 157.05a1.2038 1.2038 0 0 1-1.2038 1.2038 1.2038 1.2038 0 0 1-1.2038-1.2038 1.2038 1.2038 0 0 1 1.2038-1.2038 1.2038 1.2038 0 0 1 1.2038 1.2038z"
                fill="#0f0"
                opacity=".94"
                stroke="#0f0"
                stroke-width=".29234"
              />
              <path
                d="m98.206 157.84c0.06674 0.0161 0.13673 0.0247 0.20851 0.0247 0.06095 0 0.12023-6e-3 0.17753-0.018l0.07306 0.35489c-0.08088 0.0164-0.16488 0.0251-0.25053 0.0251-0.09109 0-0.23444-0.0169-0.3199-0.0354zm-0.35689 0.25113c-0.40274-0.20588-0.67838-0.6249-0.67838-1.1085 0-0.0833 0.0079-0.16445 0.02371-0.24328l0.35346 0.0792c-0.0101 0.053-0.01528 0.10782-0.01528 0.16385 0 0.33156 0.18317 0.6209 0.454 0.77149z"
                enable-background="new    "
                fill="#fff"
                opacity=".6"
                stroke-width=".20106"
              />
            </g>
            <g transform="matrix(391.77 0 0 391.77 -23764 -50899)">
              <path
                d="m102.44 155.76a1.5358 1.5817 0 0 0-0.6103 1.2609 1.5358 1.5817 0 0 0 1.5358 1.5813 1.5358 1.5817 0 0 0 1.5358-1.5813 1.5358 1.5817 0 0 0-0.61184-1.2609z"
                fill="#dbdb00"
                opacity=".94"
                stroke="#dcdc00"
                stroke-width=".26458"
              />
              <path
                d="m104.56 157.09a1.2038 1.2038 0 0 1-1.2038 1.2038 1.2038 1.2038 0 0 1-1.2038-1.2038 1.2038 1.2038 0 0 1 1.2038-1.2038 1.2038 1.2038 0 0 1 1.2038 1.2038z"
                fill="#ff0"
                opacity=".94"
                stroke="#ff0"
                stroke-width=".29234"
              />
              <path
                d="m103.2 157.88c0.0667 0.0161 0.13674 0.0247 0.20851 0.0247 0.0609 0 0.12023-6e-3 0.17754-0.018l0.0731 0.35489c-0.0809 0.0164-0.16488 0.0251-0.25053 0.0251-0.0911 0-0.23444-0.0169-0.3199-0.0354zm-0.35688 0.25113c-0.40274-0.20588-0.67838-0.6249-0.67838-1.1085 0-0.0833 8e-3 -0.16445 0.0237-0.24328l0.35346 0.0792c-0.0101 0.053-0.0153 0.10782-0.0153 0.16385 0 0.33156 0.18317 0.6209 0.454 0.77149z"
                enable-background="new    "
                fill="#fff"
                opacity=".6"
                stroke-width=".20106"
              />
            </g>
            <g transform="matrix(96.519 0 0 101.89 23491 -9590.1)" stroke-width=".69554">
              <g stroke-width=".69554">
                <g stroke-width=".69554">
                  <path
                    d="m-104.84 107.58a10.243 9.5649 0 0 1-10.243 9.5649 10.243 9.5649 0 0 1-10.243-9.5649 10.243 9.5649 0 0 1 10.243-9.5649 10.243 9.5649 0 0 1 10.243 9.5649z"
                    fill="#1a1a1a"
                  />
                </g>
                <path d="m-125.26 107.73h20.319v9.373h-20.319z" />
              </g>
              <path
                d="m-105.97 110.02a9.3598 4.7073 0 0 1-9.3598 4.7073 9.3598 4.7073 0 0 1-9.3598-4.7073 9.3598 4.7073 0 0 1 9.3598-4.7073 9.3598 4.7073 0 0 1 9.3598 4.7073z"
              />
            </g>
            <g transform="matrix(0 -.92754 .9219 0 15293 15753)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(1029.9 .86894)">
              <path
                d="m15284 1659-250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                shape-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(.91416 0 0 .94432 1157.5 836.98)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(423.92 0 0 423.92 -60781 -68589)" stroke-width=".8016">
              <g transform="matrix(.35283 0 0 .35283 176.28 163.21)">
                <path
                  d="m1.563 7.199h4.072l1.564-1.562v-4.073l-1.564-1.564h-4.072l-1.563 1.564v4.073z"
                  stroke-width=".8016"
                />
              </g>
              <g transform="matrix(.35283 0 0 .35283 176.28 163.21)">
                <path d="m2.451 2.45h2.297v2.299h-2.297z" fill="#8d8c8c" />
                <path d="m3.009 3.008h1.182v1.183h-1.182z" fill="#8c8663" />
                <path d="m4.748 2.45h-2.297l0.558 0.558h1.181z" fill="#b8af82" />
                <path d="m4.748 4.749-0.558-0.559v-1.182l0.558-0.558z" fill="#80795b" />
                <path d="m2.451 4.749 0.558-0.559h1.181l0.558 0.559z" fill="#5e5b43" />
                <path d="m2.451 4.749v-2.299l0.558 0.558v1.182z" fill="#9a916c" />
              </g>
            </g>
            <g transform="matrix(0 143.84 -150.87 0 24949 2039.8)" stroke-width=".94093">
              <path d="m2.202 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m2.511 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m9.381 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m9.69 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m16.56 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m16.869 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m23.739 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m24.048 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m30.918 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m31.227 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m38.097 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m38.406 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m45.276 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m45.585 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m52.455 2.202h2.775v2.775h-2.775z" fill="none" />
              <path d="m52.764 2.463h2.152v2.25h-2.152z" fill="none" />
              <path d="m0 0h57.432v7.178h-57.432z" fill="#404040" />
              <path d="m2.204 2.202h2.773v2.773h-2.773z" />
              <path d="m5.999 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m5.999 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m1.181 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m1.179 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m9.383 2.202h2.773v2.773h-2.773z" />
              <path d="m13.178 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m13.178 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m8.36 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m8.358 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m16.562 2.202h2.773v2.773h-2.773z" />
              <path d="m20.357 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m20.357 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m15.539 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m15.537 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m23.741 2.202h2.773v2.773h-2.773z" />
              <path d="m27.536 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m27.536 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m22.718 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m22.716 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m30.92 2.202h2.773v2.773h-2.773z" />
              <path d="m34.715 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m34.715 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m29.897 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m29.895 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m38.099 2.202h2.773v2.773h-2.773z" />
              <path d="m41.894 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m41.894 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m37.076 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m37.074 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m45.278 2.202h2.773v2.773h-2.773z" />
              <path d="m49.073 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m49.073 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m44.255 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m44.253 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
              <path d="m52.457 2.202h2.773v2.773h-2.773z" />
              <path d="m56.252 1.18h-4.818l1.021 1.022h2.775z" fill="#2a2a29" />
              <path d="m56.252 5.998v-4.818l-1.022 1.025v2.773z" fill="#474747" />
              <path d="m51.434 5.998h4.817l-1.022-1.02h-2.774z" fill="#595959" />
              <path d="m51.432 1.18v4.818l1.023-1.022v-2.774z" fill="#373737" />
            </g>
            <g transform="matrix(338.32 0 0 338.32 9469.4 -93031)" stroke-width="1.1637">
              <g
                transform="matrix(.92615 0 0 1.0822 -.04294 -8.4314)"
                fill="#ccc"
                stroke-width="1.1637"
              >
                <path d="m-5.8689 274.73h1.2364l0.18682 0.63348 1.5074-1.1e-4v0.37471h-2.9431z" />
                <path d="m-5.8672 276.38h1.2356l0.1867-0.63783 1.5066 1.1e-4v-0.37728h-2.9414z" />
              </g>
              <g transform="matrix(.85239 0 0 1.0434 214.99 115.87)" fill="#ccc">
                <path d="m-258.65 173.26h1.3434l0.20299 0.65703 1.6379-1.1e-4v0.38863h-3.1978z" />
                <path d="m-258.65 174.82h1.3426l0.20286-0.66154 1.6369 1.1e-4v-0.3913h-3.1959z" />
              </g>
              <g transform="matrix(.85239 0 0 1.0434 214.99 110.61)" fill="#ccc">
                <path d="m-258.65 173.26h1.3434l0.20299 0.65703 1.6379-1.1e-4v0.38863h-3.1978z" />
                <path d="m-258.65 174.82h1.3426l0.20286-0.66154 1.6369 1.1e-4v-0.3913h-3.1959z" />
              </g>
              <g transform="matrix(.85239 0 0 1.0434 214.99 113.27)" fill="#ccc">
                <path d="m-258.65 173.26h1.3434l0.20299 0.65703 1.6379-1.1e-4v0.38863h-3.1978z" />
                <path d="m-258.65 174.82h1.3426l0.20286-0.66154 1.6369 1.1e-4v-0.3913h-3.1959z" />
              </g>
              <path d="m-24.075 287.66h18.633v11.933h-18.633z" fill="#808080" />
              <path d="m-24.077 287.66h17.622v10.869h-17.622z" fill="#ccc" />
              <g
                transform="matrix(.25496 0 0 .31209 -7.7956 241.33)"
                fill="#999"
                stroke-width="1.1637"
              >
                <path d="m-51.884 152.81h6.6873v7.6097h-6.6873z" />
                <path d="m-51.884 172.51h6.6873v7.6097h-6.6873z" />
                <path d="m-10.607 165.56h3.2284v3.2284h-3.2284z" />
              </g>
            </g>
            <g transform="matrix(0 86.828 -90.281 0 22683 964.29)" stroke-width="1.0474">
              <path d="m20.606 2e-3h3v4.25h-3z" fill="none" />
              <path d="m20.606 28.752h3v4.25h-3z" fill="none" />
              <path d="m0.606 2e-3h3v4.25h-3z" fill="none" />
              <path d="m0.606 28.752h3v4.25h-3z" fill="none" />
              <path d="m20.606 2e-3h3v3h-3z" fill="none" />
              <path d="m20.606 30.002h3v3h-3z" fill="none" />
              <path d="m0.606 2e-3h3v3h-3z" fill="none" />
              <path d="m0.606 30.002h3v3h-3z" fill="none" />
              <g stroke-width="1.0474">
                <path d="m20.586 21.487h3v11.492h-3z" fill="#8c8c8c" />
                <path d="m0.586 1e-3h2.998v11.492h-2.998z" fill="#8c8c8c" />
                <path d="m20.586 0h3v11.494h-3z" fill="#8c8c8c" />
                <path d="m0.587 21.487h2.999v11.494h-2.999z" fill="#8c8c8c" />
                <path d="m0.012 4.232h24.518v24.52h-24.518z" />
                <path
                  d="m24.529 26.752c0 1.101-0.896 1.999-2 1.999h-20.518c-1.101 0-1.999-0.898-1.999-1.999v-20.522c0-1.1 0.898-1.998 1.999-1.998h20.521c1.103 0 1.997 0.898 1.997 1.998z"
                  fill="#999"
                />
                <path
                  d="m5.707 7.803a2.124 2.124 0 0 1-2.124 2.124 2.124 2.124 0 0 1-2.124-2.124 2.124 2.124 0 0 1 2.124-2.124 2.124 2.124 0 0 1 2.124 2.124z"
                />
                <path
                  d="m23.142 7.84a2.124 2.124 0 0 1-2.124 2.124 2.124 2.124 0 0 1-2.124-2.124 2.124 2.124 0 0 1 2.124-2.124 2.124 2.124 0 0 1 2.124 2.124z"
                />
                <path
                  d="m23.105 25.275a2.124 2.124 0 0 1-2.124 2.124 2.124 2.124 0 0 1-2.124-2.124 2.124 2.124 0 0 1 2.124-2.124 2.124 2.124 0 0 1 2.124 2.124z"
                />
                <path
                  d="m5.67 25.236a2.124 2.124 0 0 1-2.124 2.124 2.124 2.124 0 0 1-2.124-2.124 2.124 2.124 0 0 1 2.124-2.124 2.124 2.124 0 0 1 2.124 2.124z"
                />
                <path
                  d="m19.42 16.491a7.15 7.15 0 0 1-7.15 7.15 7.15 7.15 0 0 1-7.15-7.15 7.15 7.15 0 0 1 7.15-7.15 7.15 7.15 0 0 1 7.15 7.15z"
                  fill="#3f3f3f"
                />
                <path
                  d="m19.42 16.491a7.15 7.15 0 0 1-7.15 7.15 7.15 7.15 0 0 1-7.15-7.15 7.15 7.15 0 0 1 7.15-7.15 7.15 7.15 0 0 1 7.15 7.15z"
                  fill="url(#a)"
                />
                <path
                  d="m18.687 17.341a6.292 6.292 0 0 1-6.292 6.292 6.292 6.292 0 0 1-6.292-6.292 6.292 6.292 0 0 1 6.292-6.292 6.292 6.292 0 0 1 6.292 6.292z"
                  opacity=".6"
                />
                <path
                  d="m18.411 16.533a6.132 6.132 0 0 1-6.132 6.132 6.132 6.132 0 0 1-6.132-6.132 6.132 6.132 0 0 1 6.132-6.132 6.132 6.132 0 0 1 6.132 6.132z"
                  fill="#735348"
                />
                <path
                  d="m3.308 7.692c0.042-0.1 0.119-0.177 0.228-0.196l-0.21-1.338c-0.08 0.013-0.165 2e-3 -0.244 0.026l-2e-3 -6e-3c-0.495 0.153-0.865 0.522-1.054 0.993z"
                  enable-background="new    "
                  fill="#fff"
                  opacity=".5"
                />
                <path
                  d="m20.741 7.728c0.041-0.102 0.118-0.179 0.229-0.197l-0.207-1.338c-0.082 0.015-0.166 2e-3 -0.245 0.026l-3e-3 -7e-3c-0.493 0.152-0.864 0.521-1.053 0.993z"
                  enable-background="new    "
                  fill="#fff"
                  opacity=".5"
                />
                <path
                  d="m20.707 25.163c0.041-0.102 0.116-0.18 0.227-0.197l-0.207-1.337c-0.082 0.015-0.166 2e-3 -0.246 0.026l-2e-3 -0.01c-0.494 0.152-0.865 0.521-1.053 0.994z"
                  enable-background="new    "
                  fill="#fff"
                  opacity=".5"
                />
                <path
                  d="m3.271 25.126c0.041-0.102 0.118-0.176 0.229-0.195l-0.21-1.339c-0.082 0.017-0.166 2e-3 -0.245 0.027l-2e-3 -7e-3c-0.495 0.15-0.865 0.521-1.056 0.992z"
                  enable-background="new    "
                  fill="#fff"
                  opacity=".5"
                />
                <path
                  d="m14.473 10.818c-0.475-0.185-0.975-0.318-1.504-0.378-1.316-0.147-2.576 0.145-3.653 0.742l-0.134 0.348c1.203-0.643 2.604-0.941 4.062-0.778 0.448 0.052 0.884 0.152 1.301 0.284z"
                  enable-background="new    "
                  fill="#fff"
                  opacity=".6"
                />
              </g>
            </g>
            <g transform="matrix(391.77 0 0 391.77 -22021 -50812)">
              <path
                transform="rotate(-90)"
                d="m-136.52 101.4a2.75 2.75 0 0 1-2.75 2.75 2.75 2.75 0 0 1-2.75-2.75 2.75 2.75 0 0 1 2.75-2.75 2.75 2.75 0 0 1 2.75 2.75z"
                stroke-width=".33393"
              />
              <path
                transform="rotate(-90)"
                d="m-137.5 101.42a1.75 1.75 0 0 1-1.75 1.75 1.75 1.75 0 0 1-1.75-1.75 1.75 1.75 0 0 1 1.75-1.75 1.75 1.75 0 0 1 1.75 1.75z"
                fill="#b2b2b2"
                stroke-width=".31301"
              />
              <path
                d="m101.46 140.99c-0.43635 3e-3 -0.6753-0.09-1.1132-0.35566l-0.29256 1.0288c0.40732 0.2318 0.86193 0.35539 1.3194 0.36175 0.44814 6e-3 0.99481-0.12848 1.4182-0.38097l-0.25999-1.035c-0.43213 0.26429-0.56389 0.37705-1.0718 0.38109z"
                fill="#fff"
                stroke-width=".38858"
              />
            </g>
            <path d="m13251 3510.4h-112.46v-131.72h112.46z" fill="none" stroke-width="121.71" />
            <path d="m10377 3510.4h-112.46v-131.72h112.46z" fill="none" stroke-width="121.71" />
            <path
              d="m12950 3234.5a138.06 138.06 0 0 0-138.06 138.06 138.06 138.06 0 0 0 138.06 138.06h138.21a138.06 138.06 0 0 0 138.06-138.06 138.06 138.06 0 0 0-138.06-138.06z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m10087 3233.8a138.65 138.65 0 0 0-138.66 138.65 138.65 138.65 0 0 0 138.66 138.65h139.4a138.65 138.65 0 0 0 138.66-138.65 138.65 138.65 0 0 0-138.66-138.65z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m13017 3510.4h-2889.1v-275.83h2889.1z" fill="#8c8c8c" stroke-width="121.71" />
            <path
              d="m12223 3850.6h242.57c53.416 0 44.195-947.5 0-947.5h-242.57-1294.1-242.68c-57.914 0-62.75 947.5 0 947.5h242.68 1294.1z"
              fill="#ff2a2a"
              stroke-width="121.71"
            />
            <path
              d="m12153 3850.6h-224.01v-947.5h224.01z"
              fill="#fff"
              opacity=".74"
              stroke-width="121.71"
            />
            <path
              d="m12433 3803.5h-209.84-1294.1-53.867-147.43c-39.809 0-128.87-47.421 39.809-47.421h161.71 1294.1 209.84c40.034-0.13 80.293 47.421-0.225 47.421z"
              enable-background="new    "
              fill="#fff"
              opacity=".4"
              stroke-width="121.71"
            />
            <path
              d="m10686 2903c81.756-1.9685 161.71 0 242.46 0h1536.9c10.232 0 22.716 95.236 20.468 95.236h-262.7-1294.3-269.11c-2.362 0 9.669-94.972 26.2-95.236z"
              enable-background="new    "
              opacity=".4"
              stroke-width="121.71"
            />
            <path d="m9861.5 4637.3h112.46v-131.72h-112.46z" fill="none" stroke-width="121.71" />
            <path d="m12736 4637.3h112.46v-131.72h-112.46z" fill="none" stroke-width="121.71" />
            <path
              d="m10020 4361.4a138.06 138.06 0 0 0-138.07 138.06 138.06 138.06 0 0 0 138.07 138.06h138.21a138.06 138.06 0 0 0 138.06-138.06 138.06 138.06 0 0 0-138.06-138.06z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m12873 4365.3a138.65 138.65 0 0 0-138.65 138.65 138.65 138.65 0 0 0 138.65 138.65h139.4a138.65 138.65 0 0 0 138.65-138.65 138.65 138.65 0 0 0-138.65-138.65z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m10096 4637.3h2889.1v-275.83h-2889.1z" fill="#8c8c8c" stroke-width="121.71" />
            <path
              d="m10890 4977.6h-242.57c-53.416 0-44.195-947.5 0-947.5h242.57 1294.1 242.68c57.914 0 62.75 947.5 0 947.5h-242.68-1294.1z"
              fill="#ff2a2a"
              stroke-width="121.71"
            />
            <path
              d="m10960 4977.6h224.01v-947.5h-224.01z"
              fill="#fff"
              opacity=".74"
              stroke-width="121.71"
            />
            <path
              d="m10680 4930.4h209.84 1294.1 53.866 147.43c39.809 0 128.87-47.421-39.81-47.421h-161.71-1294.1-209.84c-40.034-0.13-80.293 47.421 0.225 47.421z"
              enable-background="new    "
              fill="#fff"
              opacity=".4"
              stroke-width="121.71"
            />
            <path
              d="m12427 4029.9c-81.755-1.9685-161.71 0-242.46 0h-1536.9c-10.232 0-22.717 95.236-20.469 95.236h262.7 1294.3 269.11c2.362 0-9.669-94.972-26.201-95.236z"
              enable-background="new    "
              opacity=".4"
              stroke-width="121.71"
            />
            <path
              d="m9557.9 5710.9v289.57h3920.5v-289.57z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m9462.9 5710.9h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path d="m13534 5710.9h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m9557.9 5710.9a144.79 144.79 0 0 0-144.79 144.79 144.79 144.79 0 0 0 144.79 144.79h144.79a144.79 144.79 0 0 0 144.79-144.79 144.79 144.79 0 0 0-144.79-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m10829 5422.1c-49.755-22.879-135.33-40.799-190.06-40.799h-274.65c-54.73 0-99.509 44.779-99.509 99.509v740.25c0 54.828 44.779 99.509 99.509 99.509h274.65c54.73 0 140.31-18.805 190.06-40.799l9.951-4.8971c49.755-22.879 135.33-40.799 190.06-40.799h993.1c54.83 0 140.21 18.805 189.96 40.799l10.048 4.8971c49.755 22.879 135.13 40.799 190.06 40.799h274.65c54.929 0 99.51-44.681 99.51-99.509v-740.25c0-54.73-44.581-99.509-99.51-99.509h-274.65c-54.929 0-140.31 18.922-190.06 40.799l-10.048 4.9754c-49.755 22.879-135.13 40.799-189.96 40.799h-993.1c-54.73 0-140.31-18.922-190.06-40.799z"
              fill="#d9b477"
              stroke-width="99.509"
            />
            <path d="m12456 5380.4h97.121v939.17h-97.121z" fill="#ad9f4e" stroke-width="99.509" />
            <path d="m11648 5467.9h255.74v765.23h-255.74z" stroke-width="99.509" />
            <path d="m11137 5467.9h255.74v765.23h-255.74z" fill="#b3b3b3" stroke-width="99.509" />
            <path
              d="m10882 5442c-15.921-4.9754-30.848-9.9509-42.789-15.906l-9.951-4.9755c-49.754-22.801-135.33-40.799-190.06-40.799h-11.942v939.27h11.942c54.73 0 140.31-18.805 190.06-40.799l9.951-4.8971c11.941-6.1508 26.868-11.048 42.789-15.906z"
              fill="#00f"
              stroke-width="99.509"
            />
            <path
              d="m12690 5918.9c0 52.442-18.01 96.622-40.799 96.622h-265.69c-52.541 0-135.13-7.757-184.19-16.924l-10.049-2.3506c-47.665-8.9715-131.15-16.924-184.29-16.924h-960.07c-52.74 0-135.33 7.953-184.09 16.924l-9.951 1.9588c-47.764 9.0499-130.36 16.924-184.09 16.924h-224.89c-52.74 0-96.525 40.599-96.525 89.159v79.999c0 49.755 43.785 89.159 96.525 89.159h223.9c52.74 0 135.33-16.924 184.09-36.905l9.951-3.9177c47.764-19.51 131.35-36.63 184.09-36.63h960.07c52.441 0 135.03 17.12 184.39 36.709l10.249 3.9176c47.665 20.02 130.56 36.905 184.29 36.905h307.48c52.641 0 96.624-40.799 96.624-89.163v-464.01c-38.311 14.926-97.022 56.72-97.022 198.22z"
              opacity=".3"
              stroke-width="99.509"
            />
            <path d="m12456 5835.1h97.121v435.75h-97.121z" opacity=".4" stroke-width="99.509" />
            <path
              d="m12143 5503.7c31.745 0 67.865-13.947 91.549-23.898 27.862-10.93 79.707-19.902 133.54-19.902h201.9c31.047 0 31.047 33.849 31.047 51.745 0 17.904-2.076 52.74-31.047 52.74h-422.92c-14.829 0-31.843-15.906-31.843-30.95 0.901-11.831 10.848-29.774 27.765-29.774z"
              fill="#fff"
              opacity=".25"
              stroke-width="99.509"
            />
            <path
              d="m10440 5510.7a59.706 59.706 0 0 1-59.705 59.706 59.706 59.706 0 0 1-59.706-59.706 59.706 59.706 0 0 1 59.706-59.706 59.706 59.706 0 0 1 59.705 59.706z"
              fill="#fff"
              opacity=".35"
              stroke-width="99.509"
            />
            <path
              d="m12456 5412.2h97.121v223.9h-97.121z"
              fill="#ff3"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m12456 5461.9h97.121v103.49h-97.121z"
              fill="#fff"
              opacity=".5"
              stroke-width="99.509"
            />
            <path d="m9479 6905.7h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m9584.1 6887.3v289.57h3920.5v-289.57z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m13551 6905.7h99.509v99.509h-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m9584.1 6887.3a144.79 144.79 0 0 0-144.79 144.79 144.79 144.79 0 0 0 144.79 144.79h144.79a144.79 144.79 0 0 0 144.79-144.79 144.79 144.79 0 0 0-144.79-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m10846 6616.9c-49.755-22.879-135.33-40.799-190.06-40.799h-274.65c-54.73 0-99.509 44.779-99.509 99.509v740.25c0 54.828 44.779 99.509 99.509 99.509h274.65c54.73 0 140.31-18.805 190.06-40.799l9.951-4.8971c49.755-22.879 135.33-40.799 190.06-40.799h993.1c54.83 0 140.21 18.805 189.96 40.799l10.048 4.8971c49.755 22.879 135.13 40.799 190.06 40.799h274.65c54.929 0 99.51-44.681 99.51-99.509v-740.25c0-54.73-44.581-99.509-99.51-99.509h-274.65c-54.929 0-140.31 18.922-190.06 40.799l-10.048 4.9754c-49.755 22.879-135.13 40.799-189.96 40.799h-993.1c-54.73 0-140.31-18.922-190.06-40.799z"
              fill="#d9b477"
              stroke-width="99.509"
            />
            <path
              d="m13443 6887.3a144.79 144.79 0 0 0-144.79 144.79 144.79 144.79 0 0 0 144.79 144.79h144.78a144.79 144.79 0 0 0 144.78-144.79 144.79 144.79 0 0 0-144.78-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m12472 6575.2h97.121v939.17h-97.121z" fill="#ad9f4e" stroke-width="99.509" />
            <path d="m11664 6662.7h255.74v765.23h-255.74z" stroke-width="99.509" />
            <path d="m11153 6662.7h255.74v765.23h-255.74z" fill="#b3b3b3" stroke-width="99.509" />
            <path
              d="m10898 6636.8c-15.921-4.9754-30.848-9.9509-42.789-15.906l-9.951-4.9755c-49.754-22.801-135.33-40.799-190.06-40.799h-11.942v939.27h11.942c54.73 0 140.31-18.805 190.06-40.799l9.951-4.8971c11.941-6.1508 26.868-11.048 42.789-15.906z"
              fill="#00f"
              stroke-width="99.509"
            />
            <path
              d="m12706 7113.6c0 52.442-18.01 96.622-40.799 96.622h-265.69c-52.541 0-135.13-7.757-184.19-16.924l-10.049-2.3506c-47.665-8.9715-131.15-16.924-184.29-16.924h-960.07c-52.74 0-135.33 7.953-184.09 16.924l-9.951 1.9588c-47.764 9.0499-130.36 16.924-184.09 16.924h-224.89c-52.74 0-96.525 40.599-96.525 89.159v79.999c0 49.755 43.785 89.159 96.525 89.159h223.9c52.74 0 135.33-16.924 184.09-36.905l9.951-3.9177c47.764-19.51 131.35-36.63 184.09-36.63h960.07c52.441 0 135.03 17.12 184.39 36.709l10.249 3.9176c47.665 20.02 130.56 36.905 184.29 36.905h307.48c52.641 0 96.624-40.799 96.624-89.163v-464.01c-38.311 14.926-97.022 56.72-97.022 198.22z"
              opacity=".3"
              stroke-width="99.509"
            />
            <path d="m12472 7029.9h97.121v435.75h-97.121z" opacity=".4" stroke-width="99.509" />
            <path
              d="m12159 6698.5c31.745 0 67.865-13.947 91.549-23.898 27.862-10.93 79.707-19.902 133.54-19.902h201.9c31.047 0 31.047 33.849 31.047 51.745 0 17.904-2.076 52.74-31.047 52.74h-422.92c-14.829 0-31.843-15.906-31.843-30.95 0.901-11.831 10.848-29.774 27.765-29.774z"
              fill="#fff"
              opacity=".25"
              stroke-width="99.509"
            />
            <path
              d="m10456 6705.5a59.706 59.706 0 0 1-59.705 59.706 59.706 59.706 0 0 1-59.706-59.706 59.706 59.706 0 0 1 59.706-59.706 59.706 59.706 0 0 1 59.705 59.706z"
              fill="#fff"
              opacity=".35"
              stroke-width="99.509"
            />
            <path
              d="m12472 6606.9h97.121v223.9h-97.121z"
              fill="#ff3"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m12472 6656.7h97.121v103.49h-97.121z"
              fill="#fff"
              opacity=".5"
              stroke-width="99.509"
            />
            <path d="m9856.5 8339.2h112.46v-131.72h-112.46z" fill="none" stroke-width="121.71" />
            <path d="m12731 8339.2h112.46v-131.72h-112.46z" fill="none" stroke-width="121.71" />
            <path
              d="m10052 8044.9a138.06 138.06 0 0 0-138.07 138.06 138.06 138.06 0 0 0 138.07 138.06h138.21a138.06 138.06 0 0 0 138.06-138.06 138.06 138.06 0 0 0-138.06-138.06z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m12900 8053.4a138.65 138.65 0 0 0-138.66 138.65 138.65 138.65 0 0 0 138.66 138.65h139.4a138.65 138.65 0 0 0 138.66-138.65 138.65 138.65 0 0 0-138.66-138.65z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path d="m10091 8325.4h2889.1v-275.83h-2889.1z" fill="#8c8c8c" stroke-width="121.71" />
            <path
              d="m10885 8679.4h-242.57c-53.416 0-44.195-947.5 0-947.5h242.57 1294.1 242.68c57.914 0 62.75 947.5 0 947.5h-242.68-1294.1z"
              fill="#ff2a2a"
              stroke-width="121.71"
            />
            <path
              d="m10955 8679.4h224.01v-947.5h-224.01z"
              fill="#fff"
              opacity=".74"
              stroke-width="121.71"
            />
            <path
              d="m10675 8632.3h209.84 1294.1 53.866 147.43c39.809 0 128.87-47.421-39.81-47.421h-161.71-1294.1-209.84c-40.034-0.13-80.293 47.421 0.225 47.421z"
              enable-background="new    "
              fill="#fff"
              opacity=".4"
              stroke-width="121.71"
            />
            <path
              d="m12422 7731.8c-81.755-1.9685-161.71 0-242.46 0h-1536.9c-10.232 0-22.717 95.236-20.469 95.236h262.7 1294.3 269.11c2.362 0-9.669-94.972-26.201-95.236z"
              enable-background="new    "
              opacity=".4"
              stroke-width="121.71"
            />
            <path d="m14896 4425v99.509h-99.509v-99.509z" fill="none" stroke-width="99.509" />
            <path d="m14896 8496.6v99.509h-99.509v-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m14751 4375.2a144.79 144.79 0 0 0-144.79 144.79v144.79a144.79 144.79 0 0 0 144.79 144.79 144.79 144.79 0 0 0 144.78-144.79v-144.79a144.79 144.79 0 0 0-144.78-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m14751 8211.5a144.79 144.79 0 0 0-144.79 144.79v144.78a144.79 144.79 0 0 0 144.79 144.79 144.79 144.79 0 0 0 144.78-144.79v-144.78a144.79 144.79 0 0 0-144.78-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m14606 4520v3920.5h289.57v-3920.5z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m15185 5791.6c22.887-49.755 40.799-135.33 40.799-190.06v-274.65c0-54.73-44.78-99.509-99.51-99.509h-740.25c-54.83 0-99.509 44.779-99.509 99.509v274.65c0 54.73 18.809 140.31 40.799 190.06l4.877 9.951c22.887 49.755 40.799 135.33 40.799 190.06v993.1c0 54.832-18.809 140.21-40.799 189.96l-4.877 10.068c-22.888 49.755-40.799 135.13-40.799 190.06v274.65c0 54.93 44.679 99.509 99.509 99.509h740.25c54.73 0 99.51-44.579 99.51-99.509v-274.65c0-54.93-18.907-140.31-40.799-190.06l-4.976-10.068c-22.887-49.755-40.799-135.13-40.799-189.96v-993.1c0-54.73 18.907-140.31 40.799-190.06z"
              fill="#d9b477"
              stroke-width="99.509"
            />
            <path d="m15226 7418.4v97.124h-939.17v-97.124z" fill="#ad9f4e" stroke-width="99.509" />
            <path d="m15139 6610.4v255.74h-765.23v-255.74z" fill="#c40808" stroke-width="99.509" />
            <path d="m15139 6099v255.74h-765.23v-255.74z" fill="#1a1a1a" stroke-width="99.509" />
            <path
              d="m15165 5844.2c4.975-15.906 9.951-30.832 15.921-42.789l4.976-9.9509c22.789-49.755 40.799-135.33 40.799-190.06v-11.949h-939.27v11.949c0 54.73 18.809 140.31 40.799 190.06l4.877 9.9509c6.17 11.949 11.044 26.875 15.922 42.789z"
              fill="#8a3d06"
              stroke-width="99.509"
            />
            <path
              d="m14688 7652.3c-52.441 0-96.624-18.021-96.624-40.799v-265.69c0-52.54 7.761-135.13 16.917-184.19l2.194-10.068c8.956-47.667 16.916-131.15 16.916-184.29v-960.07c0-52.74-7.96-135.33-16.916-184.09l-2.076-9.9509c-9.054-47.764-16.917-130.36-16.917-184.09v-224.89c0-52.74-40.6-96.524-89.16-96.524h-80.004c-49.754 0-89.16 43.784-89.16 96.524v223.9c0 52.74 16.917 135.33 36.916 184.09l3.879 9.9509c19.502 47.764 36.619 131.35 36.619 184.09v960.07c0 52.442-17.117 135.04-36.721 184.39l-3.878 10.264c-20 47.663-36.917 130.55-36.917 184.29v307.48c0 52.642 40.799 96.626 89.16 96.626h464.01c-14.927-38.315-56.721-97.022-198.22-97.022z"
              opacity=".3"
              stroke-width="99.509"
            />
            <path d="m14772 7418.4v97.124h-435.75v-97.124z" opacity=".4" stroke-width="99.509" />
            <path
              d="m15103 7105c0 31.733 13.931 67.866 23.882 91.549 10.946 27.855 19.902 79.705 19.902 133.54v201.9c0 31.028-33.833 31.028-51.745 31.028-17.911 0-52.74-1.9588-52.74-31.028v-422.91c0-14.809 15.922-31.851 30.946-31.851 11.843 0.7835 29.755 10.852 29.755 27.776z"
              fill="#fff"
              opacity=".25"
              stroke-width="99.509"
            />
            <path
              d="m15096 5402.4a59.706 59.706 0 0 1-59.706-59.706 59.706 59.706 0 0 1 59.706-59.706 59.706 59.706 0 0 1 59.705 59.706 59.706 59.706 0 0 1-59.705 59.706z"
              fill="#fff"
              opacity=".35"
              stroke-width="99.509"
            />
            <path
              d="m15194 7418.4v97.124h-223.9v-97.124z"
              fill="#ff3"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m15145 7418.4v97.124h-103.49v-97.124z"
              fill="#fff"
              opacity=".5"
              stroke-width="99.509"
            />
            <path d="m16121 4424.9v99.509h-99.509v-99.509z" fill="none" stroke-width="99.509" />
            <path d="m16121 8496.5v99.509h-99.509v-99.509z" fill="none" stroke-width="99.509" />
            <path
              d="m15976 4375.1a144.79 144.79 0 0 0-144.78 144.79v144.79a144.79 144.79 0 0 0 144.78 144.79 144.79 144.79 0 0 0 144.79-144.79v-144.79a144.79 144.79 0 0 0-144.79-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m15976 8211.4a144.79 144.79 0 0 0-144.78 144.79v144.78a144.79 144.79 0 0 0 144.78 144.79 144.79 144.79 0 0 0 144.79-144.79v-144.78a144.79 144.79 0 0 0-144.79-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m15831 4519.9v3920.5h289.57v-3920.5z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <path
              d="m16409 5791.4c22.887-49.755 40.799-135.33 40.799-190.06v-274.65c0-54.73-44.78-99.509-99.51-99.509h-740.25c-54.83 0-99.509 44.779-99.509 99.509v274.65c0 54.73 18.809 140.31 40.799 190.06l4.877 9.951c22.887 49.755 40.799 135.33 40.799 190.06v993.1c0 54.832-18.809 140.21-40.799 189.96l-4.877 10.068c-22.888 49.755-40.799 135.13-40.799 190.06v274.65c0 54.93 44.679 99.509 99.509 99.509h740.25c54.73 0 99.51-44.579 99.51-99.509v-274.65c0-54.93-18.907-140.31-40.799-190.06l-4.976-10.068c-22.887-49.755-40.799-135.13-40.799-189.96v-993.1c0-54.73 18.907-140.31 40.799-190.06z"
              fill="#d9b477"
              stroke-width="99.509"
            />
            <path d="m16451 7418.3v97.124h-939.17v-97.124z" fill="#ad9f4e" stroke-width="99.509" />
            <path d="m16364 6610.3v255.74h-765.23v-255.74z" fill="#c40808" stroke-width="99.509" />
            <path d="m16364 6098.9v255.74h-765.23v-255.74z" fill="#1a1a1a" stroke-width="99.509" />
            <path
              d="m16389 5844.1c4.975-15.906 9.951-30.832 15.921-42.789l4.976-9.9509c22.789-49.755 40.799-135.33 40.799-190.06v-11.949h-939.27v11.949c0 54.73 18.809 140.31 40.799 190.06l4.877 9.9509c6.17 11.949 11.044 26.875 15.922 42.789z"
              fill="#8a3d06"
              stroke-width="99.509"
            />
            <path
              d="m15913 7652.2c-52.441 0-96.624-18.021-96.624-40.799v-265.69c0-52.54 7.761-135.13 16.917-184.19l2.194-10.068c8.956-47.667 16.916-131.15 16.916-184.29v-960.07c0-52.74-7.96-135.33-16.916-184.09l-2.076-9.9509c-9.054-47.764-16.917-130.36-16.917-184.09v-224.89c0-52.74-40.6-96.524-89.16-96.524h-80.004c-49.754 0-89.16 43.784-89.16 96.524v223.9c0 52.74 16.917 135.33 36.916 184.09l3.879 9.9509c19.502 47.764 36.619 131.35 36.619 184.09v960.07c0 52.442-17.117 135.04-36.721 184.39l-3.878 10.264c-20 47.663-36.917 130.55-36.917 184.29v307.48c0 52.642 40.799 96.626 89.16 96.626h464.01c-14.927-38.315-56.721-97.022-198.22-97.022z"
              opacity=".3"
              stroke-width="99.509"
            />
            <path d="m15996 7418.3v97.124h-435.75v-97.124z" opacity=".4" stroke-width="99.509" />
            <path
              d="m16328 7104.9c0 31.733 13.931 67.866 23.882 91.549 10.946 27.855 19.902 79.705 19.902 133.54v201.9c0 31.028-33.833 31.028-51.745 31.028-17.911 0-52.74-1.9588-52.74-31.028v-422.91c0-14.809 15.922-31.851 30.946-31.851 11.843 0.7835 29.755 10.852 29.755 27.776z"
              fill="#fff"
              opacity=".25"
              stroke-width="99.509"
            />
            <path
              d="m16321 5402.3a59.706 59.706 0 0 1-59.706-59.706 59.706 59.706 0 0 1 59.706-59.706 59.706 59.706 0 0 1 59.705 59.706 59.706 59.706 0 0 1-59.705 59.706z"
              fill="#fff"
              opacity=".35"
              stroke-width="99.509"
            />
            <path
              d="m16419 7418.3v97.124h-223.9v-97.124z"
              fill="#ff3"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m16370 7418.3v97.124h-103.49v-97.124z"
              fill="#fff"
              opacity=".5"
              stroke-width="99.509"
            />
            <path
              d="m6941.4 11035 132 394 131-394"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m7316.4 11072 19-18 38-19h93l38 19 19 18 18 38v37l-18 57-225 225h243"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m7935.4 11429-131-188"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m7710.4 11429v-394h150l37 19 19 18 19 38v56l-19 38-19 18-37 19h-150"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <path
              d="m8047.4 11035 132 394 131-394"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="60"
            />
            <g fill="#fff" aria-label="2">
              <path
                d="m8453.3 11395h215.15v51.88h-289.31v-51.88q35.095-36.316 95.52-97.351 60.73-61.34 76.294-79.04 29.602-33.265 41.199-56.153 11.902-23.193 11.902-45.471 0-36.316-25.635-59.204-25.33-22.888-66.223-22.888-28.992 0-61.34 10.07-32.044 10.071-68.665 30.518v-62.256q37.232-14.953 69.58-22.583 32.349-7.629 59.204-7.629 70.801 0 112.92 35.4 42.114 35.401 42.114 94.605 0 28.076-10.681 53.405-10.376 25.025-38.147 59.205-7.6294 8.85-48.523 51.269-40.894 42.114-115.36 118.1z"
                fill="#fff"
                stroke-width="104.17"
              />
            </g>
            <path
              d="m13417 5710.9a144.79 144.79 0 0 0-144.79 144.79 144.79 144.79 0 0 0 144.79 144.79h144.78a144.79 144.79 0 0 0 144.78-144.79 144.79 144.79 0 0 0-144.78-144.79z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#8c8c8c"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <g transform="matrix(1 0 0 1 -14.815 -10.861)" shape-rendering="auto">
              <path
                d="m16339 617.72h559.64"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 575.4a42.318 42.318 0 0 0-42.318 42.318 42.318 42.318 0 0 0 42.318 42.318h559.64a42.318 42.318 0 0 0 42.318-42.318 42.318 42.318 0 0 0-42.318-42.318z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(1 0 0 1.0499 -16.629 -69.384)" shape-rendering="auto">
              <path
                d="m17153 1408.1v-540.34"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m17153 826.14a41.582 41.582 0 0 0-41.582 41.582v540.34a41.582 41.582 0 0 0 41.582 41.582 41.582 41.582 0 0 0 41.584-41.582v-540.34a41.582 41.582 0 0 0-41.584-41.582z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="translate(-30.229 -12.473)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <path
              d="m16064 1369.9a40 40 0 0 0-28.322 11.715 40 40 0 0 0 0 56.568l250 250a40 40 0 0 0 56.568 0 40 40 0 0 0 0-56.568l-250-250a40 40 0 0 0-28.246-11.715z"
              color="#000000"
              color-rendering="auto"
              dominant-baseline="auto"
              fill="#fff"
              image-rendering="auto"
              shape-rendering="auto"
              solid-color="#000000"
              stop-color="#000000"
              style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
            />
            <g transform="matrix(1.154 0 0 1 -155.83 2.2868)" shape-rendering="auto">
              <path
                d="m14784 1659h-500"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m14284 1619a40 40 0 0 0-40 40 40 40 0 0 0 40 40h500a40 40 0 0 0 40-40 40 40 0 0 0-40-40z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(0 -.92754 .9219 0 16341 15757)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(.91415 0 0 .94432 2205.2 841.4)" shape-rendering="auto">
              <path
                d="m16089 867.72 250-250"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill-opacity="0"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
              <path
                d="m16339 577.72a40 40 0 0 0-28.322 11.717l-250 250a40 40 0 0 0 0 56.568 40 40 0 0 0 56.568 0l250-250a40 40 0 0 0 0-56.568 40 40 0 0 0-28.246-11.717z"
                color="#000000"
                color-rendering="auto"
                dominant-baseline="auto"
                fill="#fff"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
              />
            </g>
            <g transform="matrix(423.92 0 0 423.92 -60785 -68589)" stroke-width=".8016">
              <g transform="matrix(.35283 0 0 .35283 181.31 163.21)">
                <path
                  d="m7.199 1.564-1.564-1.564h-4.072l-1.563 1.564v4.073l1.563 1.562h4.072l1.564-1.562z"
                  stroke-width=".8016"
                />
              </g>
              <g transform="matrix(.35283 0 0 .35283 181.31 163.21)">
                <path d="m2.451 2.45h2.297v2.299h-2.297z" fill="#8d8c8c" />
                <path d="m3.009 3.008h1.182v1.183h-1.182z" fill="#8c8663" />
                <path d="m4.19 3.008 0.558-0.558h-2.297l0.558 0.558z" fill="#b8af82" />
                <path d="m4.748 2.45v2.299l-0.558-0.559v-1.182z" fill="#80795b" />
                <path d="m4.748 4.749h-2.297l0.558-0.559h1.181z" fill="#5e5b43" />
                <path d="m3.009 4.19-0.558 0.559v-2.299l0.558 0.558z" fill="#9a916c" />
              </g>
              <g transform="matrix(.35283 0 0 .35283 178.82 163.21)">
                <path
                  d="m7.199 1.564-1.564-1.564h-4.072l-1.563 1.564v4.073l1.563 1.562h4.072l1.564-1.562z"
                  stroke-width=".8016"
                />
              </g>
              <g transform="matrix(.35283 0 0 .35283 178.82 163.21)">
                <path d="m2.451 2.45h2.297v2.299h-2.297z" fill="#8d8c8c" />
                <path d="m3.009 3.008h1.182v1.183h-1.182z" fill="#8c8663" />
                <path d="m4.19 3.008 0.558-0.558h-2.297l0.558 0.558z" fill="#b8af82" />
                <path d="m4.748 2.45v2.299l-0.558-0.559v-1.182z" fill="#80795b" />
                <path d="m4.748 4.749h-2.297l0.558-0.559h1.181z" fill="#5e5b43" />
                <path d="m3.009 4.19-0.558 0.559v-2.299l0.558 0.558z" fill="#9a916c" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}
