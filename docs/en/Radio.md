# `Radio` (component)

## Props

| property  | propType                                               | required | default | description                                                                                     |
| --------- | ------------------------------------------------------ | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| checked   | `boolean`                                              | -        |         | When checked is true, the Radio button is selected.                                             |
| disabled  | `boolean`                                              | -        |         | When disabled, the Radio cannot be clicked or changed by the user. Default is false.            |
| feedback  | `string | ReactNode`                                   | -        |         | Message to display when the Radio is invalid.                                                   |
| id        | `string`                                               | -        |         | Necessary to link the label with the input.                                                     |
| inline    | `boolean`                                              | -        |         | When inline, Radio elements are stacked horizontally instead of vertically. Default is false.   |
| isInvalid | `boolean`                                              | -        |         | Determines whether the Radio should be rendered as invalid or not. Default is false.            |
| label     | `string | ReactNode`                                   | -        |         | Label to display next to the Radio.                                                             |
| name      | `string`                                               | -        |         | Name to group Radios together. Two Radios with the same name can't be checked at the same time. |
| onChange  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -        |         | Listener will be called when the Radio is checked.                                              |
| value     | `string`                                               | -        |         | Value associated with the Radio.                                                                |
