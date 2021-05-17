import { html } from 'lit';
import { drawWokwiW } from './utils/logo';
import './ili9341-element';

export default {
  title: 'ILI9341',
  component: 'wokwi-ili9341',
};

function drawLogo(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }
  setInterval(() => {
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawWokwiW(ctx, 6, 120 * Math.random(), 220 * Math.random());
  }, 1000);
}

export const Default = () => html` <wokwi-ili9341></wokwi-ili9341> `;

export const Logo = () =>
  html` <wokwi-ili9341 @canvas-ready=${(e) => drawLogo(e.target.canvas)}></wokwi-ili9341> `;
