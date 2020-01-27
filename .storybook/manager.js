import { addons } from '@storybook/addons';
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'
import '@storybook/addon-docs/register'
import StorybookTheme from './storybookTheme';

addons.setConfig({
  theme: StorybookTheme,
});
