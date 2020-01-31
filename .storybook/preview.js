import { configure, addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react'
import { Toaster } from '../src'


addDecorator(storyFn => <div>
{storyFn()}
<Toaster autoClose={800} hideProgressBar draggable />
</div>);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    name: 'HospitalRun',
    url: 'https://github.com/HospitalRun/components',
    showPanel: false,
  },
})


