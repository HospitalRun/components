import React from 'react'
import { storiesOf } from '@storybook/react'
import { Alert } from '../src'

storiesOf('Alert', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Alert', () => (
    <div>
      <Alert
        color="primary"
        title="This is the title of the alert"
        message="And this is the message of the alert"
      />
      <Alert color="secondary" title="This is an alert with only the title" />
      <Alert color="success" message="This is an alert with only the message" />
      <Alert color="danger" title="This alert is dismissible" dismissible />
      <Alert
        color="warning"
        title="This alert is dismissible with a custom label"
        dismissible
        closeLabel="Close me"
      />
      <Alert color="info" title="This is an info alert" />
      <Alert color="light" title="This is a light alert" />
      <Alert
        color="dark"
        title="This is a dark alert"
        message={<strong>With a strong message</strong>}
      />
      <Alert
        title="This is an alert with a custom class"
        className="customClass"
        message="And it has a button with a custom class"
        btnClassName="customClass2"
        dismissible
      />
      <Alert
        title="This is an alert with a custom style"
        style={{ height: '50%', width: '50%', border: '2px solid red' }}
        message="And it has a button with a custom style"
        btnStyle={{ background: 'red', color: 'white' }}
        dismissible
      />
    </div>
  ))
