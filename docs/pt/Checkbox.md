# `Checkbox` (component)

A caixa de seleção é usada para marcar se algo é verdadeiro ou não. Muitas vezes é usado em um grupo onde
várias coisas podem ser verdadeiras ao mesmo tempo.

## Props

| property  | propType                                               | required | default | description                                                               |
| --------- | ------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------- |
| disabled  | `boolean`                                              | -        |         | Determines if the checkbox should be disabled or not. By default false    |
| id        | `string`                                               | -        |         | The id for the checkbox                                                   |
| inline    | `boolean`                                              | -        |         | Determines if the checkbox should render inline or not. By default false. |
| label     | `string`                                               | yes      |         | The label to render next to the checkbox                                  |
| labelSide | `'right' | 'left'`                                     | -        |         |                                                                           |
| name      | `string`                                               | -        |         | Gives the checkbox a name                                                 |
| onChange  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | The onChange listener                                                     |
