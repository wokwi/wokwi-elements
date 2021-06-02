import { html } from 'lit-html';
import './franzininho-element';

export default {
  title: 'Franzininho',
  component: 'wokwi-franzininho',
  argTypes: {
    value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
  args: {
    value: 5,
  },
};

const Template = ({ value }) => html`<wokwi-franzininho value=${value}></wokwi-franzininho>`;

export const Default = Template.bind({});
Default.args = { value: 5 };

export const Large = Template.bind({});
Large.args = { value: 10 };
