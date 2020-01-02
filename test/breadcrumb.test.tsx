import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import sinon from 'sinon'

import { Breadcrumb, BreadcrumbItem } from '../src'

describe('Breadcrumb', () => {
  it('renders itself without crashing', () => {
    const breadcrumbWrapper = shallow(<Breadcrumb />)

    expect(breadcrumbWrapper.find(BootstrapBreadcrumb)).toHaveLength(1)
  })

  it('renders children elements when passed in', () => {
    const breadcrumbWrapper = shallow(
      <Breadcrumb>
        <BreadcrumbItem />
        <BreadcrumbItem />
      </Breadcrumb>,
    )
    const children = breadcrumbWrapper.find(BreadcrumbItem)

    expect(children).toHaveLength(2)
  })

  it('can use custom class', () => {
    const breadcrumbWrapper = shallow(<Breadcrumb className="customClass" />)
    const bootstrapBreadCrumb = breadcrumbWrapper.find(BootstrapBreadcrumb)
    expect(bootstrapBreadCrumb.props().className).toEqual('customClass')
  })

  it('can use custom style', () => {
    const breadcrumbWrapper = shallow(<Breadcrumb style={{ background: 'red' }} />)
    const bootstrapBreadCrumb = breadcrumbWrapper.find(BootstrapBreadcrumb)
    expect(bootstrapBreadCrumb.props().style).toMatchObject({ background: 'red' })
  })
})

describe('BreadcrumbItem', () => {
  it('renders itself without crashing', () => {
    const wrapper = shallow(<BreadcrumbItem />)
    expect(wrapper.find(BootstrapBreadcrumbItem)).toHaveLength(1)
  })
  it('handles click event', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(<BreadcrumbItem onClick={onClick} />)

    wrapper.simulate('click')
    expect(onClick).toHaveProperty('callCount', 1)
  })
  it('accepts props', () => {
    const wrapper = shallow(<BreadcrumbItem active onClick={() => undefined} />)
    const wrapperProps = wrapper.props()

    expect(wrapperProps.active).toBeTruthy()
    expect(wrapperProps.onClick()).toBeUndefined()
  })
  it('renders child elements', () => {
    const wrapper = shallow(<BreadcrumbItem>Child element</BreadcrumbItem>)
    const breadcrumbItem = wrapper.find(BootstrapBreadcrumbItem)
    expect(breadcrumbItem.text()).toEqual('Child element')
  })
  it('can use custom class', () => {
    const wrapper = shallow(<BreadcrumbItem className="customClass" />)
    const breadcrumbItem = wrapper.find(BootstrapBreadcrumbItem)
    expect(breadcrumbItem.props().className).toEqual('customClass')
  })
  it('can use custom style', () => {
    const wrapper = shallow(<BreadcrumbItem style={{ background: 'red' }} />)
    const breadcrumbItem = wrapper.find(BootstrapBreadcrumbItem)
    expect(breadcrumbItem.props().style).toMatchObject({ background: 'red' })
  })
})
