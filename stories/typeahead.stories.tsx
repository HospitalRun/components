import React from 'react'

import { storiesOf } from '@storybook/react'

import { Typeahead } from '../src'

const getOptions = async () => [
  {
    id: '1',
    firstName: 'first1',
    lastName: 'last1',
    fullName: 'first1 last1',
  },
  {
    id: '2',
    firstName: 'first2',
    lastName: 'last2',
    fullName: 'first2 last2',
  },
  {
    id: '3',
    firstName: 'first3',
    lastName: 'last3',
    fullName: 'first3 last3',
  },
]

storiesOf('Typeahead', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>{storyFn()}</div>
  ))
  .add('Typeahead', () => (
    <div>
      <Typeahead
        id="typeahead"
        searchAccessor="fullName"
        placeholder="placeholder"
        onSearch={() => getOptions()}
        onChange={(selected) => alert(JSON.stringify(selected))}
        renderMenuItemChildren={(option) => (
          // eslint-disable-next-line
            <div>
              {`${option.fullName}`}
            </div>
        )}
      />
    </div>
  ))
  .add('Typeahead with default value', () => (
    <div>
      <Typeahead
        id="typeahead"
        searchAccessor="fullName"
        placeholder="placeholder"
        onSearch={() => getOptions()}
        onChange={(selected) => alert(JSON.stringify(selected))}
        value={{
          id: '3',
          firstName: 'first3',
          lastName: 'last3',
          fullName: 'first3 last3',
        }}
        renderMenuItemChildren={(option) => (
          // eslint-disable-next-line
            <div>
              {`${option.fullName}`}
            </div>
        )}
      />
    </div>
  ))
  .add('Disabled Typeahead', () => (
    <div>
      <Typeahead
        id="typeahead"
        searchAccessor="fullName"
        placeholder="placeholder"
        onSearch={() => getOptions()}
        onChange={(selected) => alert(JSON.stringify(selected))}
        disabled
        value={{
          id: '3',
          firstName: 'first3',
          lastName: 'last3',
          fullName: 'first3 last3',
        }}
        renderMenuItemChildren={(option) => (
          // eslint-disable-next-line
            <div>
              {`${option.fullName}`}
            </div>
        )}
      />
    </div>
  ))
  .add('Typeahead with Invalid value', () => (
    <div>
      <Typeahead
        id="typeahead"
        searchAccessor="fullName"
        placeholder="placeholder"
        onSearch={() => getOptions()}
        onChange={(selected) => alert(JSON.stringify(selected))}
        isInvalid
        value={{
          id: '3',
          firstName: 'first3',
          lastName: 'last3',
          fullName: 'first3 last3',
        }}
        renderMenuItemChildren={(option) => (
          // eslint-disable-next-line
            <div>
              {`${option.fullName}`}
            </div>
        )}
      />
    </div>
  ))
