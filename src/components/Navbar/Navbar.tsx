import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import NavbarRB from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconType } from '../Icon/interfaces'
import { Typeahead } from '../Typeahead'
import {
  NavLink,
  NavIcon,
  NavImage,
  NavHeader,
  NavLinkList,
  NavLinkListIcon,
  NavSearch,
} from './interfaces'

interface Props extends React.Props<any> {
  /** Determines the navbar background color */
  bg?: string
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
  /** Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown. */
  navItems: (NavIcon | NavImage | NavHeader | NavLink | NavLinkList | NavLinkListIcon | NavSearch)[]
  /** Defines the class of the list. */
  className?: string
}

/**
 * Used to redirect users to the main topics.
 */
const Navbar = (props: Props) => {
  const { bg, variant, navItems, className } = props

  const getNavListLink = (link: NavLink, index: number) => (
    <NavDropdown.Item
      className={
        (link.dividerAbove ? 'border-top mt-1 pt-2' : '') + (link.className ? link.className : '')
      }
      href={link.href ? link.href : ''}
      key={index}
      onClick={link.onClick}
    >
      {link.icon && <Icon icon={link.icon as IconType} className="fa-fw mr-3" />}
      {link.label}
    </NavDropdown.Item>
  )

  const getSearchBox = (search: NavSearch) => {
    const placeholderText = search.placeholderText || 'Search'

    return typeof search.onSearch === 'function' ? (
      <Typeahead
        id="nav-search"
        searchAccessor="nav-search"
        placeholder={placeholderText}
        onSearch={search.onSearch}
        onChange={search.onChangeInput}
        renderMenuItemChildren={(option) => <div>{option}</div>}
      />
    ) : (
      <FormControl
        type="text"
        placeholder={placeholderText}
        className="mr-sm-2"
        onChange={search.onChangeInput}
      />
    )
  }

  const getNavSearch = (search: NavSearch, index: number) => (
    <Nav className={search.className} key={index}>
      <Form inline>
        {getSearchBox(search)}
        <Button color={search.buttonColor || 'primary'} onClick={search.onClickButton}>
          {search.buttonText || 'Search'}
        </Button>
      </Form>
    </Nav>
  )

  const getNavLinkList = (list: NavLinkList, index: number) => (
    <NavDropdown
      alignRight={list.alignRight}
      className={list.className}
      title={list.label}
      id="collasible-nav-dropdown"
      key={index}
    >
      {list.children.map((listLink, i) => getNavListLink(listLink, i))}
    </NavDropdown>
  )

  const getNavLinkListIcon = (list: NavLinkListIcon, index: number) => (
    <NavDropdown
      alignRight={list.alignRight}
      className={list.className}
      title={
        <Icon
          icon={list.name as IconType}
          size={list.size as SizeProp}
          className={list.iconClassName}
          outline={list.outline ? list.outline : false}
        />
      }
      id="collasible-nav-dropdown"
      key={index}
    >
      {list.children.map((listLink, i) => getNavListLink(listLink, i))}
    </NavDropdown>
  )

  const getNavHeader = (header: NavHeader, index: number) => (
    <NavbarRB.Brand
      className={header.className}
      onClick={header.onClick}
      style={{ cursor: 'pointer' }}
      key={index}
    >
      <span style={{ color: header.color }}>{`${header.label}`}</span>
    </NavbarRB.Brand>
  )

  const getNavLink = (link: NavLink, index: number) => (
    <Nav.Link className={link.className} onClick={link.onClick} key={index}>
      {link.label}
    </Nav.Link>
  )

  const getNavIcon = (icon: NavIcon, index: number) => (
    <Nav.Link
      className={icon.className ? icon.className.concat(' ', 'd-inline-block') : 'd-inline-block'}
      onClick={icon.onClick}
      style={{ cursor: 'pointer' }}
      key={index}
    >
      <Icon
        icon={icon.name as IconType}
        size={icon.size as SizeProp}
        className={icon.iconClassName}
        outline={icon.outline ? icon.outline : false}
      />
    </Nav.Link>
  )

  const getNavImage = (image: NavImage, index: number) => (
    <NavbarRB.Brand
      className={
        image.className
          ? image.className.concat(' ', 'd-inline-block align-top')
          : 'd-inline-block align-top'
      }
      onClick={image.onClick}
      style={{ cursor: 'pointer' }}
      key={index}
    >
      <img alt={image.alt} src={image.src} width="28" height="28" />
    </NavbarRB.Brand>
  )

  return (
    <NavbarRB bg={bg} variant={variant}>
      <NavbarRB.Collapse id="responsive-navbar-nav">
        <Nav className={className} style={{ width: '100%' }}>
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
            if ((item as NavLinkListIcon).type === 'link-list-icon') {
              return getNavLinkListIcon(item as NavLinkListIcon, index)
            }
            if ((item as NavImage).type === 'image') {
              return getNavImage(item as NavImage, index)
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
