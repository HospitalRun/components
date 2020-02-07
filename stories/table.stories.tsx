import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table } from '../src'

storiesOf('Table', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em', textAlign: 'center' }}>{storyFn()}</div>
  ))
  .add('Stupid Table', () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 20,
        status: 'married',
      },
    ]

    return (
      <div>
        <Table data={data} />
      </div>
    )
  })
