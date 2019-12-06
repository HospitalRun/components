import React from 'react'

import { storiesOf } from '@storybook/react'

import { Panel } from '../src/components/Panel'
import './panel.stories.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf('Panel', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  // .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em', textAlign: 'center' }}>{storyFn()}</div>
  ))
  .add('Default Panel', () => (
    <div>
      <Panel>
        <p>I am the default panel</p>
      </Panel>
    </div>
  ))
  .add('Header Panel', () => (
    <div>
      <Panel title="Panel Title">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Shadow Panel', () => (
    <div>
      <Panel shadow title="Panel Title">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Border Panel', () => (
    <div>
      <Panel shadow title="Panel Title">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Collapsable Panel', () => (
    <div>
      <Panel border collapse title="Panel Title" expand>
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>
    </div>
  ))
