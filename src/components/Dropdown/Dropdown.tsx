import React, { ElementType } from 'react'
import DropdownRB from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Item } from './interfaces'
import { colorVariants } from '../../helpers/colorVariants'

interface Props extends React.Props<any> {
  /** Removes outer borders and rounded corners to render list group items edge-to-edge in a parent container. */
  text: string
  /* Dropdown title variant color */
  variant: colorVariants
  /* Align dropdown items to right  */
  alignRight?: boolean
  /* dropdown toggle button id */
  id: string
  /* Custom element type */
  as?: ElementType
  /* Handle toggle additional click events */
  onClick?: (event: React.MouseEvent<any>) => void
  /* Handle toggle additional click events */
  size?: 'sm' | 'md' | 'lg'
  /* Handle toggle additional click events */
  items: Item[]
  /* Handle toggle additional click events */
  direction?: 'down' | 'up' | 'left' | 'right'
  /* Custom style */
  style?: Record<string, any>
}

/**
 * Toggle contextual overlays for displaying lists of links and more
 * with the Bootstrap dropdown plugin
 */
const Dropdown = (props: Props) => {
  const { text, size, id, items, direction, variant, style, alignRight } = props

  const getDropdownItem = (item: Item, i: number) => (
    <DropdownRB.Item style={item.style} eventKey={item.eventKey || `event-${i.toString()}`}>
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
  id: '',
}

export { Dropdown }
