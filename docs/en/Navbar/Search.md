# `search` (component property)

Used to navigate and search resources

## Props

| property    | propType   | required | default | description                                                   |
| ----------- | ---------- | -------- | ------- | ------------------------------------------------------------- |
| placeholderText | `string` | no | 'Search' | Defines search placeholder text
| buttonText | `string` | no | 'Search' | Defines search button text
| buttonColor | `primary` | no | 'primary' | Defines the button variant. By default is primary|
|| `secondary`
|| `success`
|| `warning`
|| `danger`
|| `info`
|| `light`
|| `dark`
|onClickButton|`(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`|yes||Handles the on click search button event| 
|onChangeInput|`(event: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>,) => void`|yes||Handles the on change search form event| 