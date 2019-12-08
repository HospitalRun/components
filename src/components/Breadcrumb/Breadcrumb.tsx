import React, { ElementType } from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'

interface Props {
  as?: ElementType
  label?: string
  /** Defines the attributes of the children items */
  itemProps?: {
    as?: ElementType
    href?: string
    active?: boolean
    target?: string
    title?: string
  }
  /** see https://react-bootstrap.github.io/components/breadcrumb/ */
  listProps?: {}
  /** The children to render */
  children?: React.ReactNode
}
const Breadcrumb = (props: Props) => {
  const { as, label, listProps, children } = props

  return (
    <BootstrapBreadcrumb as={as} label={label} listProps={listProps}>
      {children}
    </BootstrapBreadcrumb>
  )
}

export { Breadcrumb }
