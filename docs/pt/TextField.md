# `TextField` (component)

Um componente de campo de texto personalizável. É um componente construído em controles de formulário do react.

## Props

| property  | propType                                                    | required | default | description                                                                                     |
| --------- | ----------------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| disabled  | `boolean`                                                   | -        |         | Definir se o TextField deve ser desabilitado ou não. Por padrão, é falso.           |
| isInvalid | `boolean`                                                   | -        |         | Definir se o TextField deve ser renderizado como inválido ou não. Por padrão, é 'false'. |
| name      | `string | ''`                                               | -        |         | Definir o nome do campo de texto                                                                    |
| onChange  | `(event: React.KeyboardEvent<HTMLTextAreaElement>) => void` | -        |         | Definir o que acontece quando o TextField muda de estado                                                    |
| rows      | `number`                                                    | -        |         | Definir o número de linhas a serem renderizadas                                                                    |
| size      | `'small' | 'large'`                                         | -        |         | Definir se deve renderizar um TextField pequeno ou grande. Por padrão, é undefined.           |
| value     | `string | ''`                                               | -        |         | Definir o valor do campo de texto                                                                     |
