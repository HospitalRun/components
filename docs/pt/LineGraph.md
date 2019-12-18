# `LineGraph` (component)

Um componente personalizável do gráfico de linhas criado no chart.js

## Props

| property       | propType    | required | default | description                                                                                       |
| -------------- | ----------- | -------- | ------- | ------------------------------------------------------------------------------------------------- |
| datasets       | `Dataset[]` | yes      |         | Definir o conjunto de dados do gráfico (ver chart.js)                                                                        |
| fill           | `boolean`   | -        |         | Determinar se a área abaixo da linha deve ser preenchida com a cor de fundo do conjunto de dados |
| height         | `string`    | -        |         | A altura do gráfico                                                                           |
| stacked        | `boolean`   | -        |         | Determinar se os gráficos de linha devem ser exibidos de maneira empilhada                         |
| title          | `string`    | -        |         | Definir o titulo                                 |
| titleFontColor | `string`    | -        |         | Definir a cor da font do titulo                                 |
| titleFontSize  | `number`    | -        |         | Definir o tamanho da font do titulo                                 |
| width          | `string`    | -        |         | Definir a largura                                 |
| xAxes          | `Axis[]`    | yes      |         | Definir a lista de informação do eixo x (ver chart.js) |
| yAxes          | `Axis[]`    | yes      |         | Definir a lista de informação do eixo y (ver chart.js) |
