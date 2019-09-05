import React, { Component } from 'react'
import ChartJs from 'chart.js'
import { Axis, Dataset } from './interfaces'
import * as util from './util'

interface Props {
  /** Determines if the bar graph should be displayed in a horizontal manner */
  horizontal?: boolean
  /** Determines if the bar graph should be displayed as a stacked bar graph */
  stacked?: boolean

  /** the title of the graph for the legend */
  title?: string
  /** the font size for the title */
  titleFontSize?: number
  /** the color for the title */
  titleFontColor?: string
  /** the datasets for the graph */
  datasets: Dataset[]
  /** The width of the graph */
  width?: string
  /** The height of the graph */
  height?: string

  /** the list of x axis information */
  xAxes: Axis[]
  /** the list of y axis information */
  yAxes: Axis[]
}

/**
 * A customizable Bar Graph component built on chart.js
 */
class BarGraph extends Component<Props, {}> {
  graph: ChartJs | null
  chart: HTMLCanvasElement | null

  constructor(props: Props) {
    super(props)
    this.graph = null // initalzied in componentDidMount
    this.chart = null // initalzied in componentDidMount
  }

  componentDidMount() {
    const stacked = !!this.props.stacked
    const { horizontal, xAxes, yAxes } = this.props
    const type = horizontal ? 'horizontalBar' : 'bar'
    const config = util.getCommonChartConfigurations(
      type,
      this.props.title,
      this.props.titleFontSize,
      this.props.titleFontColor,
      this.props.datasets,
    )

    if (config && config.options) {
      let scales = undefined
      if (!horizontal) {
        scales = {
          xAxes: util.getAxes(xAxes, stacked),
          yAxes: util.getAxes(yAxes, stacked),
        }
      } else {
        scales = {
          xAxes: util.getAxes(yAxes, stacked),
          yAxes: util.getAxes(xAxes, stacked),
        }
      }

      config.options.scales = scales
    }

    this.graph = new ChartJs(this.chart as HTMLCanvasElement, config)
  }

  render() {
    return <canvas ref={chart => (this.chart = chart)}></canvas>
  }
}

export { BarGraph }
