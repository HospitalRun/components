import React from 'react'

import { storiesOf } from '@storybook/react'

import { Navbar, Toaster, Toast } from '../src'

storiesOf('Navbar', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Navbar', () => (
    <div>
      <Navbar
        brand="Hospital"
        buttonColor="success"
        onSeachButtonClick={() => {
          Toast('success', 'Button Clicked!!', 'Success')
        }}
        onSearchTextBoxChange={() => {
          Toast('success', 'Search box changed!!', 'Success')
        }}
        links={[
          ['Elem1', '/elem1Path'],
          ['Elem2', '/elem2Path'],
          [
            'Elem3',
            '/elem3Path',
            'Elem3Sub1',
            '/sub1Path',
            'Elem3Sub2',
            '/sub2Path',
            'Elem3Sub3',
            'sub3Path',
          ],
        ]}
      />

      <br />

      <Navbar
        brand="HospitalRun"
        src="https://raw.githubusercontent.com/HospitalRun/hospitalrun.github.io/master/favicon.png"
        bg="light"
        variant="light"
        onSeachButtonClick={() => {
          Toast('success', 'Button Clicked!!', 'Success')
        }}
        onSearchTextBoxChange={() => {
          Toast('success', 'Search box changed!!', 'Success')
        }}
        links={[['Elem1', '/elem1Path'], ['Elem2', '/elem2Path']]}
      />
      <br />

      <Toaster autoClose={800} hideProgressBar={true} draggable={true} />
    </div>
  ))
