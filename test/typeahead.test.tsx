import { shallow, mount } from 'enzyme'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { act } from 'react-dom/test-utils'

import { Typeahead } from '../src/components/Typeahead'

describe('Typeahead', () => {
  it('should render a typeahead with the correct data', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const minLength = 5

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        minLength={minLength}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)

    expect(asyncTypeahead.prop('placeholder')).toEqual(placeholder)
    expect(asyncTypeahead.prop('minLength')).toEqual(minLength)
    expect(asyncTypeahead.prop('id')).toEqual(id)
    expect(asyncTypeahead.prop('defaultSelected')).toEqual([])
    expect(asyncTypeahead.prop('labelKey')).toEqual(searchAccessor)
  })

  it('should properly set the default value when value prop is given', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const expectedData = { id: '123' }

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        value={expectedData}
        searchAccessor={searchAccessor}
      />,
    )

    expect(wrapper.find(AsyncTypeahead).prop('defaultSelected')).toEqual([expectedData])
  })

  it('should default min length to 3', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    expect(asyncTypeahead.prop('minLength')).toEqual(3)
  })

  it('should call the onChange function with the right data', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    const expectedData = { id: '123' }

    act(() => {
      asyncTypeahead.prop('onChange')(expectedData)
    })
    wrapper.update()

    expect(change).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenLastCalledWith(expectedData)
  })

  it('renders a non-disabled Typeahead', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const minLength = 5

    const wrapper = mount(
      <Typeahead
        placeholder={placeholder}
        minLength={minLength}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    expect(asyncTypeahead.prop('disabled')).not.toBe(true)
  })

  it('renders a disabled Typeahead', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const minLength = 5

    const wrapper = mount(
      <Typeahead
        placeholder={placeholder}
        minLength={minLength}
        onSearch={search}
        onChange={change}
        disabled
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    expect(asyncTypeahead.prop('disabled')).toBe(true)
  })

  it('should call the onSearch function with the right data', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    const expectedData = { id: '123' }
    act(() => {
      asyncTypeahead.prop('onSearch')(expectedData)
    })
    wrapper.update()

    expect(search).toHaveBeenCalledTimes(1)
    expect(search).toHaveBeenLastCalledWith(expectedData)
  })

  it('renders a Typeahead with feedback', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const isInvalid = true
    const feedback = 'This is invalid'

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
        isInvalid={isInvalid}
        feedback={feedback}
      />,
    )

    const feedbackDiv = wrapper.find('div.text-danger')
    expect(feedbackDiv.text()).toEqual('This is invalid')
  })

  it('renders an invalid Typeahead when isInvalid is true', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const isInvalid = true

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
        isInvalid={isInvalid}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    expect(asyncTypeahead.prop('isInvalid')).toBe(true)
  })

  it('renders a valid Typeahead when isValid is true', () => {
    const search = jest.fn()
    const render = jest.fn()
    const change = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const isValid = true

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        onChange={change}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
        isValid={isValid}
      />,
    )

    const asyncTypeahead = wrapper.find(AsyncTypeahead)
    expect(asyncTypeahead.prop('isValid')).toBe(true)
  })
})
