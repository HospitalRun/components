import React, { ReactNode } from 'react'
import BootstrapModal from 'react-bootstrap/Modal'
import { Button, Props as ButtonProps } from '../Button'
import { ButtonsAlignment } from './interfaces'

interface Props {
  /** Defines if the modal should be visible. */
  show: boolean
  /** Toggles the modal visibility. */
  toggle(): void
  /** Defines the title of the modal. */
  title?: string
  /** Defines the body of the modal. */
  body?: ReactNode
  /**
   * Renders a close button in modal header.
   * @default true
   * */
  showHeaderCloseButton?: boolean
  /**
   * Defines if the modal should be vertically centered.
   * @default false
   * */
  verticallyCentered?: boolean
  /**
   * Defines the buttons alignment.
   * @default "edges"
   * */
  buttonsAlignment?: ButtonsAlignment
  /**
   * Optional close button properties.
   * */
  closeButton?: ButtonProps
  /**
   * Optional middle button properties.
   * */
  middleButton?: ButtonProps
  /**
   * Optional success button properties.
   * */
  successButton?: ButtonProps
}

/**
 * Add dialogs for lightboxes, user notifications, or completely custom content.
 */

const Modal = (props: Props) => {
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
  } = props

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
        <BootstrapModal.Header closeButton={showHeaderCloseButton !== false}>
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
          <Button {...closeButton} color={closeButton.color || 'secondary'}>
            {closeButton.children || 'Close'}
          </Button>
        )}
        {middleButton && (
          <Button {...middleButton} color={middleButton.color || 'info'}>
            {middleButton.children || 'Retry'}
          </Button>
        )}
        {successButton && (
          <Button {...successButton} color={successButton.color || 'primary'}>
            {successButton.children || 'Confirm'}
          </Button>
        )}
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export { Modal }
