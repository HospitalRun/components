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
  /** Determines whether the Select should be rendered as valid or not. Default is false. */
  isValid?: boolean
  /** Determines whether the Select should be rendered as invalid or not. Default is false. */
  isInvalid?: boolean
  /** Defines the custom feedback of the input. */
  feedback?: string
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
    feedback,
  } = props

  return (
    <>
      <InputGroup className={className}>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <Icon icon="calendar" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <DatePicker
          className={`form-control ${
            isValid ? 'valid-date-picker' : isInvalid ? 'invalid-date-picker' : ''
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
      {feedback !== undefined && (
        <div
          className={`text-left ml-5 mt-1 text-small ${
            isValid ? 'text-success' : isInvalid ? 'text-danger' : undefined
          }`}
        >
          {feedback}
        </div>
      )}
    </>
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
