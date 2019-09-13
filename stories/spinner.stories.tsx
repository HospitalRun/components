import React from 'react'

import { storiesOf } from '@storybook/react'

import { Spinner } from '@hospitalrun-org/components'

import './styles.css'

storiesOf('Spinner', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('BarLoader', () => (
    <div className="spinner">
      <Spinner type="BarLoader" loading={true} color={'blue'} size={[50, 15]} />
    </div>
  ))
  .add('BeatLoader', () => (
    <div className="spinner">
      <Spinner type="BeatLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
  .add('BounceLoader', () => (
    <div className="spinner">
      <Spinner type="BounceLoader" loading={true} color={'blue'} size={40} />
    </div>
  ))
  .add('ClimbingBoxLoader', () => (
    <div className="spinner">
      <Spinner type="ClimbingBoxLoader" loading={true} color={'blue'} size={15} />
    </div>
  ))
  .add('ClipLoader', () => (
    <div className="spinner">
      <Spinner type="ClipLoader" loading={true} color={'blue'} size={30} />
    </div>
  ))
  .add('DotLoader', () => (
    <div className="spinner">
      <Spinner type="DotLoader" loading={true} color={'blue'} size={30} />
    </div>
  ))
  .add('FadeLoader', () => (
    <div className="spinner">
      <Spinner type="FadeLoader" loading={true} color={'blue'} size={[5, 15]} />
    </div>
  ))
  .add('PulseLoader', () => (
    <div className="spinner">
      <Spinner type="PulseLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
  .add('RotateLoader', () => (
    <div className="spinner">
      <Spinner type="RotateLoader" loading={true} color={'blue'} size={15} />
    </div>
  ))
  .add('ScaleLoader', () => (
    <div className="spinner">
      <Spinner type="ScaleLoader" loading={true} color={'blue'} size={[10, 25]} />
    </div>
  ))
  .add('SyncLoader', () => (
    <div className="spinner">
      <Spinner type="SyncLoader" loading={true} color={'blue'} size={20} />
    </div>
  ))
