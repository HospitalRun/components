import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Typography } from '../src'

storiesOf('Typography', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'left', marginLeft: '2.5rem' }}>{storyFn()}</div>
  ))
  .add('Typography', () => (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography>Paragraph default</Typography>
      <br />
      <Typography styleAs="display-1">Display 1</Typography>
      <Typography styleAs="display-2">Display 2</Typography>
      <Typography styleAs="display-3">Display 3</Typography>
      <Typography styleAs="display-4">Display 4</Typography>
    </div>
  ))
