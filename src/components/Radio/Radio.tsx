import React, { ReactNode, Component } from 'react'
import { FormCheck } from 'react-bootstrap'

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
  checked?: boolean
  /** Determines whether the Radio should be rendered as invalid or not. Default is false. */
  isInvalid?: boolean
  /** Message to display when the Radio is invalid. */
  feedback?: string | ReactNode
  /** Listener will be called when the Radio is checked. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class Radio extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <FormCheck
        type="radio"
        label={this.props.label}
        name={this.props.name}
        id={this.props.id}
        value={this.props.value}
        checked={this.props.checked}
        disabled={this.props.disabled}
        inline={this.props.inline}
        isInvalid={this.props.isInvalid}
        feedback={this.props.feedback}
        onChange={this.props.onChange}
      />
    )
  }
}

export { Radio }
