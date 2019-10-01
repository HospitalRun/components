import React, { Component } from 'react'
import BootstrapBadge from 'react-bootstrap/Badge'

interface Props {
  /** Defines the color of the badge. Defaults to primary. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
}

/**
 * Badges can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
class Badge extends Component<Props, {}> {
  render() {
    const color = this.props.color ? this.props.color : 'primary'
    return <BootstrapBadge variant={color}>{this.props.children}</BootstrapBadge>
  }
}

export { Badge }
