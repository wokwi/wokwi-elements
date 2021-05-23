import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import './ir-remote-element';

export default {
  title: 'IR Remote',
  component: 'wokwi-ir-remote',
};

export const Default = () => html`<wokwi-ir-remote
  @button-press=${action('button-press')}
  @button-release=${action('button-release')}
></wokwi-ir-remote>`;
