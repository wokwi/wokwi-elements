export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

import { setCustomElements } from '@storybook/web-components-vite';
import customElements from '../custom-elements.json';

import '../src/utils/show-pins-element';

// Configure Storybook Docs Addon for Web Components
setCustomElements(customElements);
