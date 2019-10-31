import React from 'react'
import BootstrapBadge from 'react-bootstrap/Badge'

interface Props {
  /** Defines the color of the badge. Defaults to primary. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
}

/**
 * Badges can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
const Badge: React.FunctionComponent<Props> = props => {
  const { color, children } = props
  return <BootstrapBadge variant={color}>{children}</BootstrapBadge>
}

Badge.defaultProps = {
  color: 'primary',
}

export { Badge }
