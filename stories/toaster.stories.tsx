import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'react-bootstrap/Button'
import { Toast, Toaster } from '../src'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          Toast('success', 'This is a toaster!', 'Success')
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
          Toast('info', 'This is a toaster!', 'Info')
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
          Toast('warning', 'This is a toaster!', 'Warning')
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
          Toast('error', 'This is a toaster!', 'Error')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
