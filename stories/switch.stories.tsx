import React from 'react'

import { storiesOf } from '@storybook/react'

import { Switch } from '../src'

storiesOf('Switch', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Switch', () => (
    <div>
      <Switch label="Switch 1" id="switch1" />
      <Switch label="Switch 2" id="switch2" />
      <Switch label="Switch 3" id="switch3" />
      <Switch label="Custom Class" className="customClass" id="switch4" />
      <Switch label="Custom Style" style={{ color: 'red' }} id="switch5" />
    </div>
  ))
