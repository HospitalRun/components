import { Story, Meta } from '@storybook/react/types-6-0'

import { Callout, CalloutProps } from '../src'

export default {
  title: 'Callout',
  component: Callout,
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
const Template: Story<CalloutProps> = (args) => <Callout {...args} />

// main story that's editable and has the docs for the props
export const Main = Template.bind({})
Main.args = {
  title: 'Main Story Title',
  color: 'primary',
  children: <div>Body of the Callout</div>,
}

// Rest of the stories
export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary Callout',
  color: 'primary',
  children: <div>Body of the Callout</div>,
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Secondary Callout',
  color: 'secondary',
  children: <div>Body of the Callout</div>,
}

export const Success = Template.bind({})
Success.args = {
  title: 'Secondary Callout',
  color: 'success',
  children: <div>Body of the Success</div>,
}

export const Info = Template.bind({})
Info.args = {
  title: 'Info Callout',
  color: 'info',
  children: <div>Body of the Callout</div>,
}
export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning Callout',
  color: 'warning',
  children: <div>Body of the Callout</div>,
}

export const Danger = Template.bind({})
Danger.args = {
  title: 'Danger Callout',
  color: 'danger',
  children: <div>Body of the Callout</div>,
}

export const Dark = Template.bind({})
Dark.args = {
  title: 'Dark Callout',
  color: 'dark',
  children: <div>Body of the Callout</div>,
}

export const Light = Template.bind({})
Light.args = {
  title: 'Light Callout',
  color: 'light',
  children: <div>Body of the Callout</div>,
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  children: <div>Body of the Callout without title</div>,
}

export const NoBody = Template.bind({})
NoBody.args = {
  title: 'Callout without a body',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  title: 'Custom Class',

  className: 'customClass',
  children: <div>Callout with a custom class</div>,
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  title: 'Custom Style',
  style: { border: '2px solid red' },
  children: <div>Callout with custom styles</div>,
}
