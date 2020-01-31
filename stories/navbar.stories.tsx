import React from 'react'

import { Navbar, Toast } from '../src'

export default {
  title: 'Navbar/Default Navbar',
  component: Navbar,
}
export const DefaultNavbar = () => (
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
)

export const NavbarWithLinkedList = () => (
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
)

export const NavbarWithIcons = () => (
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
)
export const CustomNavbar = () => (
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
)
