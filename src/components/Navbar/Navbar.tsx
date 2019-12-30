import React from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Button } from '../Button'
import { NavLink, Brand, NavLinkElement } from './interfaces'
import { ColorVariant } from '../../interfaces'

interface Props extends React.Props<any> {
  /** Determines the navbar background color */
  bg?: string
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
  /** Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown. */
  navLinks: NavLink[]
  /** Determines the hospital/clinic name to be shown at the navbar */
  brand: Brand
  /** Defines the button variant. By default is primary */
  buttonColor?: ColorVariant
  /** Handles the on click search button event */
  onSearchButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** Handles the on change search form event */
  onSearchTextBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Used to redirect users to the main topics.
 */
const Navbar = (props: Props) => {
  const {
    brand,
    bg,
    variant,
    navLinks,
    buttonColor,
    onSearchTextBoxChange,
    onSearchButtonClick,
  } = props

  const getNavItems = (subLink: NavLinkElement, index: number) => (
    <NavDropdown.Item href={subLink.href ? subLink.href : ''} key={index} onClick={subLink.onClick}>
      {subLink.label}
    </NavDropdown.Item>
  )

  const getNavLinks = (link: NavLink, index: number) => {
    if (link.children.length === 0) {
      return (
        <Nav.Link onClick={link.onClick} key={index}>
          {link.label}
        </Nav.Link>
      )
    }

    return (
      <NavDropdown title={link.label} id="collasible-nav-dropdown" key={index}>
        {link.children.map((subLink, i) => getNavItems(subLink, i))}
      </NavDropdown>
    )
  }

  return (
    <NavbarRB bg={bg} variant={variant}>
      <NavbarRB.Brand href={brand.href} onClick={brand.onClick}>
        {brand.src ? (
          <img
            alt={brand.label}
            src={brand.src}
            width="28"
            height="28"
            className="d-inline-block align-top"
          />
        ) : (
          ''
        )}
        {` ${brand.label}`}
      </NavbarRB.Brand>

      <NavbarRB.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{navLinks.map((link, index) => getNavLinks(link, index))}</Nav>
        <Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={onSearchTextBoxChange}
            />
            <Button color={buttonColor} onClick={onSearchButtonClick}>
              Search
            </Button>
          </Form>
        </Nav>
      </NavbarRB.Collapse>
    </NavbarRB>
  )
}

Navbar.defaultProps = {
  buttonColor: 'primary',
  bg: 'dark',
  variant: 'dark',
}

export { Navbar }
