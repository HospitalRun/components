import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { TextField } from '../src/components/TextField'

describe('TextField', () => {
  it('renders a TextField without crashing', () => {
    const wrapper = mount(<TextField />)

    expect(wrapper.find(HTMLTextAreaElement)).toHaveLength(1)
  })

  it('renders a TextField with attributes', () => {
    const name = 'example_field'
    const value = 'this is teh text field text'
    const rows = 5
    const wrapper = mount(<TextField name={name} value={value} rows={rows} />)

    expect(wrapper.find(HTMLTextAreaElement)).toHaveLength(1)
    expect(
      wrapper.find(HTMLTextAreaElement).filterWhere(item => {
        return item.prop('name') === name
      }),
    ).toHaveLength(1)
  })

  it('handles the onchange event for the TextField', () => {
    const onTextChange = sinon.spy()
    const wrapper = mount(<TextField value="test value" onChange={onTextChange} />)
    const input = wrapper.find(HTMLTextAreaElement)

    input.simulate('change')
    expect(onTextChange).toHaveProperty('callCount', 1)
  })

  it('renders a non-disabled TextField', () => {
    const wrapper = mount(<TextField value="test value" />)
    const input = wrapper.find(HTMLTextAreaElement)

    expect(input.prop('disabled')).not.toBe(true)
  })

  it('renders a disabled TextField', () => {
    const wrapper = mount(<TextField value="test value" disabled={true} />)
    const input = wrapper.find(HTMLTextAreaElement)

    expect(input.prop('disabled')).toBe(true)
  })

  it('renders a TextField of different sizes', () => {
    const smallWrapper = mount(<TextField value="test value" size={'small'} />)
    const smallInput = smallWrapper.find(HTMLTextAreaElement)
    expect(smallInput.hasClass('form-control-sm')).toBe(true)

    const largeWrapper = mount(<TextField value="test value" size={'large'} />)
    const largeInput = largeWrapper.find(HTMLTextAreaElement)
    expect(largeInput.hasClass('form-control-lg')).toBe(true)
  })
})
