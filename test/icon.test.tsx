import * as React from 'react'
import { shallow } from 'enzyme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '../src'

describe('Icon', () => {
  it('Add Icon renders itself without crashing', () => {
    const addIconWrapper = shallow(<Icon icon="add" />)
    const fontAwesomeIcon = addIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('plus')
  })

  it('Appointment Icons renders themselves without crashing', () => {
    const apointmentWrapper = shallow(<Icon icon="appointment" />)
    const appointmentFontAwesomeIcon = apointmentWrapper.find(FontAwesomeIcon)
    expect(appointmentFontAwesomeIcon).toHaveLength(1)
    expect(appointmentFontAwesomeIcon.props().icon).toBe('calendar')

    const addApointmentWrapper = shallow(<Icon icon="appointment-add" />)
    const addAppointmentFontAwesomeIcon = addApointmentWrapper.find(FontAwesomeIcon)
    expect(addAppointmentFontAwesomeIcon).toHaveLength(1)
    expect(addAppointmentFontAwesomeIcon.props().icon).toBe('calendar-plus')

    const removeApointmentWrapper = shallow(<Icon icon="appointment-remove" />)
    const removeAppointmentFontAwesomeIcon = removeApointmentWrapper.find(FontAwesomeIcon)
    expect(removeAppointmentFontAwesomeIcon).toHaveLength(1)
    expect(removeAppointmentFontAwesomeIcon.props().icon).toBe('calendar-minus')
  })

  it('Calendar Icon renders itself without crashing', () => {
    const calendarIconWrapper = shallow(<Icon icon="calendar" />)
    const fontAwesomeIcon = calendarIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('calendar-alt')
  })

  it('Image Icon renders itself without crashing', () => {
    const imageIconWrapper = shallow(<Icon icon="image" />)
    const fontAwesomeIcon = imageIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('camera')
  })

  it('Incident Icon renders itself without crashing', () => {
    const incidentIconWrapper = shallow(<Icon icon="incident" />)
    const fontAwesomeIcon = incidentIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('file-alt')
  })

  it('Lab Icon renders itself without crashing', () => {
    const labIconWrapper = shallow(<Icon icon="lab" />)
    const fontAwesomeIcon = labIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('microscope')
  })

  it('Arrow Icons renders themselves without crashing', () => {
    const leftArrowIconWrapper = shallow(<Icon icon="left-arrow" />)
    const leftArrowFontAwesomeIcon = leftArrowIconWrapper.find(FontAwesomeIcon)
    expect(leftArrowFontAwesomeIcon).toHaveLength(1)
    expect(leftArrowFontAwesomeIcon.props().icon).toBe('chevron-left')

    const rightArrowIconWrapper = shallow(<Icon icon="right-arrow" />)
    const rightArrowFontAwesomeIcon = rightArrowIconWrapper.find(FontAwesomeIcon)
    expect(rightArrowFontAwesomeIcon).toHaveLength(1)
    expect(rightArrowFontAwesomeIcon.props().icon).toBe('chevron-right')
  })

  it('Medication Icon renders itself without crashing', () => {
    const medicationIconWrapper = shallow(<Icon icon="medication" />)
    const fontAwesomeIcon = medicationIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('pills')
  })

  it('Patient Icons renders themselves without crashing', () => {
    const patientWrapperWrapper = shallow(<Icon icon="patient" />)
    const patientFontAwesomeIcon = patientWrapperWrapper.find(FontAwesomeIcon)
    expect(patientFontAwesomeIcon).toHaveLength(1)
    expect(patientFontAwesomeIcon.props().icon).toBe('user')

    const patientAddWrapper = shallow(<Icon icon="patient-add" />)
    const patientAddFontAwesomeIcon = patientAddWrapper.find(FontAwesomeIcon)
    expect(patientAddFontAwesomeIcon).toHaveLength(1)
    expect(patientAddFontAwesomeIcon.props().icon).toBe('user-plus')

    const patientRemoveWrapper = shallow(<Icon icon="patient-remove" />)
    const patientRemoveFontAwesomeIcon = patientRemoveWrapper.find(FontAwesomeIcon)
    expect(patientRemoveFontAwesomeIcon).toHaveLength(1)
    expect(patientRemoveFontAwesomeIcon.props().icon).toBe('user-minus')
  })

  it('Patients Icon renders itself without crashing', () => {
    const patientsIconWrapper = shallow(<Icon icon="patients" />)
    const fontAwesomeIcon = patientsIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('users')
  })

  it('Remove Icon renders itself without crashing', () => {
    const removeIconWrapper = shallow(<Icon icon="remove" />)
    const fontAwesomeIcon = removeIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('minus')
  })

  it('Save Icon renders itself without crashing', () => {
    const saveIconWrapper = shallow(<Icon icon="save" />)
    const fontAwesomeIcon = saveIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('save')
  })

  it('Setting Icon renders itself without crashing', () => {
    const settingIconWrapper = shallow(<Icon icon="setting" />)
    const fontAwesomeIcon = settingIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toBe('cog')
  })
})
