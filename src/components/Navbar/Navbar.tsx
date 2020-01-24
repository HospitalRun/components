import React from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from '../Button'
import { NavLink, NavIcon, NavHeader, NavLinkList, NavSearch } from './interfaces'

interface Props extends React.Props<any> {
  /** Determines the navbar background color */
  bg?: string
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
  /** Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown. */
  navItems: (NavIcon | NavHeader | NavLink | NavLinkList | NavSearch)[]
}

/**
 * Used to redirect users to the main topics.
 */
const Navbar = (props: Props) => {
  const { bg, variant, navItems } = props

  const getNavListLink = (link: NavLink, index: number) => (
    <NavDropdown.Item
      className={link.className ? link.className.concat(' ', '') : ''}
      href={link.href ? link.href : ''}
      key={index}
      onClick={link.onClick}
    >
      {link.label}
    </NavDropdown.Item>
  )
  const getNavSearch = (search: NavSearch, index: number) => (
    <Nav className={search.className ? search.className.concat(' ', '') : ''} key={index}>
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
    <NavDropdown
      className={list.className ? list.className.concat(' ', '') : ''}
      title={list.label}
      id="collasible-nav-dropdown"
      key={index}
    >
      {list.children.map((listLink, i) => getNavListLink(listLink, i))}
    </NavDropdown>
  )
  const getNavHeader = (header: NavHeader, index: number) => (
    <NavbarRB.Brand
      className={header.className ? header.className.concat(' ', '') : ''}
      onClick={header.onClick}
      style={{ cursor: 'pointer' }}
      key={index}
    >
      <span style={{ color: header.color }}>{`${header.label}`}</span>
    </NavbarRB.Brand>
  )
  const getNavIcon = (icon: NavIcon, index: number) => (
    <NavbarRB.Brand
      className={
        icon.className
          ? icon.className.concat(' ', 'd-inline-block align-top')
          : 'd-inline-block align-top'
      }
      onClick={icon.onClick}
      style={{ cursor: 'pointer' }}
      key={index}
    >
      <img alt={icon.alt} src={icon.src} width="28" height="28" />
    </NavbarRB.Brand>
  )

  const getNavLink = (link: NavLink, index: number) => (
    <Nav.Link
      className={link.className ? link.className.concat(' ', '') : ''}
      onClick={link.onClick}
      key={index}
    >
      {link.label}
    </Nav.Link>
  )
  return (
    <NavbarRB bg={bg} variant={variant}>
      <NavbarRB.Collapse id="responsive-navbar-nav">
        <Nav>
          {navItems.map((item, index) => {
            if ((item as NavHeader).type === 'header') {
              return getNavHeader(item as NavHeader, index)
            }
            if ((item as NavIcon).type === 'icon') {
              return getNavIcon(item as NavIcon, index)
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
  bg: 'light',
  variant: 'light',
}
export { Navbar }
