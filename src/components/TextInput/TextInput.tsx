import React, { CSSProperties } from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  /** Defines the type of the input. Defaults to 'text' if not specified. */
  type?: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url'
  /** Defines the size of the input. Defaults to 'lg' */
  size?: 'sm' | 'lg'
  /** The value of the input */
  value?: string
  /** Handles the onChange event for the input */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** The name of the input */
  name?: string
  /** The id value of the input */
  id?: string
  /** The placeholder inside of the text input */
  placeholder?: string
  /** Defines whether the input should be disabled or not. Defaults to false. */
  disabled?: boolean
  /** Defines the custom error message of the input. */
  feedback?: string
  /** Defines whether the input should display as invalid. Defaults to false. */
  isInvalid?: boolean
  /** Defines whether the input should display as valid. Defaults to false */
  isValid?: boolean
  /** Defines the class of the input. */
  className?: string
  /** Defines the style of the input. */
  style?: CSSProperties
  /** Defines the custom style of the input. */
  inputDefaultStyle?: Record<string, any>
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
    feedback,
    isValid,
    isInvalid,
    value,
    size,
    className,
    style,
    inputDefaultStyle,
  } = props

  return (
    <Form.Group>
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
        defaultValue={value}
        size={size}
        className={className}
        style={Object.assign({}, style, ...[inputDefaultStyle])}
      />
      <Form.Control.Feedback
        className={`text-left ml-3 mt-1 text-small ${
          isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined
        }`}
        type={isValid ? 'valid' : 'invalid'}
      >
        {feedback}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export { TextInput }
