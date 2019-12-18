# `TextInput` (component)

Uma entrada de texto flexível criado em torno do controle de formulário do React Bootstrap.

## Props

| property    | propType                             | required | default | description                                                             |
| ----------- | ------------------------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| disabled    | `boolean`                            | -        |         | Definir se a entrada deve ser desativada ou não. O default ou padrão é false. |
| id          | `string | ''`                        | -        |         | Definir o valor do ID da entrada                                               |
| isInvalid   | `boolean`                            | -        |         | Definir se a entrada deve ser exibida como inválida. O default oup'50adrão é false. |
| isValid     | `boolean`                            | -        |         | Definir se a entrada deve ser exibida como válida. O default ou padrão é false    |
| name        | `string | ''`                        | -        |         | Definir o attribut name da entrada                                                   |
| onChange    | `(e: React.FormEvent<Form>) => void` | -        |         | Definir o que acontece ao TextField mudar de estado                                |
| placeholder | `string | ''`                        | -        |         |                                                                         |
| size        | `'sm' | 'lg'`                        | -        |         | Definir o tamanho da entrada. O padrão é 'lg'                         |
| type        | `'text' | 'number' | 'email'`        | -        |         | Definir o tipo da entrada. O padrão é 'text' se não for especificado.     |
| value       | `string | ''`                        | -        |         | Definir o attributo value da entrada |
