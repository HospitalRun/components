import React, { Component, ReactNode, CSSProperties } from 'react'
import BootstrapAlert from 'react-bootstrap/Alert'
import { ColorVariant } from '../../interfaces'
import { Button } from '../Button'

interface Props {
  /**
   * Defines the color of the alert. Defaults to primary.
   * @default "primary"
   */
  color?: ColorVariant
  /** Defines the title of the alert. */
  title?: string
  /** Defines the message of the alert. */
  message?: ReactNode
  /** Defines if the alert should be dismissible. Defaults to false. */
  dismissible?: boolean
  /**
   * Defines the label of the close button if the alert is dismissible.
   * @default "Dismiss"
   * */
  closeLabel?: string
  /**
   * Defines the class of the alert
   */
  className?: string
  /**
   * Defines the style of the alert
   */
  style?: CSSProperties
  /**
   * Defines the class of the close button
   */
  btnClassName?: string
  /**
   * Defines the style of the close button
   */
  btnStyle?: CSSProperties
}

interface State {
  show: boolean
}

/**
 * Alerts can provide contextual feedback messages for typical user actions
 * with the handful of available and flexible alert messages.
 */

class Alert extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  render() {
    const {
      color = 'primary',
      title,
      message,
      dismissible = false,
      closeLabel = 'Dismiss',
      className,
      style,
      btnClassName,
      btnStyle,
    } = this.props

    const { show } = this.state

    if (show) {
      return (
        <BootstrapAlert
          variant={color}
          onClose={() => this.setState({ show: false })}
          dismissible={dismissible}
          closeLabel={closeLabel}
          className={className}
          style={style}
        >
          {title && <BootstrapAlert.Heading>{title}</BootstrapAlert.Heading>}
          {message && <div>{message}</div>}
          {dismissible && (
            <>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  outlined
                  onClick={() => this.setState({ show: false })}
                  color={color}
                  className={btnClassName}
                  style={btnStyle}
                >
                  {closeLabel}
                </Button>
              </div>{' '}
            </>
          )}
        </BootstrapAlert>
      )
    }
    return <></>
  }
}

export { Alert }
