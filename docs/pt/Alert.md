# `Alert` (component)

As alertas fornecem mensagens contextual para ações típicas do usuário
com o punhado de mensagens de alerta disponíveis e flexíveis.

## Props

| property    | propType                                                                                 | required | default | description                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| closeLabel  | `string`                                                                                 | -        |         | Definir o rótulo do botão fechar se o alerta for descartavel. O default ou padrao é "Dismiss" |
| color       | `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'` | -        |         | Definir a cor do alerta. O default ou padrão é primary.              |
| dismissible | `boolean`                                                                                | -        |         | Definir se o alerta deve ser descartado. O default ou padrão é false.                        |
| message     | `ReactNode`                                                                              | -        |         | Definir a mensagem do alerta.                                                     |
| title       | `string`                                                                                 | -        |         | Definir o título do alerta.                                                       |
