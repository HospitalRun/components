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
    const {
      stacked,
      title,
      titleFontSize,
      titleFontColor,
      datasets,
      horizontal,
      xAxes,
      yAxes,
    } = this.props

    const isStacked = !!stacked
    const type = horizontal ? 'horizontalBar' : 'bar'
    const config = util.getCommonChartConfigurations(
      type,
      title,
      titleFontSize,
      titleFontColor,
      datasets,
    )

    if (config && config.options) {
      let scales
      if (!horizontal) {
        scales = {
          xAxes: util.getAxes(xAxes, isStacked),
          yAxes: util.getAxes(yAxes, isStacked),
        }
      } else {
        scales = {
          xAxes: util.getAxes(yAxes, isStacked),
          yAxes: util.getAxes(xAxes, isStacked),
        }
      }

      config.options.scales = scales
    }

    this.graph = new ChartJs(this.chart as HTMLCanvasElement, config)
  }

  render() {
    return (
      <canvas
        ref={(chart) => {
          this.chart = chart
          return this.chart
        }}
      />
    )
  }
}

export { BarGraph }
