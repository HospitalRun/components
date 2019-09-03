import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LineGraph } from '../src/components/Graph'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <LineGraph
        title="Test Graph"
        datasets={[
          {
            borderColor: 'red',
            backgroundColor: 'blue',
            label: 'Months',
            data: [{ x: 'January', y: 12 }, { x: 'February', y: 11 }, { x: 'March', y: 10 }],
          },
        ]}
        xAxes={[{ label: 'Months', type: 'category' }]}
        yAxes={[{ label: 'Numbers', type: 'linear' }]}
      />,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
