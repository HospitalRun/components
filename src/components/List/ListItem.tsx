import React, { CSSProperties } from 'react'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { ColorVariant } from '../../interfaces'

interface Props {
  /** Defines the color of the list item. */
  color?: ColorVariant
  /** Applies additional hover, active and disabled styles to the list item. */
  action?: boolean
  /** Indicates the list group's current active selection. */
  active?: boolean
  /** Prevents actions on a list item. */
  disabled?: boolean
  /** The link value for a list item. */
  href?: string
  /** The link value for a list item. */
  eventKey?: string
  /** Handles the on click event for a list item. */
  onClick?: (event: React.MouseEvent) => void
  /** The children to render. */
  children?: React.ReactNode
  /**
   * Defines the class of the listitem.
   */
  className?: string
  /**
   * Defines the style of the listitem.
   */
  style?: CSSProperties
}

/**
 * ListItem components display the child elements of List components and support flexible layout, style, and interactivity options.
 */
const ListItem = (props: Props) => {
  const { color, action, active, disabled, href, onClick, children, className, style } = props

  return (
    <ListGroupItem
      variant={color}
      action={action}
      active={active}
      disabled={disabled}
      href={href}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </ListGroupItem>
  )
}

export { ListItem }
