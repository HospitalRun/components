import React, { CSSProperties } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'

interface Props {
  /** Text to display in label */
  text: string
  /** Ties labels to input */
  htmlFor?: string | ''
  /**
   * Defines the class of the label.
   */
  className?: string
  /**
   * Defines the style of the label.
   */
  style?: CSSProperties
}

/**
 * Labels are used to display textnpm
 */
const Label = (props: Props) => {
  const { htmlFor, text, className, style } = props
  return (
    <FormLabel htmlFor={htmlFor} className={className} style={style}>
      {text}
    </FormLabel>
  )
}

export { Label }
