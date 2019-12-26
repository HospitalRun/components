import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { ListGroupItem } from 'react-bootstrap'
import { ListItem } from '../src'

describe('ListItem', () => {
  it('ListItem renders itself without crashing', () => {
    const listItemWrapper = shallow(<ListItem>A list item</ListItem>)
    expect(listItemWrapper.find(ListGroupItem)).toHaveLength(1)
  })

  it('ListItem renders as proper variant when the color prop is passed', () => {
    const listItemWrapper = shallow(<ListItem color="primary">A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().variant).toEqual('primary')
  })

  it('ListItem renders with additional styles when the action prop is passed', () => {
    const listItemWrapper = shallow(<ListItem action>A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().action).toEqual(true)

    const listItemWrapperWithColor = shallow(
      <ListItem action color="primary">
        A list item
      </ListItem>,
    )
    const bootstrapListItemWithColor = listItemWrapperWithColor.find(ListGroupItem)
    expect(bootstrapListItemWithColor.props().action).toEqual(true)
    expect(bootstrapListItemWithColor.props().variant).toEqual('primary')
  })

  it('ListItem renders as active when the active prop is passed', () => {
    const listItemWrapper = shallow(<ListItem active>A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().active).toEqual(true)
  })

  it('ListItem renders as disabled when the disabled prop is passed', () => {
    const listItemWrapper = shallow(<ListItem disabled>A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().disabled).toEqual(true)
  })

  it('ListItem navigates to link when the href prop is passed', () => {
    const listItemWrapper = shallow(<ListItem href="https://www.google.com">A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().href).toEqual('https://www.google.com')

    const listItemWrapperWithAction = shallow(
      <ListItem action href="https://www.google.com">
        A list item
      </ListItem>,
    )
    const bootstrapListItemWithAction = listItemWrapperWithAction.find(ListGroupItem)
    expect(bootstrapListItemWithAction.props().href).toEqual('https://www.google.com')
    expect(bootstrapListItemWithAction.props().action).toEqual(true)
  })

  it('ListItem handles on click event', () => {
    const onListItemClick = sinon.spy()
    const wrapper = shallow(<ListItem onClick={onListItemClick}>A list item</ListItem>)
    wrapper.simulate('click')
    expect(onListItemClick).toHaveProperty('callCount', 1)
  })

  it('ListItem can render children elements', () => {
    const listItemWrapper = shallow(<ListItem>Child element</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.text()).toEqual('Child element')
  })

  it('ListItem can use custom class', () => {
    const listItemWrapper = shallow(<ListItem className="customClass">A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().className).toEqual('customClass')
  })

  it('ListItem can use custom style', () => {
    const listItemWrapper = shallow(<ListItem style={{ background: 'red' }}> A list item</ListItem>)
    const bootstrapListItem = listItemWrapper.find(ListGroupItem)
    expect(bootstrapListItem.props().style).toMatchObject({ background: 'red' })
  })
})
