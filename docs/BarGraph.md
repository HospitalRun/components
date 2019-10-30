# `BarGraph` (component)

A customizable Bar Graph component built on chart.js
## Props
| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
|datasets|`Dataset[]`|yes||the datasets for the graph|
|height|`string`|-||The height of the graph|
|horizontal|`boolean`|-||Determines if the bar graph should be displayed in a horizontal manner|
|stacked|`boolean`|-||Determines if the bar graph should be displayed as a stacked bar graph|
|title|`string`|-||the title of the graph for the legend|
|titleFontColor|`string`|-||the color for the title|
|titleFontSize|`number`|-||the font size for the title|
|width|`string`|-||The width of the graph|
|xAxes|`Axis[]`|yes||the list of x axis information|
|yAxes|`Axis[]`|yes||the list of y axis information|