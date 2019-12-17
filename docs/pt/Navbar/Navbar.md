# `Navbar` (component)

Usado para redirecionar usuários para os principais tópicos.

## Props

| property    | propType   | required | default | description                                                   |
| ----------- | ---------- | -------- | ------- | ------------------------------------------------------------- |
| bg          | `string`   | -        |         | Determinar a cor de fundo da barra de navegação                        |
| brand       | `Brand`    | yes      |         | Determinar o nome do hospital / clínica a ser mostrado na barra de navegação (ver Bearch.md) |
| search       | `Search`  | no      |         | Determinar texto e eventos da area de pesquisa (ver Search.md) |
| navLinks | `NavLink[]` | yes| | Determinar os nomes dos links, os métodos do evento onClick e o caminho dos link. É um array de objetos contendo estas propriedades. |
| variant | `'light' | 'dark'`| - | | Determinar a variante de cor das letras. Deve ser combinado com a cor de fundo (bg) |
