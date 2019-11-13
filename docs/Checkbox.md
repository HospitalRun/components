# `Checkbox` (component)

Checkbox is used to mark if something is true or not. Often times is used in a group where
multiple things can be true at one time.

## Props

| property  | propType                                               | required | default | description                                                               |
| --------- | ------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------- |
| disabled  | `boolean`                                              | -        |         | Determines if the checkbox should be disabled or not. By default false    |
| id        | `string`                                               | -        |         | The id for the checkbox                                                   |
| inline    | `boolean`                                              | -        |         | Determines if the checkbox should render inline or not. By default false. |
| label     | `string`                                               | yes      |         | The label to render next to the checkbox                                  |
| labelSide | `'right' | 'left'`                                     | -        |         |                                                                           |
| name      | `string`                                               | -        |         | Gives the checkbox a name                                                 |
| onChange  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | The onChange listener                                                     |
