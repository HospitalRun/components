import React from 'react'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

interface Props {
  /** Defines the color of the list item. */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
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
}

/**
 * ListItem components display the child elements of List components and support flexible layout, style, and interactivity options.
 */
const DropdownItem = (props: Props) => {
  const { color, action, active, disabled, href, onClick, children } = props

  return (
    <ListGroupItem
      variant={color}
      action={action}
      active={active}
      disabled={disabled}
      href={href}
      onClick={onClick}
    >
      {children}
    </ListGroupItem>
  )
}

export { DropdownItem }
