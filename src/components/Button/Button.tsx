import React from 'react'
import BootstrapButton from 'react-bootstrap/Button'
import { ButtonType } from './interfaces'
import { IconType } from '../Icon/interfaces'
import { Icon } from '../Icon'

interface Props {
  /** Determines if the button should be outlined and not filled. By defaut is false */
  outlined?: boolean
  /** Defines the button variant. By default is primary */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  /** Determines whether or not the button should be a block button or not. By default false */
  block?: boolean
  /** Determines whether or not the button should be disabled or not. By default is false. */
  disabled?: boolean
  /** Determines whether or not the button should be a small or large button. By default is undefined. */
  size?: 'small' | 'large'
  /** The icon to display */
  icon?: IconType
  /** Determines whether or not the icon should display on the left side or right side of the button. By default is left */
  iconLocation?: 'left' | 'right'
  /** Handles the on click event for a button */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function getButtonSize(size: string | undefined): 'sm' | 'lg' | undefined {
  if (size === 'small') {
    return 'sm'
  } else if (size === 'large') {
    return 'lg'
  } else {
    return undefined
  }
}

/**
 * Buttons are used to initiate an action.
 */
const Button: React.FunctionComponent<Props> = props => {
  const size = getButtonSize(props.size)
  const iconLocation = props.iconLocation ? props.iconLocation : 'left'

  const displayIconLeft = props.icon && iconLocation === 'left'
  const displayIconRight = props.icon && iconLocation === 'right'

  let variant: string = props.color ? props.color : 'primary'
  if (props.outlined) {
    variant = `outline-${variant}`
  }

  return (
    <BootstrapButton
      variant={variant as ButtonType}
      block={props.block}
      disabled={props.disabled}
      size={size}
      onClick={props.onClick}
    >
      {displayIconLeft && <Icon icon={props.icon as IconType} />} {props.children}{' '}
      {displayIconRight && <Icon icon={props.icon as IconType} />}
    </BootstrapButton>
  )
}


export { Button }
