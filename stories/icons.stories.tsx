import { storiesOf } from '@storybook/react'
import React from 'react'

import { Icon } from '../src'

storiesOf('Icons', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Icon Set', () => (
    <div>
      <span>Add: </span>
      <Icon icon="add" />
      <br />
      <span>Admin: </span>
      <Icon icon="admin" />
      <br />
      <span>Apointment: </span>
      <Icon icon="appointment" />
      <br />
      <span>Add Apointment: </span>
      <Icon icon="appointment-add" />
      <br />
      <span>Remove Apointment: </span>
      <Icon icon="appointment-remove" />
      <br />
      <span>Billing: </span>
      <Icon icon="billing" />
      <br />
      <span>Calendar: </span>
      <Icon icon="calendar" />
      <br />
      <span>Dashboard: </span>
      <Icon icon="dashboard" />
      <br />
      <span>Down Arrow: </span>
      <Icon icon="down-arrow" />
      <br />
      <span>Edit: </span>
      <Icon icon="edit" />
      <br />
      <span>Image: </span>
      <Icon icon="image" />
      <br />
      <span>Incident: </span>
      <Icon icon="incident" />
      <br />
      <span>Inventory: </span>
      <Icon icon="inventory" />
      <br />
      <span>Lab: </span>
      <Icon icon="lab" />
      <br />
      <span>Left Arrow: </span>
      <Icon icon="left-arrow" />
      <br />
      <span>Log Out: </span>
      <Icon icon="logout" />
      <br />
      <span>Medication: </span>
      <Icon icon="medication" />
      <br />
      <span>Menu: </span>
      <Icon icon="menu" />
      <br />
      <span>Patient: </span>
      <Icon icon="patient" />
      <br />
      <span>Patient (Outline version): </span>
      <Icon icon="patient" outline />
      <br />
      <span>Add Patient: </span>
      <Icon icon="patient-add" />
      <br />
      <span>Remove Patient: </span>
      <Icon icon="patient-remove" />
      <br />
      <span>Patients: </span>
      <Icon icon="patients" />
      <br />
      <span>Remove: </span>
      <Icon icon="remove" />
      <br />
      <span>Right Arrow: </span>
      <Icon icon="right-arrow" />
      <br />
      <span>Save: </span>
      <Icon icon="save" />
      <br />
      <span>Setting: </span>
      <Icon icon="setting" />
      <br />
      <span>Up Arrow: </span>
      <Icon icon="up-arrow" />
      <br />
    </div>
  ))
  .add('Icon with custom class & style', () => (
    <div>
      <span>Custom class: </span>
      <Icon icon="setting" className="customClass2" />
      <br />
      <span>Custom style: </span>
      <Icon icon="setting" style={{ color: 'red' }} />
    </div>
  ))
