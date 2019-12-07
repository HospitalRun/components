import React, { ElementType } from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

interface Props {
  as?: ElementType
  label?: string
  /** Defines the attributes of the children items */
  breadcrumbItemProps?: {
    as?: ElementType
    href?: string
    active?: boolean
    target?: string
    title?: string
  }
  listProps?: {}
  /** The children to render */
  children?: React.ReactNode
}
const Breadcrumb = (props: Props) => {
  const { as, label, listProps, breadcrumbItemProps } = props

  return (
    <BootstrapBreadcrumb as={as} label={label} listProps={listProps}>
      <BreadcrumbItem {...breadcrumbItemProps} />
    </BootstrapBreadcrumb>
  )
}

export { Breadcrumb }
