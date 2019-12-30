import React from 'react'
import { storiesOf } from '@storybook/react'
import { Panel } from '../src/components/Panel'

storiesOf('Panel', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
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
  .add('Empty Panel', () => (
    <div>
      <Panel />
    </div>
  ))
  .add('Header Panel', () => (
    <div>
      <Panel title="Panel Title">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Header and Footer Panel', () => (
    <div>
      <Panel title="Panel Title" footer="Panel Footer">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Panel Color Variants', () => (
    <div>
      <Panel title="Panel Title" color="primary">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="secondary">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="success">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="warning">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="danger">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="info">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="light">
        <p>You can add stuff here!</p>
      </Panel>
      <Panel title="Panel Title" color="dark">
        <p>You can add stuff here!</p>
      </Panel>
    </div>
  ))
  .add('Collapsible Panel', () => (
    <div>
      <Panel collapsible title="Panel Title">
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>
    </div>
  ))
  .add('Collapsed Collapsible Panel', () => (
    <div>
      <Panel collapsible title="Panel Title" collapsed>
        <p>You can add stuff here!</p>
        <p>You can open and close me!</p>
      </Panel>
    </div>
  ))
