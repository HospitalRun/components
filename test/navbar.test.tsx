import { shallow } from 'enzyme'
import { Nav, Navbar as NavBarRB, NavDropdown, FormControl } from 'react-bootstrap'
import * as sinon from 'sinon'

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
            type: 'search',
            placeholderText: 'Search',
            buttonText: 'Search',
            buttonColor: 'primary',
            onClickButton,
            onChangeInput,
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
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
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
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
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

  it('should render link list item with divider when dividerAbove prop is passed as true', () => {
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'link-list',
            label: 'Link',
            children: [
              {
                type: 'link',
                label: 'A1',
              },
              {
                type: 'link',
                label: 'A2',
                dividerAbove: true,
              },
            ],
          },
        ]}
      />,
    )
    const items = NavbarWrapper.find(NavDropdown.Item)
    expect(items.at(0).hasClass('border-top mt-1 pt-2')).toEqual(false)
    expect(items.at(1).hasClass('border-top mt-1 pt-2')).toEqual(true)
  })

  it('should render link list item with an icon only when the icon prop is passed', () => {
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'link-list',
            label: 'Link',
            children: [
              {
                type: 'link',
                label: 'A1',
              },
              {
                type: 'link',
                label: 'A2',
                icon: 'patient-add',
              },
            ],
          },
        ]}
      />,
    )
    const items = NavbarWrapper.find(NavDropdown.Item)
    expect(items.at(0).children()).toHaveLength(1) // link without icon prop only has one child (label)
    expect(items.at(1).children()).toHaveLength(2) // link with icon prop has two children (icon, label)
    expect(items.at(1).childAt(0).prop('icon')).toEqual('patient-add') // link with icon prop has passed the prop value to the child icon
  })

  it('should render header label as passed in label prop', () => {
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'header',
            label: 'Test',
          },
        ]}
      />,
    )
    const header = NavbarWrapper.find(NavBarRB.Brand)
    expect(header.text().trim()).toEqual('Test')
  })
  it('should render image src as passed in src prop', () => {
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'image',
            label: 'test',
            src: 'anysource',
          },
        ]}
      />,
    )
    const image = NavbarWrapper.find('img')
    expect(image).toHaveLength(1)
  })

  it('should render button color as passed in buttonColor prop', () => {
    const onClickButton = sinon.spy()
    const onChangeInput = sinon.spy()
    const NavbarWrapper = shallow(
      <Navbar
        navItems={[
          {
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
          },
        ]}
      />,
    )
    const button = NavbarWrapper.find(Button)
    expect(button.props().color).toEqual('secondary')
  })

  it('should render variant to light as passed in variant prop', () => {
    const NavbarWrapper = shallow(
      <Navbar
        variant="light"
        navItems={[
          {
            type: 'header',
            label: 'test',
          },
        ]}
      />,
    )
    const bootstrapNavbar = NavbarWrapper.find(NavBarRB)
    expect(bootstrapNavbar.props().variant).toEqual('light')
  })

  it('should render bg to light as passed in bg prop', () => {
    const NavbarWrapper = shallow(
      <Navbar
        bg="light"
        navItems={[
          {
            type: 'header',
            label: 'test',
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
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
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
            type: 'search',
            placeholderText: 'Custom',
            buttonText: 'Text',
            buttonColor: 'secondary',
            onClickButton,
            onChangeInput,
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
