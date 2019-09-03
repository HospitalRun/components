import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PieGraph } from '../src/components/Graph'

describe('PieGraph', () => {
  it('PieGraph renders itself without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <PieGraph
        title="Pie Graph"
        datasets={[
          {
            backgroundColor: 'blue',
            label: 'Months',
            data: [
              { x: 'January', y: 12, backgroundColor: 'red' },
              { x: 'February', y: 11, backgroundColor: 'blue' },
              { x: 'March', y: 10, backgroundColor: 'yellow' },
            ],
          },
        ]}
      />,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
