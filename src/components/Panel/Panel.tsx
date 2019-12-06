import React from 'react'
import RPanel from 'rsuite/lib/Panel'

interface Props {
  /** The header for the Panel. It can be passed an html element as a header */
  title?: React.ReactNode
  /** Determines if the border should be disabled or not. By default false */
  border?: boolean
  /** Determines if a shadow should be disabled or not. By default false */
  shadow?: boolean
  /** Determines if the Panel can be collapsible. By default false */
  collapse?: boolean | true
  /** The value if the Panel should be expanded. By default false */
  expand?: boolean | true
  /** The children to render */
  children?: React.ReactNode
  /** Function to be run when the Panel is selected. */
  onSelect?: (event: React.SyntheticEvent<any>) => void
}

const Panel = (props: Props) => {
  const { title, border, shadow, collapse, children, expand } = props

  return (
    <RPanel
      header={title}
      bordered={border}
      shaded={shadow}
      collapsible={collapse}
      defaultExpanded={expand}
    >
      {children}
    </RPanel>
  )
}

export { Panel }
