import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import Form from 'react-bootstrap/Form'

interface SelectOption<T> {
  label: string
  value: T
}

interface Props<T> {
  id: string
  options: SelectOption<T>[]
  defaultSelected?: SelectOption<T>[]
  onChange?: (values: T[]) => void
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
  isValid?: boolean
  isInvalid?: boolean
  feedback?: string
}

function Select<T>(props: Props<T>) {
  const {
    id,
    options,
    defaultSelected,
    onChange,
    placeholder,
    multiple,
    disabled,
    isValid,
    isInvalid,
    feedback,
  } = props

  return (
    <>
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
        filterBy={(option: SelectOption<T>, selectProps: any) => {
          // per https://github.com/HospitalRun/components/issues/517
          // change component default behavior
          // multiple - filter-out current selections
          const isMatch = option.label.toLowerCase().indexOf(selectProps.text.toLowerCase()) !== -1
          if (selectProps.selected.length && selectProps.multiple) {
            return selectProps.selected.every(
              (selected: any) => selected.label !== option.label && isMatch,
            )
          }
          // single (custom)- display all options
          if (selectProps.selected.length) {
            return true
          }
          // default filter as normal

          return isMatch
        }}
      />
      <div className={isValid ? 'is-valid' : isInvalid ? 'is-invalid' : undefined} />
      <Form.Control.Feedback
        className={`text-left ml-3 mt-1 text-small ${
          isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined
        }`}
        type={isValid ? 'valid' : 'invalid'}
      >
        {feedback}
      </Form.Control.Feedback>
    </>
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
