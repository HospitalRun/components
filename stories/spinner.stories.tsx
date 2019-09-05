import React from 'react'

import { storiesOf } from '@storybook/react'

import { Spinner } from '@hospitalrun-org/components'

storiesOf('Spinner', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('BarLoader', () => <Spinner type="BarLoader" loading={true} color={'orange'} />)
  .add('BeatLoader', () => <Spinner type="BeatLoader" loading={true} color={'orange'} />)
  .add('BounceLoader', () => <Spinner type="BounceLoader" loading={true} color={'orange'} />)
  .add('ClimbingBoxLoader', () => (
    <Spinner type="ClimbingBoxLoader" loading={true} color={'orange'} />
  ))
  .add('ClipLoader', () => <Spinner type="ClipLoader" loading={true} color={'orange'} />)
  .add('DotLoader', () => <Spinner type="DotLoader" loading={true} color={'orange'} />)
  .add('FadeLoader', () => <Spinner type="FadeLoader" loading={true} color={'orange'} />)
  .add('PulseLoader', () => <Spinner type="PulseLoader" loading={true} color={'orange'} />)
  .add('RotateLoader', () => <Spinner type="RotateLoader" loading={true} color={'orange'} />)
  .add('ScaleLoader', () => <Spinner type="ScaleLoader" loading={true} color={'orange'} />)
  .add('SyncLoader', () => <Spinner type="SyncLoader" loading={true} color={'orange'} />)
  .add('Simple', () => (
    <Spinner
      type="ScaleLoader"
      loading={true}
      color={'orange'}
      size={[5, 25]}
      sizeUnit={['px', 'px']}
    />
  ))
