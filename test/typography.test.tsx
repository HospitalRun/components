import { shallow } from 'enzyme'
import * as React from 'react'

import { Typography } from '../src'

describe('Typography', () => {
  it('renders a Typography element without crashing', () => {
    const wrapper = shallow(<Typography />)
    expect(wrapper.find(HTMLParagraphElement)).toHaveLength(1)
  })

  it('renders a paragraph element by default', () => {
    const wrapper = shallow(<Typography />)
    expect(wrapper.find(HTMLParagraphElement)).toHaveLength(1)
  })

  it('renders text contained between its two tags', () => {
    const wrapper = shallow(<Typography>Test</Typography>)
    expect(wrapper.text().trim()).toEqual('Test')
  })

  it('renders the propper HTML element according to the variant prop, with default styling to match', () => {
    const wrapper = shallow(<Typography variant="h1" />)
    const element = wrapper.find('h1')
    expect(element.length).toBe(1)
    expect(element.prop('className')).toBe('h1')
  })

  it('styles the element properly according to the styleAs prop', () => {
    const wrapper = shallow(<Typography styleAs="display-1" />)
    expect(wrapper.find('p').prop('className')).toBe('display-1')
  })
})
