import React from 'react'

import { storiesOf } from '@storybook/react'

import { Toast, Toaster } from '@hospitalrun/components'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf('Toaster', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
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
      <Toaster autoClose={3000} hideProgressBar={true} draggable={true} />
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
      <Toaster autoClose={3000} hideProgressBar={true} draggable={true} />
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
      <Toaster autoClose={3000} hideProgressBar={true} draggable={true} />
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
      <Toaster autoClose={3000} hideProgressBar={true} draggable={true} />
    </div>
  ))
