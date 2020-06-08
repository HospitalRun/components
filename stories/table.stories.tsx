import { storiesOf } from '@storybook/react'
import React from 'react'

import { Table, Toast, Toaster } from '../src'

storiesOf('Table', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Demo Table', () => {
    const ID = 'id'
    const NAME = 'name'
    const PHONE = 'phone'
    const DRINKS = 'drinks'

    const getDrinksList = (row: any) => (
      <ul>
        {row[DRINKS].map((d: string) => (
          <li>{d}</li>
        ))}
      </ul>
    )

    const columns = [
      { key: ID, label: 'ID' },
      { key: NAME, label: 'Name' },
      { key: PHONE, label: 'Phone #' },
      { key: DRINKS, label: 'Drinks?', accessor: getDrinksList },
    ]

    const data = [
      {
        [ID]: 333,
        [NAME]: 'Mickey',
        [PHONE]: '789-777',
        [DRINKS]: ['milk', 'tea'],
      },
      {
        [ID]: 777,
        [NAME]: 'Minnie',
        [PHONE]: '333-123',
        [DRINKS]: ['water', 'coffee'],
      },
    ]

    const actions = [
      {
        label: 'Delete',
        action: (row: any) => {
          Toast('error', 'a delete clicked', `will delete ID=${row[ID]}`)
        },
      },
    ]

    const getID = (row: any) => row[ID]

    const onRowClick = (row: any) => {
      Toast('success', 'a row clicked', `${row[NAME]} @ ${row[PHONE]}`)
    }

    return (
      <div>
        <Table
          columns={columns}
          data={data}
          actions={actions}
          getID={getID}
          onRowClick={onRowClick}
        />

        <Toaster autoClose={1400} hideProgressBar draggable />
      </div>
    )
  })
