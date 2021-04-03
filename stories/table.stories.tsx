import { storiesOf } from '@storybook/react'

import { Table, Toast, Toaster } from '../src'
import { ButtonVariant } from '../src/interfaces'

interface Data {
  id: number
  name: string
  phone: string
  drinks: string[]
}

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
    const getDrinksList = (row: any) => (
      <ul>
        {row.drinks.map((d: string) => (
          <li>{d}</li>
        ))}
      </ul>
    )

    const columns = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'phone', label: 'Phone #' },
      { key: 'drinks', label: 'Drinks?', formatter: getDrinksList },
    ]

    const data: Data[] = [
      {
        id: 333,
        name: 'Mickey',
        phone: '789-777',
        drinks: ['milk', 'tea'],
      },
      {
        id: 777,
        name: 'Minnie',
        phone: '333-123',
        drinks: ['water', 'coffee'],
      },
    ]

    const actions = [
      {
        label: 'Edit',
        action: (row: any) => {
          Toast('info', 'an edit clicked', `will edit ID=${row.id}`)
        },
        buttonColor: 'info' as ButtonVariant,
      },
      {
        label: 'Delete',
        action: (row: any) => {
          Toast('error', 'a delete clicked', `will delete ID=${row.id}`)
        },
        buttonColor: 'danger' as ButtonVariant,
      },
    ]

    const getID = (row: any): string => row.id

    const onRowClick = (row: any) => {
      Toast('success', 'a row clicked', `${row.name} @ ${row.phone}`)
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
