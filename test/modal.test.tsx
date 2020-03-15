import * as React from 'react'
import { shallow, mount } from 'enzyme'
import BootstrapModal from 'react-bootstrap/Modal'
import BootstrapModalHeader from 'react-bootstrap/ModalHeader'
import { Modal } from '../src'

describe('Modal', () => {
  it('Modal renders itself without crashing', () => {
    const modalWrapper = shallow(
      <Modal
        show
        toggle={() => {
          console.log('toggle')
        }}
        title="This is a modal title!"
        body={
          <div>
            <p>And this is a modal body.</p>
            <div>
              Simple example with just one button. <br /> The modal body can be any JSX.
            </div>
          </div>
        }
      />,
    )
    expect(modalWrapper.find(BootstrapModal)).toHaveLength(1)
  })

  it('Modal closeButton should default to true', () => {
    const modalWrapper = shallow(
      <Modal
        show
        toggle={() => {
          console.log('toggle')
        }}
        title="This is a modal title!"
        body={
          <div>
            <p>And this is a modal body.</p>
            <div>
              Simple example with just one button. <br /> The modal body can be any JSX.
            </div>
          </div>
        }
      />,
    )
    expect(modalWrapper.find(BootstrapModalHeader).props().closeButton).toEqual(true)
  })

  it('Modal should not be centered by default', () => {
    const modalWrapper = shallow(
      <Modal
        show
        toggle={() => {
          console.log('toggle')
        }}
        title="This is a modal title!"
        body={
          <div>
            <p>And this is a modal body.</p>
            <div>
              Simple example with just one button. <br /> The modal body can be any JSX.
            </div>
          </div>
        }
      />,
    )
    expect(modalWrapper.find(BootstrapModal).props().centered).toBeFalsy()
  })

  it('Modal should not have buttons by default', () => {
    const modalWrapper = shallow(
      <Modal
        show
        toggle={() => {
          console.log('toggle')
        }}
        title="This is a modal title!"
        body={
          <div>
            <p>And this is a modal body.</p>
            <div>
              Simple example with just one button. <br /> The modal body can be any JSX.
            </div>
          </div>
        }
      />,
    )
    expect(modalWrapper.find(BootstrapModal).props().closeButton).toBeUndefined()
    expect(modalWrapper.find(BootstrapModal).props().middleButton).toBeUndefined()
    expect(modalWrapper.find(BootstrapModal).props().successButton).toBeUndefined()
  })

  it('Modal hides itself invoking onHide method', () => {
    let show = true

    const modalWrapper = mount(
      <Modal
        show={show}
        toggle={() => {
          show = !show
        }}
        title="This is a modal title!"
        body={
          <div>
            <p>And this is a modal body.</p>
            <div>
              Simple example with no buttons. <br /> The modal body can be any JSX.
            </div>
          </div>
        }
      />,
    )
    const bootstrapModal = modalWrapper.find(BootstrapModal)
    const button = bootstrapModal.find('button')
    button.simulate('click')
    expect(show).toEqual(false)
  })
})
