import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Breadcrumb, BreadcrumbItem } from '../src'

describe('Breadcrumb', () => {
  it('renders itself without crashing', () => {
    const breadcrumbWrapper = shallow(<Breadcrumb />)

    expect(breadcrumbWrapper.find(BootstrapBreadcrumb)).toHaveLength(1)
  })
  it('accepts props', () => {
    const breadcrumbWrapper = shallow(
      <Breadcrumb as="span" label="breadcrumb" listProps={{ foo: 'bar' }} />,
    )
    const breadcrumbProps = breadcrumbWrapper.props()

    expect(breadcrumbProps.as).toEqual('span')
    expect(breadcrumbProps.label).toEqual('breadcrumb')
    expect(breadcrumbProps.listProps).toEqual({ foo: 'bar' })
  })

  it('renders children elements when passed in', () => {
    const breadcrumbWrapper = shallow(
      <Breadcrumb>
        <BreadcrumbItem>Item 1</BreadcrumbItem>
        <BreadcrumbItem>Item 2</BreadcrumbItem>
      </Breadcrumb>,
    )
    const breadcrumbItemElement = breadcrumbWrapper.find(BreadcrumbItem)

    expect(breadcrumbItemElement).toHaveLength(2)
  })
})

describe('BreadcrumbItem', () => {
  const itemProps = {
    // as: 'span',
    href: '#',
    target: '_self',
    title: 'breadcrumb',
    active: false,
  }
  it('renders itself without crashing', () => {
    const breadcrumbItemWrapper = shallow(<BreadcrumbItem />)

    expect(breadcrumbItemWrapper.find(BootstrapBreadcrumbItem)).toHaveLength(1)
  })
  it('accepts props', () => {
    const breadcrumbItemWrapper = shallow(<BreadcrumbItem itemProps={itemProps} />)
    const breadcrumbItemProps = breadcrumbItemWrapper.props()

    // expect(breadcrumbItemProps.as).toEqual(<span />)
    expect(breadcrumbItemProps.active).toBeFalsy()
    expect(breadcrumbItemProps.href).toEqual('#')
    expect(breadcrumbItemProps.target).toEqual('_self')
    expect(breadcrumbItemProps.title).toEqual('breadcrumb')
  })
  it('should not have href and active props at the same time', () => {
    const breadcrumbItemWrapper = shallow(<BreadcrumbItem itemProps={itemProps} />).find(
      BootstrapBreadcrumbItem,
    )
    const breadcrumbItemProps = breadcrumbItemWrapper.props()

    expect(breadcrumbItemProps.active).toBeFalsy()
    expect(breadcrumbItemProps.href).toBeTruthy()
  })
  it('can render children elements', () => {
    const breadcrumbItemWrapper = shallow(<BreadcrumbItem>Child element</BreadcrumbItem>)
    const breadcrumbItem = breadcrumbItemWrapper.find(BootstrapBreadcrumbItem)

    expect(breadcrumbItem.text()).toEqual('Child element')
  })
  it('navigates to link when the href prop is passed', () => {
    const breadcrumbItemWrapper = shallow(
      <BreadcrumbItem itemProps={itemProps}>Home</BreadcrumbItem>,
    )
    const bootstrapBreadcrumbItem = breadcrumbItemWrapper.find(BootstrapBreadcrumbItem)

    expect(bootstrapBreadcrumbItem.props().href).toEqual('#')
  })
  // ensure our breadcrumb supports custom router.
  it('should not have href tag when there is anchor tag in child tree', () => {
    const breadcrumbItemWrapper = shallow(
      <BreadcrumbItem>
        <a href="https://google.com">Custom Link</a>
      </BreadcrumbItem>,
    )
    const breadcrumbItem = breadcrumbItemWrapper.find(BootstrapBreadcrumbItem)

    expect(breadcrumbItem.contains(<a href="https://google.com">Custom Link</a>)).toBeTruthy()
    expect(breadcrumbItem.props().href).toBeFalsy()
  })
})
