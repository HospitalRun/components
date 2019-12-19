# `Dropdown Item` (component)

Dropdown items can be used to handle events such as redirects, popups, authentication and more.

## Props

| property    | propType                                                                                 | required | default | description                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
  text   |    `string`    | yes | | Determines the item's text |
  id   |    `string`        | yes | | Determines the item's id |
  key   |    `string`        | no | `dropdown-item-{0++}` | Determines the item's key |
  eventKey   |    `string`        | no |`dropdown-event-{0++}` | Determines the item's event key |
  onClick   |    `(event   |    React.MouseEvent<any>) => void` | yes | `void` | Handles the item's click event |
  variant   |    `ColorVariants` | no | 'primary' | Determines the item's color variant |
  style  |    `string` | no | undefined | Determines the item's custom style |

