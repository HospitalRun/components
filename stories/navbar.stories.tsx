import React from 'react'

import { storiesOf } from '@storybook/react'

import { Navbar, Toaster, Toast } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Navbar', () => (
    <div>
      <Navbar
        navItems={[
          {
            type: 'brand',
            label: 'Hospital',
            onClick: () => {
              Toast('success', 'Brand button clicked!!', 'Success')
            },
          },
          {
            type: 'link',
            label: 'Link',
            onClick: () => {
              Toast('success', 'NavLink clicked!!', 'Success')
            },
          },
          {
            type: 'link-list',
            label: 'Link',
            onClick: () => {
              Toast('success', 'NavLink clicked!!', 'Success')
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
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton: () => {
              Toast('success', 'Button clicked!!', 'Success')
            },
            onChangeInput: () => {
              Toast('success', 'Search box changed!!', 'Success')
            },
          },
        ]}
      />

      <br />

      <Navbar
        bg="light"
        variant="light"
        navItems={[
          {
            type: 'brand',
            label: 'HospitalRun',
            src:
              'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
            onClick: () => {
              Toast('success', 'Brand button clicked!!', 'Success')
            },
          },
          {
            type: 'link',
            label: 'Link',
            onClick: () => {
              Toast('success', 'NavLink clicked!!', 'Success')
            },
          },
          {
            type: 'search',
            onClickButton: () => {
              Toast('success', 'Button clicked!!', 'Success')
            },
            onChangeInput: () => {
              Toast('success', 'Search box changed!!', 'Success')
            },
          },
        ]}
      />
      <br />

      <Toaster autoClose={800} hideProgressBar draggable />
    </div>
  ))
