import { CSSProperties } from 'react'
import * as React from 'react'
import BootstrapRow from 'react-bootstrap/Row'

interface Props {
  /**
   * HTML element to be used for the component
   * @default <div>
   */
  as?: keyof JSX.IntrinsicElements // React.ElementType
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
  /**
   * Defines the style of the row.
   */
  style?: CSSProperties
}

const Row = (props: Props) => {
  const { as, noGutters, className, children, style } = props

  return (
    <BootstrapRow as={as} noGutters={noGutters} className={className} style={style}>
      {children}
    </BootstrapRow>
  )
}

export { Row }
