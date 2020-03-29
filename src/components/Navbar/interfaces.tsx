export interface NavItem {
  type: string
  /** Defines the class of the list. */
  className?: string
}

export interface NavIcon extends NavItem {
  /** Label color */
  color?: string
  /** A path which contains the company icon/image */
  src: string
  /** A click handle which will redirect the user to the respectable webpage/path */
  onClick?: (event: React.MouseEvent<any>) => void
  /** Alternative text attribute */
  alt?: string
}

export interface NavHeader extends NavItem {
  /** Clinic/Hospital name */
  label: string
  /** Label color */
  color?: string
  /** A click handle which will redirect the user to the respectable webpage/path */
  onClick?: (event: React.MouseEvent<any>) => void
}

export interface NavLink extends NavItem {
  /** The link name */
  label: string
  /** A click handle which will redirect the user to whenever it is clicked */
  onClick?: (event: React.MouseEvent<any>) => void
  /** Determines the href */
  href?: string
}

export interface NavLinkList extends NavLink {
  /** An array to hold a dropdown Links */
  children: Array<NavLink>
  /** Align menu to the right of the nav */
  alignRight?: boolean
}

export interface NavLinkListIcon extends NavLinkList {
  /** A path which contains the company icon/image */
  src: string
  /** Alternative text attribute */
  alt?: string
}

export interface NavSearch extends NavItem {
  /** Defines the placeholder text. */
  placeholderText?: string
  /** Defines the button text. */
  buttonText?: string
  /** Defines the button variant. */
  buttonColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
  /** Handles the on click search button event */
  onClickButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** Handles the on change search form event */
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}
