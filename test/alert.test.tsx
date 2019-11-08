import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapAlert from 'react-bootstrap/Alert'
import { Alert } from '../src'

describe('Alert', () => {
  it('Alert renders itself without crashing', () => {
    const alertWrapper = shallow(<Alert title="Test Alert" />)
    expect(alertWrapper.find(BootstrapAlert)).toHaveLength(1)
  })

  it('Alert defaults color to primary', () => {
    const alertWrapper = shallow(<Alert />)
    const bootstrapBadge = alertWrapper.find(BootstrapAlert)
    expect(bootstrapBadge.props().variant).toEqual('primary')
  })

  it('Alert defaults label to "Dismiss"', () => {
    const alertWrapper = shallow(<Alert dismissible />)
    const bootstrapBadge = alertWrapper.find(BootstrapAlert)
    expect(bootstrapBadge.props().closeLabel).toEqual('Dismiss')
  })

  it('Alert can change colors', () => {
    const alertWrapper = shallow(<Alert color="secondary" />)
    const bootstrapBadge = alertWrapper.find(BootstrapAlert)
    expect(bootstrapBadge.props().variant).toEqual('secondary')
  })

  it('Alert can display TSX message', () => {
    const alertWrapper = shallow(
      <Alert color="secondary" message={<strong>a custom message</strong>} />,
    )
    const bootstrapBadge = alertWrapper.find(BootstrapAlert)
    expect(bootstrapBadge.props().variant).toEqual('secondary')
  })
})
