import React, { Component } from 'react'
import { Graph, Dataset, Axis, HasAxes } from './interfaces'
import ChartJs, { ChartData, ChartDataSets, Point, CommonAxe } from 'chart.js'
import { ChartConfiguration, ChartOptions } from 'chart.js'

function getAxisType(type: string): ChartJs.ScaleType {
  if (type === 'category') {
    return 'category'
  } else if (type === 'linear') {
    return 'linear'
  } else if (type === 'time') {
    return 'time'
  }

  return 'category'
}

function getAxisLabel(item: Axis): ChartJs.ScaleTitleOptions {
  return {
    display: !!item.label,
    labelString: item.label,
  }
}

function axisMapper(item: Axis): ChartJs.CommonAxe {
  let axis: ChartJs.CommonAxe = {
    display: !!item.label,
    scaleLabel: getAxisLabel(item),
    type: getAxisType(item.type),
    ticks: {
      beginAtZero: true,
    },
  }

  if (item.type === 'time') {
    let timeScale: ChartJs.TimeScale = {
      unit: item.timeFormat,
      stepSize: item.timeStepSize,
    }

    axis.time = timeScale
  }

  return axis
}

function getAxes(axes: Axis[], stacked: boolean): CommonAxe[] {
  let chartAxes: CommonAxe[] = []
  if (axes) {
    chartAxes = axes.map(axisMapper)
  }

  chartAxes.forEach(axis => (axis.stacked = stacked))

  return chartAxes
}

function getChartDataset(dataset: Dataset): ChartDataSets {
  const label = dataset.label
  let data: Point[] = []
  let backgroundColor: string[] = []
  let borderColor: string[] = []

  dataset.data.forEach(d => {
    data.push(d.y)

    const background = d.backgroundColor ? d.backgroundColor : dataset.backgroundColor;
    const border = d.borderColor ? d.borderColor : dataset.borderColor;
    if(background !== undefined) {
      backgroundColor.push(background)
    }

    if(border !== undefined) {
      borderColor.push(border)
    }
  })

  let pointBackgroundColor = backgroundColor
  let pointBorderColor = borderColor

  return {
    label,
    data,
    backgroundColor,
    borderColor,
    pointBackgroundColor,
    pointBorderColor,
    borderWidth: 1,
  }
}

function getChartDatasets(datasets: Dataset[]): ChartDataSets[] {
  return datasets.map(getChartDataset)
}

function getLabelsFromDataset(datasets: Dataset[]) {
  let labels: string[] = []
  datasets.forEach(dataset =>
    dataset.data.forEach(d => {
      if (!labels.includes(d.x)) {
        labels.push(d.x)
      }
    }),
  )

  return labels
}

function getChartData(graph: Graph): ChartData {
  return {
    labels: getLabelsFromDataset(graph.datasets),
    datasets: getChartDatasets(graph.datasets),
  }
}

function getCommonChartOptions(graph: Graph): ChartOptions {
  const options: ChartOptions = {
    title: {
      display: !!graph.title,
      text: graph.title,
    },
  }

  if (options.title) {
    if (graph.titleFontSize) {
      options.title.fontSize = graph.titleFontSize
    }

    if (graph.titleFontColor) {
      options.title.fontColor = graph.titleFontColor
    }
  }

  return options
}

function getCommonChartConfigurations(type: string, graph: Graph): ChartConfiguration {
  return {
    type,
    data: getChartData(graph),
    options: getCommonChartOptions(graph),
  }
}

interface IBarGraph extends Graph, HasAxes {
  /** Determines if the bar graph should be displayed in a horizontal manner */
  horizontal?: boolean
  /** Determines if the bar graph should be displayed as a stacked bar graph */
  stacked?: boolean
}

class BarGraph extends Component<IBarGraph, {}> {
  graph: ChartJs | null
  chart: HTMLCanvasElement | null

  constructor(props: ILineGraph) {
    super(props);
    this.graph = null; // initalzied in componentDidMount
    this.chart = null; // initalzied in componentDidMount
  }

  componentDidMount() {
    const stacked = !!this.props.stacked;
    const { horizontal, xAxes, yAxes } = this.props
    const type = horizontal ? 'horizontalBar' : 'bar'
    const config = getCommonChartConfigurations(type, this.props)

    if (config && config.options) {
      let scales = undefined
      if (!horizontal) {
        scales = {
          xAxes: getAxes(xAxes, stacked),
          yAxes: getAxes(yAxes, stacked),
        }
      } else {
        scales = {
          xAxes: getAxes(yAxes, stacked),
          yAxes: getAxes(xAxes, stacked),
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

interface IPieGraph extends Graph {
  /** Determines if the pie graph should be displayed with a doughnut */
  doughnut?: boolean
}

class PieGraph extends Component<IPieGraph, {}> {
  graph: ChartJs | null
  chart: HTMLCanvasElement | null

  constructor(props: ILineGraph) {
    super(props);
    this.graph = null; // initalzied in componentDidMount
    this.chart = null; // initalzied in componentDidMount
  }

  componentDidMount() {
    const { doughnut } = this.props
    const type = doughnut ? 'doughnut' : 'pie'
    const config = getCommonChartConfigurations(type, this.props)
    this.graph = new ChartJs(this.chart as HTMLCanvasElement, config)
  }

  render() {
    return <canvas ref={chart => (this.chart = chart)}></canvas>
  }
}

interface ILineGraph extends Graph, HasAxes {
  /** Determines if the area under the line should be filled with the background color from the dataset */
  fill?: boolean
  /** Determines if the the Line Graphs should be displayed in a stacked manner */
  stacked?: boolean
}

class LineGraph extends Component<ILineGraph, {}> {
  graph: ChartJs | null
  chart: HTMLCanvasElement | null

  constructor(props: ILineGraph) {
    super(props);
    this.graph = null; // initalzied in componentDidMount
    this.chart = null; // initalzied in componentDidMount
  }

  componentDidMount() {
    const type = 'line'
    let fill = false

    if (this.props.fill) {
      fill = this.props.fill
    }

    const config = getCommonChartConfigurations(type, this.props)
    if (config && config.data && config.data.datasets) {
      for (let i = 0; i < this.props.datasets.length; i++) {
        config.data.datasets[i].fill = fill
        config.data.datasets[i].backgroundColor = this.props.datasets[i].backgroundColor
        config.data.datasets[i].borderColor = this.props.datasets[i].borderColor
      }
    }

    if (config && config.options) {
      const stacked = !!this.props.stacked;
      let scales = {
        xAxes: getAxes(this.props.xAxes, false),
        yAxes: getAxes(this.props.yAxes, stacked),
      }

      config.options.scales = scales
    }

    this.graph = new ChartJs(this.chart as HTMLCanvasElement, config)
  }

  render() {
    return <canvas ref={chart => (this.chart = chart)}></canvas>
  }
}

export { BarGraph, PieGraph, LineGraph }
