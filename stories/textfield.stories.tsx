import React from 'react'

import { storiesOf } from '@storybook/react'

import { TextField } from '../src'

storiesOf('TextField', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Default text field', () => (
    <div>
      <TextField name="test_field" value="this is the value" rows={5} />
    </div>
  ))
  .add('Disabled text field', () => (
    <div>
      <TextField name="test_field" disabled value="this is the value" rows={5} />
    </div>
  ))
  .add('Invalid text field', () => (
    <div>
      <TextField name="test_field" isInvalid value="this is the value" rows={5} />
    </div>
  ))
  .add('Small text field', () => (
    <div>
      <TextField name="test_field" size="small" value="this is the value" rows={5} />
    </div>
  ))
  .add('Large text field', () => (
    <div>
      <TextField name="test_field" size="large" value="this is the value" rows={5} />
    </div>
  ))
  .add('Custom class text field', () => (
    <div>
      <TextField name="test_field" value="this is the value" rows={5} className="customClass" />
    </div>
  ))
  .add('Custom style text field', () => (
    <div>
      <TextField
        name="test_field"
        value="this is the value"
        rows={5}
        style={{ background: 'red', color: 'white' }}
      />
    </div>
  ))
