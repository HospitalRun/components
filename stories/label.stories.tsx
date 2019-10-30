import React from 'react'

import { storiesOf } from '@storybook/react'

import { Label } from '../src/components/Label'

storiesOf('Label', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>{storyFn()}</div>
  ))
  .add('Label', () => (
    <React.Fragment>
      <Label text="This is a label" />
      <Label text="This is also a label" />
      <Label text="You can type whatever you want in a label!" />
    </React.Fragment>
  ))
