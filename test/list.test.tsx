import * as React from 'react'
import { shallow } from 'enzyme'
import { ListGroup } from 'react-bootstrap'
import { List } from '../src'

describe('List', () => {
  it('List renders itself without crashing', () => {
    const listWrapper = shallow(<List>A list group</List>)
    expect(listWrapper.find(ListGroup)).toHaveLength(1)
  })

  it('List renders as proper variant when the layout prop is passed as flush', () => {
    const listWrapper = shallow(<List layout="flush">A list group</List>)
    const bootstrapList = listWrapper.find(ListGroup)
    expect(bootstrapList.props().variant).toEqual('flush')
  })

  it('List can render children elements', () => {
    const listWrapper = shallow(<List>Child element</List>)
    const bootstrapList = listWrapper.find(ListGroup)
    expect(bootstrapList.text()).toEqual('Child element')
  })
})
