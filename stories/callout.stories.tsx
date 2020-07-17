import { storiesOf } from '@storybook/react'
import React from 'react'

import { Callout } from '../src'

storiesOf('Callout', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Callout', () => (
    <div>
      <Callout color="primary" title="Primary Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="secondary" title="Secondary Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="success" title="Success Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="info" title="Info Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="warning" title="Warning Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="danger" title="Danger Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="dark" title="Dark Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout color="light" title="Light Callout">
        <div>Body of the Callout</div>
      </Callout>

      <Callout>
        <p>Body of the Callout without title</p>
      </Callout>

      <Callout title="Callout without a body" />

      <Callout className="customClass" title="Custom Class">
        <p>Callout with a custom class</p>
      </Callout>

      <Callout style={{ border: '2px solid red' }} title="Custom Style">
        <p>Callout with custom styles</p>
      </Callout>
    </div>
  ))
