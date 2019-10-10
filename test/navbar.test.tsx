import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { Navbar, Button } from '../dist'
import { Nav, Navbar as NavBarRB, NavDropdown, FormControl } from 'react-bootstrap'

describe('Navbar', () => {
  it('Navbar renders itself without crashing', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar).toHaveLength(1)
  })

  it('Navbar defaults bg to dark when the prop is not used', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().bg).toEqual('dark')
  })

  it('Navbar defaults variant to dark when the prop is not used', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('dark')
  })

  it('Navbar links show the exactly links as when it passed on links prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path']]}
      />,
    )
    const bootstrapNavbarLink = NavbarWrapper.find(Nav.Link)
    expect(bootstrapNavbarLink.text()).toEqual('Elem1')
  })

  it('Navbar dropdown shows the exactly same links as when it passed on links prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path', 'A1', '/patha1']]}
      />,
    )
    const bootstrapNavDropdown = NavbarWrapper.find(NavDropdown.Item)
    expect(bootstrapNavDropdown.text()).toEqual('A1')
  })

  it('Navbar dropdown will not show when it not passed on links prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path']]}
      />,
    )
    const bootstrapNavDropdown = NavbarWrapper.find(NavDropdown)
    expect(bootstrapNavDropdown).toHaveLength(0)
  })

  it('Navbar brand shows the exactly same text as when it passed on brand prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const brand = NavbarWrapper.find(NavBarRB.Brand)
    expect(brand.text().trim()).toEqual('Test')
  })

  it('Navbar img shows when it passed on src prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        src="anysource"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const img = NavbarWrapper.find('img')
    expect(img).toHaveLength(1)
  })

  it('Navbar img will not show when it not passed on src prop', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const img = NavbarWrapper.find('img')
    expect(img).toHaveLength(0)
  })

  it('Navbar buttonColor prop set to secondary', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        buttonColor="secondary"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const button = NavbarWrapper.find(Button)
    expect(button.props().color).toEqual('secondary')
  })

  it('Navbar variant set to light', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        variant="light"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('light')
  })

  it('Navbar bg set to light', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        bg="light"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().bg).toEqual('light')
  })

  it('Navbar search button handles on click event', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    NavbarWrapper.find(Button).simulate('click')
    expect(onButtonClick).toHaveProperty('callCount', 1)
  })

  it('Navbar search form handles on change event', () => {
    const onButtonClick = sinon.spy()
    const onTextBoxChange = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand="Test"
        onSeachButtonClick={onButtonClick}
        onSearchTextBoxChange={onTextBoxChange}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />,
    )
    NavbarWrapper.find(FormControl).simulate('change')
    expect(onTextBoxChange).toHaveProperty('callCount', 1)
  })
})
