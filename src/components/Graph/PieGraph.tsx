import React, { Component } from 'react'
import ChartJs from 'chart.js'
import { Dataset } from './interfaces'
import * as util from './util'

interface Props {
  /** Determines if the pie graph should be displayed with a doughnut */
  doughnut?: boolean

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
}

/**
 * A customizable Pie Graph component built on chart.js
 */
class PieGraph extends Component<Props, {}> {
  graph: ChartJs | null

  chart: HTMLCanvasElement | null

  constructor(props: Props) {
    super(props)
    this.graph = null // initalzied in componentDidMount
    this.chart = null // initalzied in componentDidMount
  }

  componentDidMount() {
    const { doughnut, title, titleFontSize, titleFontColor, datasets } = this.props
    const type = doughnut ? 'doughnut' : 'pie'
    const config = util.getCommonChartConfigurations(
      type,
      title,
      titleFontSize,
      titleFontColor,
      datasets,
    )
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

export { PieGraph }
