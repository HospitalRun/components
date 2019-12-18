# `BarGraph` (component)

Um componente personalizável de gráfico de barras criado com chart.js

## Props

| property       | propType    | required | default | description                                                            |
| -------------- | ----------- | -------- | ------- | ---------------------------------------------------------------------- |
| datasets       | `Dataset[]` | yes      |         | Definir o conjunto de dados do gráfico (ver chart.js)  |
| height         | `string`    | -        |         | Definir a altura do gráfico                                                |
| horizontal     | `boolean`   | -        |         | Definir se o gáfico de barras deve ser disponivel na horizontal |
| stacked        | `boolean`   | -        |         | Definir se o gáfico de barras deve ser exibido empilhado |
| title          | `string`    | -        |         | Definir o titulo                                 |
| titleFontColor | `string`    | -        |         | Definir a cor da font do titulo                                 |
| titleFontSize  | `number`    | -        |         | Definir o tamanho da font do titulo                                 |
| width          | `string`    | -        |         | Definir a largura                                 |
| xAxes          | `Axis[]`    | yes      |         | Definir a lista de informação do eixo x (ver chart.js) |
| yAxes          | `Axis[]`    | yes      |         | Definir a lista de informação do eixo y (ver chart.js) |
