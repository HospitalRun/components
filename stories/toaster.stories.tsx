import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'react-bootstrap/Button'
import { Toast, Toaster } from '../src'

storiesOf('Toaster', module)
  .addParameters({
    info: {
      inline: true,
      propTables: [Toast, Toaster],
      propTablesExclude: [Button],
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Success', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Toast('success', 'This is a toaster!', 'top-right', 'Success and position is top-right')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Info', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Toast('info', 'This is a toaster!', 'top-left', 'Info and position is top-left')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Warning', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Toast('warning', 'This is a toaster!', 'top-center', 'Warning and position is top-center')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Error', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Toast('error', 'This is a toaster!', 'bottom-right', 'Error and position is bottom-right')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Default', () => (
    <div>
      <Button
        color="defult"
        onClick={() => {
          Toast(
            'default',
            'This is a toaster!',
            'bottom-left',
            'Default and position is bottom-left',
          )
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Default', () => (
    <div>
      <Button
        color="defult"
        onClick={() => {
          Toast(
            'default',
            'This is a toaster!',
            'bottom-center',
            'Default and position is bottom-center',
          )
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
