# `search` (component property)

Usado para navegar e pesquisar recursos

## Props

| property    | propType   | required | default | description                                                   |
| ----------- | ---------- | -------- | ------- | ------------------------------------------------------------- |
| placeholderText | `string` | no | 'Search' | Definir o texto do espaço reservado para pesquisa
| buttonText | `string` | no | 'Search' | Definir o texto do botão de pesquisa
| buttonColor | `primary` | no | 'primary' | Definir a variante de cor do botão. O default ou padrão é primary|
|| `secondary`
|| `success`
|| `warning`
|| `danger`
|| `info`
|| `light`
|| `dark`
|onClickButton|`(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`|yes||Definir o que acontecer apos o clique do botão|
|onChangeInput|`(event: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>,) => void`|yes||Definir o que acontecer quando a entrada de texto mudar |
