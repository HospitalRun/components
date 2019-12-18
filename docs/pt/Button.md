# `Button` (component)

Os botões são usados para iniciar uma ação.

## Props

| property     | propType                                                                                 | required | default | description                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| block        | `boolean`                                                                                | -        |         | Definir se o botão é um bloco |
| color        | `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'` | -        |         | Definir o variante de cor do botão. O default ou padrão é 'primary' |
| disabled     | `boolean`                                                                                | -        |         | Definir se o botão deve estar desativado. O default ou padrão é 'False' |
| icon         | `IconType`                                                                               | -        |         | Definir o icone a disponibilizar                                                                                                |
| iconLocation | `'left' | 'right'`                                                                       | -        |         | Definir se o icone deve estar á esquerda ou á direita do botão. O default ou padrão é 'left' (esquerda) |
| onClick      | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`                       | -        |         | Definir o acontecer apos clicar no botão |
| outlined     | `boolean`                                                                                | -        |         | Determines if the button should be outlined and not filled. By defaut is false Definir se o botão deve ter uma linha de contorno e não prenchido. O default ou padrão é 'false' |
| size         | `'small' | 'large'`                                                                      | -        |         | Definir se o botão deve ser grande ou pequeno. O default ou padrão é undefined |
