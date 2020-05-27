import { storiesOf } from '@storybook/react'
import React from 'react'

import { Select, Toast, Toaster } from '../src'

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Maple', value: 'maple' },
  { label: 'April', value: 'april' },
  { label: 'Kiwi', value: 'kiwi' },
]

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
        options={options}
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
        options={options}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
        multiple
      />
    </div>
  ))
  .add('Same labels, different values', () => (
    <div>
      <Select
        id="same-labels"
        options={[
          { label: 'Sunflower', value: 'sunflower 1' },
          { label: 'Sunflower', value: 'sunflower 2' },
        ]}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
      />
    </div>
  ))
  .add('Disabled select', () => (
    <div>
      <Select
        id="select-multiple"
        options={options}
        defaultSelected={[{ label: 'Kiwi', value: 'kiwi' }]}
        onChange={(selected) => {
          Toast('success', 'Selection changed', selected.join(' | '))
        }}
        disabled
      />
    </div>
  ))
