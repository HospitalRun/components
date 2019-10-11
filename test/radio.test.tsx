import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { FormCheck as BootstrapFormCheck } from 'react-bootstrap'
import { Radio } from '../dist'

describe('Radio', () => {
  it('Radio renders itself without crashing', () => {
    const radioWrapper = shallow(<Radio label="Hello" />)
    expect(radioWrapper.find(BootstrapFormCheck)).toHaveLength(1)
  })

  it('Radio handles on onChange event', () => {
    const onChecked = sinon.spy()
    const wrapper = shallow(<Radio onChange={onChecked} />)
    wrapper.simulate('change')
    expect(onChecked).toHaveProperty('callCount', 1)
  })

  it('Radio renders as disabled when the disabled prop is used', () => {
    const radioWrapper = shallow(<Radio disabled />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().disabled).toEqual(true)
  })

  it('Radio renders inline when the inline prop is used', () => {
    const radioWrapper = shallow(<Radio inline />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().inline).toEqual(true)
  })

  it('Radio is always checked when the checked prop is used', () => {
    const radioWrapper = shallow(<Radio checked />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().checked).toEqual(true)
  })

  it('Radio renders the label', () => {
    const label = <p>Label in JSX</p>
    const radioWrapper = shallow(<Radio label={label} />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().label).toEqual(label)
  })

  it('Radio renders as invalid when isInvalid prop is used', () => {
    const radioWrapper = shallow(<Radio isInvalid />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().isInvalid).toEqual(true)
  })

  it('Radio renders the feedback', () => {
    const feedback = <p>Feedback in JSX</p>
    const radioWrapper = shallow(<Radio feedback={feedback} isInvalid />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().feedback).toEqual(feedback)
  })

  it('Radio uses the value prop', () => {
    const value = 'expected value'
    const radioWrapper = shallow(<Radio value={value} />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().value).toEqual(value)
  })

  it('Radio uses the name to group radios', () => {
    const name = 'group'
    const radioWrapper = shallow(<Radio name={name} />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().name).toEqual(name)
  })

  it('Radio uses the id to link the label with the radio', () => {
    const id = 'radioID'
    const radioWrapper = shallow(<Radio id={id} label="Some label" />)
    const bootstratRadio = radioWrapper.find(BootstrapFormCheck)
    expect(bootstratRadio.props().id).toEqual(id)
  })
})
