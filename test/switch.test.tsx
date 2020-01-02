import * as React from 'react'
import { mount } from 'enzyme'
import FormCheck from 'react-bootstrap/FormCheck'
import * as sinon from 'sinon'
import { Switch } from '../src'

describe('Switch', () => {
  it('Switch renders itself without crashing', () => {
    const switchWrapper = mount(<Switch id="id" label="Switch" />)
    expect(switchWrapper.text()).toEqual('Switch')
    expect(switchWrapper.props().disabled).toBeFalsy()
    expect(switchWrapper.props().onChange).toBeUndefined()
    expect(switchWrapper.find(FormCheck)).toHaveLength(1)
  })

  it('Switch should render be rendered disabled when disabled prop is used', () => {
    const wrapper = mount(<Switch id="switch" label="Switch" disabled />)
    const input = wrapper.find(HTMLInputElement)
    expect(input.prop('disabled')).toBe(true)
  })

  it('Switch handle the change event', () => {
    const onChange = sinon.spy()
    const wrapper = mount(<Switch id="switch" label="switch" onChange={onChange} />)
    const input = wrapper.find(HTMLInputElement)
    input.simulate('change')
    expect(onChange).toHaveProperty('callCount', 1)
  })

  it('Switch can use custom class', () => {
    const switchWrapper = mount(<Switch id="switch" label="Switch" className="customClass" />)
    expect(switchWrapper.props().className).toEqual('customClass')
  })

  it('Switch can use custom style', () => {
    const switchWrapper = mount(<Switch id="switch" label="Switch" style={{ color: 'red' }} />)
    expect(switchWrapper.props().style).toMatchObject({ color: 'red' })
  })
})
