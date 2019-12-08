import React, { ElementType } from 'react'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

interface Props {
  /** Defines the attributes of the children items */
  itemProps?: {
    as?: ElementType
    href?: string
    active?: boolean
    target?: string
    title?: string
  }
  /** The children to render */
  children?: React.ReactNode
}
const BreadcrumbItem = ({ children, itemProps }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-multi-spaces
  <BootstrapBreadcrumbItem {...itemProps}>{children}</BootstrapBreadcrumbItem>
)

export { BreadcrumbItem }
