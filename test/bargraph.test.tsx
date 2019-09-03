import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { BarGraph } from '../src/components/Graph'

describe('BarGraph', () => {
  it('BarGraph renders itself without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      (
        <BarGraph
          title="Test Graph"
          datasets={[
            {
              backgroundColor: 'blue',
              label: 'Months',
              data: [{ x: 'January', y: 12 }, { x: 'February', y: 11 }, { x: 'March', y: 10 }],
            },
          ]}
          xAxes={[{ label: 'Months', type: 'category' }]}
          yAxes={[{ label: 'Numbers', type: 'linear' }]}
        />
      ) as any,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
