import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Spinner } from '../src/components/Spinner'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Spinner type="BarLoader" loading={true} color={'orange'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
