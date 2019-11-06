import React, { Component } from 'react'
import ChartJs from 'chart.js'
import { Axis, Dataset } from './interfaces'
import * as util from './util'

interface Props {
  /** Determines if the area under the line should be filled with the background color from the dataset */
  fill?: boolean
  /** Determines if the the Line Graphs should be displayed in a stacked manner */
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
 * A customizable Line Graph component built on chart.js
 */
class LineGraph extends Component<Props, {}> {
  graph: ChartJs | null

  chart: HTMLCanvasElement | null

  constructor(props: Props) {
    super(props)
    this.graph = null // initalzied in componentDidMount
    this.chart = null // initalzied in componentDidMount
  }

  componentDidMount() {
    const {
      title,
      titleFontSize,
      titleFontColor,
      datasets,
      stacked,
      fill,
      yAxes,
      xAxes,
    } = this.props

    const type = 'line'
    let isFill = false
    if (fill) {
      isFill = fill
    }

    const config = util.getCommonChartConfigurations(
      type,
      title,
      titleFontSize,
      titleFontColor,
      datasets,
    )
    if (config && config.data && config.data.datasets) {
      for (let i = 0; i < datasets.length; i += 1) {
        config.data.datasets[i].fill = isFill
        config.data.datasets[i].backgroundColor = datasets[i].backgroundColor
        config.data.datasets[i].borderColor = datasets[i].borderColor
      }
    }

    if (config && config.options) {
      const isStacked = !!stacked
      const scales = {
        xAxes: util.getAxes(xAxes, false),
        yAxes: util.getAxes(yAxes, isStacked),
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

export { LineGraph }
