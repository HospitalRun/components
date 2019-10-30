# `LineGraph` (component)

A customizable Line Graph component built on chart.js
## Props
| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
|datasets|`Dataset[]`|yes||the datasets for the graph|
|fill|`boolean`|-||Determines if the area under the line should be filled with the background color from the dataset|
|height|`string`|-||The height of the graph|
|stacked|`boolean`|-||Determines if the the Line Graphs should be displayed in a stacked manner|
|title|`string`|-||the title of the graph for the legend|
|titleFontColor|`string`|-||the color for the title|
|titleFontSize|`number`|-||the font size for the title|
|width|`string`|-||The width of the graph|
|xAxes|`Axis[]`|yes||the list of x axis information|
|yAxes|`Axis[]`|yes||the list of y axis information|