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
          label: 'User',
          src:
            'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/7104608081548233620-128.png',
          onClick: () => {
            Toast('success', 'Settings icon clicked!!', 'Success')
          },
          className: 'ml-3',
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
          src: 'https://image.flaticon.com/icons/svg/126/126472.svg',
          onClick: () => {
            Toast('success', 'Settings icon clicked!!', 'Success')
          },
          className: 'ml-4',
        },
        {
          type: 'icon',
          src:
            'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/7104608081548233620-128.png',
          onClick: () => {
            Toast('success', 'Profile icon clicked!!', 'Success')
          },
          className: 'ml-3',
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
          type: 'icon',
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
