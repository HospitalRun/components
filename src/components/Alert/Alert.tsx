import React, { Component } from 'react'
import BootstrapAlert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

interface Props {
  /** Defines the color of the alert. Defaults to primary.
   * @default "primary"
   **/
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  /** Defines the title of the alert.*/
  title?: string
  /** Defines the message of the alert.*/
  message?: string
  /** Defines if the alert should be dismissable. Defaults to false.*/
  dismissable?: boolean
  /** Defines the label of the close button if the alert is dismissable.
   * @default "Dismiss"
   **/
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
      dismissable = false,
      closeLabel = 'Dismiss',
    } = this.props

    if (this.state.show) {
      return (
        <BootstrapAlert
          variant={color}
          onClose={() => this.setState({ show: false })}
          dismissible={dismissable}
          closeLabel={closeLabel}
        >
          {title && <BootstrapAlert.Heading>{title}</BootstrapAlert.Heading>}
          {message && <div>{message}</div>}
          {dismissable && (
            <>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => this.setState({ show: false })}
                  variant={`outline-${color}` as Props['color']}
                >
                  {closeLabel}
                </Button>
              </div>{' '}
            </>
          )}
        </BootstrapAlert>
      )
    } else return <></>
  }
}

export { Alert }
