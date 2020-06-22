export interface NavItem {
  type: string
  /** Defines the class of the list. */
  className?: string
}

export interface NavImage extends NavItem {
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
  /** Adds a top border to the link as a list divider */
  dividerAbove?: boolean
  /** Inserts an icon to the left of the link when a valid icon name is passed */
  icon?: string
  /** A click handle which will redirect the user to whenever it is clicked */
  onClick?: (event: React.MouseEvent<any>) => void
  /** Determines the href */
  href?: string
}

export interface NavIcon extends NavLink {
  /** Label color */
  color?: string
  /** An icon name */
  name: string
  /** Size of icon */
  size?: string
  /** CSS class(es) for icon */
  iconClassName?: string
  /** Outline or filled version */
  outline?: boolean
}

export interface NavLinkList extends NavLink {
  /** An array to hold a dropdown Links */
  children: Array<NavLink>
  /** Align menu to the right of the nav */
  alignRight?: boolean
}

export interface NavLinkListIcon extends NavIcon, NavLinkList {}

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
  /** Invoked as the user types to get the search suggestions */
  onSearch?: (query: string) => Promise<any[]>
}
