import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Spinner } from '../src/components/Spinner'

describe('Spinner', () => {
  it('Spinner renders itself without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Spinner type="BarLoader" loading={true} color={'orange'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
