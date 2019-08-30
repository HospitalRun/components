import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

addParameters({
  options: {
    /**
     * Name to display in the top left corner
     * @type {String}
     */
    name: 'HospitalRun',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/HospitalRun/components',

    theme: themes.dark,
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
