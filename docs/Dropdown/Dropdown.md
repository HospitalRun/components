# `Dropdown` (component)

Dropdowns can be used for displaying items in a vertical list.
These items can be links to other parts of the website or handle events.

## Props

| property    | propType                                                                                 | required | default | description                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
  text   |    `string`    | yes | | Dermines the dropdown toggle text variant color |
  items   |    `Item[]`        | yes | | Determines the dropdown items (See Dropdown/Item.md) |
  id   |    `string`        | no | | Determines the dropdown id |
  onClick   |    `(event   |    React.MouseEvent<any>) => void` | no | | Handle additional click events on dropdown toggle |
  variant   |    `ColorVariant` | no | 'primary' | Dropdown buttom color variant |
  alignRight   |    `boolean`        | no | false | Align dropdown items to right
  as   |    `ElementType`      | no | | Custom element type | |
  size   |    `'sm' | 'md' | 'lg' | 'sm'` | no | `sm` | Determines dropdown toggle button size
  direction   |    `'down' | 'up' | 'left' | 'right'` | no | 'down' | Custom dropdown direction |
  style   |    `string` | no | undefined | Dermines the custom style for the element
