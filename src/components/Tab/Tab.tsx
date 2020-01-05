import React from 'react'
import { IconType } from '../Icon/interfaces'
import { Icon } from '../Icon'

interface Props {
  /** Tab label */
  label: string
  /** Whether tab is currently selected */
  active?: boolean
  /** Whether the tab is disabled */
  disabled?: boolean
  /** Handles the on click event for a tab */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  /** The icon to display */
  icon?: IconType
  /** Determines whether or not the icon should display on the left side or right side of the tab. By default is left */
  iconLocation?: 'left' | 'right'
}

const Tab = (props: Props) => {
  const { label, onClick, active, disabled, icon, iconLocation } = props

  const displayIconLeft = icon && iconLocation === 'left'
  const displayIconRight = icon && iconLocation === 'right'
  const className = `nav-link btn-link ${active ? ' active' : ''} ${disabled ? ' disabled' : ''}`

  return (
    <li className="nav-item" role="tab">
      <button
        type="button"
        style={{ background: 'none' }}
        className={className}
        onClick={disabled ? undefined : onClick}
      >
        {displayIconLeft && <Icon icon={icon as IconType} />} {label}{' '}
        {displayIconRight && <Icon icon={icon as IconType} />}
      </button>
    </li>
  )
}

Tab.defaultProps = {
  iconLocation: 'left',
}

export { Tab }
