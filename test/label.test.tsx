import * as React from 'react'
import { shallow } from 'enzyme'
import { Label } from '../src/components/Label'
import { FormLabel } from 'react-bootstrap'

describe('Label', () => {
  it('Label renders itself without crashing', () => {
    const labelWrapper = shallow(<Label text={'test'} />)
    expect(labelWrapper.find(FormLabel)).toHaveLength(1)
  })

  it('Label can render text', () => {
    const labelWrapper = shallow(<Label text={'test'} />)
    const bootstrapLabel = labelWrapper.find(FormLabel)
    expect(bootstrapLabel.text()).toEqual('test')
  })
})
