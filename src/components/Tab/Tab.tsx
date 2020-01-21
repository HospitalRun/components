import React from 'react'
import { IconType } from '../Icon/interfaces'
import { Button } from '../Button'

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
  const { label, onClick, active, icon, disabled, iconLocation } = props
  const className = `nav-link btn-link ${active ? ' active' : ''} ${disabled ? ' disabled' : ''}`

  return (
    <li className="nav-item" role="tab">
      <Button
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        color="link"
        className={className}
        onClick={disabled ? undefined : onClick}
        icon={icon}
        iconLocation={iconLocation}
      >
        {label}
      </Button>
    </li>
  )
}

Tab.defaultProps = {
  iconLocation: 'left',
}

export { Tab }
