import React, { CSSProperties } from 'react'
import BootstrapBadge from 'react-bootstrap/Badge'
import { ColorVariant } from '../../interfaces'

interface Props {
  /** Defines the color of the badge. Defaults to primary. */
  color?: ColorVariant
  /** The children to render */
  children?: React.ReactNode
  /** Defines the class of the badge */
  className?: string
  /** Defines the style of the badge */
  style?: CSSProperties
}

/**
 * Badges can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
const Badge = (props: Props) => {
  const { color, children, className, style } = props
  return (
    <BootstrapBadge variant={color} className={className} style={style}>
      {children}
    </BootstrapBadge>
  )
}

Badge.defaultProps = {
  color: 'primary',
}

export { Badge }
