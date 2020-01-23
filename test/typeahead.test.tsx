import React from 'react'
import { shallow } from 'enzyme'
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

    const reactBootstrapTypeahead = wrapper.find(AsyncTypeahead)

    expect(reactBootstrapTypeahead.prop('placeholder')).toEqual(placeholder)
    expect(reactBootstrapTypeahead.prop('minLength')).toEqual(minLength)
    expect(reactBootstrapTypeahead.prop('id')).toEqual(id)
    expect(wrapper.prop('labelKey')).toEqual(searchAccessor)
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

    const reactBootstrapTypeahead = wrapper.find(AsyncTypeahead)

    expect(reactBootstrapTypeahead.prop('minLength')).toEqual(3)
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

    const expectedData = { id: '123' }
    act(() => {
      wrapper.prop('onChange')(expectedData)
    })
    wrapper.update()

    expect(change).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenLastCalledWith(expectedData)
  })
})
