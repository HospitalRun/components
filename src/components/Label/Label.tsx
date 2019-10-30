import React, { Component } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'

interface Props {
  /** Text to display in label */
  text: string
}

/**
 * Labels are used to display textnpm
 */
class Label extends Component<Props, {}> {
  render() {
    return <FormLabel>{this.props.text}</FormLabel>
  }
}

export { Label }
