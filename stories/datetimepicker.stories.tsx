import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { DateTimePicker } from '../src'

storiesOf('DateTimePickers', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Default', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    )
  })
  .add('Disabled', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker disabled selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    )
  })
  .add('Custom date format', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Today button', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          todayButton="Today"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Min date', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          minDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Max date', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          maxDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Specific date range', () => {
    const [startDate, setStartDate] = useState(new Date())

    const addDays = (date: any, days: any) => new Date(date.setDate(date.getDate() + days))

    return (
      <div>
        <DateTimePicker
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Exclude dates', () => {
    const [startDate, setStartDate] = useState(new Date())

    const subDay = (date: any, days: any) => new Date(date.setDate(date.getDate() + days))

    return (
      <div>
        <DateTimePicker
          excludeDates={[new Date(), subDay(new Date(), 1), subDay(new Date(), 2)]}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Include dates', () => {
    const [startDate, setStartDate] = useState(new Date())

    const addDay = (date: any, days: any) => new Date(date.setDate(date.getDate() + days))

    return (
      <div>
        <DateTimePicker
          includeDates={[new Date(), addDay(new Date(), 1), addDay(new Date(), 2)]}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Date Range', () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DateTimePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    )
  })
  .add('Portal version', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker selected={startDate} onChange={(date) => setStartDate(date)} withPortal />
      </div>
    )
  })
  .add('Inline version', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
      </div>
    )
  })
  .add('Show next months', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          monthsShown={2}
        />
      </div>
    )
  })
  .add('Children', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker selected={startDate} onChange={(date) => setStartDate(date)}>
          <div style={{ color: 'red' }}>Do not forget to check the weather!</div>
        </DateTimePicker>
      </div>
    )
  })
  .add('Select Time', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MM/dd/yyyy h:mm aa"
        />
      </div>
    )
  })
  .add('Select Time Only', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="h:mm aa"
        />
      </div>
    )
  })
