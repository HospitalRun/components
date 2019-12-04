import React from 'react'
import { shallow } from 'enzyme'
import { Player, ControlBar, ReplayControl } from 'video-react'
import { VideoPlayer } from '../src'

describe('VideoPlayer', () => {
  it('renders itself without crashing', () => {
    const playerWrapper = shallow(<VideoPlayer />)

    expect(playerWrapper.find(Player)).toHaveLength(1)
  })
  it('renders children elements when passed in', () => {
    const playerWraper = shallow(
      <VideoPlayer>
        <ControlBar>
          <ReplayControl />
        </ControlBar>
      </VideoPlayer>,
    )
    const controlBarElement = playerWraper.find(ControlBar)

    expect(controlBarElement).toHaveLength(1)
    expect(controlBarElement.find(ReplayControl)).toHaveLength(1)
  })
  it('accepts props and defaults as by Player API', () => {
    const playerWrapper = shallow(
      <VideoPlayer
        src="source URL"
        poster="poster URL"
        preload="metadata"
        fluid={false}
        width={800}
        height={300}
        autoPlay
        startTime={20}
      />,
    )
    const playerProps = playerWrapper.props()

    expect(playerProps.src).toEqual('source URL')
    expect(playerProps.poster).toEqual('poster URL')
    expect(playerProps.preload).toEqual('metadata')
    expect(playerProps.fluid).toBeFalsy()
    expect(playerProps.width).toEqual(800)
    expect(playerProps.height).toEqual(300)
    expect(playerProps.autoPlay).toBeTruthy()
    expect(playerProps.startTime).toEqual(20)
    expect(playerProps.muted).toBeFalsy()
  })
})
