# `Select` (component)

## Props

| property  | propType                                                           | required | default | description                                                                                                |
| --------- | ------------------------------------------------------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| disabled  | `boolean`                                                          | -        |         | Definir se o select esta desativado. O default ou padrão é 'false'.                                        |
| isInvalid | `boolean`                                                          | -        |         | Definir se o select esta invalido. O default ou padrão é 'false'.                                         |
| multiple  | `boolean`                                                          | -        |         | Definir se o usuario pode selecionar varias opções. O default ou padrão é 'false'. |
| onChange  | `(event: React.FormEvent<FormControl & FormControlProps>) => void` | -        |         | Definir o que acontece ao mudar o select |
| size      | `'small' | 'large'`                                                | -        |         | Definir se deve renderizar um TextField grande ou pequeno. O default ou padrão é undefined |
| value     | `string`                                                           | -        |         | Definir o valor selecionado                                                                                     |
