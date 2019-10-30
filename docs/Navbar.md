# `Navbar` (component)

Used to redirect users to the main topics.
## Props
| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
|bg|`string`|-||Determines the navbar background color|
|brand|`Brand`|yes||Determines the hospital/clinic name to be shown at the navbar|
|buttonColor|`'primary'
| 'secondary'
| 'success'
| 'warning'
| 'danger'
| 'info'
| 'light'
| 'dark'`|-||Defines the button variant. By default is primary|
|navLinks|`NavLink[]`|yes||Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown.|
|onSeachButtonClick|`(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`|yes||Handles the on click search button event|
|onSearchTextBoxChange|`(
  event: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>,
) => void`|yes||Handles the on change search form event|
|variant|`'light' | 'dark'`|-||Determines the letters color. It should be combined with the background color (bg)|