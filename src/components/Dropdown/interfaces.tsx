import { colorVariants } from '../../helpers/colorVariants'

export interface Item {
  /* Item text */
  text: string
  /* Item event key */
  eventKey?: string
  /* Item href */
  href?: string
  /* Item variant color */
  variant?: colorVariants
  /* Item id */
  id?: string
  /* Item key */
  key?: string
  /* Redirect using onclick or handle additional click events */
  onClick?: (event: React.MouseEvent<any>) => void
  /* Custom style */
  style?: Record<string, any>
}
