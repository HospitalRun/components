import React, { CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { IconType } from './interfaces'

// maps between hospital run icon names and font awesome
const iconMap = {
  add: 'plus',
  admin: 'user-shield',
  appointment: 'calendar',
  'appointment-add': 'calendar-plus',
  'appointment-remove': 'calendar-minus',
  calendar: 'calendar-alt',
  dashboard: 'columns',
  'down-arrow': 'chevron-down',
  edit: 'edit',
  image: 'camera',
  incident: 'file-alt',
  lab: 'microscope',
  'left-arrow': 'chevron-left',
  medication: 'pills',
  patient: 'user',
  'patient-add': 'user-plus',
  'patient-remove': 'user-minus',
  patients: 'users',
  remove: 'minus',
  'right-arrow': 'chevron-right',
  save: 'save',
  setting: 'cog',
  'up-arrow': 'chevron-up',
}

function getFontAwesomeIcon(icon: IconType): string {
  return iconMap[icon]
}

interface Props {
  /** The type of icon to display */
  icon: IconType
  /**
   * Defines the class of the icon.
   */
  className?: string
  /**
   * Defines the style of the icon.
   */
  style?: CSSProperties
  /** Function to execute when user clicks on icon */
  onClick?: (event: React.MouseEvent<any>) => void
}

/**
 * Icons provide contextual clues to users to make it easier to recognize functionality
 */
const Icon = (props: Props) => {
  const { icon, className, style, onClick } = props
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={getFontAwesomeIcon(icon) as IconProp}
      className={className}
      style={style}
    />
  )
}

export { Icon }
