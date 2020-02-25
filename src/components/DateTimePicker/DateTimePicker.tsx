import React, { ReactNode } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import InputGroup from 'react-bootstrap/InputGroup'

import { enUS, ptBR } from 'date-fns/locale'
import { Icon } from '../Icon'
import 'react-datepicker/dist/react-datepicker.css'
import './DateTimePicker.css'

registerLocale('enUS', enUS)
registerLocale('ptBR', ptBR)

setDefaultLocale('enUS')

interface Props {
  /** Yield element as children. */
  children?: ReactNode
  /** The format for parsed and displayed dates. */
  dateFormat?: string
  /** The format for parsed and displayed dates in internal yeardropdown. */
  dateFormatCalendar?: string
  /** Disable datepicker. */
  disabled?: boolean
  /** Change selection for internal year/month dropdowns. */
  dropdownMode: 'scroll' | 'select'
  /** The end date of the initially selected date range. */
  endDate?: Date
  /** Exclude dates within the specific date range. */
  excludeDates?: Date[]
  /** Include dates within the specific date range. */
  includeDates?: Date[]
  /** Visualize calendar as inline element. */
  inline?: boolean
  /** Set datepicker locale. */
  locale?: string
  /** The maximum selectable date. */
  maxDate?: Date
  /** The maximum selectable time. */
  maxTime?: Date
  /** The minimum selectable date. */
  minDate?: Date
  /** The minimum selectable time. */
  minTime?: Date
  /** Show more months. */
  monthsShown?: number
  /** Input.Group class */
  className?: string
  /** Callback when date is changed. */
  onChange: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void
  /** Selected date value. */
  selected?: Date
  /** Selected date end. */
  selectsEnd?: boolean
  /** Selected date start. */
  selectsStart?: boolean
  /** Show dropdown list with all months. */
  showMonthDropdown?: boolean
  /** Enable time selection. */
  showTimeSelect?: boolean
  /** Show dropdown list with years. */
  showYearDropdown?: boolean
  /** Enable only time selection. */
  showTimeSelectOnly?: boolean
  /** The beginning date of the initially selected date range. */
  startDate?: Date
  /** The format for parsed and displayed time. */
  timeFormat?: string
  /** Configure timer intervals. */
  timeIntervals?: number
  /** Header over the time selector. */
  timeCaption?: string
  /** Enable and set text for today button. */
  todayButton?: string
  /** Visualize calendar as portal. */
  withPortal?: boolean
  /** Determines whether the Select should be invalid. False by default. */
  isInvalid?: boolean
  /** Determines whether the Select should be rendered as valid or not. Default is false. */
  isValid?: boolean
  /** Defines the custom error message of the input. */
  invalidFeedback?: string
  /** Defines the message for valid input. */
  validFeedback?: string
}

const DateTimePicker = (props: Props) => {
  const {
    children,
    className,
    dateFormat,
    dateFormatCalendar,
    disabled,
    dropdownMode,
    endDate,
    excludeDates,
    includeDates,
    inline,
    locale,
    maxDate,
    maxTime,
    minDate,
    minTime,
    monthsShown,
    onChange,
    selected,
    selectsEnd,
    selectsStart,
    showMonthDropdown,
    showTimeSelect,
    showYearDropdown,
    showTimeSelectOnly,
    timeFormat,
    timeIntervals,
    timeCaption,
    todayButton,
    startDate,
    withPortal,
    isValid,
    isInvalid,
    invalidFeedback,
    validFeedback,
  } = props

  return (
    <div>
      <InputGroup className={className}>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <Icon icon="calendar" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <DatePicker
          className={`form-control ${
            isInvalid ? 'invalid-date-picker' : isValid ? 'valid-date-picker' : ''
          }`}
          dateFormat={dateFormat}
          dateFormatCalendar={dateFormatCalendar}
          disabled={disabled}
          dropdownMode={dropdownMode}
          endDate={endDate}
          excludeDates={excludeDates}
          includeDates={includeDates}
          inline={inline}
          locale={locale}
          maxDate={maxDate}
          maxTime={maxTime}
          minDate={minDate}
          minTime={minTime}
          monthsShown={monthsShown}
          onChange={onChange}
          selected={selected}
          selectsEnd={selectsEnd}
          selectsStart={selectsStart}
          showMonthDropdown={showMonthDropdown}
          showTimeSelect={showTimeSelect}
          showYearDropdown={showYearDropdown}
          showTimeSelectOnly={showTimeSelectOnly}
          timeFormat={timeFormat}
          timeIntervals={timeIntervals}
          timeCaption={timeCaption}
          todayButton={todayButton}
          startDate={startDate}
          withPortal={withPortal}
        >
          {children}
        </DatePicker>
      </InputGroup>
      {isValid && validFeedback && (
        <div className="text-left small ml-5 mt-1 text-success">
          <svg
            className="success-filter"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
          <span className="ml-2">{validFeedback}</span>
        </div>
      )}
      {isInvalid && invalidFeedback && (
        <div className="text-left small ml-5 mt-1 text-danger">
          <svg
            className="danger-filter"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
          </svg>
          <span className="ml-2">{invalidFeedback}</span>
        </div>
      )}
    </div>
  )
}

DateTimePicker.defaultProps = {
  dateFormat: 'MM/dd/yyyy',
  locale: 'enUS',
  dateFormatCalendar: 'LLLL yyyy',
  dropdownMode: 'scroll',
  timeIntervals: 30,
  withPortal: false,
}

export { DateTimePicker }
