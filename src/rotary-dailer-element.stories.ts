import { html } from 'lit';
import { action } from 'storybook/actions';
import './rotary-dialer-element';

export default {
  title: 'Rotary Dialer',
  component: 'wokwi-rotary-dialer',
};

export const Default = () => html`
  <wokwi-rotary-dialer
    @dial=${action('dial')}
    @dial-start=${action('dial-start')}
    @dial-end=${action('dial-end')}
  ></wokwi-rotary-dialer>
`;
