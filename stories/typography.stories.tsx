import { storiesOf } from '@storybook/react'
import React from 'react'

import { Typography } from '../src'

storiesOf('Typography', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Typography', () => (
    <div>
      <Typography variant="h1">Heading 1</Typography>
    </div>
  ))
