import * as React from 'react'
import { shallow } from 'enzyme'
import { Pill } from '../dist'
import { Badge } from 'react-bootstrap'

describe('Pill', () => {
  it('Pill renders itself without crashing', () => {
    const pillWrapper = shallow(<Pill />)
    const badge = pillWrapper.find(Badge)
    expect(badge.props().pill).toBeTruthy()
    expect(pillWrapper.find(Badge)).toHaveLength(1)
  })

  it('Badge defaults color to primary', () => {
    const pillWrapper = shallow(<Pill />)
    const badge = pillWrapper.find(Badge)
    expect(badge.props().variant).toEqual('primary')
  })

  it('Badge can change colors', () => {
    const pillWrapper = shallow(<Pill color="secondary" />)
    const badge = pillWrapper.find(Badge)
    expect(badge.props().variant).toEqual('secondary')
  })

  it('Badge can redner children elements', () => {
    const pillWrapper = shallow(<Pill>Hello World</Pill>)
    const badge = pillWrapper.find(Badge)
    expect(badge.text()).toEqual('Hello World')
  })
})
