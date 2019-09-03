import { configure, addParameters } from '@storybook/react'

addParameters({
  options: {
    name: 'HospitalRun',
    url: 'https://github.com/HospitalRun/components',
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/)

function loadStories() {
  require('../stories/welcome')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
