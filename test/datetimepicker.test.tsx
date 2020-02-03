import React from 'react'
import { shallow, mount } from 'enzyme'
import * as sinon from 'sinon'
import DatePicker from 'react-datepicker'
import { DateTimePicker } from '../src'

describe('DateTimePicker', () => {
  it('renders itself without crashing', () => {
    const selectedDate = new Date()
    const datePickerWrapper = shallow(
      <DateTimePicker selected={selectedDate} onChange={() => new Date()} />,
    )

    expect(datePickerWrapper.find(DatePicker)).toHaveLength(1)
  })
})

it('renders children elements when passed in', () => {
  const selectedDate = new Date()
  const datePickerWrapper = shallow(
    <DateTimePicker selected={selectedDate} onChange={() => new Date()}>
      <p>Do not forget to check the weather!</p>
    </DateTimePicker>,
  )
  const paragraph = datePickerWrapper.find('p')

  expect(paragraph).toHaveLength(1)
})

it('Checkbox handle the change event', () => {
  const selectedDate = new Date()
  const onChange = sinon.spy()
  const wrapper = mount(<DateTimePicker selected={selectedDate} onChange={onChange} />)
  const input = wrapper.find(HTMLInputElement)
  input.simulate('change')
  expect(onChange).toHaveProperty('callCount', 1)
})

it('accepts props and defaults as by DatePicker API', () => {
  const selectedDate = new Date()
  const date = new Date()
  const datePickerWrapper = mount(
    <DateTimePicker
      dateFormat="MM/dd/yyyy"
      disabled
      dropdownMode="scroll"
      endDate={date}
      excludeDates={[date]}
      includeDates={[date]}
      inline
      locale="enUS"
      maxDate={date}
      maxTime={date}
      minDate={date}
      minTime={date}
      monthsShown={1}
      onChange={() => date}
      selected={selectedDate}
      selectsEnd
      selectsStart
      showMonthDropdown
      showTimeSelect
      showYearDropdown
      showTimeSelectOnly
      timeFormat="HH:mm"
      timeIntervals={1}
      timeCaption="Time"
      todayButton="Today"
      startDate={date}
      withPortal
    />,
  )

  const pickerProps = datePickerWrapper.props()

  expect(pickerProps.dateFormat).toEqual('MM/dd/yyyy')
  expect(pickerProps.disabled).toBeTruthy()
  expect(pickerProps.dropdownMode).toEqual('scroll')
  expect(pickerProps.endDate).toEqual(date)
  expect(pickerProps.excludeDates).toEqual([date])
  expect(pickerProps.includeDates).toEqual([date])
  expect(pickerProps.inline).toBeTruthy()
  expect(pickerProps.locale).toEqual('enUS')
  expect(pickerProps.maxDate).toEqual(date)
  expect(pickerProps.maxTime).toEqual(date)
  expect(pickerProps.minDate).toEqual(date)
  expect(pickerProps.minTime).toEqual(date)
  expect(pickerProps.monthsShown).toEqual(1)
  expect(pickerProps.selectsEnd).toBeTruthy()
  expect(pickerProps.selectsStart).toBeTruthy()
  expect(pickerProps.showMonthDropdown).toBeTruthy()
  expect(pickerProps.showTimeSelect).toBeTruthy()
  expect(pickerProps.showYearDropdown).toBeTruthy()
  expect(pickerProps.showTimeSelectOnly).toBeTruthy()
  expect(pickerProps.timeFormat).toEqual('HH:mm')
  expect(pickerProps.timeIntervals).toEqual(1)
  expect(pickerProps.timeCaption).toEqual('Time')
  expect(pickerProps.todayButton).toEqual('Today')
  expect(pickerProps.startDate).toEqual(date)
  expect(pickerProps.withPortal).toBeTruthy()
})
