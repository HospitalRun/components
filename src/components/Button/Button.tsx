import React, { CSSProperties } from 'react'
import BootstrapButton from 'react-bootstrap/Button'
import { ButtonType, ButtonColor } from './interfaces'
import { IconType } from '../Icon/interfaces'
import { Icon } from '../Icon'

export interface Props {
  /** Determines if the button should be outlined and not filled. By defaut is false */
  outlined?: boolean
  /** Defines the button variant. By default is primary */
  color?: ButtonColor
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
  /** The children to render */
  children?: React.ReactNode
  /**
   * Defines the class of the button
   */
  className?: string
  /**
   * Defines the style of the button
   */
  style?: CSSProperties
  /**
   * Defines the class of the button.
   */
  iconClassName?: string
  /**
   * Defines the style of the button.
   */
  iconStyle?: CSSProperties
}

function getButtonSize(size: string | undefined): 'sm' | 'lg' | undefined {
  if (size === 'small') {
    return 'sm'
  }
  if (size === 'large') {
    return 'lg'
  }
  return undefined
}

/**
 * Buttons are used to initiate an action.
 */
const Button = (props: Props) => {
  const {
    size,
    iconLocation,
    outlined,
    color,
    icon,
    block,
    disabled,
    onClick,
    children,
    className,
    style,
    iconClassName,
    iconStyle,
  } = props

  const displayIconLeft = icon && iconLocation === 'left'
  const displayIconRight = icon && iconLocation === 'right'

  let variant = color as string
  if (outlined) {
    variant = `outline-${variant}`
  }

  return (
    <BootstrapButton
      variant={variant as ButtonType}
      block={block}
      disabled={disabled}
      size={getButtonSize(size)}
      onClick={onClick}
      className={className}
      style={style}
    >
      {displayIconLeft && (
        <Icon icon={icon as IconType} className={iconClassName} style={iconStyle} />
      )}{' '}
      {children}{' '}
      {displayIconRight && (
        <Icon icon={icon as IconType} className={iconClassName} style={iconStyle} />
      )}
    </BootstrapButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  iconLocation: 'left',
}

export { Button }
