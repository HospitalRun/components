/* eslint react/jsx-props-no-spreading: "off" */
import React from 'react'
import * as Spinners from 'react-spinners'
import { SpinnerType, SpinnerSizeUnit } from './interfaces'
import * as strings from './strings'

interface Props {
  /** The type of spinner to render */
  type: SpinnerType
  /** This prop tells Spinner when to show itself. It should be linked to something dynamic, like a property in the parent component's state. */
  loading: boolean
  /** Choose the spinner color. */
  color?: string
  /** Adds a margin to the Spinner component. */
  margin?: string
  /**
   * Declares the size of the spinner. If you choose to declare it, in the following spinners it must be an array of two numbers (for width & height):
   * BarLoader, FadeLoader, ScaleLoader
   */
  size?: number | [number, number]
  /**
   * Declares the unit of measure for the previous size parameter. If you choose to declare it, in the following spinners it must be an array of two strings (respectively for width & height):
   * BarLoader, FadeLoader, ScaleLoader
   */
  sizeUnit?: SpinnerSizeUnit | [SpinnerSizeUnit, SpinnerSizeUnit]
}

/**
 * A customizable spinner component. It's a wrapper component built upon react-spinners.
 */
const Spinner = (props: Props) => {
  const { loading, color, margin, size, sizeUnit, type } = props

  const commonStyles = {
    loading,
    color: color || 'grey',
    margin: margin || '2px',
  }

  const loaderStyles1 = {
    ...commonStyles,
    size: size ? (size as number) : 15,
    sizeUnit: sizeUnit ? (sizeUnit as SpinnerSizeUnit) : 'px',
  }

  const loaderStyles2 = {
    ...commonStyles,
    width: size ? (size as [number, number])[0] : 5,
    height: size ? (size as [number, number])[1] : 15,
    widthUnit: sizeUnit ? (sizeUnit as [SpinnerSizeUnit, SpinnerSizeUnit])[0] : 'px',
    heightUnit: sizeUnit ? (sizeUnit as [SpinnerSizeUnit, SpinnerSizeUnit])[1] : 'px',
  }

  switch (type) {
    case 'BarLoader':
      return <Spinners.BarLoader {...loaderStyles2} />
    case 'BeatLoader':
      return <Spinners.BeatLoader {...loaderStyles1} />
    case 'BounceLoader':
      return <Spinners.BounceLoader {...loaderStyles1} />
    case 'ClimbingBoxLoader':
      return <Spinners.ClimbingBoxLoader {...loaderStyles1} />
    case 'ClipLoader':
      return <Spinners.ClipLoader {...loaderStyles1} />
    case 'DotLoader':
      return <Spinners.DotLoader {...loaderStyles1} />
    case 'FadeLoader':
      return <Spinners.FadeLoader {...loaderStyles2} />
    case 'PulseLoader':
      return <Spinners.PulseLoader {...loaderStyles1} />
    case 'RotateLoader':
      return <Spinners.RotateLoader {...loaderStyles1} />
    case 'ScaleLoader':
      return <Spinners.ScaleLoader {...loaderStyles2} />
    case 'SyncLoader':
      return <Spinners.SyncLoader {...loaderStyles1} />
    default:
      return <div>{strings.invalidSpinner}</div>
  }
}

export { Spinner }
