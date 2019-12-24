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
})
