import * as React from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'

interface Props {
  /**
   * The URL of the video to embed. This is optional.
   * You may instead use the <source> element within <Player> to specify the video to embed.
   */
  src?: string
  /**
   * A URL indicating a poster frame to show until the user plays or seeks.
   * If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is shown as the poster frame.
   */
  poster?: string
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience.
   * It may have one of the following values:
   * - auto: indicates that the whole video file could be downloaded, even if the user is not expected to use it.
   * - empty string: synonym of the auto value.
   * - none: indicates that the video should not be preloaded.
   * - metadata: indicates that only video metadata (e.g. length) is fetched.
   */
  preload?: 'auto' | '' | 'none' | 'metadata'
  /**
   * In `fluid` mode, player is 100% wide all the time, the height will be calculated by the video's ratio.
   * @default true
   */
  fluid?: boolean
  /**
   * The width of <Player> element, could be an number or percent or auto.
   * (This attribute is effective only if you set `fluid` as false)
   */
  width?: number
  /**
   * The height of <Player> element, could be an number or percent or auto.
   * (This attribute is effective only if you set `fluid` as false)
   */
  height?: number
  /**
   * Indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced.
   * Its default value is false, meaning that the audio will be played when the video is played.
   * @default false
   */
  muted?: boolean
  /**
   * [iOS only] Determines whether HTML5 videos play inline or use the native full-screen controller.
   * @default false
   */
  playsInline?: boolean
  /**
   * The aspect ratio is the width of the video divided by its height.
   * Posible values: "auto", "16:9", "4:3", etc.
   * @default "auto"
   */
  aspectRatio?: string
  /**
   * If specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
   * @default false
   */
  autoPlay?: boolean
  /**
   * Seek the Video at A Specific Time On Load
   */
  startTime?: number
  children?: React.ReactNode
}

const VideoPlayer = (props: Props) => {
  const {
    src,
    poster,
    preload,
    fluid,
    width,
    height,
    muted,
    playsInline,
    aspectRatio,
    autoPlay,
    startTime,
    children,
  } = props

  return (
    <Player
      src={src}
      poster={poster}
      preload={preload}
      fluid={fluid}
      width={width}
      height={height}
      muted={muted}
      playsInline={playsInline}
      aspectRatio={aspectRatio}
      autoPlay={autoPlay}
      startTime={startTime}
    >
      {children}
    </Player>
  )
}

export { VideoPlayer }
