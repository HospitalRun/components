import React, { Component } from 'react'
import FormCheck from 'react-bootstrap/FormCheck'

interface Props {
  /** The id for the checkbox */
  id?: string
  /** The label to render next to the checkbox */
  label: string
  /* Determines the side of the checkbox to render the label on. By default right */
  labelSide?: 'right' | 'left'
  /** Gives the checkbox a name */
  name?: string
  /** Determines if the checkbox should be disabled or not. By default false */
  disabled?: boolean
  /** Determines if the checkbox should render inline or not. By default false. */
  inline?: boolean
  /** The onChange listener */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Checkbox is used to mark if something is true or not. Often times is used in a group where
 * multiple things can be true at one time.
 */
class Checkbox extends Component<Props, {}> {
  render() {
    const labelSide = this.props.labelSide ? this.props.labelSide : 'right'

    return (
      <FormCheck name={this.props.name} inline={this.props.inline}>
        {labelSide === 'left' && (
          <FormCheck.Label htmlFor={this.props.id}>{this.props.label}</FormCheck.Label>
        )}
        <FormCheck.Input
          id={this.props.id}
          type="checkbox"
          disabled={this.props.disabled}
          onChange={this.props.onChange}
        />
        {labelSide === 'right' && (
          <FormCheck.Label htmlFor={this.props.id}>{this.props.label}</FormCheck.Label>
        )}
      </FormCheck>
    )
  }
}

export { Checkbox }
