import React from 'react'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

interface Props {
  /** The children to render */
  children?: React.ReactNode
  /** Adds active class and renders wraps children in span */
  active?: boolean
  /** Adds custom event */
  onClick?: (event: React.MouseEvent) => void
}

const BreadcrumbItem = ({ children, active, onClick }: Props) => (
  <BootstrapBreadcrumbItem active={active} onClick={onClick}>
    {children}
  </BootstrapBreadcrumbItem>
)

export { BreadcrumbItem }
