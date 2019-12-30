import React from 'react'
import BootstrapBadge from 'react-bootstrap/Badge'
import { ColorVariant } from '../../interfaces'

interface Props {
  /** Defines the color of the badge. Defaults to primary. */
  color?: ColorVariant
  /** The children to render */
  children?: React.ReactNode
}

/**
 * Badges can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
const Badge = (props: Props) => {
  const { color, children } = props
  return <BootstrapBadge variant={color}>{children}</BootstrapBadge>
}

Badge.defaultProps = {
  color: 'primary',
}

export { Badge }
