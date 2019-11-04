import React, { Component, ReactNode } from 'react'
import BootstrapAlert from 'react-bootstrap/Alert'
import { Button } from '../Button'

interface Props {
  /**
   * Defines the color of the alert. Defaults to primary.
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
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
    } = this.props

    const { show } = this.state

    if (show) {
      return (
        <BootstrapAlert
          variant={color}
          onClose={() => this.setState({ show: false })}
          dismissible={dismissible}
          closeLabel={closeLabel}
        >
          {title && <BootstrapAlert.Heading>{title}</BootstrapAlert.Heading>}
          {message && <div>{message}</div>}
          {dismissible && (
            <>
              <hr />
              <div className="d-flex justify-content-end">
                <Button outlined onClick={() => this.setState({ show: false })} color={color}>
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
