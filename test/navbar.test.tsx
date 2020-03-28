import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import { Nav, Navbar as NavBarRB, NavDropdown, FormControl } from 'react-bootstrap'
import { Navbar, Button } from '../src'

describe('Navbar', () => {
  it('should render itself without crashing', () => {
    const onClick = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'icon',
            src:
              'https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png',
            onClick,
          },
          {
            type: 'header',
            label: 'HospitalRun',
            onClick,
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton: onClick,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar).toHaveLength(1)
  })

  it('should render default props accordingly', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Search',
            buttonText: 'Search',
            buttonColor: 'primary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    /** navbar container default attributes  */
    expect(bootstrapNavbar.find('[bg="light"]').prop('bg')).toEqual('light')
    expect(bootstrapNavbar.find('[variant="light"]').prop('variant')).toEqual('light')
    /** navbar search component default attributes  */
    expect(bootstrapNavbar.find('[placeholder="Search"]').prop('placeholder')).toEqual('Search')
    expect(NavbarWrapper.find('Button').prop('color')).toEqual('primary')
    expect(NavbarWrapper.find('Button').prop('children')).toEqual('Search')
  })

  it('should render link label as passed in the label prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Elem1',
          },
        ]}
      />,
    )
    const bootstrapNavbarLink = NavbarWrapper.find(Nav.Link)
    expect(bootstrapNavbarLink.text()).toEqual('Elem1')
  })

  it('should render link list item label as passed in the label prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link-list',
            label: 'Link',
            children: [
              {
                type: 'link',
                label: 'A1',
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

  it('should render header label as passed in label prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'Test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const header = NavbarWrapper.find(NavBarRB.Brand)
    expect(header.text().trim()).toEqual('Test')
  })
  it('should render icon src as passed in src prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'icon',
            label: 'test',
            src: 'anysource',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const iconImg = NavbarWrapper.find('img')
    expect(iconImg).toHaveLength(1)
  })

  it('should render button color as passed in buttonColor prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const button = NavbarWrapper.find(Button)
    expect(button.props().color).toEqual('secondary')
  })

  it('should render variant to light as passed in variant prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        variant="light"
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('light')
  })

  it('should render bg to light as passed in bg prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        bg="light"
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().bg).toEqual('light')
  })

  it('should handle click event on search button click', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    NavbarWrapper.find(Button).simulate('click')
    expect(onClickButton).toHaveProperty('callCount', 1)
  })

  it('should handle onchange event on search form change', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
          {
            type: 'link',
            label: 'Link',
            children: [],
          },
        ]}
      />,
    )
    NavbarWrapper.find(FormControl).simulate('change')
    expect(onChangeInput).toHaveProperty('callCount', 1)
  })

  it('should handle navItems with no type', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={
          [
            {
              label: 'test',
            },
            {
              placeholderText: 'Custom',
              buttonText: 'Text',
              buttonColor: 'secondary',
              onClickButton,
              onChangeInput,
            },
            {
              label: 'Link',
              children: [],
            },
          ] as any
        }
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar).toHaveLength(1)
  })
})
