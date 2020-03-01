import * as React from 'react'
import { shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { Editor } from '@tinymce/tinymce-react'
import { RichText } from '../src'

describe('TextField', () => {
  it('renders a RichText without crashing', () => {
    const wrapper = shallow(<RichText />)

    expect(wrapper.find(Editor)).toHaveLength(1)
  })

  it('renders a RichText with attributes', () => {
    const id = 'richtext'
    const wrapper = shallow(<RichText id={id} />)

    expect(wrapper.find(Editor)).toHaveLength(1)
    expect(wrapper.find(Editor).filterWhere((item) => item.prop('id') === id)).toHaveLength(1)
  })

  it('renders a non-disabled RichText', () => {
    const wrapper = shallow(<RichText value="richtext" />)
    const input = wrapper.find(Editor)

    expect(input.prop('disabled')).not.toBe(true)
  })

  it('renders a disabled RichText', () => {
    const wrapper = shallow(<RichText value="richtext" disabled />)
    const input = wrapper.find(Editor)

    expect(input.prop('disabled')).toBe(true)
  })

  it('renders a RichText with custom onChange', () => {
    const change = jest.fn()
    const wrapper = shallow(<RichText onChange={change} />)
    const expectedData = { id: '123' }

    act(() => {
      wrapper.prop('onEditorChange')(expectedData)
    })
    wrapper.update()

    expect(change).toHaveBeenCalledTimes(1)
  })
})
