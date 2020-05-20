import * as React from 'react'
import { shallow, mount } from 'enzyme'
import * as sinon from 'sinon'
import { Button } from '../src/components/Button'
import { Tab, TabsHeader, Icon } from '../src'

describe('Tabs', () => {
  it('Empty tab header renders without crashing', () => {
    const tabHeaderWrapper = shallow(<TabsHeader />)
    expect(tabHeaderWrapper.find('ul')).toHaveLength(1)
  })

  it('Tab renders without crashing', () => {
    const tabWrapper = shallow(<Tab label="TestLabel" />)
    expect(tabWrapper.find('li')).toHaveLength(1)
    expect(tabWrapper.find(Button)).toHaveLength(1)
  })

  it('Active prop causes .active class to be applied to button tag', () => {
    const tabWrapper = shallow(<Tab label="TestLabel" active />)
    expect(tabWrapper.find(Button).hasClass('active')).toEqual(true)
  })

  it('Disabled prop causes .disabled class to be applied to button tag', () => {
    const tabWrapper = shallow(<Tab label="TestLabel" disabled />)
    expect(tabWrapper.find(Button).hasClass('disabled')).toEqual(true)
  })

  it('Not including active or disabled props causes neither .active or .disabled classes to be applied to button tag', () => {
    const tabWrapper = shallow(<Tab label="TestLabel" />)
    expect(tabWrapper.find(Button).hasClass('active')).toEqual(false)
    expect(tabWrapper.find(Button).hasClass('disabled')).toEqual(false)
  })

  it('OnClick event gets activated when button is clicked on', () => {
    const spy = sinon.spy()
    const tabWrapper = shallow(<Tab label="TestLabel" onClick={spy} />)
    tabWrapper
      .find(Button)
      .first()
      .simulate('click')
    expect(spy.calledOnce).toBe(true)
  })

  it('OnClick event does not get activated by click, when disabled is passed', () => {
    const spy = sinon.spy()
    const tabWrapper = shallow(<Tab label="TestLabel" onClick={spy} disabled />)
    tabWrapper
      .find(Button)
      .first()
      .simulate('click')
    expect(spy.calledOnce).toBe(false)
  })

  it('header renders children elements when passed in', () => {
    const headerWrapper = shallow(
      <TabsHeader>
        <Tab label="One" />
        <Tab label="Two" />
        <Tab label="Three" />
      </TabsHeader>,
    )
    const tabs = headerWrapper.find(Tab)
    expect(tabs).toHaveLength(3)
  })

  it('Tab renders icon and defaults to left side', () => {
    const wrapper = mount(<Tab label="One" icon="patient" />)
    const buttonWrapper = wrapper.find('button')

    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(buttonWrapper.childAt(0).type()).toBe(Icon)
  })

  it('Tab renders icon and is on left side when iconLocation is used and set to left', () => {
    const wrapper = mount(<Tab label="One" icon="patient" iconLocation="left" />)
    const buttonWrapper = wrapper.find('button')

    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(buttonWrapper.childAt(0).type()).toBe(Icon)
  })

  it('Tab renders icon and is on right side when iconLocation is used and set to right', () => {
    const wrapper = mount(<Tab label="One" icon="patient" iconLocation="right" />)
    const buttonWrapper = wrapper.find('button')

    expect(wrapper.find(Icon)).toHaveLength(1)
    expect(buttonWrapper.childAt(buttonWrapper.children().length - 1).type()).toBe(Icon)
  })
})
