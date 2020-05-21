import { storiesOf } from '@storybook/react'
import React from 'react'

import { Pill } from '../src'

storiesOf('Pill', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Pill', () => (
    <div>
      <Pill color="primary">Primary</Pill>
      <Pill color="secondary">Secondary</Pill>
      <Pill color="success">Success</Pill>
      <Pill color="warning">Warning</Pill>
      <Pill color="danger">Danger</Pill>
      <Pill color="info">Info</Pill>
      <Pill color="light">Light</Pill>
      <Pill color="dark">Dark</Pill>
      <Pill className="customClass">Custom Class</Pill>
      <Pill style={{ color: 'red', boxShadow: '5px 5px 3px grey' }}>Custom style</Pill>
    </div>
  ))
