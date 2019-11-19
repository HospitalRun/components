import * as React from 'react'
import { mount } from 'enzyme'
import { BarGraph } from '../src'

describe('BarGraph', () => {
  it('BarGraph renders itself without crashing', () => {
    const wrapper = mount(
      <BarGraph
        title="Test Graph"
        datasets={[
          {
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
