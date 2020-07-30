import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { create } from '@storybook/theming'

addDecorator(withInfo)
addDecorator((Story) => <Story />)

const theme = create({
  base: 'light',
  brandTitle: `HospitalRun Components`,
  brandUrl: 'https://github.com/HospitalRun/components',
  brandImage:
    'https://raw.githubusercontent.com/HospitalRun/design/master/logo/horizontal/logo-on-transparent.png',
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
})

addParameters({
  options: {
    theme,
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: true,
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/)

function loadStories() {
  require('../stories/welcome')
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
