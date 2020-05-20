import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { Card, Collapse } from 'react-bootstrap'
import { Panel, Icon } from '../src'

describe('Panel', () => {
  it('should render itself without props and without crashing', () => {
    const panelWrapper = shallow(<Panel />)
    expect(panelWrapper.find(Card)).toHaveLength(1)
    expect(panelWrapper.find(Card.Header)).toHaveLength(0)
    expect(panelWrapper.find(Card.Body)).toHaveLength(1)
    expect(panelWrapper.find(Card.Footer)).toHaveLength(0)
  })

  it('should have children nodes rendered in the card body', () => {
    const panelWrapper = shallow(<Panel>Here is the text</Panel>)
    expect(
      panelWrapper
        .find(Collapse)
        .render()
        .text(),
    ).toEqual('Here is the text')
  })

  it('should include header with title if title prop is passed', () => {
    const panelWrapper = shallow(<Panel title="Test Title" />)
    expect(
      panelWrapper
        .find(Card.Header)
        .first()
        .text(),
    ).toBe('Test Title')
  })

  it('should include footer with text if footer prop is passed', () => {
    const panelWrapper = shallow(<Panel footer="Test Footer Text" />)
    expect(
      panelWrapper
        .find(Card.Footer)
        .first()
        .text(),
    ).toBe('Test Footer Text')
  })

  it('should do nothing to panel on header click if collapsible prop false or missing', () => {
    const panelWrapper = mount(
      <Panel title="Test Title">
        <p>You can add stuff here!</p>
      </Panel>,
    )

    const cardHeaderWrapper = panelWrapper.find(Card.Header).first()
    expect(panelWrapper.find('.collapse')).toHaveLength(1)
    expect(panelWrapper.find('.collapse.show')).toHaveLength(1)
    cardHeaderWrapper.simulate('click')
    expect(panelWrapper.find('.collapsing')).toHaveLength(0)
  })

  it('should have collapse icon in header if collapsible prop true and title passed', () => {
    const panelWrapper = shallow(<Panel title="Test Title" collapsible />)
    const headerWrapper = panelWrapper.find(Card.Header).first()
    expect(panelWrapper.find(Icon)).toHaveLength(1)
    expect(headerWrapper.find(Icon)).toHaveLength(1)
  })

  it('should have collapse icon in body if collapsible prop true and title prop undefined', () => {
    const panelWrapper = shallow(<Panel collapsible />)
    const bodyWrapper = panelWrapper.find(Card.Body).first()
    expect(panelWrapper.find(Icon)).toHaveLength(1)
    expect(bodyWrapper.find(Icon)).toHaveLength(1)
  })

  it('should collapse the panel on header click', () => {
    const panelWrapper = mount(
      <Panel title="Test Title" collapsible>
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>,
    )
    const cardHeaderWrapper = panelWrapper.find(Card.Header).first()
    expect(panelWrapper.find('.collapse.show')).toHaveLength(1)
    cardHeaderWrapper.simulate('click')
    expect(panelWrapper.find('.collapsing')).toHaveLength(1)
  })

  it('should open panel on header click', () => {
    const panelWrapper = mount(
      <Panel title="Test Title" collapsible collapsed>
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>,
    )
    const cardHeaderWrapper = panelWrapper.find(Card.Header).first()
    expect(panelWrapper.find('.collapse.show')).toHaveLength(0)
    expect(panelWrapper.find('.collapse')).toHaveLength(1)
    cardHeaderWrapper.simulate('click')
    expect(panelWrapper.find('.collapsing')).toHaveLength(1)
  })

  it('should toggle panel on icon click', () => {
    const panelWrapper = mount(
      <Panel title="Test Title" collapsible>
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>,
    )
    const icon = panelWrapper.find(Icon)
    icon.simulate('click')
    expect(panelWrapper.find('.collapsing')).toHaveLength(1)
  })

  it('should be initially collapsed if collapsed prop is passed', () => {
    const panelWrapper = mount(<Panel collapsible collapsed />)
    expect(panelWrapper.find('.collapse.show')).toHaveLength(0)
    expect(panelWrapper.find('.collapse')).toHaveLength(1)
  })

  it('should have border variant class if color prop is passed', () => {
    const panelWrapper = mount(<Panel color="secondary" />)
    expect(panelWrapper.find('.card.border-secondary')).toHaveLength(1)
  })
})
