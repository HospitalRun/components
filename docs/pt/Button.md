# `Button` (component)

Os botões são usados para iniciar uma ação.

## Props

| property     | propType                                                                                 | required | default | description                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| block        | `boolean`                                                                                | -        |         | Determines whether or not the button should be a block button or not. By default false                             |
| color        | `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'` | -        |         | Defines the button variant. By default is primary                                                                  |
| disabled     | `boolean`                                                                                | -        |         | Determines whether or not the button should be disabled or not. By default is false.                               |
| icon         | `IconType`                                                                               | -        |         | The icon to display                                                                                                |
| iconLocation | `'left' | 'right'`                                                                       | -        |         | Determines whether or not the icon should display on the left side or right side of the button. By default is left |
| onClick      | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`                       | -        |         | Handles the on click event for a button                                                                            |
| outlined     | `boolean`                                                                                | -        |         | Determines if the button should be outlined and not filled. By defaut is false                                     |
| size         | `'small' | 'large'`                                                                      | -        |         | Determines whether or not the button should be a small or large button. By default is undefined.                   |
