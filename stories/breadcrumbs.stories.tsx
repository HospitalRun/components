import React from 'react'
import { storiesOf } from '@storybook/react'
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

import { Breadcrumb } from '../src'

storiesOf('Breadcrumbs', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Breadcrumb', () => (
    <Breadcrumb>
      <BreadcrumbItem href="https://example.com">Item 1</BreadcrumbItem>
      <BreadcrumbItem active as="span">
        <a href="https://example.com">active span</a>
      </BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb Active Items', () => (
    <Breadcrumb>
      <BreadcrumbItem active>No href</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('Breadcrumb item using custom link in child', () => (
    <Breadcrumb>
      <BreadcrumbItem active>
        <a href="https://example.com">Custom Link</a>
      </BreadcrumbItem>
    </Breadcrumb>
  ))
