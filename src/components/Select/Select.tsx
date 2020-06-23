import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

type SelectOption = { label: string; value: any }

interface Props {
  id: string
  options: SelectOption[]
  defaultSelected?: SelectOption[]
  onChange?: (values: string[]) => void
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
  isInvalid?: boolean
}

const Select = (props: Props) => {
  const {
    id,
    options,
    defaultSelected,
    onChange,
    placeholder,
    multiple,
    disabled,
    isInvalid,
  } = props

  return (
    <Typeahead<SelectOption>
      id={id}
      options={options as any}
      selected={defaultSelected}
      onChange={(selected: SelectOption[]) => {
        if (onChange !== undefined) {
          onChange(selected.map((option) => option.value))
        }
      }}
      placeholder={placeholder}
      multiple={multiple}
      disabled={disabled}
      isInvalid={isInvalid}
    />
  )
}

Select.defaultProps = {
  defaultSelected: [],
  onChange: undefined,
  placeholder: '-- Choose --',
  multiple: false,
  disabled: false,
  isInvalid: false,
}

export { Select }
