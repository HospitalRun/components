import React from 'react'
import BootstrapContainer from 'react-bootstrap/Container'

interface Props {
  /**
   * A custom element to be used for the component
   * @default <div>
   */
  as?: React.ElementType
  /**
   * Allow the Container to fill all of its available horizontal space
   * @default false
   */
  fluid?: boolean
  /**
   * A custom class to be used for the component
   */
  className?: string
  /**
   * `ReactNode` elements to be wrapped in the component
   */
  children?: React.ReactNode
}

const Container = (props: Props) => {
  const { as, fluid, className, children } = props

  return (
    <BootstrapContainer as={as} fluid={fluid} className={className}>
      {children}
    </BootstrapContainer>
  )
}

export { Container }
