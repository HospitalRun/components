import React from 'react'

interface Props {
  /** The children to render */
  children?: React.ReactNode
}

const TabsHeader = (props: Props) => {
  const { children } = props

  return (
    <ul className="nav nav-tabs" role="tablist">
      {children}
    </ul>
  )
}

export { TabsHeader }
