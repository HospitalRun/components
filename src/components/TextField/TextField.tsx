import React, { CSSProperties } from 'react'
import Form from 'react-bootstrap/Form'
import { getControlSize } from '../../helpers/controlSize'

interface Props {
  /** Determines whether the TextField should be disabled or not. By default, it is false. */
  disabled?: boolean
  /** Determines whether the TextField should be rendered as invalid or not. By default, it is false. */
  isInvalid?: boolean
  /** The name of the text field */
  name?: string
  /** The number of rows to render */
  rows?: number
  /** Determines whether to render a small or large TextField. By default, it is undefined. */
  size?: 'small' | 'large'
  /** The value of the text field */
  value?: string

  /** Handles the onChange event for the TextField */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * Defines the class of the textfield.
   */
  className?: string
  /**
   * Defines the style of the textfield.
   */
  style?: CSSProperties
}

/**
 * A customizable text field component. It's a wrapper component built upon react's form controls.
 */
const TextField = (props: Props) => {
  const { disabled, isInvalid, name, rows, size, value, onChange, className, style } = props

  return (
    <Form.Control
      as="textarea"
      disabled={disabled}
      isInvalid={isInvalid}
      name={name}
      rows={rows}
      size={getControlSize(size)}
      value={value}
      onChange={onChange}
      className={className}
      style={style}
    />
  )
}

export { TextField }
