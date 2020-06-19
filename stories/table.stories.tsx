import { storiesOf } from '@storybook/react'
import { sortBy as sortArrayBy } from 'lodash'
import React from 'react'

import { Table, Toast, Toaster, withDataOps } from '../src'
import { ButtonVariant } from '../src/interfaces'

// set up
const ID = 'id'
const NAME = 'name'
const PHONE = 'phone'
const DRINKS = 'drinks'

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
  {
    [ID]: 789,
    [NAME]: 'Domo',
    [PHONE]: '111-111',
    [DRINKS]: ['?'],
  },
  {
    [ID]: 800,
    [NAME]: 'Hello Kitty',
    [PHONE]: '333-333',
    [DRINKS]: ['!'],
  },
  {
    [ID]: 816,
    [NAME]: 'Earth',
    [PHONE]: '010',
    [DRINKS]: ['?'],
  },
  {
    [ID]: 888,
    [NAME]: 'Water',
    [PHONE]: '002',
    [DRINKS]: ['!'],
  },
  {
    [ID]: 890,
    [NAME]: 'Fire',
    [PHONE]: '300',
    [DRINKS]: ['?'],
  },
  {
    [ID]: 900,
    [NAME]: 'Air',
    [PHONE]: '004',
    [DRINKS]: ['!'],
  },
]

const getDrinksList = (row: any) => (
  <ul>
    {row[DRINKS].map((d: string) => (
      <li>{d}</li>
    ))}
  </ul>
)

const columns = [
  { key: ID, label: 'ID', sortable: true },
  { key: NAME, label: 'Name', sortable: true },
  { key: PHONE, label: 'Phone #' },
  { key: DRINKS, label: 'Drinks?', formatter: getDrinksList },
]

const actions = [
  {
    label: 'Edit',
    action: (row: any) => {
      Toast('info', 'an edit clicked', `will edit ID=${row[ID]}`)
    },
    buttonColor: 'info' as ButtonVariant,
  },
  {
    label: 'Delete',
    action: (row: any) => {
      Toast('error', 'a delete clicked', `will delete ID=${row[ID]}`)
    },
    buttonColor: 'danger' as ButtonVariant,
  },
]

const getID = (row: any) => row[ID]

const onRowClick = (row: any) => {
  Toast('success', 'a row clicked', `${row[NAME]} @ ${row[PHONE]}`)
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
  .add('Simple table', () => (
    <div>
      <Table
        columns={columns}
        data={data.slice(0, 2)}
        actions={actions}
        getID={getID}
        onRowClick={onRowClick}
      />

      <Toaster autoClose={1400} hideProgressBar draggable />
    </div>
  ))
  .add('withDataOps table', () => {
    // In frontend, fetchData will be a call to a database using the parameters
    // Below mimicks a db call

    const fetchData = (
      sortBy: string,
      sortAsc: boolean,
      _queryKey: any, // hardcoded as id below
      startKey: number,
      endKey: number,
      currentKey: number,
      limit: number,
    ) => {
      let d = [...data]
      d = sortArrayBy(d, sortBy)
      if (!sortAsc) {
        d.reverse()
      }

      let startIndex = 0
      if (currentKey) {
        for (let i = 0; i < d.length; i += 1) {
          if (data[i].id === currentKey) {
            startIndex = i
          }
        }
      } else if (startKey) {
        for (let i = 0; i < d.length; i += 1) {
          if (d[i].id === startKey) {
            if (i < d.length - 1) {
              startIndex = i + 1
            } else {
              return []
            }
          }
        }
      } else if (endKey) {
        for (let i = 0; i < d.length; i += 1) {
          if (d[i].id === endKey) {
            startIndex = Math.max(i - limit, 0)
          }
        }
      }

      return d.slice(startIndex, startIndex + limit)
    }

    return (
      <div>
        {withDataOps(Table, fetchData as any, ID, {
          columns,
          actions,
          getID,
          onRowClick,
        })}
        <Toaster autoClose={1400} hideProgressBar draggable />
      </div>
    )
  })
