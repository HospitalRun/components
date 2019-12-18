# `Checkbox` (component)

A caixa de seleção é usada para marcar se algo é verdadeiro ou não. Muitas vezes é usado em um grupo onde várias coisas podem ser verdadeiras ao mesmo tempo.

## Props

| property  | propType                                               | required | default | description                                                               |
| --------- | ------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------- |
| disabled  | `boolean`                                              | -        |         | Definir se a caixa de seleção deve estar desabilitada ou não. Por padrão false    |
| id        | `string`                                               | -        |         | Definir o id da caixa de seleção                                                  |
| inline    | `boolean`                                              | -        |         | Definir se a caixa de seleção deve ser incorporada ou não. Por padrão false. |
| label     | `string`                                               | yes      |         | Definir o rótulo a ser renderizado ao lado da caixa de seleção                                 |
| labelSide | `'right' | 'left'`                                     | -        |         | Definir o lado |
| name      | `string`                                               | -        |         | Definir um nome para a caixa de seleção                                                 |
| onChange  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | Definir o que acontece quando muda o estado da caixa |
