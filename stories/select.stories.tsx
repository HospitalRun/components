import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Toast, Toaster } from '../src'

storiesOf('Select', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>
      {storyFn()}
      <Toaster autoClose={1500} hideProgressBar draggable />
    </div>
  ))
  .add('Select one', () => (
    <div>
      <Select
        id="select-one"
        options={['Apple', 'Pineapple', 'Maple', 'April', 'Kiwi']}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
      />
    </div>
  ))
  .add('Select multiple', () => (
    <div>
      <Select
        id="select-multiple"
        options={['Apple', 'Pineapple', 'Maple', 'April', 'Kiwi']}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
        multiple
      />
    </div>
  ))
  .add('Disabled select', () => (
    <div>
      <Select
        id="select-multiple"
        options={['Apple', 'Pineapple', 'Maple', 'April', 'Kiwi']}
        defaultSelected={['Kiwi']}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
        disabled
      />
    </div>
  ))
