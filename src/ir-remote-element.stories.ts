import { html } from 'lit';
import { action } from 'storybook/actions';
import './ir-remote-element';

export default {
  title: 'IR Remote',
  component: 'wokwi-ir-remote',
};

export const Default = () =>
  html`<wokwi-ir-remote
    @button-press=${action('button-press')}
    @button-release=${action('button-release')}
  ></wokwi-ir-remote>`;
