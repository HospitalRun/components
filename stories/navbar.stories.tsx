import React from 'react'

import { storiesOf } from '@storybook/react'

import { Navbar } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Navbar', () => (
    <div>
      <Navbar />
      <br />
      <Navbar bg="light" variant="light" />
      <br />
    </div>
  ))
