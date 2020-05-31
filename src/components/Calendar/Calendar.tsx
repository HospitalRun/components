import { EventApi } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useEffect } from 'react'

import Event from './interfaces'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

type View = 'day' | 'month' | 'week'

interface Props {
  view: View
  views: View[]
  events: Event[]
  disabled?: boolean
  onDateClick?: (date: Date, allDay: boolean) => void
  onDateRangeSelected?: (startDate: Date, endDate: Date, allDay: boolean) => void
  onEventClick?: (event: Event) => void
  onNavPrevClick?: () => void
  onNavNextClick?: () => void
  onNavTodayClick?: () => void
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

const getCalendarViewFromViewProp = (view: View) => (viewToCalendarViewMap as any)[view]

const getViewsFromViewsProp = (views: View[]) => {
  let viewsString = ''
  views.forEach((view) => {
    viewsString += `${getCalendarViewFromViewProp(view)},`
  })

  return viewsString.slice(0, viewsString.length - 1)
}

const Calendar = (props: Props) => {
  const {
    view,
    views,
    events,
    disabled,
    onDateClick,
    onDateRangeSelected,
    onEventClick,
    onNavPrevClick,
    onNavNextClick,
    onNavTodayClick,
  } = props
  const fullCalendarRef = React.createRef<FullCalendar>()

  const customCallbacks: { className: string; callback?: () => void }[] = [
    {
      className: 'fc-prev-button',
      callback: onNavPrevClick,
    },
    {
      className: 'fc-next-button',
      callback: onNavNextClick,
    },
    {
      className: 'fc-today-button',
      callback: onNavTodayClick,
    },
  ]

  useEffect(() => {
    customCallbacks.forEach(({ className, callback }) => {
      if (callback !== undefined && document.getElementsByClassName(className)) {
        document.getElementsByClassName(className)[0].addEventListener('click', callback)
      }
    })

    return () => {
      customCallbacks.forEach(({ className, callback }) => {
        if (callback !== undefined && document.getElementsByClassName(className)) {
          document.getElementsByClassName(className)[0].removeEventListener('click', callback)
        }
      })
    }
  }, [])

  return (
    <FullCalendar
      events={events}
      ref={fullCalendarRef}
      selectable={!disabled}
      header={{
        left: 'prev,next today',
        center: 'title',
        right: getViewsFromViewsProp(views),
      }}
      defaultView={getCalendarViewFromViewProp(view)}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      themeSystem="bootstrap"
      dateClick={(arg) => {
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
  views: ['day', 'week', 'month'],
  onNavPrevClick: () => undefined,
  onNavNextClick: () => undefined,
  onNavTodayClick: () => undefined,
}

export { Calendar }
