export default interface Event {
  id: string
  allDay: boolean
  start: Date | null
  end: Date | null
  title: string
}
