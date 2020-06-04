import { storiesOf } from '@storybook/react'
import * as locales from 'date-fns/locale'
import React, { useState } from 'react'

import { DateTimePicker, Dropdown } from '../src'

storiesOf('DateTimePickers', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', marginLeft: '40px' }}>{storyFn()}</div>
  ))
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
  .add('Valid', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker isValid selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    )
  })
  .add('Valid with feedback', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          isValid
          feedback="Date is valid"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
  .add('Invalid', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker isInvalid selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    )
  })
  .add('Invalid with feedback', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          isInvalid
          feedback="Date is invalid"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
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
  .add('Month and Year select dropdown', () => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <div>
        <DateTimePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showMonthDropdown
          showYearDropdown
          dropdownMode="scroll"
        />
      </div>
    )
  })
  .add('Supported languages', () => {
    const [startDate, setStartDate] = useState(new Date())
    const [language, setLanguage] = useState('enUS')
    const items = Object.keys(locales).map((locale) => ({
      text: locale,
      onClick: () => {
        setLanguage(locale)
      },
    }))
    const ar = {
      text: 'ar',
      onClick: () => {
        setLanguage('ar')
      },
    }
    const zr = {
      text: 'zr',
      onClick: () => {
        setLanguage('zr')
      },
    }
    items.push(ar)
    items.push(zr)

    return (
      <div>
        <Dropdown text={language} items={items} />
        <DateTimePicker
          locale={language}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
  })
