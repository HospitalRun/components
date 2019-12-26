import React, { CSSProperties } from 'react'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

interface Props {
  /** The children to render */
  children?: React.ReactNode
  /** Adds active class and renders wraps children in span */
  active?: boolean
  /** Adds custom event */
  onClick?: (event: React.MouseEvent) => void
  /**
   * Defines the class of the Breadcrumb Item.
   */
  className?: string
  /**
   * Defines the style of the Breadcrumb Item.
   */
  style?: CSSProperties
}

const BreadcrumbItem = ({ children, active, onClick, className, style }: Props) => (
  <BootstrapBreadcrumbItem active={active} onClick={onClick} className={className} style={style}>
    {children}
  </BootstrapBreadcrumbItem>
)

export { BreadcrumbItem }
