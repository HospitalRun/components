import * as React from 'react'
import { shallow } from 'enzyme'
import { Modal } from '../src'
import BootstrapModal from 'react-bootstrap/Modal'

describe('Modal', () => {
  it('Modal renders itself without crashing', () => {
    const modalWrapper = shallow(<Modal show={true} toggle={() => {}} />)
    expect(modalWrapper.find(BootstrapModal)).toHaveLength(1)
  })
})
