import React, { Component } from 'react'
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
class Spinner extends Component<Props, {}> {
  commonStyles = {
    loading: this.props.loading,
    color: this.props.color ? this.props.color : 'grey',
    margin: this.props.margin ? this.props.margin : '2px',
  }

  loaderStyles1 = {
    ...this.commonStyles,
    size: this.props.size ? (this.props.size as number) : 15,
    sizeUnit: this.props.sizeUnit ? (this.props.sizeUnit as SpinnerSizeUnit) : 'px',
  }

  loaderStyles2 = {
    ...this.commonStyles,
    width: this.props.size ? (this.props.size as [number, number])[0] : 5,
    height: this.props.size ? (this.props.size as [number, number])[1] : 15,
    widthUnit: this.props.sizeUnit
      ? (this.props.sizeUnit as [SpinnerSizeUnit, SpinnerSizeUnit])[0]
      : 'px',
    heightUnit: this.props.sizeUnit
      ? (this.props.sizeUnit as [SpinnerSizeUnit, SpinnerSizeUnit])[1]
      : 'px',
  }

  render() {
    switch (this.props.type) {
      case 'BarLoader':
        return <Spinners.BarLoader {...this.loaderStyles2} />
      case 'BeatLoader':
        return <Spinners.BeatLoader {...this.loaderStyles1} />
      case 'BounceLoader':
        return <Spinners.BounceLoader {...this.loaderStyles1} />
      case 'ClimbingBoxLoader':
        return <Spinners.ClimbingBoxLoader {...this.loaderStyles1} />
      case 'ClipLoader':
        return <Spinners.ClipLoader {...this.loaderStyles1} />
      case 'DotLoader':
        return <Spinners.DotLoader {...this.loaderStyles1} />
      case 'FadeLoader':
        return <Spinners.FadeLoader {...this.loaderStyles2} />
      case 'PulseLoader':
        return <Spinners.PulseLoader {...this.loaderStyles1} />
      case 'RotateLoader':
        return <Spinners.RotateLoader {...this.loaderStyles1} />
      case 'ScaleLoader':
        return <Spinners.ScaleLoader {...this.loaderStyles2} />
      case 'SyncLoader':
        return <Spinners.SyncLoader {...this.loaderStyles1} />
      default:
        return <div>{strings.invalidSpinner}</div>
    }
  }
}

export { Spinner }
