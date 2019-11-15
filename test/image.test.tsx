import BootstrapImage from 'react-bootstrap/Image'
import * as React from 'react'

import { shallow } from 'enzyme'

import { Image } from '../src'

describe('Image', () => {
  it('Image renders itself without crashing', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} />)
    expect(imageWrapper.find(BootstrapImage)).toHaveLength(1)
  })

  it('Image can display image', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} />)
    const bootstrapImage = imageWrapper.find(BootstrapImage)
    expect(bootstrapImage.props().src).toEqual(src)
  })

  it('Image can be rounded', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} rounded />)
    const bootstrapImage = imageWrapper.find(BootstrapImage)
    expect(bootstrapImage.props().rounded).toBe(true)
  })

  it('Image can be circular', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} circle />)
    const bootstrapImage = imageWrapper.find(BootstrapImage)
    expect(bootstrapImage.props().roundedCircle).toBe(true)
  })

  it('Image can have a fluid width', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} fluid />)
    const bootstrapImage = imageWrapper.find(BootstrapImage)
    expect(bootstrapImage.props().fluid).toBe(true)
  })

  it('Image can accept standard img props', () => {
    const src = 'sample-src'
    const imageWrapper = shallow(<Image src={src} crossOrigin="anonymous" alt="Sample alt" />)
    const bootstrapImage = imageWrapper.find(BootstrapImage)
    expect(bootstrapImage.props().alt).toBe('Sample alt')
    expect(bootstrapImage.props().crossOrigin).toBe('anonymous')
  })
})
