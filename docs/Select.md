# `Select` (component)

## Props

| property  | propType                                                           | required | default | description                                                                                                |
| --------- | ------------------------------------------------------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| disabled  | `boolean`                                                          | -        |         | Determines whether the Select should be disabled. False by default.                                        |
| isInvalid | `boolean`                                                          | -        |         | Determines whether the Select should be invalid. False by default.                                         |
| multiple  | `boolean`                                                          | -        |         | When multiple is true, the user can select multiple options. Otherwise, one option only. False by default. |
| onChange  | `(event: React.FormEvent<FormControl & FormControlProps>) => void` | -        |         | Handles the onChange event for the Select.                                                                 |
| size      | `'small' | 'large'`                                                | -        |         | Determines whether to render a small or large TextField. By default, it is undefined.                      |
| value     | `string`                                                           | -        |         | Selected value in the                                                                                      |
