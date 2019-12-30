import React, { useState } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import { Icon } from '../Icon'

interface Props {
  /** Defines the color of the panel */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  /** The body for the panel */
  children?: React.ReactNode // can this be empty? will it be missing if it's empty?
  /** The title for the Panel */
  title?: string
  /** The footer for the panel */
  footer?: string
  /** Determines if the panel can be collapsible. By default false */
  collapsible?: boolean | false
  /** Determines if the panel should be collapsed. By default false */
  collapsed?: boolean | false
}

const Panel = (props: Props) => {
  const { color, children, footer, title, collapsible, collapsed } = props
  const [open, setOpen] = useState(!collapsed)

  return (
    <Card border={color}>
      {title && (
        <Card.Header style={{ textAlign: 'left' }}>
          {title}
          {collapsible && (
            <span style={{ float: 'right' }}>
              <Icon
                icon={open ? 'up-arrow' : 'down-arrow'}
                onClick={() => setOpen(!open)}
                aria-controls="collapse-body"
                aria-expanded={open}
              />
            </span>
          )}
        </Card.Header>
      )}
      <Card.Body style={{ textAlign: 'left' }}>
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
