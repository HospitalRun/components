# `Alert` (component)

Os alertas podem fornecer mensagens de feedback contextual para ações típicas do usuário
com o punhado de mensagens de alerta disponíveis e flexíveis.

## Props

| property    | propType                                                                                 | required | default | description                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| closeLabel  | `string`                                                                                 | -        |         | Defines the label of the close button if the alert is dismissible. @default "Dismiss" |
| color       | `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'` | -        |         | Defines the color of the alert. Defaults to primary. @default "primary"               |
| dismissible | `boolean`                                                                                | -        |         | Defines if the alert should be dismissible. Defaults to false.                        |
| message     | `ReactNode`                                                                              | -        |         | Defines the message of the alert.                                                     |
| title       | `string`                                                                                 | -        |         | Defines the title of the alert.                                                       |
