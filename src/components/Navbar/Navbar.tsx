import React from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from '../Button'
import { NavLink, NavBrand, NavLinkList, NavSearch } from './interfaces'

interface Props extends React.Props<any> {
  /** Determines the navbar background color */
  bg?: string
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
  /** Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown. */
  navItems: (NavBrand | NavLink | NavLinkList | NavSearch)[]
}

/**
 * Used to redirect users to the main topics.
 */
const Navbar = (props: Props) => {
  const { bg, variant, navItems } = props

  const getNavListLinks = (link: NavLink, index: number) => (
    <NavDropdown.Item href={link.href ? link.href : ''} key={index} onClick={link.onClick}>
      {link.label}
    </NavDropdown.Item>
  )
  const getNavSearch = (search: NavSearch, index: number) => (
    <Nav key={index}>
      <Form inline>
        <FormControl
          type="text"
          placeholder={search.placeholderText || 'Search'}
          className="mr-sm-2"
          onChange={search.onChangeInput}
        />
        <Button color={search.buttonColor || 'primary'} onClick={search.onClickButton}>
          {search.buttonText || 'Search'}
        </Button>
      </Form>
    </Nav>
  )
  const getNavLinkList = (list: NavLinkList, index: number) => (
    <NavDropdown title={list.label} id="collasible-nav-dropdown" key={index}>
      {list.children.map((subLink, i) => getNavListLinks(subLink, i))}
    </NavDropdown>
  )
  const getNavBrand = (brand: NavBrand, index: number) => (
    <NavbarRB.Brand onClick={brand.onClick} style={{ cursor: 'pointer' }} key={index}>
      {brand.src ? (
        <img
          alt={brand.label}
          src={brand.src}
          width="28"
          height="28"
          className="d-inline-block align-top mr-3"
        />
      ) : (
        ''
      )}
      <span style={{ color: brand.color }}>{`${brand.label}`}</span>
    </NavbarRB.Brand>
  )
  const getNavLink = (link: NavLink, index: number) => (
    <Nav.Link onClick={link.onClick} key={index}>
      {link.label}
    </Nav.Link>
  )
  return (
    <NavbarRB bg={bg} variant={variant}>
      <NavbarRB.Collapse id="responsive-navbar-nav">
        <Nav>
          {navItems.map((item, index) => {
            if ((item as NavBrand).type === 'brand') {
              return getNavBrand(item as NavBrand, index)
            }
            if ((item as NavLink).type === 'link') {
              return getNavLink(item as NavLink, index)
            }
            if ((item as NavSearch).type === 'search') {
              return getNavSearch(item as NavSearch, index)
            }
            if ((item as NavLinkList).type === 'link-list') {
              return getNavLinkList(item as NavLinkList, index)
            }
            return null
          })}
        </Nav>
      </NavbarRB.Collapse>
    </NavbarRB>
  )
}

Navbar.defaultProps = {
  bg: 'dark',
  variant: 'dark',
}
export { Navbar }
