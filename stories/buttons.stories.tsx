import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

storiesOf('Buttons', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Button', () => (
    <div>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
    </div>
  ))
  .add('Outlined Button', () => (
    <div>
      <Button color="primary" outlined>
        Primary
      </Button>
      <Button color="secondary" outlined>
        Secondary
      </Button>
      <Button color="success" outlined>
        Success
      </Button>
      <Button color="warning" outlined>
        Warning
      </Button>
      <Button color="danger" outlined>
        Danger
      </Button>
      <Button color="info" outlined>
        Info
      </Button>
      <Button color="light" outlined>
        Light
      </Button>
      <Button color="dark" outlined>
        Dark
      </Button>
    </div>
  ))
  .add('Block Button', () => (
    <div>
      <Button color="primary" block>
        Block
      </Button>
    </div>
  ))
  .add('Disabled Button', () => (
    <div>
      <Button color="primary" disabled>
        Disabled
      </Button>
    </div>
  ))
  .add('Size Button', () => (
    <div>
      <Button color="primary" size="small">
        Small
      </Button>
      <Button color="primary">Default</Button>
      <Button color="primary" size="large">
        Large
      </Button>
    </div>
  ))
  .add('Button with Icon', () => (
    <div>
      <Button color="primary" icon="patient">
        Button with Icon on Left
      </Button>
      <br />
      <br />
      <Button color="primary" icon="patient" iconLocation="right">
        Button with Icon on Right
      </Button>
    </div>
  ))
  .add('Button with custom class and style', () => (
    <div>
      <Button className="customClass">Button with custom class</Button>
      <br />
      <br />
      <Button style={{ background: 'red', border: '2px solid black' }}>
        Buttton with custom style
      </Button>
      <br />
      <br />
      <Button icon="patient" iconClassName="customClass2">
        Button Icon with custom class
      </Button>
      <br />
      <br />
      <Button icon="patient" iconStyle={{ color: 'red' }}>
        Button Icon with custom style
      </Button>
    </div>
  ))
