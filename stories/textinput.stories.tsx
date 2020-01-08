import React from 'react'

import { storiesOf } from '@storybook/react'

import { TextInput } from '../src'

storiesOf('TextInput', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>{storyFn()}</div>
  ))
  .add('Default text input', () => (
    <div>
      <TextInput id="text-input" name="text-input" type="text" size="lg" />
    </div>
  ))
  .add('Default text input with value', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="text"
        size="lg"
        value="This is a text input with a value!"
      />
    </div>
  ))
  .add('Text input with a placeholder', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="text"
        placeholder="This is a text input with placeholder!"
      />
    </div>
  ))
  .add('Default number input', () => (
    <div>
      <TextInput id="text-input" name="text-input" type="number" size="lg" value="1234567890" />
    </div>
  ))
  .add('Default email input', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="email"
        size="lg"
        value="patient@testhospital.com"
      />
    </div>
  ))
  .add('Disabled text input', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="text"
        size="lg"
        value="This is a text input!"
        disabled
      />
    </div>
  ))
  .add('Invalid text input', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="text"
        size="lg"
        value="This is a text input!"
        isInvalid
      />
    </div>
  ))
  .add('Invalid text field with error message', () => (
    <div>
      <TextInput
        id="text-input"
        name="text-input"
        type="text"
        size="lg"
        value="Custom error message"
        isInvalid
        errorMessage="Please insert a 3 letter word"
      />
    </div>
  ))
  .add('Valid text input', () => (
    <div>
      <TextInput
        type="text"
        name="text-input"
        id="text-input"
        size="lg"
        value="This is a text input!"
        isValid
        validInputMessage="This is a custom valid input message"
      />
    </div>
  ))
