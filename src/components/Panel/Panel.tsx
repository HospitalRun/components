import React, { useState } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import { Icon } from '../Icon'
import { ColorVariant } from '../../interfaces'

interface Props {
  /** Defines the color of the panel */
  color?: ColorVariant
  /** The body for the panel */
  children?: React.ReactNode
  /** The title for the Panel */
  title?: string
  /** The footer for the panel */
  footer?: string
  /** Determines if the panel can be collapsible */
  collapsible?: boolean
  /** Determines if the panel should be collapsed */
  collapsed?: boolean
}

const Panel = (props: Props) => {
  const { color, children, footer, title, collapsible, collapsed } = props
  const [open, setOpen] = useState(!collapsed)

  const collapseIcon = (
    <span style={{ float: 'right' }}>
      <Icon
        icon={open ? 'up-arrow' : 'down-arrow'}
        onClick={() => setOpen(!open)}
        aria-controls="collapse-body"
        aria-expanded={open}
      />
    </span>
  )

  return (
    <Card border={color}>
      {title && (
        <Card.Header style={{ textAlign: 'left' }}>
          {title}
          {collapsible && collapseIcon}
        </Card.Header>
      )}
      <Card.Body style={{ textAlign: 'left' }}>
        {collapsible && !title && collapseIcon}
        <Collapse in={open}>
          <div id="collapse-body">{children}</div>
        </Collapse>
      </Card.Body>
      {footer && (
        <Card.Footer style={{ textAlign: 'left', fontSize: 'smaller' }}>{footer}</Card.Footer>
      )}
    </Card>
  )
}

export { Panel }
