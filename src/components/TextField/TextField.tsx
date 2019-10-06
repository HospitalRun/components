import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { getControlSize } from '../../helpers/ControlSize'

interface Props {
  /** Determines whether the TextField should be disabled or not. By default, it is false. */
  disabled?: boolean
  /** Determines whether the TextField should be rendered as invalid or not. By default, it is false. */
  isInvalid?: boolean
  /** The name of the text field */
  name?: string | ''
  /** The number of rows to render */
  rows?: number
  /** Determines whether to render a small or large TextField. By default, it is undefined. */
  size?: 'small' | 'large'
  /** The value of the text field */
  value?: string | ''

  /** Handles the onChange event for the TextField */
  onChange?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

/**
 * A customizable text field component. It's a wrapper component built upon react's form controls.
 */
class TextField extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Form.Control
        as="textarea"
        disabled={this.props.disabled}
        isInvalid={this.props.isInvalid}
        name={this.props.name}
        rows={this.props.rows}
        size={getControlSize(this.props.size)}
        defaultValue={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export { TextField }
