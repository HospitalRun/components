import React from 'react'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

interface Props {
  /** The children to render */
  children?: React.ReactNode
  /** Adds active class and renders wraps children in span */
  active?: boolean
  /** Adds custom event */
  onClick?: (event: React.MouseEvent) => void
  /** Renders anchor tag and pass href. Do not use  when active="true" */
  href?: string
}

const BreadcrumbItem = ({ children, active, onClick, href }: Props) => (
  <BootstrapBreadcrumbItem active={active} onClick={onClick} href={href}>
    {children}
  </BootstrapBreadcrumbItem>
)

export { BreadcrumbItem }
