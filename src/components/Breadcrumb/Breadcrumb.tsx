import React, { CSSProperties } from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'

interface Props {
  /** The children to render */
  children?: React.ReactNode
  /**
   * Defines the class of the breadcrumb.
   */
  className?: string
  /**
   * Defines the style of the breadcrumb.
   */
  style?: CSSProperties
}
const Breadcrumb = (props: Props) => {
  const { children, className, style } = props

  return (
    <BootstrapBreadcrumb className={className} style={style}>
      {children}
    </BootstrapBreadcrumb>
  )
}

export { Breadcrumb }
