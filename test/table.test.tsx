import * as React from 'react'
import { shallow } from 'enzyme'
import { Table } from '../src'

const data = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Jack',
    lastName: 'Doe',
    age: 21,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Jason',
    lastName: 'Gutemberg',
    age: 22,
    status: 'married',
    admin: false,
    date: new Date().toString(),
  },
]

const tableProperties: any = {
  tableClassNames: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
    },
  ],
}

describe('Table', () => {
  it('Table renders itself without crashing', () => {
    const tableWrapper = shallow(<Table data={data} tableProperties={tableProperties} />)
    expect(tableWrapper.find('table')).toHaveLength(1)
  })
})
