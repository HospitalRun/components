import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dropdown } from '../src'

storiesOf('Dropdown', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Dropdown', () => (
    <div>
      <Dropdown
        color="primary"
        title="Dropdown Title"
        text="Dropdown Text"
        items={[
          {
            Link: {
              href: '/#',
              color: 'primary',
            },
            Alert: {
              href: '/',
              color: 'primary',
              onClick: () => {
                alert('You must be registered for this action')
              },
            },
            'Nested Dropdown': {
              href: '/',
              color: 'primary',
              items: [
                {
                  Link: {
                    href: '/#',
                    color: 'primary',
                  },
                  Action: {
                    href: '/#',
                    color: 'primary',
                    onClick: () => {
                      alert('You must be registered for this action')
                    },
                  },
                },
              ],
            },
          },
        ]}
      />
    </div>
  ))
