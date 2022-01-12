import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ElementPin, GND, VCC } from './pin';

@customElement('wokwi-hx711')
export class HX711Element extends LitElement {
  @property() type: '5kg' | '50kg' | 'gauge' | undefined;

  readonly pinInfo: ElementPin[] = [
    { name: 'VCC', y: 53, x: 7, number: 1, signals: [VCC()] },
    { name: 'DT', y: 35, x: 7, number: 2, signals: [] },
    { name: 'SCK', y: 44, x: 7, number: 3, signals: [] },
    { name: 'GND', y: 25.5, x: 7, number: 4, signals: [GND()] },
  ];

  get dimension() {
    switch (this.type) {
      case '50kg':
        return { width: 580, height: 430 };
      case '5kg':
        return { width: 507, height: 269 };
      case 'gauge':
        return { width: 509, height: 200 };
      default:
        return { width: 580, height: 430 };
    }
  }

  renderSensor() {
    switch (this.type) {
      case 'gauge':
        return svg`
       <!-- Gauge Pressure Sensor -->
       <g
         transform="translate(412.5 99.5) scale(-1 1) translate(-94.5 -56.5)">
         <path d="m53.5 56.5l135-56" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 56.5l133-33" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m52.5 56.5l133-7" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m51.5 56.5l136 18" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <path
           d="m50.5 113c-14.636 0-26.5-25.296-26.5-56.5s11.864-56.5 26.5-56.5 26.5 25.296 26.5 56.5-11.864 56.5-26.5 56.5zm-1-88c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7zm0 77c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m0 54.1l33-5.1v17l-33-5.1v-6.8z" fill="#D8D8D8" stroke="#979797" />
         <circle cx="50" cy="57" r="20" fill="#D8D8D8" stroke="#979797" />
         <text
           transform="translate(50 56.5) scale(-1 1) translate(-50 -56.5)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="16"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="38.4414062" y="62">GP</tspan>
         </text>
       </g>`;
      case '5kg':
        return svg`
       <!-- 5kg Load Sensor -->
       <g
         transform="translate(413 133.5) scale(-1 1) translate(-94 -133.5)">
         <path
           d="m0.5 0.5v266h62v-266h-62zm31 123c-12.698 0-23-9.8445-23-22 0-12.155 10.302-22 23-22s23 9.8445 23 22c0 12.155-10.302 22-23 22zm0 57c-12.698 0-23-9.8445-23-22s10.302-22 23-22 23 9.8445 23 22-10.302 22-23 22z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m53.5 51.5l133-10" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 57.5l131 8" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m55.5 64.5l130 27" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m56.5 71.5l131 43" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <rect x="3.5" y="43.5" width="57" height="33" rx="11" fill="url(#e)" stroke="#979797" />
         <text
           transform="translate(28.5 245) scale(-1 1) translate(-28.5 -245)"
           fill="#FBFBFB"
           font-family="Arial-ItalicMT, Arial"
           font-size="14"
           font-style="italic"
         >
           <tspan x="17.2138672" y="250">5kg</tspan>
         </text>
       </g>`;
      case '50kg':
      default:
        return svg`
       <!-- 50kg Load Sensor -->
       <g
         transform="translate(448 212) scale(-1 1) translate(-131 -212)"
       >
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 106)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 212)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <g transform="translate(0 318)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path d="m128.5 53.5h82" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 68.5h60" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5h50" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 94.5h48" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5h36" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 371.25h94" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5v253" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 265.25h83" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 96.5v169" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 71.5v88" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5v9" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 159.25h71" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.5v212" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m147.25 58v212" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m162.25 48v317.5" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.25 154.5v104" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m129 376.23h6" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.15h-8" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 58.15h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 48.208h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 154.1h-52" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 260.2h-51" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 366.2h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 270.25h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <text
           transform="translate(94.5 265) scale(-1 1) translate(-94.5 -265)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="14"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="87.1137695" y="270">A-</tspan>
           <tspan x="87.5" y="164">E-</tspan>
           <tspan x="85.7431641" y="57">E+</tspan>
           <tspan x="86.2431641" y="377">A+</tspan>
         </text>
       </g>`;
    }
  }

  render() {
    const { width, height } = this.dimension;
    return html`
      <style>
        text {
          user-select: none;
        }
      </style>
      <svg
        width="${+width / 10}mm"
        height="${+height / 10}mm"
        viewBox="0 0 ${width} ${height}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="f"
            d="m317 74c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-120c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-298 98c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm9.5 115c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm0-156c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm-28.5-34h340v200h-340v-200z"
          />
          <path id="d" d="m0 0h340v200h-340v-200z" />
          <mask id="g" x="0" y="0" width="340" height="200" fill="white">
            <use xlink:href="#d" />
          </mask>
          <linearGradient id="a" y1="50%" y2="50%">
            <stop stop-color="#767676" offset="0" />
            <stop stop-color="#FFFEDF" offset="1" />
          </linearGradient>
          <radialGradient id="b" r="100%">
            <stop stop-color="#8A8A8A" offset="0" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="e"
            r="100%"
            gradientTransform="translate(.5 .5) scale(.58621 1) rotate(90) translate(-.5 -.5)"
          >
            <stop stop-color="#fff" offset="0" />
            <stop stop-color="#E7E7E7" offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="c" fill="white">
            <use xlink:href="#f" />
          </mask>
          <g
            fill="#1C8944"
            mask="url(#c)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity=".53643"
            stroke-width="4"
          >
            <use mask="url(#g)" xlink:href="#d" />
          </g>
          <g fill="#D2CDC3" mask="url(#c)">
            <g transform="translate(10 34)">
              <rect y="25" width="17" height="18" />
              <rect x="298" width="17" height="18" />
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(6 27)">
              <rect x="298" y="1" width="26" height="147" stroke="#fff" stroke-width="2" />
              <rect x="1" y="25" width="25" height="102" stroke="#fff" stroke-width="2" />
              <text
                font-family="Arial-BoldItalicMT, Arial"
                font-size="14"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="28.4448242" y="45" fill="#FBFBFB">GND</tspan>
                <tspan x="28.1689453" y="69" fill="#FBFBFB">DT</tspan>
                <tspan x="27.2207031" y="94" fill="#FBFBFB">SCK</tspan>
                <tspan x="28.2207031" y="119" fill="#FBFBFB">VCC</tspan>
                <tspan x="274" y="45" fill="#FBFBFB">E-</tspan>
                <tspan x="274.492188" y="18" fill="#FBFBFB">E+</tspan>
                <tspan x="274.058594" y="117" fill="#FBFBFB">B-</tspan>
                <tspan x="274.050781" y="140" fill="#FBFBFB">B+</tspan>
                <tspan x="274.058594" y="69" fill="#FBFBFB">A-</tspan>
                <tspan x="274.050781" y="94" fill="#FBFBFB">A+</tspan>
                <tspan x="98.2929688" y="160" fill="#FBFBFB">Load Cell Amp</tspan>
                <tspan x="126.132812" y="140" fill="#FBFBFB">HX711</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(122 28)">
              <rect
                x="14.5"
                y=".5"
                width="36"
                height="98"
                fill="#434341"
                fill-rule="evenodd"
                stroke="#3B3939"
              />
              <rect x="51" y="2" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="15" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="27" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="40" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="52" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="65" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="77" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="90" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(7 5) scale(-1 1) translate(-7 -5)"
                y="2"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 18) scale(-1 1) translate(-7 -18)"
                y="15"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 31) scale(-1 1) translate(-7 -31)"
                y="28"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 43) scale(-1 1) translate(-7 -43)"
                y="40"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 56) scale(-1 1) translate(-7 -56)"
                y="53"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 68) scale(-1 1) translate(-7 -68)"
                y="65"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 80) scale(-1 1) translate(-7 -80)"
                y="77"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 93) scale(-1 1) translate(-7 -93)"
                y="90"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <circle
                cx="20"
                cy="5"
                r="3"
                fill="#211919"
                fill-opacity=".54978"
                fill-rule="evenodd"
                stroke="#000"
              />
              <text
                transform="translate(27 52) rotate(-90) translate(-27 -52)"
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="9.09960938" y="56" fill="#BBBBBB">HX711</tspan>
              </text>
            </g>
          </g>
          ${this.renderSensor()}
        </g>
      </svg>
    `;
  }
}
