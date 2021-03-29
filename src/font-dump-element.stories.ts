import { html } from 'lit-html';
import './font-dump-element';
import { fontA02 } from './lcd1602-font-a02';

export default {
  title: 'Font Dump',
  component: 'wokwi-font-dump',
};

export const fontA00p1 = () => html`<wokwi-font-dump from="32" to="127" />`;
fontA00p1.storyName = 'Font A00 32…127';

export const fontA00p2 = () => html`<wokwi-font-dump from="160" to="255" />`;
fontA00p2.storyName = 'Font A00 160…255';

export const fontA02p1 = () =>
  html`<wokwi-font-dump from="16" to="127" lines="16" .font=${fontA02} />`;
fontA02p1.storyName = 'Font A02 16…127';

export const fontA02p2 = () =>
  html`<wokwi-font-dump from="128" to="255" lines="19" .font=${fontA02} />`;
fontA02p2.storyName = 'Font A02 128…255';
