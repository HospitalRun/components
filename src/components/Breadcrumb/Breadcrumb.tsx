import React from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'

interface Props {
  /** The children to render */
  children?: React.ReactNode
}
const Breadcrumb = (props: Props) => {
  const { children } = props

  return <BootstrapBreadcrumb>{children}</BootstrapBreadcrumb>
}

export { Breadcrumb }
