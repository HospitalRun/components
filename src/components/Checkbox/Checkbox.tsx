import React, { CSSProperties } from 'react'
import FormCheck from 'react-bootstrap/FormCheck'

interface Props {
  /** The id for the checkbox */
  id?: string
  /** The label to render next to the checkbox */
  label: string
  /* Determines the side of the checkbox to render the label on. By default right */
  labelSide?: 'right' | 'left'
  /** Gives the checkbox a name */
  name?: string
  /** Determines if the checkbox should be disabled or not. By default false */
  disabled?: boolean
  /** Determines if the checkbox should render inline or not. By default false. */
  inline?: boolean
  /** The onChange listener */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Defines the class of the checkbox.
   */
  className?: string
  /**
   * Defines the style of the checkbox.
   */
  style?: CSSProperties
  /**
   * Defines the class of the checkbox.
   */
  labelClassName?: string
  /**
   * Defines the style of the checkbox.
   */
  labelStyle?: CSSProperties
  /** Determines if the checkbox is checked or not. By default false */
  checked?: boolean
}

/**
 * Checkbox is used to mark if something is true or not. Often times is used in a group where
 * multiple things can be true at one time.
 */
const Checkbox = (props: Props) => {
  const {
    id,
    label,
    name,
    inline,
    labelSide,
    disabled,
    onChange,
    className,
    style,
    labelClassName,
    labelStyle,
    checked,
  } = props

  const getLabel = () => (
    <FormCheck.Label htmlFor={id} className={labelClassName} style={labelStyle}>
      {label}
    </FormCheck.Label>
  )

  return (
    <FormCheck name={name} inline={inline} className={className} style={style}>
      {labelSide === 'left' && getLabel()}
      <FormCheck.Input
        id={id}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      {labelSide === 'right' && getLabel()}
    </FormCheck>
  )
}

Checkbox.defaultProps = {
  labelSide: 'right',
}

export { Checkbox }
