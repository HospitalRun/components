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
  feedback?: string

  /** Defines the default value */
  defaultValue?: string | Array<string>
}

const Select = (props: Props) => {
  const {
    defaultValue,
    value,
    multiple,
    isValid,
    isInvalid,
    feedback,
    disabled,
    size,
    onChange,
    children,
    className,
    style,
  } = props

  return (
    <Form.Group>
      <Form.Control
        as="select"
        value={value}
        defaultValue={defaultValue}
        multiple={multiple}
        isInvalid={isInvalid}
        isValid={isValid}
        disabled={disabled}
        size={getControlSize(size)}
        onChange={onChange}
        className={className}
        style={style}
      >
        {children}
      </Form.Control>
      <Form.Control.Feedback
        className={isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined}
        type={isValid ? 'valid' : 'invalid'}
      >
        {feedback}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export { Select }
