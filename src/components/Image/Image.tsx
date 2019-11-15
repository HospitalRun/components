import React from 'react'
import BootstrapImage from 'react-bootstrap/Image'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Determines if the image should should shrink to fit the parent's width. By default false. */
  fluid?: boolean
  /** Determines if the image should have rounded edges. By default false. */
  rounded?: boolean
  /** Determines if the image should be circular. By default false. */
  circle?: boolean
  /** The source of the image to display. */
  src: string
}

/**
 * Image used to display imagery in various shapes
 */
const Image = (props: Props) => {
  const { circle, fluid, rounded, src, ...imgAttributes } = props
  return (
    <BootstrapImage
      fluid={fluid}
      rounded={rounded}
      roundedCircle={circle}
      src={src}
      {...imgAttributes}
    />
  )
}

export { Image }
