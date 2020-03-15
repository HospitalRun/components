import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { FormControl as BootstrapFormControl } from 'react-bootstrap'
import { Select } from '../src'

describe('Select', () => {
  it('Select renders itself without crashing', () => {
    const selectWrapper = shallow(
      <Select>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    expect(selectWrapper.find(BootstrapFormControl)).toHaveLength(1)
  })

  it('Select renders as disabled when the disabled prop is used', () => {
    const selectWrapper = shallow(
      <Select disabled>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const bootstratSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstratSelect.props().disabled).toEqual(true)
  })

  it('Select renders as invalid when the isValid prop is false', () => {
    const selectWrapper = shallow(
      <Select isInvalid>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const bootstratSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstratSelect.props().isInvalid).toEqual(true)
  })

  it('Select uses the multiple prop', () => {
    const selectWrapper = shallow(
      <Select multiple>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const bootstratSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstratSelect.props().multiple).toEqual(true)
  })

  it('Select displays provided options', () => {
    const selectWrapper = mount(
      <Select>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const htmlSelect = selectWrapper.find(HTMLSelectElement)
    expect(htmlSelect.children().length).toBe(3)
  })

  it('Select renders in large size', () => {
    const selectWrapper = shallow(
      <Select size="large">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const bootstratSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstratSelect.props().size).toEqual('lg')
  })

  it('Select renders in small size', () => {
    const selectWrapper = shallow(
      <Select size="small">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="b">Option C</option>
      </Select>,
    )
    const bootstratSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstratSelect.props().size).toEqual('sm')
  })

  it('Select can use custom class', () => {
    const selectWrapper = shallow(<Select className="customClass" />)
    const bootstrapSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstrapSelect.props().className).toEqual('customClass')
  })

  it('Select can use custom style', () => {
    const selectWrapper = shallow(<Select style={{ background: 'red' }} />)
    const bootstrapSelect = selectWrapper.find(BootstrapFormControl)
    expect(bootstrapSelect.props().style).toMatchObject({ background: 'red' })
  })
})
