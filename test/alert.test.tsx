import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapAlert from 'react-bootstrap/Alert'
import { Alert, Button } from '../src'

describe('Alert', () => {
  it('Alert renders itself without crashing', () => {
    const alertWrapper = shallow(<Alert title="Test Alert" />)
    expect(alertWrapper.find(BootstrapAlert)).toHaveLength(1)
  })

  it('Alert defaults color to primary', () => {
    const alertWrapper = shallow(<Alert />)
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().variant).toEqual('primary')
  })

  it('Alert defaults label to "Dismiss"', () => {
    const alertWrapper = shallow(<Alert dismissible />)
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().closeLabel).toEqual('Dismiss')
  })

  it('Alert can change colors', () => {
    const alertWrapper = shallow(<Alert color="secondary" />)
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().variant).toEqual('secondary')
  })

  it('Alert can display TSX message', () => {
    const alertWrapper = shallow(
      <Alert color="secondary" message={<strong>a custom message</strong>} />,
    )
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().variant).toEqual('secondary')
  })

  it('Alert can use custom class', () => {
    const alertWrapper = shallow(<Alert className="customClass" />)
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().className).toEqual('customClass')
  })

  it('Alert can use custom style', () => {
    const alertWrapper = shallow(<Alert style={{ background: 'red' }} />)
    const bootstrapAlert = alertWrapper.find(BootstrapAlert)
    expect(bootstrapAlert.props().style).toMatchObject({ background: 'red' })
  })

  it('Alert Button can use custom class', () => {
    const alertWrapper = shallow(<Alert btnClassName="customClass" dismissible />)
    const button = alertWrapper.find(Button)
    expect(button.props().className).toEqual('customClass')
  })

  it('Alert Button can use custom style', () => {
    const alertWrapper = shallow(<Alert btnStyle={{ background: 'red' }} dismissible />)
    const button = alertWrapper.find(Button)
    expect(button.props().style).toMatchObject({ background: 'red' })
  })

  it('Alert does not render with state.show set to false', () => {
    const alertWrapper = shallow(<Alert />)
    alertWrapper.setState({ show: false })
    expect(alertWrapper.containsMatchingElement(<></>)).toBeTruthy()
  })
})
