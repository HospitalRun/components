import React from 'react'
import { storiesOf } from '@storybook/react'
import { Alert } from '../src'

storiesOf('Alert', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>)
  .add('Alert', () => (
    <div>
      <Alert
        color="primary"
        title="This is the title of the alert"
        message="And this is the message of the alert"
      ></Alert>
      <Alert color="secondary" title="This is an alert with only the title"></Alert>
      <Alert color="success" message="This is an alert with only the message"></Alert>
      <Alert color="danger" title="This alert is dismissible" dismissible></Alert>
      <Alert
        color="warning"
        title="This alert is dismissible with a custom label"
        dismissible
        closeLabel="Close me"
      ></Alert>
      <Alert color="info" title="This is an info alert"></Alert>
      <Alert color="light" title="This is a light alert"></Alert>
      <Alert
        color="dark"
        title="This is a dark alert"
        message={<strong>With a strong message</strong>}
      ></Alert>
    </div>
  ))
