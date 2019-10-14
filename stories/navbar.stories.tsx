import React from 'react'

import { storiesOf } from '@storybook/react'

import { Navbar, Toaster, Toast } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Navbar', () => (
    <div>
      <Navbar
        brand={{
          label: 'Hospital',
          onClick: () => {
            Toast('success', 'Brand button clicked!!', 'Success')
          },
        }}
        buttonColor="success"
        onSeachButtonClick={() => {
          Toast('success', 'Button clicked!!', 'Success')
        }}
        onSearchTextBoxChange={() => {
          Toast('success', 'Search box changed!!', 'Success')
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

      <br />

      <Navbar
        brand={{
          label: 'HospitalRun',
          href: '/',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Brand button clicked!!', 'Success')
          },
        }}
        bg="light"
        variant="light"
        onSeachButtonClick={() => {
          Toast('success', 'Button Clicked!!', 'Success')
        }}
        onSearchTextBoxChange={() => {
          Toast('success', 'Search box changed!!', 'Success')
        }}
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
                href: '/somepath',
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
      <br />

      <Toaster autoClose={800} hideProgressBar={true} draggable={true} />
    </div>
  ))
