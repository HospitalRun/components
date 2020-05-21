import { storiesOf } from '@storybook/react'
import React from 'react'

import { Breadcrumb, BreadcrumbItem } from '../src'

storiesOf('Breadcrumbs', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Breadcrumb', () => (
    <Breadcrumb>
      <BreadcrumbItem active>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb Items with active prop.', () => (
    <Breadcrumb>
      <BreadcrumbItem active>Span Item</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb item can have custom link in child', () => (
    <Breadcrumb>
      <BreadcrumbItem active>
        <a href="https://example.com">Custom link item</a>
      </BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb can use custom style', () => (
    <Breadcrumb style={{ padding: 10, background: 'cyan' }}>
      <BreadcrumbItem active style={{ color: 'blue', fontStyle: 'italic' }}>
        Item 1
      </BreadcrumbItem>
      <BreadcrumbItem style={{ background: 'yellow' }}>Item 2</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb can use custom class', () => (
    <Breadcrumb className="customClass">
      <BreadcrumbItem active className="customClass2">
        Custom Class
      </BreadcrumbItem>
    </Breadcrumb>
  ))
