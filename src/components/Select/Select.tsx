import React from 'react'
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

const Select: React.FunctionComponent<Props> = props => {
  const { value, multiple, isInvalid, disabled, size, onChange, children } = props

  return (
    <FormControl
      as="select"
      value={value}
      multiple={multiple}
      isInvalid={isInvalid}
      disabled={disabled}
      size={getControlSize(size)}
      onChange={onChange}
    >
      {children}
    </FormControl>
  )
}

export { Select }
