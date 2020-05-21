import { storiesOf } from '@storybook/react'
import React from 'react'

import { Image } from '../src'

storiesOf('Image', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{storyFn()}</div>
  ))
  .add('Image', () => (
    <div>
      <Image src="https://placehold.it/150x120/" />
    </div>
  ))
  .add('Circular Image', () => (
    <div>
      <Image src="https://placehold.it/150x120/" circle />
    </div>
  ))
  .add('Rounded Image', () => (
    <div>
      <Image src="https://placehold.it/150x120/" rounded />
    </div>
  ))
  .add('Fluid Image', () => (
    <div>
      <Image src="https://placehold.it/1280x120/" fluid />
    </div>
  ))
  .add('Image with standard img attributes', () => (
    <div>
      <Image src="https://placehold.it/1280x120/" alt="Test alt" aria-label="Example" />
    </div>
  ))
