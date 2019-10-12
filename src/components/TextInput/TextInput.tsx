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
  onChange?: (e: React.FormEvent<Form>) => void
  /** The name of the input */
  name?: string | ''
  /** The id value of the input */
  id?: string | ''
  /** Defines whether the input should be disabled or not. Defaults to false. */
  disabled?: boolean
  /** Defines whether the input should display as invalid. Defaults to false. */
  isInvalid?: boolean
  /** Defines whether the input should display as valid. Defaults to false */
  isValid?: boolean
}

/**
 * A flexible text input as a wrapper around the React Bootstrap Form Control.
 */

const TextInput = (props: Props) => {
  return (
    <Form.Control
      as="input"
      type={props.type || 'text'}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      disabled={props.disabled || false}
      isInvalid={props.isInvalid || false}
      isValid={props.isValid || false}
      defaultValue={props.value}
      size={props.size}
    />
  )
}

export { TextInput }
