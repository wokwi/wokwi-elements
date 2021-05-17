import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import './pushbutton-element';

export default {
  title: 'Pushbutton',
  component: 'wokwi-pushbutton',
};

export const red = () =>
  html`
    <wokwi-pushbutton
      color="red"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton>
  `;

export const green = () =>
  html`
    <wokwi-pushbutton
      color="green"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton>
  `;

export const redWithLabel = () =>
  html`
    <wokwi-pushbutton
      color="red"
      label="Press me!"
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton>
  `;

export const redWithLongLabel = () =>
  html`
    <wokwi-pushbutton
      color="red"
      label="I have a really long label..."
      @button-press=${action('button-press')}
      @button-release=${action('button-release')}
    ></wokwi-pushbutton>
  `;

export const fourButtons = () =>
  html`
    <wokwi-pushbutton
      color="red"
      @button-press=${action('red button-press')}
      @button-release=${action('red button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="green"
      @button-press=${action('green button-press')}
      @button-release=${action('green button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="blue"
      @button-press=${action('blue button-press')}
      @button-release=${action('blue button-release')}
    ></wokwi-pushbutton>
    <wokwi-pushbutton
      color="white"
      @button-press=${action('white button-press')}
      @button-release=${action('white button-release')}
    ></wokwi-pushbutton>
  `;
