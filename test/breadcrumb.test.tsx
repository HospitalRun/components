import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Breadcrumb } from '../src'

describe('Breadcrumb', () => {
  it('renders itself without crashing', () => {
    const breadcrumbWrapper = shallow(<Breadcrumb />)
    expect(breadcrumbWrapper.find(BootstrapBreadcrumb)).toHaveLength(1)
  })
  it('accepts props', () => {
    const BreadcrumbWrapper = shallow(
      <Breadcrumb as="span" label="breadcrumb" listProps={{ foo: 'bar' }} />,
    )
    const BreadcrumbProps = BreadcrumbWrapper.props()

    expect(BreadcrumbProps.as).toEqual('bootstrap')
    expect(BreadcrumbProps.label).toEqual('breadcrumb')
    expect(BreadcrumbProps.listProps).toEqual({ foo: 'bar' })
  })

  it('renders children elements when passed in', () => {
    const breadcrumbWrapper = shallow(
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>,
    )
    const breadcrumbItemElement = breadcrumbWrapper.find(BreadcrumbItem)

    expect(breadcrumbItemElement).toHaveLength(2)
  })
})

describe('BreadcrumbItem', () => {
  it('renders itself without crashing', () => {
    const listWrapper = shallow(<Breadcrumb />)
    expect(listWrapper.find(BootstrapBreadcrumb.Item)).toHaveLength(1)
  })
  it('accepts props', () => {
    const breadcrumbItemWrapper = shallow(
      <BreadcrumbItem as="a" href="#" target="_self" title="breadcrumb" />,
    )
    const BreadcrumbProps = breadcrumbItemWrapper.props()

    expect(BreadcrumbProps.as).toEqual('span')
    expect(BreadcrumbProps.active).toBeFalsy()
    expect(BreadcrumbProps.href).toEqual('#')
    expect(BreadcrumbProps.target).toEqual('_self')
    expect(BreadcrumbProps.title).toEqual('breadcrumb')
  })
  it('should not have href and active props at the same time', () => {
    const breadcrumbItemWrapper = shallow(
      <BreadcrumbItem as="span" active target="_self" title="breadcrumb" />,
    )
    const BreadcrumbProps = breadcrumbItemWrapper.props()

    expect(BreadcrumbProps.active).toBeTruthy()
  })
  it('can render children elements', () => {
    const breadcrumbItemWrapper = shallow(
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>,
    )
    const breadcrumbItem = breadcrumbItemWrapper.find(BreadcrumbItem)
    expect(breadcrumbItem.text()).toEqual('Child element')
  })
  it('navigates to link when the href prop is passed', () => {
    const breadcrumbItemWrapper = shallow(
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>,
    )
    const bootstrapBreadcrumbItem = breadcrumbItemWrapper.find(BootstrapBreadcrumb.Item)
    expect(bootstrapBreadcrumbItem.props().href).toEqual('#')
  })
  it('should not have href tag when child is an anchor tag', () => {
    const breadcrumbItemWrapper = shallow(
      <Breadcrumb>
        <BootstrapBreadcrumb.Item>
          <a href="https://google.com">Custom Link</a>
        </BootstrapBreadcrumb.Item>
      </Breadcrumb>,
    )
    const breadcrumbItem = breadcrumbItemWrapper.find(BreadcrumbItem)
    const isChildAnchorTag = breadcrumbItem.contains(<a href="https://google.com">Custom Link</a>)
    if (isChildAnchorTag) {
      expect(breadcrumbItem.props().href).toBeFalsy()
    } else {
      expect(breadcrumbItem.props().href).toEqual('#')
    }
  })
})
