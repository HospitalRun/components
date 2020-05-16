import { storiesOf } from '@storybook/react'
import React from 'react'

import { List, ListItem } from '../src'

storiesOf('List', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', marginLeft: 40, marginRight: 40 }}>{storyFn()}</div>
  ))
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
  .add('List with custom class', () => (
    <List className="customClass">
      <ListItem>Regular item in a list with custom class</ListItem>
      <ListItem className="customClass2">List item with custom class</ListItem>
    </List>
  ))
  .add('List with custom style', () => (
    <List style={{ color: 'red', border: '2px solid red' }}>
      <ListItem>Regular item in a list with custom style</ListItem>
      <ListItem style={{ background: 'blue', color: 'white' }}>
        List item with a custom style
      </ListItem>
    </List>
  ))
