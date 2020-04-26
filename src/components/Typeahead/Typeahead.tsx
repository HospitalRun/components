import React, { useState } from 'react'

import { AsyncTypeahead } from 'react-bootstrap-typeahead'

interface Props {
  /** The id value of the input */
  id: string
  /** Specify which option key to use for display or a render function.
      By default, the selector will use the 'label' key. */
  searchAccessor: string
  /** Provides a hook for customized rendering of menu item contents. */
  renderMenuItemChildren: (option: any) => React.ReactNode
  /** Invoked whenever items are added or removed. Receives an array of the selected options. */
  onChange: (selected: any) => void
  /** Callback to perform when the search is executed. */
  onSearch: (query: string) => Promise<any[]>
  /** Number of input characters that must be entered before showing results. */
  minLength?: number
  /** The placeholder inside of the text input */
  placeholder?: string
  /** The value of the input */
  value?: any
  /** Defines whether the input should be disabled or not. Defaults to false. */
  disabled?: boolean
  /** Defines whether the input should display as invalid. Defaults to false. */
  isValid?: boolean
  /** Defines the custom error message of the input. */
  isInvalid?: boolean
  /** Defines whether the input should display as valid. Defaults to false */
  feedback?: string
}

const Typeahead = (props: Props) => {
  const [options, setOptions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    id,
    searchAccessor,
    placeholder,
    onSearch,
    onChange,
    renderMenuItemChildren,
    minLength,
    value,
    disabled,
    isValid,
    isInvalid,
    feedback,
  } = props

  const search = async (query: string) => {
    setIsLoading(true)
    const results = await onSearch(query)
    setOptions(results)
    setIsLoading(false)
  }

  const selectedValues = []
  if (value) {
    selectedValues.push(value)
  }

  return (
    <>
      <AsyncTypeahead
        id={id}
        labelKey={searchAccessor}
        options={options}
        placeholder={placeholder}
        isLoading={isLoading}
        minLength={minLength}
        onSearch={search}
        onChange={onChange}
        renderMenuItemChildren={renderMenuItemChildren}
        defaultSelected={selectedValues}
        disabled={disabled}
        isValid={isValid}
        isInvalid={isInvalid}
      />
      {feedback !== undefined && (
        <div
          className={`text-left ml-2 mt-1 text-small ${
            isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined
          }`}
        >
          {feedback}
        </div>
      )}
    </>
  )
}

Typeahead.defaultProps = {
  minLength: 3,
}

export { Typeahead }
