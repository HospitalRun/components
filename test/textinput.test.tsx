import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import Form from 'react-bootstrap/Form'
import { TextInput } from '../src/components/TextInput'

describe('TextInput', () => {
  it('renders a TextInput without crashing', () => {
    const wrapper = mount(<TextInput />)

    expect(wrapper.find(Form.Control)).toHaveLength(1)
  })

  it('renders a TextInput with attributes', () => {
    const name = 'test_input'
    const value = 'Testing the text input component'
    const wrapper = mount(<TextInput name={name} value={value} />)

    expect(wrapper.find(Form.Control)).toHaveLength(1)
    expect(
      wrapper.find(Form.Control).filterWhere((item) => item.prop('name') === name),
    ).toHaveLength(1)
    expect(
      wrapper.find(Form.Control).filterWhere((item) => item.prop('defaultValue') === value),
    ).toHaveLength(1)
  })

  it('handles the onchange event for the TextInput', () => {
    const onTextChange = sinon.spy()
    const wrapper = mount(
      <TextInput value="Testing the text input component" onChange={onTextChange} />,
    )
    const input = wrapper.find(Form.Control)

    input.simulate('change')
    expect(onTextChange).toHaveProperty('callCount', 1)
  })

  it('renders a non-disabled TextInput', () => {
    const wrapper = mount(<TextInput value="Testing the text input component" />)
    const input = wrapper.find(TextInput)

    expect(input.prop('disabled')).not.toBe(true)
  })

  it('renders a disabled TextInput', () => {
    const wrapper = mount(<TextInput value="Testing the text input component" disabled />)
    const input = wrapper.find(Form.Control)

    expect(input.prop('disabled')).toBe(true)
  })

  it('renders an invalid TextInput', () => {
    const wrapper = mount(<TextInput value="Testing the text input component" isInvalid />)
    const input = wrapper.find(Form.Control)

    expect(input.prop('isInvalid')).toBe(true)
  })

  it('renders a valid TextInput', () => {
    const wrapper = mount(<TextInput value="Testing the text input component" isValid />)
    const input = wrapper.find(Form.Control)

    expect(input.prop('isValid')).toBe(true)
  })

  it('renders a large TextInput', () => {
    const largeWrapper = mount(<TextInput value="Testing the text input component" size="lg" />)
    const largeInput = largeWrapper.find(Form.Control)
    expect(largeInput.prop('size')).toBe('lg')
  })

  it('renders a small TextInput', () => {
    const smallWrapper = mount(<TextInput value="Testing the text input component" size="sm" />)
    const smallInput = smallWrapper.find(Form.Control)
    expect(smallInput.prop('size')).toBe('sm')
  })

  it('renders a Text Input with a placeholder', () => {
    const wrapper = mount(<TextInput value="Testing the text input component" placeholder="test" />)
    const textInput = wrapper.find(Form.Control)
    expect(textInput.prop('placeholder')).toBe('test')
  })
})
