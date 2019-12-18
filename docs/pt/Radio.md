# `Radio` (component)

## Props

| property  | propType                                               | required | default | description                                                                                     |
| --------- | ------------------------------------------------------ | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| checked   | `boolean`                                              | -        |         | | Definir se o radio esta marcado. Quando marcado, o botão de opção está selecionado.                                             |
| disabled  | `boolean`                                              | -        |         | Definir se o radio esta desativado. Quando desativado, o rádio não pode ser clicado ou alterado pelo usuário. O padrão é falso.           |
| feedback  | `string | ReactNode`                                   | -        |         | Definir a mensagem a ser exibida quando o rádio é inválido.                                                  |
| id        | `string`                                               | -        |         | Definir o id qual é necessário vincular o rótulo à entrada.                                                      |
| inline    | `boolean`                                              | -        |         | Definir se os elementos de rádio são empilhados horizontalmente em vez de verticalmente. O padrão é falso.  |
| isInvalid | `boolean`                                              | -        |         | Definir se o rádio deve ser considerado inválido ou não. O padrão é falso.           |
| label     | `string | ReactNode`                                   | -        |         | Definir o label para exibir ao lado do rádio.                                                            |
| name      | `string`                                               | -        |         | Definir o nome para agrupar rádios. Dois rádios com o mesmo nome não podem ser verificados ao mesmo tempo. |
| onChange  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | Definir o que acontece quando um radio é ativado |
| value     | `string`                                               | -        |         | Definir o valor associado ao radio                                                              |
