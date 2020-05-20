import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

interface Props {
  id: string
  options: string[]
  defaultSelected?: string[]
  onChange?: (selected: string[]) => void
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
}

const Select = (props: Props) => {
  const { id, options, defaultSelected, onChange, placeholder, multiple, disabled } = props

  return (
    <Typeahead
      id={id}
      options={options as any}
      selected={defaultSelected as any}
      onChange={(selected: string[]) => {
        // eslint-disable-next-line no-unused-expressions
        onChange !== undefined ? onChange(selected) : null
      }}
      placeholder={placeholder}
      multiple={multiple}
      disabled={disabled}
    />
  )
}

Select.defaultProps = {
  defaultSelected: [],
  onChange: undefined,
  placeholder: '-- Choose --',
  multiple: false,
  disabled: false,
}

export { Select }
