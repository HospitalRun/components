export interface Brand {
  /** Clinic/Hospital name */
  label: string
  /** Determina the href */
  href?: string
  /** A path which contain the company icon/image */
  src?: string
  /** A click handle which will redirect the user to the respectivel webpage/path */
  onClick: (event: React.MouseEvent<any>) => void
}

export interface NavLinkElement {
  /** The link name */
  label: string
  /** A click handle which will redirect the user to whenever it is clicked */
  onClick: (event: React.MouseEvent<any>) => void
  /** Determina the href */
  href?: string
}

export interface NavLink extends NavLinkElement {
  /** An array to hold a dropdown Links */
  children: NavLinkElement[]
}
