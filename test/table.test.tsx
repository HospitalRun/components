import { mount } from 'enzyme'
import * as React from 'react'
import { Button } from 'react-bootstrap'

import { Table } from '../src'

// setup
const ID = 'id'
const NAME = 'name'
const PHONE = 'phone'
const DRINKS = 'drinks'

const getDrinksList = (row: any) => (
  <ul>
    {row[DRINKS].map((d: string) => (
      <li key={d}>{d}</li>
    ))}
  </ul>
)

const columns = [
  { key: ID, label: 'ID' },
  { key: NAME, label: 'Name' },
  { key: PHONE, label: 'Phone #' },
  { key: DRINKS, label: 'Drinks?', formatter: getDrinksList },
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

const onClickAction0Spy = jest.fn()
const onClickAction1Spy = jest.fn()

const actions = [
  {
    label: 'action0',
    action: onClickAction0Spy,
  },
  {
    label: 'action1',
    action: onClickAction1Spy,
  },
]

const getID = (row: any) => row[ID]

const onRowClickSpy = jest.fn()

describe('Table', () => {
  it('should render itself without crashing', () => {
    const tableWrapper = mount(<Table columns={columns} data={data} getID={getID} />)
    expect(tableWrapper.find('table')).toHaveLength(1)
  })

  it('should render the header row with provided texts', () => {
    const tableWrapper = mount(
      <Table columns={columns} data={data} actions={actions} getID={getID} />,
    )
    const headerCellWrappers = tableWrapper.find('th')

    headerCellWrappers.forEach((cell, i) => {
      if (i === headerCellWrappers.length - 1) {
        expect(cell.text()).toEqual('Actions')
      } else {
        expect(cell.text()).toEqual(columns[i].label)
      }
    })
  })

  it('should render a text cell with a provided text', () => {
    const tableWrapper = mount(<Table columns={columns} data={data} getID={getID} />)
    const bodyWrapper = tableWrapper.find('tbody')
    const firstRowSecondColWrapper = bodyWrapper.find('tr').at(0).find('td').at(1)

    expect(firstRowSecondColWrapper.text()).toEqual('Mickey')
  })

  it('should format cell content when a formatter is provided', () => {
    const tableWrapper = mount(<Table columns={columns} data={data} getID={getID} />)
    const bodyWrapper = tableWrapper.find('tbody')
    const firstRowFourthColWrapper = bodyWrapper.find('tr').at(0).find('td').at(3)

    expect(
      firstRowFourthColWrapper.containsMatchingElement(
        <ul>
          <li>milk</li>
          <li>tea</li>
        </ul>,
      ),
    ).toBeTruthy()
  })

  it('should call the onClick callback when a row is clicked', () => {
    const tableWrapper = mount(
      <Table
        columns={columns}
        data={data}
        actions={actions}
        getID={getID}
        onRowClick={onRowClickSpy}
      />,
    )
    const bodyWrapper = tableWrapper.find('tbody')
    const rowWrapper = bodyWrapper.find('tr').at(0)
    rowWrapper.simulate('click')

    expect(onRowClickSpy).toHaveBeenCalledTimes(1)
  })

  it('should call the onClick callback when an action button is clicked', () => {
    const tableWrapper = mount(
      <Table columns={columns} data={data} actions={actions} getID={getID} />,
    )
    const bodyWrapper = tableWrapper.find('tbody')
    const rowWrapper = bodyWrapper.find('tr').at(0)
    const cellWrappers = rowWrapper.find('td')
    const actionsCellWrapper = cellWrappers.at(cellWrappers.length - 1)

    const action0ButtonWrapper = actionsCellWrapper.find(Button).at(0)
    action0ButtonWrapper.simulate('click')
    expect(onClickAction0Spy).toHaveBeenCalledTimes(1)

    const action1ButtonWrapper = actionsCellWrapper.find(Button).at(1)
    action1ButtonWrapper.simulate('click')
    expect(onClickAction1Spy).toHaveBeenCalledTimes(1)
  })
})
