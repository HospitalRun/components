import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Button, ButtonProps } from '../src'

export default {
  title: 'Button',
  component: Button,
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
    outlined: {
      type: 'boolean',
    },
    block: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    iconLocation: {
      control: { type: 'select', options: ['left', 'right'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'large', undefined] },
    },
    icon: {
      control: { type: 'text' },
    },
  },
  decorators: [],
} as Meta
// your templates and stories

// We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />

// main story tha's editable and has the docs for the props
export const Main = Template.bind({})
Main.args = {
  color: 'primary',
  children: 'Main',
}

// default button of the stories
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

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
  children: 'Danger',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  children: 'Warning',
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

// Outlined Button  stories
export const PrimaryOutlined = Template.bind({})
PrimaryOutlined.args = {
  color: 'primary',
  children: 'Primary',
  outlined: true,
}

export const SecondaryOutlined = Template.bind({})
SecondaryOutlined.args = {
  color: 'secondary',
  children: 'Secondary',
  outlined: true,
}

export const SuccessOutlined = Template.bind({})
SuccessOutlined.args = {
  color: 'success',
  children: 'Success',
  outlined: true,
}

export const DangerOutlined = Template.bind({})
DangerOutlined.args = {
  color: 'danger',
  children: 'Danger',
  outlined: true,
}

export const WarningOutlined = Template.bind({})
WarningOutlined.args = {
  color: 'warning',
  children: 'Warning',
  outlined: true,
}

export const InfoOutlined = Template.bind({})
InfoOutlined.args = {
  color: 'info',
  children: 'Info',
  outlined: true,
}

export const LightOutlined = Template.bind({})
LightOutlined.args = {
  color: 'light',
  children: 'Light',
  outlined: true,
}

export const DarkOutlined = Template.bind({})
DarkOutlined.args = {
  color: 'dark',
  children: 'Dark',
  outlined: true,
}

// rest of the stories
export const Block = Template.bind({})
Block.args = {
  color: 'primary',
  children: 'Block',
  block: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  children: 'Disabled',
  disabled: true,
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  color: 'primary',
  children: 'Small',
  size: 'small',
}

export const SizeDefault = Template.bind({})
SizeDefault.args = {
  color: 'primary',
  children: 'Default size',
}

export const SizeLarge = Template.bind({})
SizeLarge.args = {
  color: 'primary',
  children: 'Large Size',
  size: 'large',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  color: 'primary',
  children: 'Button with Icon on Left',
  icon: 'patient',
}

export const IconRight = Template.bind({})
IconRight.args = {
  color: 'primary',
  children: 'Button with Icon on Right',
  icon: 'patient',
  iconLocation: 'right',
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  style: { background: 'red', border: '2px solid black' },
  children: 'Buttton with custom style',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  className: 'customClass',
  children: 'Button with custom class',
}

export const IconCustomStyle = Template.bind({})
IconCustomStyle.args = {
  icon: 'patient',
  iconStyle: { color: 'red' },
  children: 'Button Icon with custom style',
}
