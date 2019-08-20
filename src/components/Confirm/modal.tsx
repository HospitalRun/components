import * as React from 'react'
import { ConfirmProps } from './interfaces'
import * as strings from './strings'
import Button from 'react-bootstrap/Button'

const Modal = (props: ConfirmProps) => ({ onClose }: any) => (
  <>
    <div className="confirm-container">
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      <div className="confirm-buttons">
        <Button
          onClick={() => {
            props.cancel.callback()
            onClose()
          }}
          style={{ float: 'left' }}
          className="confirm-btn"
          variant="danger"
        >
          {props.cancel.label || strings.defaultCancelLabel}
        </Button>
        <Button
          onClick={() => {
            props.ok.callback()
            onClose()
          }}
          style={{ float: 'right' }}
          className="confirm-btn"
          variant="success"
        >
          {props.ok.label || strings.defaultOkLabel}
        </Button>
      </div>
    </div>
  </>
)

export default Modal
