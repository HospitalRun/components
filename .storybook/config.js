import { configure, addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming'

addDecorator(withInfo)

addParameters({
  options: {
    name: 'HospitalRun',
    url: 'https://github.com/HospitalRun/components',
    theme: themes,
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/)

function loadStories() {
  require('../stories/welcome')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
