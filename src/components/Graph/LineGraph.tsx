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
    const type = 'line'
    let fill = false

    if (this.props.fill) {
      fill = this.props.fill
    }

    const config = util.getCommonChartConfigurations(
      type,
      this.props.title,
      this.props.titleFontSize,
      this.props.titleFontColor,
      this.props.datasets,
    )
    if (config && config.data && config.data.datasets) {
      for (let i = 0; i < this.props.datasets.length; i++) {
        config.data.datasets[i].fill = fill
        config.data.datasets[i].backgroundColor = this.props.datasets[i].backgroundColor
        config.data.datasets[i].borderColor = this.props.datasets[i].borderColor
      }
    }

    if (config && config.options) {
      const stacked = !!this.props.stacked
      let scales = {
        xAxes: util.getAxes(this.props.xAxes, false),
        yAxes: util.getAxes(this.props.yAxes, stacked),
      }

      config.options.scales = scales
    }

    this.graph = new ChartJs(this.chart as HTMLCanvasElement, config)
  }

  render() {
    return <canvas ref={chart => (this.chart = chart)}></canvas>
  }
}

export { LineGraph }
