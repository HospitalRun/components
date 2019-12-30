import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { EventApi } from '@fullcalendar/core'
import Event from './interfaces'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

interface Props {
  view: string
  events: Event[]
  disabled?: boolean
  onDateClick?: (date: Date, allDay: boolean) => void
  onDateRangeSelected?: (startDate: Date, endDate: Date, allDay: boolean) => void
  onEventClick?: (event: Event) => void
}

const viewToCalendarViewMap = {
  month: 'dayGridMonth',
  week: 'timeGridWeek',
  day: 'timeGridDay',
}

const getEventFromFullCalendarEventApi = (e: EventApi): Event => ({
  id: e.id,
  start: e.start,
  end: e.end,
  title: e.title,
  allDay: e.allDay,
})

const getCalendarViewFromViewProp = (view: string) => (viewToCalendarViewMap as any)[view]

const Calendar = (props: Props) => {
  const { view, events, disabled, onDateClick, onDateRangeSelected, onEventClick } = props
  const fullCalendarRef = React.createRef<FullCalendar>()
  return (
    <FullCalendar
      events={events}
      ref={fullCalendarRef}
      selectable={!disabled}
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      defaultView={getCalendarViewFromViewProp(view)}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      themeSystem="bootstrap"
      dateClick={(arg) => {
        console.log('date click')
        if (onDateClick) {
          onDateClick(arg.date, arg.allDay)
        }
      }}
      select={(arg) => {
        if (onDateRangeSelected) {
          onDateRangeSelected(arg.start, arg.end, arg.allDay)
        }
      }}
      eventClick={(arg) => {
        if (onEventClick) {
          onEventClick(getEventFromFullCalendarEventApi(arg.event))
        }
      }}
    />
  )
}

Calendar.defaultProps = {
  view: 'week',
  events: [],
}

export { Calendar }
