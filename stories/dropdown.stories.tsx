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
            { text: 'Link', onClick: () => {} },
            { text: 'Link 2', onClick: () => {} },
            { text: 'Link 3', onClick: () => {} },
          ]}
        />
        <Dropdown
          size="sm"
          text="Small Primary Dropdown"
          items={[
            { text: 'Link', onClick: () => {} },
            { text: 'Link 2', onClick: () => {} },
            { text: 'Link 3', onClick: () => {} },
          ]}
          variant="primary"
          style={{ marginLeft: '20px', marginRight: '20px' }}
        />
        <Dropdown
          size="md"
          text="Medium Secondary Dropdown"
          variant="secondary"
          items={[
            { text: 'Link', onClick: () => {} },
            { text: 'Link 2', onClick: () => {} },
          ]}
        />
        <Dropdown
          size="lg"
          text="Large Success Dropdown"
          variant="success"
          items={[
            { text: 'alignRight', onClick: () => {} },
            { text: 'true', onClick: () => {} },
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
            { text: 'Link', onClick: () => {} },
            { text: 'Link 2', onClick: () => {}, style: { fontSize: '20px', color: 'green' } },
            { text: 'Link 3', onClick: () => {}, style: { fontSize: '30px' } },
          ]}
          variant="primary"
          style={{ marginLeft: '20px', marginRight: '20px' }}
        />
        <Dropdown
          text="Align Right"
          items={[
            { text: 'Property alignRight', onClick: () => {} },
            { text: 'True', onClick: () => {} },
          ]}
          alignRight
        />
        <Dropdown
          size="sm"
          text="Change Direction"
          direction="up"
          items={[
            { text: 'Directions', onClick: () => {} },
            { text: 'up', onClick: () => {} },
            { text: 'down', onClick: () => {} },
            { text: 'right', onClick: () => {} },
            { text: 'left', onClick: () => {} },
          ]}
          style={{ marginLeft: '20px' }}
        />
        <Dropdown
          size="lg"
          text="Large Success Dropdown"
          variant="success"
          items={[
            { text: 'alignRight', onClick: () => {} },
            { text: 'true', onClick: () => {} },
          ]}
          style={{ marginLeft: '20px' }}
        />
      </ButtonToolbar>
      <br />
    </div>
  ))
