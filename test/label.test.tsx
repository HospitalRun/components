import * as React from 'react'
import { shallow } from 'enzyme'
import { FormLabel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label } from '../src'

describe('Label', () => {
  it('Label renders itself without crashing', () => {
    const labelWrapper = shallow(<Label text="test" />)

    expect(labelWrapper.find(FormLabel)).toHaveLength(1)
  })

  it('Label renders text', () => {
    const labelWrapper = shallow(<Label text="test" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)

    expect(bootstrapLabel.text()).toEqual('test')
  })

  it('Required Input Label succesfully renders default required title and asterisk', () => {
    const labelWrapper = shallow(<Label text="test" isRequired />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    const asterisk = bootstrapLabel.find(FontAwesomeIcon)

    expect(asterisk).toHaveLength(1)
    expect(asterisk.prop('icon')).toEqual('asterisk')
    expect(bootstrapLabel.props().title).toEqual('This is a required input')
  })

  it('Required Input Label succesfully renders custom title', () => {
    const expectedTitleText = 'test is required'
    const labelWrapper = shallow(<Label text="test" isRequired title={expectedTitleText} />)
    const bootstrapLabel = labelWrapper.find(FormLabel)

    expect(bootstrapLabel.props().title).toEqual(expectedTitleText)
  })

  it('Label adds htmlFor prop', () => {
    const labelWrapper = shallow(<Label htmlFor="testHtmlFor" text="test" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)

    expect(bootstrapLabel.props().htmlFor).toEqual('testHtmlFor')
  })

  it('Label can use custom class', () => {
    const labelWrapper = shallow(<Label text="test" className="customClass" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.props().className).toEqual('customClass')
  })

  it('Label can use custom style', () => {
    const labelWrapper = shallow(<Label text="test" style={{ color: 'red' }} />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.props().style).toMatchObject({ color: 'red' })
  })
})
