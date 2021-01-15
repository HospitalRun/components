import { shallow } from 'enzyme'

import { Callout } from '../src'

describe('Callout', () => {
  it('Callout defaults color to primary', () => {
    const calloutWrapper = shallow(<Callout title="This is a title" />)
    expect(calloutWrapper.props().className).toMatch('callout-primary')
  })

  it('Callout can change colors', () => {
    const calloutWrapper = shallow(<Callout color="secondary" />)
    expect(calloutWrapper.props().className).toMatch('callout-secondary')
  })

  it('Callout can render title', () => {
    const calloutWrapper = shallow(<Callout title="This is a title" />)
    expect(calloutWrapper.find(HTMLHeadingElement)).toHaveLength(1)
    expect(calloutWrapper.find(HTMLHeadingElement).text()).toEqual('This is a title')
  })

  it('Callout can render children elements', () => {
    const calloutWrapper = shallow(
      <Callout>
        <p>Hello World</p>
      </Callout>,
    )
    expect(calloutWrapper.find(HTMLParagraphElement)).toHaveLength(1)
    expect(calloutWrapper.find(HTMLParagraphElement).text()).toEqual('Hello World')
  })

  it('Callout can use custom class', () => {
    const calloutWrapper = shallow(<Callout className="customClass" />)
    expect(calloutWrapper.props().className).toMatch('customClass')
  })

  it('Callout can use custom style', () => {
    const calloutWrapper = shallow(<Callout style={{ background: 'red' }} />)
    expect(calloutWrapper.props().style).toMatchObject({ background: 'red' })
  })
})
