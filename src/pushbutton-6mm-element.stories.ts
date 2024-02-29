import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import './pushbutton-6mm-element';

export default {
  title: 'Pushbutton 6mm',
  component: 'wokwi-pushbutton-6mm',
};

export const Red = () =>
  html`
    <wokwi-pushbutton-6mm
      color="red"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton-6mm>
  `;

export const Green = () =>
  html`
    <wokwi-pushbutton-6mm
      color="green"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton-6mm>
  `;

export const RedWithLabel = () =>
  html`
    <wokwi-pushbutton-6mm
      color="red"
      label="Press me!"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton-6mm>
  `;

export const RedWithLongLabel = () =>
  html`
    <wokwi-pushbutton-6mm
      color="red"
      label="I have a really long label..."
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton-6mm>
  `;

export const FourButtons = () =>
  html`
    <wokwi-pushbutton-6mm
      color="red"
      @button-press=${action('red button-press')}
      @button-release=${action('red button-release')}
    ></wokwi-pushbutton-6mm>
    <wokwi-pushbutton-6mm
      color="green"
      @button-press=${action('green button-press')}
      @button-release=${action('green button-release')}
    ></wokwi-pushbutton-6mm>
    <wokwi-pushbutton-6mm
      color="blue"
      @button-press=${action('blue button-press')}
      @button-release=${action('blue button-release')}
    ></wokwi-pushbutton-6mm>
    <wokwi-pushbutton-6mm
      color="white"
      @button-press=${action('white button-press')}
      @button-release=${action('white button-release')}
    ></wokwi-pushbutton-6mm>
  `;
