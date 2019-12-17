# `Switch` (component)

Os comutadores são usados para escolher se algo é verdadeiro ou falso

## Props

| property | propType                                               | required | default | description                                                          |
| -------- | ------------------------------------------------------ | -------- | ------- | -------------------------------------------------------------------- |
| disabled | `boolean`                                              | -        |         | Determines if the switch should be disabled or not. By default false |
| id       | `string`                                               | yes      |         | The id for the switch element                                        |
| label    | `string`                                               | yes      |         | The label to render next to the switch                               |
| onChange | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | The onChange listener                                                |
