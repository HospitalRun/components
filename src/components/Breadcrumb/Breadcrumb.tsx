import { CSSProperties } from 'react'
import * as React from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'

export interface BreadcrumbProps {
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

const Breadcrumb = (props: BreadcrumbProps) => {
  const { children, className, style } = props

  return (
    <BootstrapBreadcrumb className={className} style={style}>
      {children}
    </BootstrapBreadcrumb>
  )
}

export { Breadcrumb }
