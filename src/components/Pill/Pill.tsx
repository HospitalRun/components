import React, { CSSProperties } from 'react'
import Badge from 'react-bootstrap/Badge'

interface Props {
  /** Defines the color of the pill. Defaults to primary. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  /** The children to render */
  children?: React.ReactNode
  /**
   * Defines the class of the pill.
   */
  className?: string
  /**
   * Defines the style of the pill.
   */
  style?: CSSProperties
}

/**
 * Pills can provide contextual clues to the user by differentiating color and styling
 * from the surrounding content.
 */
const Pill = (props: Props) => {
  const { color, children, className, style } = props
  return (
    <Badge pill variant={color} className={className} style={style}>
      {children}
    </Badge>
  )
}

Pill.defaultProps = {
  color: 'primary',
}

export { Pill }
