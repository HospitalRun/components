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

  it('BarGraph renders itself without crashing with horizontal prop and time axis type', () => {
    const wrapper = mount(
      <BarGraph
        title="Test Graph"
        horizontal
        datasets={[
          {
            backgroundColor: 'blue',
            label: 'Months',
            data: [
              { x: new Date(), y: 12 },
              { x: new Date(), y: 11 },
              { x: new Date(), y: 10 },
            ],
          },
        ]}
        xAxes={[{ label: 'Months', type: 'time' }]}
        yAxes={[{ label: 'Numbers', type: 'linear' }]}
      />,
    )

    expect(wrapper.find(HTMLCanvasElement)).toHaveLength(1)
  })

  it('BarGraph defaults axis type to category', () => {
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
        xAxes={[{ label: 'Months' } as any]}
        yAxes={[{ label: 'Numbers', type: 'linear' }]}
      />,
    )

    expect(wrapper.find(HTMLCanvasElement)).toHaveLength(1)
  })

  it('BarGraph with fontSize and fontColor', () => {
    const wrapper = mount(
      <BarGraph
        title="Test Graph"
        titleFontSize={10}
        titleFontColor="red"
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
        xAxes={[{ label: 'Months' } as any]}
        yAxes={[{ label: 'Numbers', type: 'linear' }]}
      />,
    )

    expect(wrapper.find(HTMLCanvasElement)).toHaveLength(1)
  })
})
