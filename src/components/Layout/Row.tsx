import React from 'react'
import BootstrapRow from 'react-bootstrap/Row'

interface Props {
  /**
   * HTML element to be used for the component
   * @default <div>
   */
  as?: React.ElementType
  /**
   * Removes the gutter spacing between `Columns` as well as any added negative margins.
   * @default false
   */
  noGutters?: boolean
  /**
   * A custom CSS class to be used for the component
   */
  className?: string
  /**
   * `ReactNode` elements to be wrapped in the component
   */
  children?: React.ReactNode
}

const Row = (props: Props) => {
  const { as, noGutters, className, children } = props

  return (
    <BootstrapRow as={as} noGutters={noGutters} className={className}>
      {children}
    </BootstrapRow>
  )
}

export { Row }
