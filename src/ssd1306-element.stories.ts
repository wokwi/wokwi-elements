import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './ssd1306-element';

storiesOf('Ssd1306 Element', module)
  .addParameters({ component: 'wokwi-ssd1306-element' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`
      <wokwi-ssd1306-element
        value=${number('value', 5, { min: 1, max: 10 })}
      ></wokwi-ssd1306-element>
    `
  );
