import React, { Component } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import { getControlSize } from '../../helpers/ControlSize'

interface Props {
  /** When multiple is true, the user can select multiple options. Otherwise, one option only. False by default. */
  multiple?: boolean
  /** Determines whether the Select should be disabled. False by default. */
  disabled?: boolean
  /** Determines whether the Select should be invalid. False by default. */
  isInvalid?: boolean
  /** Determines whether to render a small or large TextField. By default, it is undefined. */
  size?: 'small' | 'large'
  /** Selected value in the  */
  value?: string

  /** Handles the onChange event for the Select. */
  onChange?: (event: React.FormEvent<FormControl & FormControlProps>) => void
}

class Select extends Component<Props, {}> {
  render() {
    return (
      <FormControl
        as="select"
        value={this.props.value}
        multiple={this.props.multiple}
        isInvalid={this.props.isInvalid}
        disabled={this.props.disabled}
        size={getControlSize(this.props.size)}
        onChange={this.props.onChange}
      >
        {this.props.children}
      </FormControl>
    )
  }
}

export { Select }
