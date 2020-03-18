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
        placeholder="Text input placeholder"
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
  .add('Default password input', () => (
    <div>
      <TextInput type="password" name="text-input" id="text-input" size="lg" value="12345678" />
    </div>
  ))
  .add('Default search input', () => (
    <div>
      <TextInput
        type="search"
        name="text-input"
        id="text-input"
        size="lg"
        value="testsearchstring"
      />
    </div>
  ))
  .add('Default tel input', () => (
    <div>
      <TextInput type="tel" name="text-input" id="text-input" size="lg" value="123-456-7890" />
    </div>
  ))
  .add('Default url input', () => (
    <div>
      <TextInput
        type="url"
        name="text-input"
        id="text-input"
        size="lg"
        value="https://www.google.com"
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
        value="Disabled"
        disabled
      />
    </div>
  ))
  .add('Valid text input', () => (
    <div>
      <TextInput id="text-input" name="text-input" type="text" size="lg" value="Valid" isValid />
    </div>
  ))
  .add('Valid text input with custom validation message', () => (
    <div>
      <TextInput
        type="text"
        name="text-input"
        id="text-input"
        size="lg"
        value="This is a text input!"
        isValid
        feedback="This is a custom valid input message"
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
        value="Invalid"
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
        feedback="Please insert a 3 letter word"
      />
    </div>
  ))
