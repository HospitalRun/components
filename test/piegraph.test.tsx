import * as React from 'react'
import { mount } from 'enzyme'
import { PieGraph } from '../src'

describe('PieGraph', () => {
  it('PieGraph renders itself without crashing', () => {
    const wrapper = mount(
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
    )

    expect(wrapper.find(HTMLCanvasElement)).toHaveLength(1)
  })
})
