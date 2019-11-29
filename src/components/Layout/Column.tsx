import React from 'react'
import BoostrapColumn from 'react-bootstrap/Col'

interface Props {
  /**
   * HTML element to be used for the component
   * @default <div>
   */
  as?: React.ElementType
  /**
   * The number of columns to span on extra large devices (≥ 1200px)
   */
  xl?: true | 'auto' | number | { span?: true | 'auto' | number; offset?: number; order?: number }
  /**
   * The number of columns to span on large devices (≥ 992px)
   */
  lg?: true | 'auto' | number | { span?: true | 'auto' | number; offset?: number; order?: number }
  /**
   * The number of columns to span on medium devices (≥ 768px)
   */
  md?: true | 'auto' | number | { span?: true | 'auto' | number; offset?: number; order?: number }
  /**
   * The number of columns to span on small devices (≥ 576px)
   */
  sm?: true | 'auto' | number | { span?: true | 'auto' | number; offset?: number; order?: number }
  /**
   * The number of columns to span on extra small devices (< 576px)
   */
  xs?: true | 'auto' | number | { span?: true | 'auto' | number; offset?: number; order?: number }
  /**
   * `ReactNode` elements to be wrapped in the component
   */
  children?: React.ReactNode
}

const Column = (props: Props) => {
  const { as, lg, md, sm, xl, xs, children } = props

  return (
    <BoostrapColumn as={as} lg={lg} md={md} sm={sm} xl={xl} xs={xs}>
      {children}
    </BoostrapColumn>
  )
}

export { Column }
