import React from 'react'
import Badge from 'react-bootstrap/Badge'

interface Props {
  /** Defines the color of the pill. Defaults to primary. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
}

/**
 * Pills can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
const Pill: React.FunctionComponent<Props> = props => {
  const { color, children } = props
  return (
    <Badge pill variant={color}>
      {children}
    </Badge>
  )
}

Pill.defaultProps = {
  color: 'primary',
}

export { Pill }
