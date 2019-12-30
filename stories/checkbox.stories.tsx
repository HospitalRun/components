import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'

storiesOf('Checkbox', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Checkbox', () => (
    <div>
      <h1>Vertical</h1>
      <Checkbox label="Checkbox 1" id="checkbox1" />
      <Checkbox label="Checkbox 2" id="checkbox2" />
      <Checkbox label="Checkbox 3" id="checkbox3" disabled />
      <br />
      <h1>Horizontal</h1>
      <Checkbox label="Checkbox 1" id="checkbox11" inline />
      <Checkbox label="Checkbox 2" id="checkbox22" inline />
      <Checkbox label="Checkbox 3" id="checkbox33" inline />
      <h1>Custom Style</h1>
      <Checkbox
        label="Custom Style"
        id="checkbox44"
        style={{ border: '2px solid red' }}
        labelStyle={{ color: 'blue' }}
      />
      <h1>Custom class</h1>
      <Checkbox
        label="Custom Class"
        id="checkbox44"
        className="customClass"
        labelClassName="customClass2"
      />
    </div>
  ))
