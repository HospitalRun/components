import React from 'react'

import { storiesOf } from '@storybook/react'

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
          type: 'icon',
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
            Toast('success', 'NavLink clicked!!', 'Success')
          },
        },
        {
          type: 'link',
          label: 'Link 2',
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
  ))
  .add('Dark navbar w/ linked list', () => (
    <Navbar
      bg="dark"
      variant="dark"
      navItems={[
        {
          type: 'icon',
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
            Toast('success', 'Search button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
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
        },
        {
          type: 'icon',
          src:
            'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
          onClick: () => {
            Toast('success', 'Icon clicked!!', 'Success')
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
            Toast('success', 'Search button clicked!!', 'Success')
          },
          onChangeInput: () => {
            Toast('success', 'Search box changed!!', 'Success')
          },
        },
      ]}
    />
  ))
