import React, { Component, ReactNode } from 'react'
import BootstrapModal from 'react-bootstrap/Modal'
import { Button } from '../Button'
import { ButtonColor } from '../Button/interfaces'
import { ButtonsAlignment } from './interfaces'

interface Props {
  /** Defines if the modal should be visible.*/
  show: boolean
  /** Toggles the modal visibility.*/
  toggle(): void
  /** Defines the title of the modal.*/
  title?: string
  /** Defines the body of the modal.*/
  body?: ReactNode
  /**
   * Renders a close button in modal header.
   * @default true
   **/
  showHeaderCloseButton?: boolean
  /**
   * Defines if the modal should be vertically centered.
   * @default false
   **/
  verticallyCentered?: boolean
  /**
   * Defines the buttons alignment.
   * @default "edges"
   **/
  buttonsAlignment?: ButtonsAlignment
  /**
   * Optional close button properties.
   **/
  closeButton?: {
    /**
     * Optional label for the close button.
     * @default "Close"
     **/
    label?: string
    /**
     * Optional color for the close button.
     * @default "secondary"
     **/
    color?: ButtonColor
    /**
     * Optional callback for the close button.
     **/
    callback?(): void
  }
  /**
   * Optional middle button properties.
   **/
  middleButton?: {
    /**
     * Optional label for the middle button.
     * @default "Another action"
     **/
    label?: string
    /**
     * Optional color for the middle button.
     * @default "warning"
     **/
    color?: ButtonColor
    /**
     * Optional callback for the middle button.
     **/
    callback?(): void
  }
  /**
   * Optional success button properties.
   **/
  successButton?: {
    /**
     * Optional label for the success button.
     * @default "Confirm"
     **/
    label?: string
    /**
     * Optional color for the success button.
     * @default "primary"
     **/
    color?: ButtonColor
    /**
     * Optional callback for the success button.
     **/
    callback?(): void
  }
}

/**
 * Add dialogs for lightboxes, user notifications, or completely custom content.
 */

class Modal extends Component<Props, {}> {
  render() {
    const {
      show,
      toggle,
      title,
      body,
      verticallyCentered,
      buttonsAlignment,
      showHeaderCloseButton,
      closeButton,
      middleButton,
      successButton,
    } = this.props

    if (show) {
      return (
        <BootstrapModal
          autoFocus
          centered={verticallyCentered}
          keyboard
          restoreFocus
          show={show}
          onHide={() => toggle()}
        >
          {(showHeaderCloseButton === false ? title : true) && (
            <BootstrapModal.Header closeButton={showHeaderCloseButton === false ? false : true}>
              {title && <BootstrapModal.Title>{title}</BootstrapModal.Title>}
            </BootstrapModal.Header>
          )}
          {body && <BootstrapModal.Body>{body}</BootstrapModal.Body>}
          <BootstrapModal.Footer
            style={{
              justifyContent:
                buttonsAlignment === 'left'
                  ? 'flex-start'
                  : buttonsAlignment === 'right'
                  ? 'flex-end'
                  : buttonsAlignment === 'center'
                  ? 'center'
                  : 'space-between',
            }}
          >
            {closeButton && (
              <Button
                color={closeButton.color || 'secondary'}
                onClick={() => {
                  if (closeButton && closeButton.callback) {
                    closeButton.callback()
                  }
                  toggle()
                }}
              >
                {closeButton.label || 'Close'}
              </Button>
            )}
            {middleButton && (
              <Button
                color={middleButton.color || 'primary'}
                onClick={() => {
                  if (middleButton && middleButton.callback) {
                    middleButton.callback()
                  }
                  toggle()
                }}
              >
                {middleButton.label || 'Confirm'}
              </Button>
            )}
            {successButton && (
              <Button
                color={successButton.color || 'primary'}
                onClick={() => {
                  if (successButton && successButton.callback) {
                    successButton.callback()
                  }
                  toggle()
                }}
              >
                {successButton.label || 'Confirm'}
              </Button>
            )}
          </BootstrapModal.Footer>
        </BootstrapModal>
      )
    } else return <></>
  }
}

export { Modal }
