import React from 'react'
import { shallow } from 'enzyme'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { Typeahead } from '../src/components/Typeahead'

describe('Typeahead', () => {
  it('should render a typeahead with the correct data', () => {
    const search = jest.fn()
    const render = jest.fn()
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'
    const minLength = 5

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        minLength={minLength}
        onSearch={search}
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
    const id = 'id'
    const searchAccessor = 'search'
    const placeholder = 'placeholder'

    const wrapper = shallow(
      <Typeahead
        placeholder={placeholder}
        onSearch={search}
        renderMenuItemChildren={render}
        id={id}
        searchAccessor={searchAccessor}
      />,
    )

    const reactBootstrapTypeahead = wrapper.find(AsyncTypeahead)

    expect(reactBootstrapTypeahead.prop('minLength')).toEqual(3)
  })
})
