import React from 'react'

import { storiesOf } from '@storybook/react'

import { Label } from '../src/components/Label'
import { TextInput } from '../src/components/TextInput'

storiesOf('Label', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '8px' }}>
      {storyFn()}
    </div>
  ))
  .add('Label', () => (
    <React.Fragment>
      <Label text="This is a label" />
      <Label text="This is also a label" />
      <Label text="You can type whatever you want in a label!" />
      <Label text="This label is tied to the input below" htmlFor={'inputOne'} />
      <TextInput id={'inputOne'} placeholder={'This input is tied to the label above'} />
    </React.Fragment>
  ))
