import React, { ReactNode, CSSProperties } from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  /** Label to display next to the Radio. */
  label?: string | ReactNode
  /** Necessary to link the label with the input. */
  id?: string
  /** Name to group Radios together. Two Radios with the same name can't be checked at the same time. */
  name?: string
  /** Value associated with the Radio. */
  value?: string
  /** When inline, Radio elements are stacked horizontally instead of vertically. Default is false. */
  inline?: boolean
  /** When disabled, the Radio cannot be clicked or changed by the user. Default is false. */
  disabled?: boolean
  /** When checked is true, the Radio button is selected. */
  defaultChecked?: boolean
  /** Determines whether the Radio should be rendered as invalid or not. Default is false. */
  isInvalid?: boolean
  /** Determines whether the Radio should be rendered as valid or not. Default is false. */
  isValid?: boolean
  /** Message to display when the Radio is invalid. */
  feedback?: string | ReactNode
  /** Listener will be called when the Radio is checked. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Defines the class of the radio.
   */
  className?: string
  /**
   * Defines the style of the radio.
   */
  style?: CSSProperties
}

const Radio = (props: Props) => {
  const {
    label,
    name,
    id,
    value,
    defaultChecked,
    disabled,
    inline,
    isInvalid,
    isValid,
    feedback,
    onChange,
    className,
    style,
  } = props

  return (
    <Form.Check
      name={name}
      type="radio"
      id={id}
      value={value}
      disabled={disabled}
      inline={inline}
      isInvalid={isInvalid}
      isValid={isValid}
      feedback={feedback}
      onChange={onChange}
      className={className}
      style={style}
    >
      <Form.Check.Input
        defaultChecked={defaultChecked}
        type="radio"
        isValid={isValid}
        isInvalid={isInvalid}
      />
      <Form.Check.Label
        className={isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined}
      >
        {label}
      </Form.Check.Label>
      <Form.Control.Feedback
        className={isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined}
        type={isValid ? 'valid' : 'invalid'}
      >
        {feedback}
      </Form.Control.Feedback>
    </Form.Check>
  )
}

export { Radio }
