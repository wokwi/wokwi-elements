import { configure } from '@storybook/polymer';

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.ts$/), module);
