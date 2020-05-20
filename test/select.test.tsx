import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { Typeahead as BootstrapTypeahead } from 'react-bootstrap-typeahead'
import { Select } from '../src'

describe('Select', () => {
  it('Select renders itself without crashing', () => {
    const selectWrapper = shallow(<Select id="id" options={['Option A', 'Option B', 'Option C']} />)
    expect(selectWrapper.find(BootstrapTypeahead)).toHaveLength(1)
  })

  it('Select renders as disabled when the disabled prop is used', () => {
    const selectWrapper = shallow(
      <Select id="id" options={['Option A', 'Option B', 'Option C']} disabled />,
    )
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().disabled).toEqual(true)
  })

  it('Select renders as invalid when the isInvalid prop is true', () => {
    const selectWrapper = shallow(
      <Select id="id" options={['Option A', 'Option B', 'Option C']} isInvalid />,
    )
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().isInvalid).toEqual(true)
  })

  it('Select uses the multiple prop', () => {
    const selectWrapper = shallow(
      <Select id="id" options={['Option A', 'Option B', 'Option C']} multiple />,
    )
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().multiple).toEqual(true)
  })

  it('Select displays provided options', () => {
    const selectWrapper = mount(<Select id="id" options={['Option A', 'Option B', 'Option C']} />)
    const inputWrapper = selectWrapper.find('input').at(0)
    inputWrapper.simulate('click')

    const ulWrapper = selectWrapper.find('ul')
    const lis = ulWrapper.find('li')
    expect(lis).toHaveLength(3)
  })
})
