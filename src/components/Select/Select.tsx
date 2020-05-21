import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import Form from 'react-bootstrap/Form'
import React, { CSSProperties } from 'react'
import { getControlSize } from '../../helpers/controlSize'


interface Props {
  id: string
  options: string[]
  defaultSelected?: string[]
  onChange?: (selected: string[]) => void
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
    <Typeahead
      id={id}
      options={options as any}
      selected={defaultSelected as any}
      onChange={(selected: string[]) => {
        if (onChange !== undefined) {
          onChange(selected)
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
