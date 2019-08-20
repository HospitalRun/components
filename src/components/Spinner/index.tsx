import React, { Component } from 'react'
import * as Spinners from 'react-spinners'
import { SpinnerType, SpinnerSizeUnit } from './interfaces'
import * as strings from './strings'

interface Props {
  type: SpinnerType
  loading: boolean
  color?: string
  margin?: string
  size?: number | [number, number]
  sizeUnit?: SpinnerSizeUnit | [SpinnerSizeUnit, SpinnerSizeUnit]
}

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
