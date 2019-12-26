import React, { CSSProperties } from 'react'
import FormCheck from 'react-bootstrap/FormCheck'

interface Props {
  /** The id for the switch element */
  id: string
  /** The label to render next to the switch */
  label: string
  /** Determines if the switch should be disabled or not. By default false */
  disabled?: boolean
  /** The onChange listener */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Defines the class of the switch.
   */
  className?: string
  /**
   * Defines the style of the switch.
   */
  style?: CSSProperties
}

/**
 * Switches are used to choose if something is true or false
 */
const Switch = (props: Props) => {
  const { id, label, disabled, onChange, className, style } = props
  return (
    <div>
      <FormCheck
        type="switch"
        id={id}
        label={label}
        disabled={disabled}
        onChange={onChange}
        className={className}
        style={style}
      />
    </div>
  )
}

export { Switch }
