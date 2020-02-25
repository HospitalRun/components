# `Button` (component)

Buttons are used to initiate an action.

## Props

| property     | propType                                                                                 | required | default | description                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| block        | `boolean`                                                                                | -        |         | Determines whether or not the button should be a block button or not. By default false                             |
| color        | `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'` | -        |     `primary`    | Defines the button variant.                                            |
| disabled     | `boolean`                                                                                | -        |    `false`     | Determines whether or not the button should be disabled or not.                             |
| icon         | `IconType`                                                                               | -        |         | The icon to display                                                                                                |
| iconLocation | `'left' | 'right'`                                                                       | -        |    `left`     | Determines whether or not the icon should display on the left side or right side of the button. |
| onClick      | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`                       | -        |         | Handles the on click event for a button                                                                            |
| outlined     | `boolean`                                                                                | -        |         | Determines if the button should be outlined and not filled. By defaut is false                                     |
| size         | `'small' | 'large'`                                                                      | -        | `undefined` | Determines whether or not the button should be a small or large button.                  |
