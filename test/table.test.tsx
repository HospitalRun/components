import { mount } from 'enzyme'
import * as React from 'react'

import { Table } from '../src'

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

const getID = (row: any) => row[ID]

describe('Table', () => {
  it('Table renders itself without crashing', () => {
    const tableWrapper = mount(<Table columns={columns} data={data} getID={getID} />)
    expect(tableWrapper.find('table')).toBeTruthy()
  })

  it('A text cell is rendered correctly', () => {
    const tableWrapper = mount(<Table columns={columns} data={data} getID={getID} />)
    expect(tableWrapper.containsMatchingElement(<td>Minnie</td>)).toBeTruthy()
  })
})
