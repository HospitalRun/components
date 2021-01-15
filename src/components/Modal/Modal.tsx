/* eslint react/prop-types: 0 */
import { ReactNode, CSSProperties } from 'react'
import BootstrapModal from 'react-bootstrap/Modal'

import { Button, ButtonProps } from '../Button'
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
  /**
   * Styling through CSS classes
   */
  className?: string
  /**
   * Styilng through inline CSSProperties
   */
  style?: CSSProperties
  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked. Default = true
   */
  backdrop?: true | false | 'static'
  /**
   * Callback fired before the Modal transitions in
   * @param node
   */
  onEnter?(node: HTMLElement): any
  /**
   * Callback fired after the Modal finishes transitioning in
   * @param node
   */
  onEntered?(node: HTMLElement): any
  /**
   * Callback fired as the Modal begins to transition in
   * @param node
   */
  onEntering?(node: HTMLElement): any
  /**
   * Callback fired right before the Modal transitions out
   * @param node
   */
  onExit?(node: HTMLElement): any
  /**
   * Callback fired after the Modal finishes transitioning out
   * @param node
   */
  onExited?(node: HTMLElement): any
  /**
   * Callback fired as the Modal begins to transition out
   * @param node
   */
  onExiting?(node: HTMLElement): any
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
    className,
    style,
    backdrop,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
  } = props

  return (
    <BootstrapModal
      dialogClassName={className}
      show={show}
      style={style}
      autoFocus
      centered={verticallyCentered}
      keyboard
      restoreFocus
      onHide={() => toggle()}
      backdrop={backdrop || true}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
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
