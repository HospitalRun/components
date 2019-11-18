import React from 'react'
import { storiesOf } from '@storybook/react'

import { LineGraph, PieGraph, BarGraph } from '../src'

storiesOf('Graphs', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('Bar Graph', () => (
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
    />
  ))
  .add('Bar Graph - Horizontal', () => (
    <BarGraph
      horizontal
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
    />
  ))
  .add('Line Graph', () => (
    <LineGraph
      title="Test Graph"
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
    />
  ))
  .add('Pie Graph', () => (
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
    />
  ))
  .add('Pie Graph - Doughnut', () => (
    <PieGraph
      doughnut
      title="Pie Graph - Doughnut"
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
    />
  ))
