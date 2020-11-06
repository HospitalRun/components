import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Badge, BadgeProps } from '../src'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      },
    },
    children: {
      control: 'text',
    },
  },
  decorators: [],
} as Meta
// your templates and stories

// We create a “template” of how args map to rendering
const Template: Story<BadgeProps> = (args) => <Badge {...args} />

// main story that's editable and has the docs for the props
export const Main = Template.bind({})
Main.args = {
  color: 'primary',
  children: 'main example',
}

// Rest of the stories
export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
  children: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  children: 'Warning',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
  children: 'Danger',
}

export const Info = Template.bind({})
Info.args = {
  color: 'info',
  children: 'Info',
}
export const Light = Template.bind({})
Light.args = {
  color: 'light',
  children: 'Light',
}

export const Dark = Template.bind({})
Dark.args = {
  color: 'dark',
  children: 'Dark',
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  style: { padding: 10 },
  children: 'Custom Style',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  className: 'customClass',
  children: 'Custom Class',
}
