import React from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  /** Defines the type of the input. Defaults to 'text' if not specified. */
  type?: 'text' | 'number' | 'email'
  /** Defines the size of the input. Defaults to 'lg' */
  size?: 'sm' | 'lg'
  /** The value of the input */
  value?: string | ''
  /** Handles the onChange event for the input */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** The name of the input */
  name?: string | ''
  /** The id value of the input */
  id?: string | ''
  /** The placeholder inside of the input */
  placeholder?: string | ''
  /** Defines whether the input should be disabled or not. Defaults to false. */
  disabled?: boolean
  /** Defines the custom error message of the input. */
  errorMessage?: string
  /** Defines whether the input should display as invalid. Defaults to false. */
  isInvalid?: boolean
  /** Defines whether the input should display as valid. Defaults to false */
  isValid?: boolean | true
  /** Defines the meesage for valid input. */
  validInputMessage?: string
}

/**
 * A flexible text input as a wrapper around the React Bootstrap Form Control.
 */

const TextInput = (props: Props) => {
  const {
    type,
    name,
    id,
    placeholder,
    onChange,
    disabled,
    isInvalid,
    isValid,
    validInputMessage,
    errorMessage,
    value,
    size,
  } = props

  return (
    <div>
      <Form.Control
        as="input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        isInvalid={isInvalid}
        isValid={isValid}
        validInputMessage={validInputMessage}
        defaultValue={value}
        size={size}
      />
      <Form.Control.Feedback className="text-left ml-3 mt-1" type="valid">
        {validInputMessage}
      </Form.Control.Feedback>
      <Form.Control.Feedback className="text-left ml-3 mt-1" type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export { TextInput }
