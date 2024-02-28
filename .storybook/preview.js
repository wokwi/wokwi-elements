export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

// Configure Storybook Docs Addon for Web Components
setCustomElements(customElements);
