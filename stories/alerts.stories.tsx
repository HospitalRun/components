import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps } from '../src'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      },
    },
    dismissible: {
      type: 'boolean',
    },
  },
  decorators: [],
} as Meta
// your templates and stories

// We create a “template” of how args map to rendering
const Template: Story<AlertProps> = (args) => <Alert {...args} />

// main story that's editable and has the docs for the props
export const Main = Template.bind({})
Main.args = {
  color: 'primary',
  title: 'This is the title of the alert',
  message: 'And this is the message of the alert',
  dismissible: true,
  closeLabel: 'Close',
}

// Rest of the stories
export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  title: 'This is the title of the alert',
  message: 'And this is the message of the alert',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  title: 'This is an alert with only the title',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
  title: 'This is an alert with only the title',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
  title: 'This alert is dismissible',
  dismissible: true,
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  title: 'This alert is dismissible with a custom label',
  dismissible: true,
  closeLabel: 'Close me',
}

export const Info = Template.bind({})
Info.args = {
  color: 'info',
  title: 'This is an info alert',
}

export const Light = Template.bind({})
Light.args = {
  color: 'light',
  title: 'This is an light alert',
}

export const Dark = Template.bind({})
Dark.args = {
  color: 'dark',
  title: 'This is an dark alert',
  message: <strong>With a strong message</strong>,
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  title: 'This is an alert with a custom class',
  className: 'customClass',
  message: 'And it has a button with a custom class',
  btnClassName: 'customClass2',
  dismissible: true,
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  title: 'This is an alert with a custom style',
  style: { height: '50%', width: '50%', border: '2px solid red' },
  message: 'And it has a button with a custom style',
  btnStyle: { background: 'red', color: 'white' },
  dismissible: true,
}
