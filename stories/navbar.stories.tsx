import React from 'react'

import { storiesOf } from '@storybook/react'

import { Navbar, Toast } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      propTables: [Navbar],
    },
  })
  .add('Navbar', () => (
    <Navbar
      brand={{
        label: 'Hospital',
        onClick: () => {
          Toast('success', 'Brand button clicked!!', 'Success')
        },
      }}
      search={{
        placeholderText: 'Custom',
        buttonText: 'Text',
        buttonColor: 'secondary',
        onClickButton: () => {
          Toast('success', 'Button clicked!!', 'Success')
        },
        onChangeInput: () => {
          Toast('success', 'Search box changed!!', 'Success')
        },
      }}
      navLinks={[
        {
          label: 'Link',
          onClick: () => {
            Toast('success', 'NavLink clicked!!', 'Success')
          },
          children: [],
        },
      ]}
    />
  ))
  .add('Navbar 2', () => (
    <Navbar
      brand={{
        label: 'HospitalRun',
        src:
          'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
        onClick: () => {
          Toast('success', 'Brand button clicked!!', 'Success')
        },
      }}
      search={{
        onClickButton: () => {
          Toast('success', 'Button clicked!!', 'Success')
        },
        onChangeInput: () => {
          Toast('success', 'Search box changed!!', 'Success')
        },
      }}
      bg="light"
      variant="light"
      navLinks={[
        {
          label: 'Dropdown',
          onClick: () => {
            Toast('success', 'NavLink clicked!!', 'Success')
          },
          children: [
            {
              label: 'Sublink1',
              onClick: () => {
                Toast('success', 'Sublink1 clicked!!', 'Success')
              },
            },
            {
              label: 'Sublink2',
              onClick: () => {
                Toast('success', 'Sublink2 clicked!!', 'Success')
              },
            },
          ],
        },
        {
          label: 'Link',
          onClick: () => {
            Toast('success', 'NavLink clicked!!', 'Success')
          },
          children: [],
        },
      ]}
    />
  ))
