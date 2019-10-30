# `Alert` (component)

Alerts can provide contextual feedback messages for typical user actions
with the handful of available and flexible alert messages.
## Props
| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
|closeLabel|`string`|-||Defines the label of the close button if the alert is dismissible. @default "Dismiss"|
|color|`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'`|-||Defines the color of the alert. Defaults to primary. @default "primary"|
|dismissible|`boolean`|-||Defines if the alert should be dismissible. Defaults to false.|
|message|`ReactNode`|-||Defines the message of the alert.|
|title|`string`|-||Defines the title of the alert.|