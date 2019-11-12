import React from 'react'
import FormLabel from 'react-bootstrap/FormLabel'

interface Props {
  /** Text to display in label */
  text: string
  /** Ties labels to input */
  htmlFor?: string | ''
}

/**
 * Labels are used to display textnpm
 */
const Label = (props: Props) => {
  return <FormLabel htmlFor={props.htmlFor}>{props.text}</FormLabel>
}

export { Label }
