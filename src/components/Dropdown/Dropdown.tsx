import React, { ElementType } from 'react'
import DropdownRB from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Item } from './interfaces'
import { ColorVariants } from '../../helpers/ColorVariants'

interface Props extends React.Props<any> {
  /** Determines the dropdown toggle text */
  text: string
  /* Determines the dropdown's items */
  items: Item[]
  /* Determines the dropdown toggle button id */
  id?: string
  /* Determines the dropdown toggle variant color */
  variant: ColorVariants
  /* Determines the horizontal alignment of the dropdown items */
  alignRight?: boolean
  /* Determines the dropdown's custom element type */
  as?: ElementType
  /* Handle the dropdown toggle additional click events */
  onClick?: (event: React.MouseEvent<any>) => void
  /* Determines the dropdown toggle button size */
  size?: 'sm' | 'md' | 'lg'
  /* Determines the dropdown's direction */
  direction?: 'down' | 'up' | 'left' | 'right'
  /* Determines the dropdown's custom style */
  style?: Record<string, any>
}

/**
 * Customizable dropdown component based on React-Bootstrap dropdown
 *
 */
const Dropdown = (props: Props) => {
  const { text, size, id, items, direction, variant, style, alignRight } = props

  const getDropdownItem = (item: Item, i: number) => (
    <DropdownRB.Item
      style={item.style}
      key={item.key || `dropdown-item-${i.toString()}`}
      eventKey={item.eventKey || `dropdown-event-${i.toString()}`}
    >
      {item.text}
    </DropdownRB.Item>
  )

  return (
    <DropdownButton
      drop={direction}
      size={size}
      variant={variant}
      title={text}
      id={id}
      style={style}
      alignRight={alignRight}
    >
      {items.map((item, i) => getDropdownItem(item, i))}
    </DropdownButton>
  )
}
Dropdown.defaultProps = {
  variant: 'light',
  size: 'sm',
  direction: 'down',
}

export { Dropdown }
