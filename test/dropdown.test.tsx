import * as React from 'react'
import { shallow } from 'enzyme'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from '../src'

describe('Dropdown', () => {
  it('Dropdown renders itself without crashing', () => {
    const dropdownWrapper = shallow(
      <Dropdown size="sm" text="Dropdown Text" items={[{ text: 'Link' }]} />,
    )
    console.log(dropdownWrapper.debug())
    expect(dropdownWrapper.find(DropdownButton)).toHaveLength(1)
  })
})
