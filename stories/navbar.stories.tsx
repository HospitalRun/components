import { storiesOf } from '@storybook/react'
import React from 'react'

import { Navbar, Toaster, Toast } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center' }}>
      {storyFn()}
      <Toaster autoClose={800} hideProgressBar draggable />
    </div>
  ))

  .add('Default Navbar', () => (
    <Navbar
      navItems={[
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link',
          onClick: () => {
            Toast('success', 'Link clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link 2',
          onClick: () => {
            Toast('success', 'Link clicked!!', 'Success')
          },
        },
        {
          type: 'search',
          className: 'ml-auto mr-3',
          onClickButton: () => {
            Toast('success', 'Button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
        },
      ]}
    />
  ))
  .add('Dark navbar w/ link list', () => (
    <Navbar
      bg="dark"
      variant="dark"
      navItems={[
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link',
          onClick: () => {
            Toast('success', 'Link clicked!!', 'Success')
          },
        },
        {
          type: 'link-list',
          label: 'Link List',
          onClick: () => {
            Toast('success', 'Link list clicked!!', 'Success')
          },
          children: [
            {
              type: 'link',
              label: 'Sublink1',
              onClick: () => {
                Toast('success', 'Sublink1 clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Sublink2',
              onClick: () => {
                Toast('success', 'Sublink2 clicked!!', 'Success')
              },
            },
          ],
        },
        {
          type: 'search',
          placeholderText: 'Custom',
          className: 'ml-auto',
          buttonText: 'Text',
          buttonColor: 'secondary',
          onClickButton: () => {
            Toast('success', 'Search button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
        },
      ]}
    />
  ))
  .add('Navbar w/ icons', () => (
    <Navbar
      navItems={[
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link 1',
          onClick: () => {
            Toast('success', 'Link 1 clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link 2',
          onClick: () => {
            Toast('success', 'Link 2 clicked!!', 'Success')
          },
          className: 'mr-3',
        },
        {
          type: 'search',
          placeholderText: 'Custom',
          className: 'ml-auto',
          buttonText: 'Text',
          buttonColor: 'secondary',
          onClickButton: () => {
            Toast('success', 'Search button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
        },
        {
          type: 'link-list-icon',
          alignRight: true,
          label: 'Patient',
          name: 'patient',
          size: 'lg',
          iconClassName: 'align-bottom',
          children: [
            {
              type: 'link',
              label: 'Sublink1',
              onClick: () => {
                Toast('success', 'Sublink1 clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Sublink2',
              onClick: () => {
                Toast('success', 'Sublink2 clicked!!', 'Success')
              },
            },
          ],
        },
        {
          type: 'icon',
          label: 'Patient',
          name: 'patient',
          onClick: () => {
            Toast('success', 'Settings icon clicked!!', 'Success')
          },
          size: 'lg',
          outline: true,
          iconClassName: 'align-bottom',
        },
        {
          type: 'icon',
          label: 'Patient',
          name: 'patient',
          onClick: () => {
            Toast('success', 'Settings icon clicked!!', 'Success')
          },
          size: 'lg',
          iconClassName: 'align-bottom',
        },
      ]}
    />
  ))
  .add('Mobile Navbar w/ link list dividers & icons)', () => (
    <Navbar
      bg="dark"
      variant="dark"
      navItems={[
        {
          type: 'link-list-icon',
          label: '',
          name: 'menu',
          size: 'lg',
          iconClassName: 'align-bottom',
          children: [
            {
              type: 'link',
              label: 'Dashboard',
              icon: 'dashboard',
              onClick: () => {
                Toast('success', 'Dashboard clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'New Patient',
              icon: 'patient-add',
              dividerAbove: true,
              onClick: () => {
                Toast('success', 'New Patient clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Patients List',
              icon: 'patients',
              onClick: () => {
                Toast('success', 'Patients List clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'New Appointment',
              icon: 'appointment-add',
              dividerAbove: true,
              onClick: () => {
                Toast('success', 'New Appointment clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Appointment Schedule',
              icon: 'appointment',
              onClick: () => {
                Toast('success', 'Appointment Schedule clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'New Lab Request',
              icon: 'add',
              dividerAbove: true,
              onClick: () => {
                Toast('success', 'New Lab Request clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Lab Requests',
              icon: 'lab',
              onClick: () => {
                Toast('success', 'Lab Requests clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Report Incident',
              icon: 'add',
              dividerAbove: true,
              onClick: () => {
                Toast('success', 'Report Incident clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Reported Incidents',
              icon: 'incident',
              onClick: () => {
                Toast('success', 'Reported Incidents clicked!!', 'Success')
              },
            },
            {
              type: 'link',
              label: 'Settings',
              icon: 'setting',
              dividerAbove: true,
              onClick: () => {
                Toast('success', 'Settings clicked!!', 'Success')
              },
            },
          ],
        },
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
        },
      ]}
    />
  ))
  .add('Custom navbar', () => (
    <Navbar
      bg="light"
      variant="light"
      navItems={[
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
          className: 'ml-4',
        },
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'search',
          placeholderText: 'Custom',
          className: 'ml-auto mr-3',
          buttonText: 'Text',
          buttonColor: 'secondary',
          onClickButton: () => {
            Toast('success', 'Search button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Profile',
          onClick: () => {
            Toast('success', 'Profile clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          className: 'mr-3',
          label: 'Settings',
          onClick: () => {
            Toast('success', 'Settings clicked!!', 'Success')
          },
        },
      ]}
    />
  ))
  .add('Search autocomplete', () => (
    <Navbar
      navItems={[
        {
          type: 'image',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
          },
        },
        {
          type: 'header',
          label: 'HospitalRun',
          onClick: () => {
            Toast('success', 'Header clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link',
          onClick: () => {
            Toast('success', 'Link clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link 2',
          onClick: () => {
            Toast('success', 'Link clicked!!', 'Success')
          },
        },
        {
          type: 'search',
          className: 'ml-auto mr-3',
          onClickButton: () => {
            Toast('success', 'Button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
          onSearch: async (query: string) => {
            Toast('success', `onSearch with query ${query}`)
            return []
          },
        },
      ]}
    />
  ))
