import { storiesOf } from '@storybook/react'

import { Label, TextInput } from '../src'

storiesOf('Label', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div
      style={{
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        marginLeft: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('Label', () => (
    <>
      <Label text="These are labels!" />
      <Label text="Username" />
      <Label text="Password" />
      <Label text="You can type whatever you want in a label!" />
      <Label text="Label with title" title="Custom title message" />
      <Label isRequired text="Required input label" />
      <Label
        isRequired
        title="Custom required input title"
        text="Required input label with custom title"
      />
      <Label text="This label is tied to the input below" htmlFor="inputOne" />
      <TextInput id="inputOne" placeholder="This input is tied to the label above" />
      <br />
      <Label text="This label has a custom class" className="customClass" />
      <Label text="This label has a custom style" style={{ color: 'blue' }} />
    </>
  ))
