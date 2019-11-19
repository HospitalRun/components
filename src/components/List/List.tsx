import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

interface Props {
  /** Removes outer borders and rounded corners to render list group items edge-to-edge in a parent container. */
  layout?: 'flush'
  /** The children to render */
  children?: React.ReactNode
}

/**
 * Lists are a flexible and powerful component for displaying a
 * series of content. Modify and extend them to support just about any
 * content within.
 */
const List = (props: Props) => {
  const { layout, children } = props

  return <ListGroup variant={layout}>{children}</ListGroup>
}

export { List }
