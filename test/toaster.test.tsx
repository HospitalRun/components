import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Toaster } from '../src/components/Toaster';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<span></span>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
