import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './ssd1306-128x64-element';

storiesOf('Ssd1306 Element', module)
  .addParameters({ component: 'wokwi-ssd1306-128x64-element' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`
      <wokwi-ssd1306-128x64-element
        value=${number('value', 5, { min: 1, max: 10 })}
      ></wokwi-ssd1306-128x64-element>
    `
  );
