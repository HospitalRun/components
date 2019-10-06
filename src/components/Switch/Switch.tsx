import React, { Component } from 'react'
import FormCheck from 'react-bootstrap/FormCheck'

interface Props {
  /** The id for the switch element */
  id: string
  /** The label to render next to the switch */
  label: string
  /**Gives the switch a name */
  name?: string
  /** Determines if the switch should be disabled or not. By default false */
  disabled?: boolean
  /** The onChange listener */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Switches are used to choose if something is true or false
 */
class Switch extends Component<Props, {}> {
  render() {
    return (
      <div>
        <FormCheck
          type="switch"
          name={this.props.name}
          id={this.props.id}
          label={this.props.label}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export { Switch }
