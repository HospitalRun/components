import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '../src'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  decorators: [],
} as Meta
// your templates and stories

/**
 *  it displays a simple breadcrum component
 *  with two items and the first one is active
 */
const MultiItem: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active>Item 1</BreadcrumbItem>
    <BreadcrumbItem>Item 2</BreadcrumbItem>
  </Breadcrumb>
)
export const Main = MultiItem.bind({})

/**
 * simple breadcrumb story with a single item active
 */
const SingleActive: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active>Item 1</BreadcrumbItem>
  </Breadcrumb>
)
export const SingleActiveStory = SingleActive.bind({})

/**
 * story with the custom link on the single active item
 */
const SingleActiveCustomLink: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active>
      <a href="https://example.com">Custom link item</a>
    </BreadcrumbItem>
  </Breadcrumb>
)
export const SingleActiveCustomLinkSrory = SingleActiveCustomLink.bind({})

/**
 * story with the custom style on both the items and the parent
 */
const SingleActiveCustomStyle: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active style={{ color: 'blue', fontStyle: 'italic' }}>
      Item 1
    </BreadcrumbItem>
    <BreadcrumbItem style={{ background: 'yellow' }}>Item 2</BreadcrumbItem>
  </Breadcrumb>
)
export const SingleActiveCustomStyleStory = SingleActiveCustomStyle.bind({})
SingleActiveCustomStyleStory.args = {
  style: { padding: 10, background: 'cyan' },
}

/**
 * story with the custom style on the single item and the parent
 */
const SingleActiveCustomClass: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active className="customClass2">
      Custom Class
    </BreadcrumbItem>
  </Breadcrumb>
)
export const SingleActiveCustomClassStory = SingleActiveCustomClass.bind({})
SingleActiveCustomClassStory.args = {
  className: 'customClass',
}
