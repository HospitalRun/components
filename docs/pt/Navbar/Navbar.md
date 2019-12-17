# `Navbar` (component)

Usado para redirecionar usuários para os principais tópicos.

## Props

| property    | propType   | required | default | description                                                   |
| ----------- | ---------- | -------- | ------- | ------------------------------------------------------------- |
| bg          | `string`   | -        |         | Determines the navbar background color                        |
| brand       | `Brand`    | yes      |         | Determines the hospital/clinic name to be shown at the navbar |
| search       | `Search`  | no      |         | Determines search button/placeholder text and events |
| navLinks | `NavLink[]` | yes| |Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown.|
| variant | `'light' | 'dark'`| - | | Determines the letters color. It should be combined with the background color (bg) |
