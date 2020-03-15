import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { FormCheck } from 'react-bootstrap'
import { Radio } from '../src'

describe('Radio', () => {
  it('Radio renders itself without crashing', () => {
    const radioWrapper = shallow(<Radio label="Hello" />)
    expect(radioWrapper.find(FormCheck)).toHaveLength(1)
  })

  it('Radio handles on onChange event', () => {
    const onChecked = sinon.spy()
    const wrapper = shallow(<Radio onChange={onChecked} />)
    wrapper.simulate('change')
    expect(onChecked).toHaveProperty('callCount', 1)
  })

  it('Radio renders as disabled when the disabled prop is used', () => {
    const radioWrapper = shallow(<Radio disabled />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().disabled).toEqual(true)
  })

  it('Radio renders inline when the inline prop is used', () => {
    const radioWrapper = shallow(<Radio inline />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().inline).toEqual(true)
  })

  it('Radio is always checked when the checked prop is used', () => {
    const radioWrapper = shallow(<Radio defaultChecked />)
    const bootstrapRadio = radioWrapper.find(FormCheck.Input)
    expect(bootstrapRadio.props().defaultChecked).toEqual(true)
  })

  it('Radio renders the label', () => {
    const label = 'Label in JSX'
    const radioWrapper = shallow(<Radio label={label} />)
    const bootstrapRadio = radioWrapper.find(FormCheck.Label)
    expect(bootstrapRadio.text()).toEqual(label)
  })

  it('Radio renders as invalid with default properties when isInvalid prop is present', () => {
    const radioWrapper = shallow(<Radio isInvalid />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().isInvalid).toEqual(true)
  })

  it('Radio renders as valid with default properties when isValid prop is used', () => {
    const radioWrapper = shallow(<Radio isValid />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().isValid).toEqual(true)
  })

  it('Radio renders the feedback', () => {
    const feedback = <p>Feedback in JSX</p>
    const radioWrapper = shallow(<Radio feedback={feedback} isInvalid />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().feedback).toEqual(feedback)
  })

  it('Radio uses the value prop', () => {
    const value = 'expected value'
    const radioWrapper = shallow(<Radio value={value} />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().value).toEqual(value)
  })

  it('Radio uses the name to group radios', () => {
    const name = 'group'
    const radioWrapper = shallow(<Radio name={name} />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().name).toEqual(name)
  })

  it('Radio uses the id to link the label with the radio', () => {
    const id = 'radioID'
    const radioWrapper = shallow(<Radio id={id} label="Some label" />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().id).toEqual(id)
  })

  it('Radio can use custom class', () => {
    const radioWrapper = shallow(<Radio className="customClass" />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().className).toEqual('customClass')
  })

  it('Radio can use custom style', () => {
    const radioWrapper = shallow(<Radio style={{ color: 'red' }} />)
    const bootstrapRadio = radioWrapper.find(FormCheck)
    expect(bootstrapRadio.props().style).toMatchObject({ color: 'red' })
  })
})
