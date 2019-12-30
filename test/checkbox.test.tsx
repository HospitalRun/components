import * as React from 'react'
import { mount, shallow } from 'enzyme'
import FormCheck from 'react-bootstrap/FormCheck'
import * as sinon from 'sinon'
import { Checkbox } from '../src'

describe('Checkbox', () => {
  it('Checkbox renders itself without crashing', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" />)
    expect(checkboxWrapper.text()).toEqual('Checkbox')
    expect(checkboxWrapper.props().disabled).toBeFalsy()
    expect(checkboxWrapper.props().inline).toBeFalsy()
    expect(checkboxWrapper.props().name).toBeUndefined()
    expect(checkboxWrapper.props().onChange).toBeUndefined()
    expect(checkboxWrapper.find(FormCheck)).toHaveLength(1)
  })

  it('Checkbox renders the label on the right hand side by default', () => {
    const checkboxWrapperRight = shallow(<Checkbox label="Checkbox" labelSide="right" />)
    expect(checkboxWrapperRight.text()).toEqual('Checkbox')
    expect(checkboxWrapperRight.childAt(1).type()).toBe(FormCheck.Label)
  })

  it('Checkbox should allow for the use of a name', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" name="test" />)
    const bootstrapCheckBox = checkboxWrapper.find(FormCheck)
    expect(bootstrapCheckBox.props().name).toEqual('test')
  })

  it('Checkbox should render inline if the inline prop is used', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" inline />)
    const bootstrapCheckBox = checkboxWrapper.find(FormCheck)
    expect(bootstrapCheckBox.props().inline).toBeTruthy()
  })

  it('Checkbox renders the label on the correct side', () => {
    const checkboxWrapperLeft = shallow(<Checkbox label="Checkbox" labelSide="left" />)
    expect(checkboxWrapperLeft.text()).toEqual('Checkbox')
    expect(checkboxWrapperLeft.childAt(0).type()).toBe(FormCheck.Label)

    const checkboxWrapperRight = shallow(<Checkbox label="Checkbox" labelSide="right" />)
    expect(checkboxWrapperRight.text()).toEqual('Checkbox')
    expect(checkboxWrapperRight.childAt(1).type()).toBe(FormCheck.Label)
  })

  it('Checkbox should render be rendered disabled when disabled prop is used', () => {
    const wrapper = mount(<Checkbox label="Checkbox" disabled />)
    const input = wrapper.find(HTMLInputElement)
    expect(input.prop('disabled')).toBe(true)
  })

  it('Checkbox handle the change event', () => {
    const onChange = sinon.spy()
    const wrapper = mount(<Checkbox label="Checkbox" onChange={onChange} />)
    const input = wrapper.find(HTMLInputElement)
    input.simulate('change')
    expect(onChange).toHaveProperty('callCount', 1)
  })

  it('Checkbox can use custom class', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" className="class" />)
    const bootstrapCheckBox = checkboxWrapper.find(FormCheck)
    expect(bootstrapCheckBox.props().className).toEqual('class')
  })

  it('Checkbox can use custom style', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" style={{ color: 'red' }} />)
    const bootstrapCheckBox = checkboxWrapper.find(FormCheck)
    expect(bootstrapCheckBox.props().style).toMatchObject({ color: 'red' })
  })

  it('Checkbox label can use custom class', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" labelClassName="class" />)
    const bootstrapLabel = checkboxWrapper.find(FormCheck.Label)
    expect(bootstrapLabel.props().className).toEqual('class')
  })

  it('Checkbox label can use custom style', () => {
    const checkboxWrapper = shallow(<Checkbox label="Checkbox" labelStyle={{ color: 'red' }} />)
    const bootstrapLabel = checkboxWrapper.find(FormCheck.Label)
    expect(bootstrapLabel.props().style).toMatchObject({ color: 'red' })
  })
})
