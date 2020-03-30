import { configure } from '@storybook/web-components';
import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

// Configure Storybook Docs Addon for Web Components
setCustomElements(customElements);
