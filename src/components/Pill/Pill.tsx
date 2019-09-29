import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

interface Props {
  /** Defines the color of the badge. Defaults to primary. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
}

/**
 * Badges can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
class Pill extends Component<Props, {}> {
  render() {
    const color = this.props.color ? this.props.color : 'primary'
    return (
      <Badge pill variant={color}>
        {this.props.children}
      </Badge>
    )
  }
}

export { Pill }
