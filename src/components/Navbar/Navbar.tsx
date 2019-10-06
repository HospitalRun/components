import React, { Component } from 'react'
import NavbarRB from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

interface Props {
  /** Determines the navbar background color */
  bg?: 'light' | 'dark'
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: 'light' | 'dark'
}

/**
 * Used to redirect users to the main topics.
 */
class Navbar extends Component<Props, {}> {
  render() {
    return (
      <NavbarRB
        bg={this.props.bg ? this.props.bg : 'dark'}
        variant={this.props.variant ? this.props.variant : 'dark'}
      >
        <NavbarRB.Brand href="#">{' HospitalRun'}</NavbarRB.Brand>
        <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Elem1</Nav.Link>
            <Nav.Link href="#">Elem2</Nav.Link>
            <Nav.Link href="#">Elem3</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button>Search</Button>
            </Form>
          </Nav>
        </NavbarRB.Collapse>
      </NavbarRB>
    )
  }
}

export { Navbar }
