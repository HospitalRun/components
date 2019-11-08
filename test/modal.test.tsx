import * as React from 'react'
import { shallow } from 'enzyme'
import BootstrapModal from 'react-bootstrap/Modal'
import { Modal } from '../src'

describe('Modal', () => {
  it('Modal renders itself without crashing', () => {
    const modalWrapper = shallow(<Modal show toggle={() => {}} />)
    expect(modalWrapper.find(BootstrapModal)).toHaveLength(1)
  })
})
