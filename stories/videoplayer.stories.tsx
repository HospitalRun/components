import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  BigPlayButton,
  Shortcut,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
  PlaybackRateMenuButton,
  ClosedCaptionButton,
} from 'video-react'
import { VideoPlayer } from '../src'

storiesOf('VideoPlayer', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div>
      <div style={{ paddingLeft: '40px', paddingBottom: '40px' }}>
        Uses <a href="https://video-react.js.org/">video-react</a>. See the full specification of
        API and components <a href="https://video-react.js.org/components/player">here</a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '60%', minWidth: '600px' }}>{storyFn()}</div>
      </div>
    </div>
  ))
  .add('default setup', () => (
    <VideoPlayer
      src="http://media.w3.org/2010/05/bunny/movie.mp4"
      poster="http://media.w3.org/2010/05/bunny/poster.png"
    />
  ))
  .add('all components and controls', () => (
    <VideoPlayer
      src="http://media.w3.org/2010/05/bunny/movie.mp4"
      poster="https://media.w3.org/2010/05/bunny/poster.png"
    >
      <BigPlayButton position="center" />
      <Shortcut />
      <LoadingSpinner />
      <ControlBar>
        <ReplayControl seconds={5} order={2.1} />
        <ForwardControl seconds={5} order={2.2} />
        <VolumeMenuButton vertical />
        <PlaybackRateMenuButton rates={[3, 2, 1, 0.5, 0.1]} order={7} />
        <ClosedCaptionButton order={8} />
      </ControlBar>
    </VideoPlayer>
  ))
