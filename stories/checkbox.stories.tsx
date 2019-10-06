import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'

storiesOf('Checkbox', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Checkbox', () => (
    <div>
      <h1>Vertical</h1>
      <Checkbox label="Checkbox 1" />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" disabled />
      <br />
      <h1>Horizontal</h1>
      <Checkbox label="Checkbox 1" inline />
      <Checkbox label="Checkbox 2" inline />
      <Checkbox label="Checkbox 3" inline />
    </div>
  ))
