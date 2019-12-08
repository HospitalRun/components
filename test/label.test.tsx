import * as React from 'react'
import { shallow } from 'enzyme'
import { FormLabel } from 'react-bootstrap'
import { Label } from '../src'

describe('Label', () => {
  it('Label renders itself without crashing', () => {
    const labelWrapper = shallow(<Label text="test" />)
    expect(labelWrapper.find(FormLabel)).toHaveLength(1)
  })

  it('Label can render text', () => {
    const labelWrapper = shallow(<Label text="test" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.text()).toEqual('test')
  })

  it('Required Input Label succesfully renders default required title and asterisk', () => {
    const labelWrapper = shallow(<Label text="test" isRequired />)
    const bootstrapLabel = labelWrapper.find(FormLabel)

    /** Ensure asterisk mounted */
    let asteriskMounted = false
    bootstrapLabel.props().children.forEach((e: any) => {
      if (e.props && e.props.id === 'required-asterisk') {
        asteriskMounted = true
      }
    })
    expect(asteriskMounted).toEqual(true)
    expect(bootstrapLabel.props().title).toEqual('This is a required input')
  })

  it('Required Input Label succesfully renders custom title', () => {
    const labelWrapper = shallow(<Label text="test" isRequired title="test is required" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)

    expect(bootstrapLabel.props().title).toEqual('test is required')
  })

  it('Required Input Label disableTitle property successfully removes the title', () => {
    const labelWrapper = shallow(<Label text="test" isRequired disableTitle />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.props().title).toEqual(' ')
  })

  it('Label can add htmlFor prop', () => {
    const labelWrapper = shallow(<Label htmlFor="testHtmlFor" text="test" />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.props().htmlFor).toEqual('testHtmlFor')
  })
})
