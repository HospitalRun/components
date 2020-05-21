import { storiesOf } from '@storybook/react'
import React from 'react'

import { Badge } from '../src'

storiesOf('Badge', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Badge', () => (
    <div>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
      <Badge style={{ padding: 10 }}>Custom Style</Badge>
      <Badge className="customClass">Custom Class</Badge>
    </div>
  ))
