
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { configure, setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

// Configure Storybook Docs Addon for Web Components
setCustomElements(customElements);

// force full reload to not re-register web components
const req = require.context('../src', true, /\.stories\.(ts|js)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
