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
  .add('Default', () => (
    <div>
      <Button
        color="default"
        onClick={() => {
          Toast('default', 'This is a toaster!', 'Default and position is top-right')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Success', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Toast('success', 'This is a toaster!', 'Success and position is top-left', 'top-left')
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
          Toast('info', 'This is a toaster!', 'Info and position is top-center', 'top-center')
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
          Toast(
            'warning',
            'This is a toaster!',
            'Warning and position is bottom-right',
            'bottom-right',
          )
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
          Toast('error', 'This is a toaster!', 'Error and position is bottom-left', 'bottom-left')
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
  .add('Default2', () => (
    <div>
      <Button
        color="defult"
        onClick={() => {
          Toast(
            'default',
            'This is a toaster!',
            'Default and position is bottom-center',
            'bottom-center',
          )
        }}
      >
        Click me!
      </Button>
      <Toaster autoClose={3000} hideProgressBar draggable />
    </div>
  ))
