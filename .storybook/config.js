import { configure } from '@storybook/web-components';

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
