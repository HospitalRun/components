import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

interface SelectOption<T> {
  label : string
  value : T
}

interface Props<T> {
  id: string
  options: SelectOption<T>[]
  defaultSelected?: SelectOption<T>[]
  onChange?: (values: T[]) => void
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
  isInvalid?: boolean
}

const Select = <T extends {}>(props: Props<T>) => {
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
    <Typeahead<SelectOption<T>>
      id={id}
      options={options as any}
      selected={defaultSelected}
      onChange={(selected: SelectOption<T>[]) => {
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
