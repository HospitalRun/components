import classNames from 'classnames'
import { CSSProperties, ReactElement } from 'react'
import * as React from 'react'

import { ColorVariant } from '../../interfaces'

import './callout.scss'

export interface CalloutProps {
  /**
   * Defines the title of the callout.
   */
  title?: string
  /**
   * Defines the color of the callout.
   */
  color?: ColorVariant
  /**
   * Defines the body of the callout.
   */
  children?: React.ReactElement
  /**
   * Styling through CSS classes
   */
  className?: string
  /**
   * Styilng through inline CSSProperties
   */
  style?: CSSProperties
}

export const Callout = ({
  title,
  color,
  children,
  className,
  style,
}: CalloutProps): ReactElement => {
  const calloutClass = classNames(className, 'callout', `callout-${color}`)
  return (
    <div className={calloutClass} style={style}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
  )
}

Callout.defaultProps = {
  color: 'primary',
}
