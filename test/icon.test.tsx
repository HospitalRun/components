import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallow, mount } from 'enzyme'
import * as React from 'react'
import sinon from 'sinon'

import { Icon } from '../src'

describe('Icon', () => {
  it('onClick event prop is activated when clicked', () => {
    const spy = sinon.spy()
    const wrapper = mount(<Icon icon="appointment" onClick={spy} />)
    wrapper.find(FontAwesomeIcon).first().simulate('click')
    expect(spy.calledOnce).toBe(true)
  })

  it('Add Icon renders itself without crashing', () => {
    const addIconWrapper = shallow(<Icon icon="add" />)
    const fontAwesomeIcon = addIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'plus'])
  })

  it('Appointment Icons renders themselves without crashing', () => {
    const apointmentWrapper = shallow(<Icon icon="appointment" />)
    const appointmentFontAwesomeIcon = apointmentWrapper.find(FontAwesomeIcon)
    expect(appointmentFontAwesomeIcon).toHaveLength(1)
    expect(appointmentFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'calendar'])

    const addApointmentWrapper = shallow(<Icon icon="appointment-add" />)
    const addAppointmentFontAwesomeIcon = addApointmentWrapper.find(FontAwesomeIcon)
    expect(addAppointmentFontAwesomeIcon).toHaveLength(1)
    expect(addAppointmentFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'calendar-plus'])

    const removeApointmentWrapper = shallow(<Icon icon="appointment-remove" />)
    const removeAppointmentFontAwesomeIcon = removeApointmentWrapper.find(FontAwesomeIcon)
    expect(removeAppointmentFontAwesomeIcon).toHaveLength(1)
    expect(removeAppointmentFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'calendar-minus'])
  })

  it('Billing Icon renders itself without crashing', () => {
    const billingIconWrapper = shallow(<Icon icon="billing" />)
    const fontAwesomeIcon = billingIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'file-invoice-dollar'])
  })

  it('Calendar Icon renders itself without crashing', () => {
    const calendarIconWrapper = shallow(<Icon icon="calendar" />)
    const fontAwesomeIcon = calendarIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'calendar-alt'])
  })

  it('Dashboard Icon renders itself without crashing', () => {
    const dashboardIconWrapper = shallow(<Icon icon="dashboard" />)
    const fontAwesomeIcon = dashboardIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'columns'])
  })

  it('Edit Icon renders itself without crashing', () => {
    const dashboardIconWrapper = shallow(<Icon icon="edit" />)
    const fontAwesomeIcon = dashboardIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'edit'])
  })

  it('Image Icon renders itself without crashing', () => {
    const imageIconWrapper = shallow(<Icon icon="image" />)
    const fontAwesomeIcon = imageIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'camera'])
  })

  it('Incident Icon renders itself without crashing', () => {
    const incidentIconWrapper = shallow(<Icon icon="incident" />)
    const fontAwesomeIcon = incidentIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'file-alt'])
  })

  it('Inventory Icon renders itself without crashing', () => {
    const inventoryIconWrapper = shallow(<Icon icon="inventory" />)
    const fontAwesomeIcon = inventoryIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'boxes'])
  })

  it('Lab Icon renders itself without crashing', () => {
    const labIconWrapper = shallow(<Icon icon="lab" />)
    const fontAwesomeIcon = labIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'microscope'])
  })

  it('Arrow Icons renders themselves without crashing', () => {
    const leftArrowIconWrapper = shallow(<Icon icon="left-arrow" />)
    const leftArrowFontAwesomeIcon = leftArrowIconWrapper.find(FontAwesomeIcon)
    expect(leftArrowFontAwesomeIcon).toHaveLength(1)
    expect(leftArrowFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'chevron-left'])

    const rightArrowIconWrapper = shallow(<Icon icon="right-arrow" />)
    const rightArrowFontAwesomeIcon = rightArrowIconWrapper.find(FontAwesomeIcon)
    expect(rightArrowFontAwesomeIcon).toHaveLength(1)
    expect(rightArrowFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'chevron-right'])

    const upArrowIconWrapper = shallow(<Icon icon="up-arrow" />)
    const upArrowFontAwesomeIcon = upArrowIconWrapper.find(FontAwesomeIcon)
    expect(upArrowFontAwesomeIcon).toHaveLength(1)
    expect(upArrowFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'chevron-up'])

    const downArrowIconWrapper = shallow(<Icon icon="down-arrow" />)
    const downArrowFontAwesomeIcon = downArrowIconWrapper.find(FontAwesomeIcon)
    expect(downArrowFontAwesomeIcon).toHaveLength(1)
    expect(downArrowFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'chevron-down'])
  })

  it('Logout Icon renders itself without crashing', () => {
    const logoutIconWrapper = shallow(<Icon icon="logout" />)
    const fontAwesomeIcon = logoutIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'sign-out-alt'])
  })

  it('Medication Icon renders itself without crashing', () => {
    const medicationIconWrapper = shallow(<Icon icon="medication" />)
    const fontAwesomeIcon = medicationIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'pills'])
  })

  it('Patient Icons renders themselves without crashing', () => {
    const patientWrapperWrapper = shallow(<Icon icon="patient" />)
    const patientFontAwesomeIcon = patientWrapperWrapper.find(FontAwesomeIcon)
    expect(patientFontAwesomeIcon).toHaveLength(1)
    expect(patientFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'user'])

    const patientAddWrapper = shallow(<Icon icon="patient-add" />)
    const patientAddFontAwesomeIcon = patientAddWrapper.find(FontAwesomeIcon)
    expect(patientAddFontAwesomeIcon).toHaveLength(1)
    expect(patientAddFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'user-plus'])

    const patientRemoveWrapper = shallow(<Icon icon="patient-remove" />)
    const patientRemoveFontAwesomeIcon = patientRemoveWrapper.find(FontAwesomeIcon)
    expect(patientRemoveFontAwesomeIcon).toHaveLength(1)
    expect(patientRemoveFontAwesomeIcon.props().icon).toStrictEqual(['fas', 'user-minus'])

    const addIconWrapper = shallow(<Icon icon="patient" outline />)
    const fontAwesomeIcon = addIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['far', 'user'])
  })

  it('Patients Icon renders itself without crashing', () => {
    const patientsIconWrapper = shallow(<Icon icon="patients" />)
    const fontAwesomeIcon = patientsIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'users'])
  })

  it('Remove Icon renders itself without crashing', () => {
    const removeIconWrapper = shallow(<Icon icon="remove" />)
    const fontAwesomeIcon = removeIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'minus'])
  })

  it('Save Icon renders itself without crashing', () => {
    const saveIconWrapper = shallow(<Icon icon="save" />)
    const fontAwesomeIcon = saveIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'save'])
  })

  it('Setting Icon renders itself without crashing', () => {
    const settingIconWrapper = shallow(<Icon icon="setting" />)
    const fontAwesomeIcon = settingIconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon).toHaveLength(1)
    expect(fontAwesomeIcon.props().icon).toStrictEqual(['fas', 'cog'])
  })

  it('Icon can use custom class', () => {
    const iconWrapper = shallow(<Icon icon="setting" className="customClass" />)
    const fontAwesomeIcon = iconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon.props().className).toEqual('customClass')
  })

  it('Icon can use custom style', () => {
    const iconWrapper = shallow(<Icon icon="setting" style={{ background: 'red' }} />)
    const fontAwesomeIcon = iconWrapper.find(FontAwesomeIcon)
    expect(fontAwesomeIcon.props().style).toMatchObject({ background: 'red' })
  })
})
