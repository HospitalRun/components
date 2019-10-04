import React from 'react'

import { storiesOf } from '@storybook/react'

import { Pill } from '@hospitalrun/components'

storiesOf('Pill', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
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
    </div>
  ))
