import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import { Calendar, Toast, Toaster } from '../src'

storiesOf('Calendar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Calendar', () => {
    const start = moment()
    const end = start.add(1, 'hours')
    return (
      <div>
        <Calendar
          onDateClick={(date, allDay) => {
            console.log('from story')
            Toast('success', 'Date Click', `${date.toISOString()} all day is ${allDay}`)
          }}
          onEventClick={(event) => {
            Toast('success', 'Event Click', event.title)
          }}
          onDateRangeSelected={(startDate: Date, endDate: Date) => {
            Toast(
              'success',
              'Range Selected',
              `${startDate.toISOString()} to ${endDate.toISOString()}`,
            )
          }}
          events={[
            {
              start: start.toDate(),
              end: end.toDate(),
              title: 'Some Title',
              id: 'Some Id',
              allDay: false,
            },
          ]}
        />

        <Toaster autoClose={800} hideProgressBar draggable />
      </div>
    )
  })
