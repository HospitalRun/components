# `TextInput` (component)

Uma entrada de texto flexível como um invólucro em torno do controle de formulário React Bootstrap.

## Props

| property    | propType                             | required | default | description                                                             |
| ----------- | ------------------------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| disabled    | `boolean`                            | -        |         | Defines whether the input should be disabled or not. Defaults to false. |
| id          | `string | ''`                        | -        |         | The id value of the input                                               |
| isInvalid   | `boolean`                            | -        |         | Defines whether the input should display as invalid. Defaults to false. |
| isValid     | `boolean`                            | -        |         | Defines whether the input should display as valid. Defaults to false    |
| name        | `string | ''`                        | -        |         | The name of the input                                                   |
| onChange    | `(e: React.FormEvent<Form>) => void` | -        |         | Handles the onChange event for the input                                |
| placeholder | `string | ''`                        | -        |         |                                                                         |
| size        | `'sm' | 'lg'`                        | -        |         | Defines the size of the input. Defaults to 'lg'                         |
| type        | `'text' | 'number' | 'email'`        | -        |         | Defines the type of the input. Defaults to 'text' if not specified.     |
| value       | `string | ''`                        | -        |         | The value of the input                                                  |
