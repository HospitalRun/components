import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

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
  isInvalid?: boolean
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
