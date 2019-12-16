import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Dropdown } from '../src'

storiesOf('Dropdown', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Dropdown', () => (
    <div>
      <ButtonToolbar>
        <Dropdown
          text="Default Dropdown"
          items={[
            { text: 'Link', href: '#' },
            { text: 'Link 2', href: '#' },
            { text: 'Link 3', href: '#' },
          ]}
        />
        <Dropdown
          size="sm"
          text="Small Primary Dropdown"
          items={[
            { text: 'Link', href: '#' },
            { text: 'Link 2', href: '#' },
            { text: 'Link 3', href: '#' },
          ]}
          variant="primary"
          style={{ marginLeft: '20px', marginRight: '20px' }}
        />
        <Dropdown
          size="md"
          text="Medium Secondary Dropdown"
          variant="secondary"
          items={[
            { text: 'Link', href: '#' },
            { text: 'Link 2', href: '#' },
          ]}
        />
        <Dropdown
          size="lg"
          text="Large Success Dropdown"
          variant="success"
          items={[
            { text: 'alignRight', href: '#' },
            { text: 'true', href: '#' },
          ]}
          style={{ marginLeft: '20px' }}
        />
      </ButtonToolbar>
      <h5 className="ml-2">Utilities</h5>
      <br />
      <ButtonToolbar>
        <Dropdown
          size="sm"
          text="Custom Styles"
          items={[
            { text: 'Link', href: '#' },
            { text: 'Link 2', href: '#', style: { fontSize: '20px', color: 'green' } },
            { text: 'Link 3', href: '#', style: { fontSize: '30px' } },
          ]}
          variant="primary"
          style={{ marginLeft: '20px', marginRight: '20px' }}
        />
        <Dropdown
          text="Align Right"
          items={[
            { text: 'Property alignRight', href: '#' },
            { text: 'True', href: '#' },
          ]}
          alignRight
        />
        <Dropdown
          size="sm"
          text="Change Direction"
          direction="up"
          items={[
            { text: 'Directions', href: '#' },
            { text: 'up', href: '#' },
            { text: 'down', href: '#' },
            { text: 'right', href: '#' },
            { text: 'left', href: '#' },
          ]}
          style={{ marginLeft: '20px' }}
        />
        <Dropdown
          size="lg"
          text="Large Success Dropdown"
          variant="success"
          items={[
            { text: 'alignRight', href: '#' },
            { text: 'true', href: '#' },
          ]}
          style={{ marginLeft: '20px' }}
        />
      </ButtonToolbar>
      <br />
    </div>
  ))
