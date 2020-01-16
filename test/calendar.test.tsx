import React from 'react'
import FullCalendar from '@fullcalendar/react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { TimeGridView } from '@fullcalendar/timegrid'
import moment from 'moment'
import { Calendar } from '../src'

describe('Calendar', () => {
  it('should render a full calendar component with the proper default props', () => {
    const wrapper = shallow(<Calendar />)

    const fullCalendar = wrapper.find(FullCalendar)
    expect(fullCalendar).toHaveLength(1)
    expect(fullCalendar.prop('defaultView')).toEqual('timeGridWeek')
    expect((fullCalendar.prop('header') as any).right).toEqual(
      'timeGridDay,timeGridWeek,dayGridMonth',
    )
    expect(fullCalendar.prop('selectable')).toBeTruthy()
  })

  it('should render a disabled calendar', () => {
    const wrapper = shallow(<Calendar disabled />)

    const fullCalendar = wrapper.find(FullCalendar)
    expect(fullCalendar.prop('selectable')).toBeFalsy()
  })

  it('should render the correct default view', () => {
    const wrapper = shallow(<Calendar view="day" />)

    const fullCalendar = wrapper.find(FullCalendar)
    expect(fullCalendar.prop('defaultView')).toEqual('timeGridDay')
  })

  it('should render the correct correct available views', () => {
    const wrapper = shallow(<Calendar views={['day']} />)

    const fullCalendar = wrapper.find(FullCalendar)
    expect((fullCalendar.prop('header') as any).right).toEqual('timeGridDay')
  })

  it('should pass events to full calendar', () => {
    const start = moment()
    const end = start.add(1, 'hours').toDate()
    const events = [
      {
        id: 'id123',
        start: start.toDate(),
        end,
        allDay: true,
        title: 'Title',
      },
    ]
    const wrapper = shallow(<Calendar events={events} />)

    const fullCalendar = wrapper.find(FullCalendar)
    expect(fullCalendar.prop('events')).toEqual(events)
  })

  it('should call the onDateClick callback when a date is selected', () => {
    const onDateClickSpy = jest.fn()
    const wrapper = mount(<Calendar onDateClick={onDateClickSpy} />)

    const fullCalendar = wrapper.find(FullCalendar)

    const date = new Date()
    const allDay = true

    act(() => {
      ;(fullCalendar.prop('dateClick') as any)({
        date,
        allDay,
        dateStr: new Date().toISOString(),
        resource: expect.anything(),
        dayEl: expect.any(HTMLElement),
        jsEvent: expect.any(MouseEvent),
        view: expect.any(TimeGridView),
      })
    })

    expect(onDateClickSpy).toHaveBeenCalledTimes(1)
    expect(onDateClickSpy).toHaveBeenCalledWith(date, allDay)
  })

  it('should call the onDateRangeSelected callback when a date range is selected', () => {
    const onDateRangeSelectedSpy = jest.fn()
    const wrapper = mount(<Calendar onDateRangeSelected={onDateRangeSelectedSpy} />)

    const fullCalendar = wrapper.find(FullCalendar)

    const start = new Date()
    const end = new Date()
    const allDay = true
    act(() => {
      ;(fullCalendar.prop('select') as any)({
        start,
        end,
        allDay,
        startStr: new Date().toISOString(),
        endStr: new Date().toISOString(),
        jsEvent: expect.any(MouseEvent),
        view: expect.any(TimeGridView),
      })
    })

    expect(onDateRangeSelectedSpy).toHaveBeenCalledTimes(1)
    expect(onDateRangeSelectedSpy).toHaveBeenCalledWith(start, end, allDay)
  })

  it('should call the onEventClick callback when an event is selected', () => {
    const onEventClickSpy = jest.fn()
    const wrapper = mount(<Calendar onEventClick={onEventClickSpy} />)

    const fullCalendar = wrapper.find(FullCalendar)

    const event = {
      start: new Date(),
      end: new Date(),
      allDay: true,
      title: 'Some Title',
      id: 'someid',
    }
    act(() => {
      ;(fullCalendar.prop('eventClick') as any)({
        event,
        el: expect.any(HTMLElement),
        jsEvent: expect.any(MouseEvent),
        view: expect.any(TimeGridView),
      })
    })

    expect(onEventClickSpy).toHaveBeenCalledTimes(1)
    expect(onEventClickSpy).toHaveBeenCalledWith(event)
  })
})
