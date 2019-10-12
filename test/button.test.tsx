import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { Button as BootstrapButton } from 'react-bootstrap'
import { Button } from '../src'
import { Icon } from '../src'

describe('Button', () => {
  it('Button renders itself without crashing', () => {
    const buttonWrapper = shallow(<Button>Button</Button>)
    expect(buttonWrapper.find(BootstrapButton)).toHaveLength(1)
  })

  it('Button defaults variant to primary when no color prop is used', () => {
    const buttonWrapper = shallow(<Button>Button</Button>)
    const bootstrapButton = buttonWrapper.find(BootstrapButton)
    expect(bootstrapButton.props().variant).toEqual('primary')
  })

  it('Button used proper variant when color is chosen', () => {
    const buttonWrapper = shallow(<Button color="success">Button</Button>)
    const bootstrapButton = buttonWrapper.find(BootstrapButton)
    expect(bootstrapButton.props().variant).toEqual('success')
  })

  it('Button uses outline variant when outline prop is true', () => {
    const buttonWrapper = shallow(<Button outlined>Button</Button>)
    const bootstrapButton = buttonWrapper.find(BootstrapButton)
    expect(bootstrapButton.props().variant).toEqual('outline-primary')

    const buttonWrapperWithColor = shallow(
      <Button outlined color="success">
        Button
      </Button>,
    )
    const bootstrapButtonWithColor = buttonWrapperWithColor.find(BootstrapButton)
    expect(bootstrapButtonWithColor.props().variant).toEqual('outline-success')
  })

  it('Button renders button text passed to it', () => {
    const buttonWrapper = shallow(<Button>Button</Button>)
    expect(buttonWrapper.text().trim()).toEqual('Button')
  })

  it('Button changes size with the size prop', () => {
    const smallButtonWrapper = shallow(<Button size="small">Button</Button>)
    const smallBootstrapButton = smallButtonWrapper.find(BootstrapButton)
    expect(smallBootstrapButton.props().size).toEqual('sm')

    const largeButtonWrapper = shallow(<Button size="large">Button</Button>)
    const largeBootstrapButton = largeButtonWrapper.find(BootstrapButton)
    expect(largeBootstrapButton.props().size).toEqual('lg')
  })

  it('Button renders as block when the block prop is used', () => {
    const buttonWrapper = shallow(<Button block>Button</Button>)
    const bootstrapButton = buttonWrapper.find(BootstrapButton)
    expect(bootstrapButton.props().block).toEqual(true)
  })

  it('Button renders as disabled when the disabled prop is used', () => {
    const buttonWrapper = shallow(<Button disabled>Button</Button>)
    const bootstrapButton = buttonWrapper.find(BootstrapButton)
    expect(bootstrapButton.props().disabled).toEqual(true)
  })

  it('Button handles on click event', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Button onClick={onButtonClick} />)
    wrapper.simulate('click')
    expect(onButtonClick).toHaveProperty('callCount', 1)
  })

  it('Button renders icon and defaults to left side', () => {
    const wrapper = shallow(<Button icon="patient">Button</Button>)
    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(wrapper.childAt(0).type()).toBe(Icon)
  })

  it('Button renders icon and is on left side when iconLocation is used and set to left', () => {
    const wrapper = shallow(<Button icon="patient">Button</Button>)
    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(wrapper.childAt(0).type()).toBe(Icon)
  })

  it('Button renders icon and is on right side when iconLocation is used and set to right', () => {
    const wrapper = shallow(
      <Button icon="patient" iconLocation="right">
        Button
      </Button>,
    )
    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(wrapper.childAt(wrapper.children().length - 1).type()).toBe(Icon)
  })
})
