import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { Nav, Navbar as NavBarRB, NavDropdown, FormControl } from 'react-bootstrap'
import { Navbar, Button } from '../src'

describe('Navbar', () => {
  it('Navbar renders itself without crashing', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Test',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar).toHaveLength(1)
  })

  it('should render the search button as a primary button by default', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const button = NavbarWrapper.find(Button)
    expect(button.props().color).toBe('primary')
  })

  it('Navbar defaults bg to dark when the prop is not used', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().bg).toEqual('dark')
  })

  it('Navbar defaults variant to dark when the prop is not used', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('dark')
  })

  it('Navbar links show the exactly links as when it passed on links prop and Navbar dropdown will not be shown', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Elem1',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbarLink = NavbarWrapper.find(Nav.Link)
    expect(bootstrapNavbarLink.text()).toEqual('Elem1')

    const bootstrapNavDropdown = NavbarWrapper.find(NavDropdown)
    expect(bootstrapNavDropdown).toHaveLength(0)
  })

  // rest

  it('Navbar dropdown shows the exactly same links as when it passed on links prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [
              {
                label: 'A1',
                onClick: () => {},
                href: '/somepath',
              },
            ],
          },
        ]}
      />,
    )
    const bootstrapNavDropdown = NavbarWrapper.find(NavDropdown.Item)
    expect(bootstrapNavDropdown.text()).toEqual('A1')
  })

  it('Navbar brand shows the exactly same text as when it passed on brand prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const brand = NavbarWrapper.find(NavBarRB.Brand)
    expect(brand.text().trim()).toEqual('Test')
  })

  it('Navbar img shows when it passed on src prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
          src: 'anysource',
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const img = NavbarWrapper.find('img')
    expect(img).toHaveLength(1)
  })

  it('Navbar img will not show when it not passed on src prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const img = NavbarWrapper.find('img')
    expect(img).toHaveLength(0)
  })

  it('Navbar buttonColor prop set to secondary', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          buttonColor: 'secondary',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const button = NavbarWrapper.find(Button)
    expect(button.props().color).toEqual('secondary')
  })

  it('Navbar variant set to light', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        variant="light"
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('light')
  })

  it('Navbar bg set to light', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        bg="light"
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().bg).toEqual('light')
  })

  it('Navbar search button handles on click event', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    NavbarWrapper.find(Button).simulate('click')
    expect(onClickButton).toHaveProperty('callCount', 1)
  })

  it('Navbar search form handles on change event', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        search={{
          placeholderText: 'Search',
          buttonText: 'Search',
          onClickButton,
          onChangeInput,
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
      />,
    )
    NavbarWrapper.find(FormControl).simulate('change')
    expect(onChangeInput).toHaveProperty('callCount', 1)
  })
  it('Navbar search placeholder and button text render accordingly', () => {
    const searchText = 'Search'
    const NavbarWrapper = shallow(
      <Navbar
        brand={{
          label: 'Test',
          onClick: () => {},
        }}
        navLinks={[
          {
            label: 'Link',
            onClick: () => {},
            children: [],
          },
        ]}
        search={{
          placeholderText: searchText,
          buttonText: searchText,
          onClickButton: () => {},
          onChangeInput: () => {},
        }}
      />,
    )

    expect(NavbarWrapper.find(FormControl).props().placeholder).toEqual(searchText)
  })
})
