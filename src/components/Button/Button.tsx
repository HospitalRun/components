import React, { Component } from 'react'
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
class Button extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const size = getButtonSize(this.props.size)
    const iconLocation = this.props.iconLocation ? this.props.iconLocation : 'left'

    const displayIconLeft = this.props.icon && iconLocation === 'left'
    const displayIconRight = this.props.icon && iconLocation === 'right'

    let variant: string = this.props.color ? this.props.color : 'primary'
    if (this.props.outlined) {
      variant = `outline-${variant}`
    }

    return (
      <BootstrapButton
        variant={variant as ButtonType}
        block={this.props.block}
        disabled={this.props.disabled}
        size={size}
        onClick={this.props.onClick}
      >
        {displayIconLeft && <Icon icon={this.props.icon as IconType} />} {this.props.children}{' '}
        {displayIconRight && <Icon icon={this.props.icon as IconType} />}
      </BootstrapButton>
    )
  }
}

export { Button }
