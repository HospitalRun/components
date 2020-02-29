import * as React from 'react'
import { mount } from 'enzyme'
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
    admin: true,
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
      className: 'pl-3 fixoverflow',
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
    },
  ],
}

describe('Table', () => {
  it('Table renders itself without crashing', () => {
    const tableWrapper = mount(<Table data={data} tableProperties={tableProperties} />)
    expect(tableWrapper.find('table')).toBeTruthy()
  })

  it('Data cell is rendered correctly', () => {
    const tableWrapper = mount(<Table data={data} tableProperties={tableProperties} />)
    expect(tableWrapper.containsMatchingElement(<div>John</div>)).toBeTruthy()
  })

  it('Pagination section is rendered correctly', () => {
    const tableWrapper = mount(<Table data={data} tableProperties={tableProperties} />)
    expect(tableWrapper.containsMatchingElement(<strong>1 of 1</strong>)).toBeTruthy()
  })

  it('Boolean column is rendered in green', () => {
    const tableWrapper = mount(<Table data={data} tableProperties={tableProperties} />)
    expect(
      tableWrapper.containsMatchingElement(<div style={{ color: 'green' }}>true</div>),
    ).toBeTruthy()
  })

  it('Pagination buttons are disabled due to results fitting in one page', () => {
    const tableWrapper = mount(<Table data={data} tableProperties={tableProperties} />)
    const paginationWrapper = tableWrapper.find('.pagination')
    const disabledButton = paginationWrapper.find('button').first()
    expect(disabledButton.props().disabled).toBe(true)
  })
})
