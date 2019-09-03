export interface Data {
  /** the x data point */
  x: any
  /** the y data point */
  y: any
  /** the background color for the piece of data. On Bar/Pie Graphs this is the bar or part of the pie. On Line Graphs this is the point */
  backgroundColor?: string
  /** the border color for the piece of data. On Bar/Pie Graphs this is the bar or part of the pie. On Line Graphs this is the point */
  borderColor?: string
}

export interface Dataset {
  /** the label of the dataset to show in the legend */
  label: string
  /** the default background color of the dataset for Bar/Pie Graphs or the fill color for Line Graphs */
  backgroundColor?: string
  /** the default border color of the dataset for Bar/Pie Graphs or the line color for Line Graphs */
  borderColor?: string
  /** the list of data for the dataset */
  data: Data[]
}

export interface HasAxes {
  /** the list of x axis information */
  xAxes: Axis[]
  /** the list of y axis information */
  yAxes: Axis[]
}

export interface Graph {
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

export interface Axis {
  /** the type of data that is appearing for that axis */
  type: 'category' | 'linear' | 'time'
  /** the label for the axis */
  label: string
  /** The format to display the time in, if the axis type is not `time, this value will be ignored */
  timeFormat?:
    | 'millisecond'
    | 'second'
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'quarter'
    | 'year'

  /** The number of ticks between each grid line */
  timeStepSize?: number
}
