import { CSSProperties } from 'react'
import * as React from 'react'
import BootstrapBadge from 'react-bootstrap/Badge'

import { ColorVariant } from '../../interfaces'

export interface BadgeProps {
  /**
   * Defines the color of the badge. Defaults to primary.
   * @default "primary"
   */
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
const Badge = (props: BadgeProps) => {
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
