import theme from './theme';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: theme
  },
  options: {
    storySort: {
      order: ['Welcome'], 
    },
  }
}