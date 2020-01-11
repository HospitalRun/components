import React, { CSSProperties } from 'react'
import Form from 'react-bootstrap/Form'
import { getControlSize } from '../../helpers/controlSize'

interface Props {
  /** When multiple is true, the user can select multiple options. Otherwise, one option only. False by default. */
  multiple?: boolean
  /** Determines whether the Select should be disabled. False by default. */
  disabled?: boolean
  /** Determines whether the Select should be invalid. False by default. */
  isInvalid?: boolean
  /** Determines whether the Select should be rendered as valid or not. Default is false. */
  isValid?: boolean
  /** Determines whether to render a small or large TextField. By default, it is undefined. */
  size?: 'small' | 'large'
  /** Selected value in the  */
  value?: string

  /** Handles the onChange event for the Select. */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  /** The children to render */
  children?: React.ReactNode
  /**
   * Defines the class of the select.
   */
  className?: string
  /**
   * Defines the style of the select.
   */
  style?: CSSProperties
  /** Defines the custom error message of the input. */
  errorMessage?: string
  /** Defines the meesage for valid input. */
  validInputMessage?: string
}

const Select = (props: Props) => {
  const {
    value,
    multiple,
    isInvalid,
    errorMessage,
    validInputMessage,
    disabled,
    size,
    onChange,
    children,
    className,
    style,
  } = props

  return (
    <Form.Control
      as="select"
      value={value}
      multiple={multiple}
      isInvalid={isInvalid}
      disabled={disabled}
      size={getControlSize(size)}
      onChange={onChange}
      className={className}
      style={style}
    >
      {children}
      <Form.Control.Feedback className="text-left ml-3 mt-1" type="valid">
        {validInputMessage}
      </Form.Control.Feedback>
      <Form.Control.Feedback className="text-left ml-3 mt-1" type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Control>
  )
}

export { Select }
