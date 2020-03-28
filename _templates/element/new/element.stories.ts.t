---
to: src/<%= name %>-element.stories.ts
---
import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './<%= name %>-element';

storiesOf('<%= h.changeCase.title(h.className(name)) %>', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`
      <wokwi-<%= name %>
        value=${number('value', 5, { min: 1, max: 10 })}
      ></wokwi-<%= name %>>
    `
  );
