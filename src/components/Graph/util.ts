import ChartJs, {
  ChartData,
  ChartDataSets,
  Point,
  CommonAxe,
  ChartConfiguration,
  ChartOptions,
} from 'chart.js'

import { Dataset, Axis } from './interfaces'

export function getAxisType(type: string): ChartJs.ScaleType {
  if (type === 'category') {
    return 'category'
  }
  if (type === 'linear') {
    return 'linear'
  }
  if (type === 'time') {
    return 'time'
  }

  return 'category'
}

export function getAxisLabel(item: Axis): ChartJs.ScaleTitleOptions {
  return {
    display: !!item.label,
    labelString: item.label,
  }
}

export function axisMapper(item: Axis): ChartJs.CommonAxe {
  const axis: ChartJs.CommonAxe = {
    display: !!item.label,
    scaleLabel: getAxisLabel(item),
    type: getAxisType(item.type),
    ticks: {
      beginAtZero: true,
    },
  }

  if (item.type === 'time') {
    const timeScale: ChartJs.TimeScale = {
      unit: item.timeFormat,
      stepSize: item.timeStepSize,
    }

    axis.time = timeScale
  }

  return axis
}

export function getAxes(axes: Axis[], stacked: boolean): CommonAxe[] {
  let chartAxes: CommonAxe[] = []
  if (axes) {
    chartAxes = axes.map(axisMapper)
  }

  chartAxes.forEach((axis) => {
    axis.stacked = stacked
  })

  return chartAxes
}

export function getChartDataset(dataset: Dataset): ChartDataSets {
  const { label } = dataset
  const data: Point[] = []
  const backgroundColor: string[] = []
  const borderColor: string[] = []

  dataset.data.forEach((d) => {
    data.push(d.y)

    const background = d.backgroundColor ? d.backgroundColor : dataset.backgroundColor
    const border = d.borderColor ? d.borderColor : dataset.borderColor
    if (background !== undefined) {
      backgroundColor.push(background)
    }

    if (border !== undefined) {
      borderColor.push(border)
    }
  })

  const pointBackgroundColor = backgroundColor
  const pointBorderColor = borderColor

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

export function getChartDatasets(datasets: Dataset[]): ChartDataSets[] {
  return datasets.map(getChartDataset)
}

export function getLabelsFromDataset(datasets: Dataset[]) {
  const labels: string[] = []
  datasets.forEach((dataset) =>
    dataset.data.forEach((d) => {
      if (!labels.includes(d.x)) {
        labels.push(d.x)
      }
    }),
  )

  return labels
}

export function getChartData(datasets: Dataset[]): ChartData {
  return {
    labels: getLabelsFromDataset(datasets),
    datasets: getChartDatasets(datasets),
  }
}

export function getCommonChartOptions(
  title: string | undefined,
  titleFontSize: number | undefined,
  titleFontColor: string | undefined,
): ChartOptions {
  const options: ChartOptions = {
    title: {
      display: !!title,
      text: title,
    },
  }

  if (options.title) {
    if (titleFontSize) {
      options.title.fontSize = titleFontSize
    }

    if (titleFontColor) {
      options.title.fontColor = titleFontColor
    }
  }

  return options
}

export function getCommonChartConfigurations(
  type: string,
  title: string | undefined,
  titleFontSize: number | undefined,
  titleFontColor: string | undefined,
  datasets: Dataset[],
): ChartConfiguration {
  return {
    type,
    data: getChartData(datasets),
    options: getCommonChartOptions(title, titleFontSize, titleFontColor),
  }
}
