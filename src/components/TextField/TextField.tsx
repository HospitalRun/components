import React, { CSSProperties } from 'react'
import Form from 'react-bootstrap/Form'
import { getControlSize } from '../../helpers/controlSize'

interface Props {
  /** Determines whether the TextField should be disabled or not. By default, it is false. */
  disabled?: boolean
  /** Determines whether the TextField should be rendered as invalid or not. By default, it is false. */
  isInvalid?: boolean
  /** Determines whether the Select should be rendered as valid or not. Default is false. */
  isValid?: boolean
  /** The name of the text field */
  name?: string
  /** The number of rows to render */
  rows?: number
  /** Determines whether to render a small or large TextField. By default, it is undefined. */
  size?: 'small' | 'large'
  /** The value of the text field */
  value?: string
  /** Defines the default value */
  defaultValue?: string | Array<string>
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
  /** Defines the custom error message of the input. */
  isInvalidFeedback?: string
  /** Defines the message for valid input. */
  isValidFeedback?: string
}

/**
 * A customizable text field component. It's a wrapper component built upon react's form controls.
 */
const TextField = (props: Props) => {
  const {
    disabled,
    isInvalid,
    isValid,
    isInvalidFeedback,
    isValidFeedback,
    name,
    rows,
    size,
    value,
    onChange,
    className,
    style,
    defaultValue,
  } = props

  const validFeedbackDefaultStyle = {
    color: '#59b571',
  }

  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        disabled={disabled}
        isInvalid={isInvalid}
        isValid={isValid}
        name={name}
        rows={rows}
        size={getControlSize(size)}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
        style={style}
      />
      <Form.Control.Feedback
        style={validFeedbackDefaultStyle}
        className="text-left ml-3 mt-1"
        type="valid"
      >
        {isValidFeedback}
      </Form.Control.Feedback>
      <Form.Control.Feedback className="text-left ml-3 mt-1" type="invalid">
        {isInvalidFeedback}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export { TextField }
