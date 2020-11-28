import { IconPrefix, IconName, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { CSSProperties } from 'react'

import { IconType } from './interfaces'

// importing custom svg icons
const customIconPaths: Map<string, any> = new Map<string, any>([
  ['custom-add-patient', require('./custom/add-patient.svg')],
  ['custom-patient', require('./custom/patient.svg')],
  ['custom-patients', require('./custom/patients.svg')],
])

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
  logout: 'sign-out-alt',
  medication: 'pills',
  menu: 'bars',
  patient: 'custom-patient',
  'patient-add': 'custom-add-patient',
  'patient-remove': 'user-minus',
  patients: 'custom-patients',
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
  size?: SizeProp
  /** Outline version or filled-in version. Note some icons may be missing outline version. */
  outline?: boolean
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
  const { icon, outline, className, style, onClick, size } = props
  const iconPrefix = (outline ? 'far' : 'fas') as IconPrefix
  const faIconName = getFontAwesomeIcon(icon) as IconName

  // Handling custom icons
  if (faIconName.startsWith('custom')) {
    return (
      <img
        onClick={onClick}
        style={style}
        aria-hidden
        src={customIconPaths.get(faIconName)}
        alt={faIconName.slice(7)}
        className={className}
      />
    )
  }
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={[iconPrefix, faIconName]}
      size={size}
      className={className}
      style={style}
    />
  )
}

Icon.defaultProps = {
  outline: false,
  size: '1x',
}

export { Icon }
