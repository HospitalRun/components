import { storiesOf } from '@storybook/react'

import { TextField } from '../src'

storiesOf('TextField', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', marginLeft: '50px', marginRight: '50px' }}>{storyFn()}</div>
  ))
  .add('Default text field', () => (
    <div>
      <TextField name="test_field" defaultValue="this is the default value" rows={5} />
    </div>
  ))
  .add('Disabled text field', () => (
    <div>
      <TextField name="test_field" disabled defaultValue="this is the value" rows={5} />
    </div>
  ))
  .add('Valid text field', () => (
    <div>
      <TextField name="test_field" isValid defaultValue="this is the value" rows={5} />
    </div>
  ))
  .add('Valid text field with feedback', () => (
    <div>
      <TextField
        name="test_field"
        feedback="Everything ok!"
        isValid
        defaultValue="this is the value"
        rows={5}
      />
    </div>
  ))
  .add('Invalid text field', () => (
    <div>
      <TextField name="test_field" isInvalid defaultValue="this is the value" rows={5} />
    </div>
  ))
  .add('Invalid text field with feedback', () => (
    <div>
      <TextField
        name="test_field"
        feedback="missing extra value"
        isInvalid
        defaultValue="this is the value"
        rows={5}
      />
    </div>
  ))
  .add('Small text field', () => (
    <div>
      <TextField name="test_field" size="small" defaultValue="this is the value" rows={5} />
    </div>
  ))
  .add('Large text field', () => (
    <div>
      <TextField name="test_field" size="large" defaultValue="this is the value" rows={5} />
    </div>
  ))
  .add('Custom class text field', () => (
    <div>
      <TextField
        name="test_field"
        defaultValue="this is the value"
        rows={5}
        className="customClass"
      />
    </div>
  ))
  .add('Custom style text field', () => (
    <div>
      <TextField
        name="test_field"
        defaultValue="this is the value"
        rows={5}
        style={{ background: 'red', color: 'white' }}
      />
    </div>
  ))
