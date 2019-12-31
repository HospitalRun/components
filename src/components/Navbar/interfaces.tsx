export interface Brand {
  /** Clinic/Hospital name */
  label: string
  /** Label color */
  color?: string
  /** A path which contain the company icon/image */
  src?: string
  /** A click handle which will redirect the user to the respectable webpage/path */
  onClick: (event: React.MouseEvent<any>) => void
}

export interface NavLinkElement {
  /** The link name */
  label: string
  /** A click handle which will redirect the user to whenever it is clicked */
  onClick?: (event: React.MouseEvent<any>) => void
  /** Determines the href */
  href?: string
}

export interface NavLink extends NavLinkElement {
  /** An array to hold a dropdown Links */
  children: NavLinkElement[]
}

export interface Search {
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
