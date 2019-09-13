import React from 'react'

import { storiesOf } from '@storybook/react'

import { Spinner } from '@hospitalrun-org/components'

storiesOf('Spinner', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{storyFn()}</div>
  ))
  .add('BarLoader', () => (
    <div>
      <Spinner type="BarLoader" loading={true} color={'blue'} size={[50, 15]} />
    </div>
  ))
  .add('BeatLoader', () => (
    <div>
      <Spinner type="BeatLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
  .add('BounceLoader', () => (
    <div>
      <Spinner type="BounceLoader" loading={true} color={'blue'} size={40} />
    </div>
  ))
  .add('ClimbingBoxLoader', () => (
    <div>
      <Spinner type="ClimbingBoxLoader" loading={true} color={'blue'} size={15} />
    </div>
  ))
  .add('ClipLoader', () => (
    <div>
      <Spinner type="ClipLoader" loading={true} color={'blue'} size={30} />
    </div>
  ))
  .add('DotLoader', () => (
    <div>
      <Spinner type="DotLoader" loading={true} color={'blue'} size={30} />
    </div>
  ))
  .add('FadeLoader', () => (
    <div>
      <Spinner type="FadeLoader" loading={true} color={'blue'} size={[5, 15]} />
    </div>
  ))
  .add('PulseLoader', () => (
    <div>
      <Spinner type="PulseLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
  .add('RotateLoader', () => (
    <div>
      <Spinner type="RotateLoader" loading={true} color={'blue'} size={15} />
    </div>
  ))
  .add('ScaleLoader', () => (
    <div>
      <Spinner type="ScaleLoader" loading={true} color={'blue'} size={[10, 25]} />
    </div>
  ))
  .add('SyncLoader', () => (
    <div>
      <Spinner type="SyncLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
