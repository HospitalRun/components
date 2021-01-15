import { Story, Meta } from '@storybook/react/types-6-0'
import moment from 'moment'

import { Calendar, CalendarProps, Toast, Toaster } from '../src'

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  decorators: [],
} as Meta

const start = moment()
const hours = 1
const end = moment().add(hours, 'hours')

const Template: Story<CalendarProps> = (args) => (
  <div>
    <Calendar {...args} />
    <Toaster autoClose={800} hideProgressBar draggable />
  </div>
)

// main story that's editable and has the docs for the props
export const Main = Template.bind({})
Main.args = {
  onDateClick: (date, allDay) => {
    console.log('from story')
    Toast('success', 'Date Click', `${date.toISOString()} all day is ${allDay}`)
  },
  onEventClick: (event) => {
    Toast('success', 'Event Click', event.title)
  },
  onDateRangeSelected: (startDate: Date, endDate: Date) => {
    Toast('success', 'Range Selected', `${startDate.toISOString()} to ${endDate.toISOString()}`)
  },
  onPrevClick: () => {
    Toast('success', 'previous clicked')
  },
  onNextClick: () => {
    Toast('success', 'next clicked')
  },
  onTodayClick: () => {
    console.log('on today click')
    Toast('success', 'today clicked')
  },
  events: [
    {
      start: start.toDate(),
      end: end.toDate(),
      title: 'Some Title',
      id: 'Some Id',
      allDay: false,
    },
  ],
}
