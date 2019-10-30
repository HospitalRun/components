import React from 'react'

import { storiesOf } from '@storybook/react'

import { TextInput } from '../src'

storiesOf('TextInput', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Default text input', () => (
    <div>
      <TextInput
        type={'text'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'This is a text input!'}
      />
    </div>
  ))
  .add('Text Input with Placeholder', () => (
    <div>
      <TextInput type={'text'} name={'text-input'} id={'text-input'} placeholder={'test'} />
    </div>
  ))
  .add('Default number input', () => (
    <div>
      <TextInput
        type={'number'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'1234567890'}
      />
    </div>
  ))
  .add('Default email input', () => (
    <div>
      <TextInput
        type={'email'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'patient@testhospital.com'}
      />
    </div>
  ))
  .add('Disabled text input', () => (
    <div>
      <TextInput
        type={'text'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'This is a text input!'}
        disabled={true}
      />
    </div>
  ))
  .add('Invalid text input', () => (
    <div>
      <TextInput
        type={'text'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'This is a text input!'}
        isInvalid={true}
      />
    </div>
  ))
  .add('Valid text input', () => (
    <div>
      <TextInput
        type={'text'}
        name={'text-input'}
        id={'text-input'}
        size={'lg'}
        value={'This is a text input!'}
        isValid={true}
      />
    </div>
  ))
