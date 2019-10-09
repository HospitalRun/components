import React, { Component } from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

import { Button } from '../../../src'

interface Props extends React.Props<any> {
  /** Determines the navbar background color */
  bg?: 'light' | 'dark'
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
  /** Determines the links names and their path. The array is 2 dimensions.
   * The first array (Arr[i]) must contain the links data individually by link.
   * The first element of the second arry (Arr[i][0]) must be the link name.
   * The second element of the second arry (Arr[i][1]) must be the link path.
   * The third and all the even numbers of the second arry (Arr[i][2], Arr[i][4], ...) must be the sub-link name, if there is any.
   * The forth and all the odds numbers of the second arry (Arr[i][3], Arr[i][5], ...) must be the sub-link path, if there is any. */
  links: string[][]
  /** Determines the hospital/clinic name to be shown at the navbar */
  brand: string
  /** Determines the hospital/clinic icon/image/text which will be shown at the navbar */
  src?: string
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
  createDropdwonElem = (linkEle: any, index: any) => {
    const subLink = []
    for (let i = 2; i < linkEle.length - 1; i += 2) {
      subLink.push(
        <NavDropdown.Item href={linkEle[i + 1]} key={index * index * i}>
          {linkEle[i]}
        </NavDropdown.Item>,
      )
    }
    return subLink
  }

  render() {
    const buttonColor = this.props.buttonColor ? this.props.buttonColor : 'primary'
    let img

    if (this.props.src) {
      img = <img src={this.props.src} width="28" height="28" className="d-inline-block align-top" />
    } else {
      img = ''
    }

    return (
      <NavbarRB
        bg={this.props.bg ? this.props.bg : 'dark'}
        variant={this.props.variant ? this.props.variant : 'dark'}
      >
        <NavbarRB.Brand href="/">
          {img}
          {` ${this.props.brand}`}
        </NavbarRB.Brand>
        <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {this.props.links.map((link, index) => {
              return link.length == 2 ? (
                <Nav.Link href={link[1]} key={index}>
                  {link[0]}
                </Nav.Link>
              ) : (
                <NavDropdown title={link[0]} id="collasible-nav-dropdown" key={index}>
                  {this.createDropdwonElem(link, index)}
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
