# `TextField` (component)

Um componente de campo de texto personalizável. É um componente de invólucro construído em controles de formulário de reação.

## Props

| property  | propType                                                    | required | default | description                                                                                     |
| --------- | ----------------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| disabled  | `boolean`                                                   | -        |         | Determines whether the TextField should be disabled or not. By default, it is false.            |
| isInvalid | `boolean`                                                   | -        |         | Determines whether the TextField should be rendered as invalid or not. By default, it is false. |
| name      | `string | ''`                                               | -        |         | The name of the text field                                                                      |
| onChange  | `(event: React.KeyboardEvent<HTMLTextAreaElement>) => void` | -        |         | Handles the onChange event for the TextField                                                    |
| rows      | `number`                                                    | -        |         | The number of rows to render                                                                    |
| size      | `'small' | 'large'`                                         | -        |         | Determines whether to render a small or large TextField. By default, it is undefined.           |
| value     | `string | ''`                                               | -        |         | The value of the text field                                                                     |
