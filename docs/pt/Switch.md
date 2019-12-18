# `Switch` (component)

Os comutadores ou switches são usados para escolher se algo é verdadeiro ou falso

## Props

| property | propType                                               | required | default | description                                                          |
| -------- | ------------------------------------------------------ | -------- | ------- | -------------------------------------------------------------------- |
| disabled | `boolean`                                              | -        |         | Definir se o switch esta desativado |
| id       | `string`                                               | yes      |         | Definir o id do elemento do switch                                    |
| label    | `string`                                               | yes      |         | Definir o label ao renderizar ao lado do switch                               |
| onChange | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | Definir o que acontece ao mudar o switch de estado |
