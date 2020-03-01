import * as React from 'react'
import { mount } from 'enzyme'
import { LineGraph } from '../src'

describe('LineGraph', () => {
  it('LineGraph renders itself without crashing', () => {
    const wrapper = mount(
      <LineGraph
        title="Test Graph"
        fill
        datasets={[
          {
            borderColor: 'red',
            backgroundColor: 'blue',
            label: 'Months',
            data: [
              { x: 'January', y: 12 },
              { x: 'February', y: 11 },
              { x: 'March', y: 10 },
            ],
          },
        ]}
        xAxes={[{ label: 'Months', type: 'category' }]}
        yAxes={[{ label: 'Numbers', type: 'linear' }]}
      />,
    )

    expect(wrapper.find(HTMLCanvasElement)).toHaveLength(1)
  })
})
