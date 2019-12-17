# `brand` (component property)

Usado para exibir o nome / logotipo da marca da empresa

## Props
| property    | propType   | required | default | description                                                   |
| ----------- | ---------- | -------- | ------- | ------------------------------------------------------------- |
| label| `string` | yes |
| src | `string` | no |
| color | `primary` | no | 'primary' | Definir a variante de cor. O default ou padrão é 'primary' |
|| `secondary`
|| `success`
|| `warning`
|| `danger`
|| `info`
|| `light`
|| `dark`
|onClick|`(event: React.MouseEvent<any>) => void`| yes || Definir o que acontecer apos o clique na marca da empresa |

