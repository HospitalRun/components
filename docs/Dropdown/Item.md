# `Dropdown Item` (component)

Dropdown items can be used to handle events such as redirects, popups, authentication and more.

## Props

| property    | propType                                                                                 | required | default | description                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
  text   |    `string`    | yes | | Determines the item's text |
  onClick   |    `(event   |    React.MouseEvent<any>) => void` | yes || Handles the item's click event |
  id   |    `string`        | no | | Determines the item's id |
  key   |    `string`        | no | `dropdown-item-{0++}` | Determines the item's key |
  eventKey   |    `string`        | no |`dropdown-event-{0++}` | Determines the item's event key |
  variant   |    `ButtonVariant` | no | 'primary' | Determines the item's color variant |
  style  |    `string` | no | undefined | Determines the item's custom style |

