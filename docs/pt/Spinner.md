# `Spinner` (component)

Um componente giratório personalizável. É um componente de invólucro construído com reatores giratórios.

## Props

| property | propType                                               | required | default | description                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | `string`                                               | -        |         | Escolher a cor do spinner                                                                                                                                                                                                    |
| loading  | `boolean`                                              | yes      |         | Definir quando o spinner esta na tela. Este boolean deve estar vinculado á algo dinamico.                                                                                        |
| margin   | `string`                                               | -        |         | Definir a margem do spinner                                                                                                                                                                                     |
| size     | `number | [number, number]`                            | -        |         | Definir o tamanho do spinner. Se você optar por declará-lo, nos seguintes spinners, deverá haver um array de dois números (para largura e altura): BarLoader, FadeLoader, ScaleLoader                                         |
| sizeUnit | `SpinnerSizeUnit | [SpinnerSizeUnit, SpinnerSizeUnit]` | -        |         | Definir a unidade de medida para o parâmetro de tamanho anterior. Se você optar por declará-lo, nos seguintes spinners, deverá haver um array de duas strings (respectivamente para largura e altura): BarLoader, FadeLoader, ScaleLoader |
| type     | `SpinnerType`                                          | yes      |         | Definir o tipo de spinner para renderizar                                                                                                                                                                                                |
