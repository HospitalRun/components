import React, { Component } from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

import { Button } from '../../../src'
import { NavLink, Brand } from './interfaces'

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
  onSeachButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** Handles the on change search form event */
  onSearchTextBoxChange: (
    event: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>,
  ) => void
}

/**
 * Used to redirect users to the main topics.
 */
class Navbar extends Component<Props, any> {
  render() {
    const buttonColor = this.props.buttonColor ? this.props.buttonColor : 'primary'
    let img

    if (this.props.brand.src) {
      img = (
        <img
          src={this.props.brand.src}
          width="28"
          height="28"
          className="d-inline-block align-top"
        />
      )
    } else {
      img = ''
    }

    return (
      <NavbarRB
        bg={this.props.bg ? this.props.bg : 'dark'}
        variant={this.props.variant ? this.props.variant : 'dark'}
      >
        {/* <NavbarRB.Brand href={this.props.brand.href}>                       if this method is used, onClick: (event: React.MouseEvent<HTMLElement>) => void on the interface
          <div onClick={this.props.brand.onClick.bind(this)} >
          {img}
          {` ${this.props.brand.label}`}
          </div>
        </NavbarRB.Brand> */}

        <NavbarRB.Brand href={this.props.brand.href} onClick={this.props.brand.onClick.bind(this)}>
          {img}
          {` ${this.props.brand.label}`}
        </NavbarRB.Brand>

        <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {this.props.navLinks.map((link, index) => {
              return link.children.length == 0 ? (
                <Nav.Link onClick={link.onClick} key={index}>
                  {link.label}
                </Nav.Link>
              ) : (
                <NavDropdown title={link.label} id="collasible-nav-dropdown" key={index}>
                  {link.children.map((subLink, i) => {
                    return (
                      <NavDropdown.Item
                        href={subLink.href ? subLink.href : ''}
                        key={i}
                        onClick={subLink.onClick}
                      >
                        {subLink.label}
                      </NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              )
            })}
          </Nav>
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={this.props.onSearchTextBoxChange}
              />
              <Button color={buttonColor} onClick={this.props.onSeachButtonClick}>
                Search
              </Button>
            </Form>
          </Nav>
        </NavbarRB.Collapse>
      </NavbarRB>
    )
  }
}

export { Navbar }
