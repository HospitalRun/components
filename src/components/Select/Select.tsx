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
  isInvalidFeedback?: string
  /** Defines the message for valid input. */
  isValidFeedback?: string
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
    isInvalidFeedback,
    isValidFeedback,
    disabled,
    size,
    onChange,
    children,
    className,
    style,
  } = props
  /**
   * Defines the default style of the select.
   */
  const selectDefaultStyles = {
    backgroundPosition: 'right calc(.375em + .55rem) center',
    borderColor: isValid ? '#59b571' : isInvalid ? 'red' : 'black',
  }
  const feedbackDefaultStyle = {
    color: isValid ? '#59b571' : isInvalid ? '#dc3545' : 'black',
  }
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
        style={Object.assign({}, style, ...[selectDefaultStyles])}
      >
        {children}
      </Form.Control>
      <Form.Control.Feedback
        style={feedbackDefaultStyle}
        className="text-left ml-3 mt-1"
        type="valid"
      >
        {isValidFeedback}
      </Form.Control.Feedback>
      <Form.Control.Feedback
        style={feedbackDefaultStyle}
        className="text-left ml-3 mt-1"
        type="invalid"
      >
        {isInvalidFeedback}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export { Select }
