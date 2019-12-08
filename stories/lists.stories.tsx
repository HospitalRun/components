import React from 'react'

import { storiesOf } from '@storybook/react'

import { List, ListItem } from '../src'

storiesOf('List', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('List', () => (
    <List>
      <ListItem>Cras justo odio</ListItem>
      <ListItem>Dapibus ac facilisis in</ListItem>
      <ListItem>Morbi leo risus</ListItem>
      <ListItem>Porta ac consectetur ac</ListItem>
      <ListItem>Vestibulum at eros</ListItem>
    </List>
  ))
  .add('List Colors', () => (
    <List>
      <ListItem color="primary">Primary</ListItem>
      <ListItem color="secondary">Secondary</ListItem>
      <ListItem color="success">Success</ListItem>
      <ListItem color="warning">Warning</ListItem>
      <ListItem color="danger">Danger</ListItem>
      <ListItem color="info">Info</ListItem>
      <ListItem color="light">Light</ListItem>
      <ListItem color="dark">Dark</ListItem>
    </List>
  ))
  .add('List Actions', () => (
    <List>
      <ListItem color="primary" action>
        Primary
      </ListItem>
      <ListItem color="secondary" action>
        Secondary
      </ListItem>
      <ListItem color="success" action>
        Success
      </ListItem>
      <ListItem color="warning" action>
        Warning
      </ListItem>
      <ListItem color="danger" action>
        Danger
      </ListItem>
      <ListItem color="info" action>
        Info
      </ListItem>
      <ListItem color="light" action>
        Light
      </ListItem>
      <ListItem color="dark" action>
        Dark
      </ListItem>
    </List>
  ))
  .add('List Active Items', () => (
    <List>
      <ListItem active>Cras justo odio</ListItem>
      <ListItem>Dapibus ac facilisis in</ListItem>
      <ListItem>Morbi leo risus</ListItem>
      <ListItem>Porta ac consectetur ac</ListItem>
      <ListItem>Vestibulum at eros</ListItem>
    </List>
  ))
  .add('List Disabled Items', () => (
    <List>
      <ListItem disabled>Cras justo odio</ListItem>
      <ListItem>Dapibus ac facilisis in</ListItem>
      <ListItem>Morbi leo risus</ListItem>
      <ListItem>Porta ac consectetur ac</ListItem>
      <ListItem>Vestibulum at eros</ListItem>
    </List>
  ))
  .add('List Event Handling', () => (
    <List>
      <ListItem
        action
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert('The first list item has been clicked!')
        }}
      >
        onClick example item
      </ListItem>
      <ListItem action href="/?path=/story/list--list-event-handling">
        href example item
      </ListItem>
      <ListItem eventKey="#uniqueKey">eventKey example item</ListItem>
    </List>
  ))
