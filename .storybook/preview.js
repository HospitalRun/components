import { configure, addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react'
import { Toaster } from '../src'
import { withInfo } from '@storybook/addon-info';
// this should remain the first decorator
addDecorator(
  withInfo({
    inline: true,
    source: true,
  })
);

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

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/)

function loadStories() {
  require('../stories/welcome')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

