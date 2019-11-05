import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../src'
import { Button } from '../src'

storiesOf('Modal', module)
  .addParameters({
    info: {
      inline: true,
      propTables: [Modal],
      propTablesExclude: [Button],
    },
  })
  .addDecorator(storyFn => <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>)
  .add('Simple modal', () => {
    const [show, setShow] = useState(false)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" onClick={() => setShow(!show)}>
          Open modal!
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="This is a modal title!"
          body={
            <div>
              <p>And this is a modal body.</p>
              <div>
                Simple example with just one button. <br /> The modal body can be any JSX.
              </div>
            </div>
          }
          closeButton={{
            label: 'Close me',
            callback: () => console.log('modal closed'),
          }}
        />
      </div>
    )
  })
  .add('Two buttons', () => {
    const [show, setShow] = useState(false)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" onClick={() => setShow(!show)}>
          Open modal!
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="This is a modal title!"
          body={
            <div>
              <p>And this is a modal body.</p>
              <p>You can add also a success button.</p>
            </div>
          }
          closeButton={{
            label: 'Close me',
            color: 'secondary',
            callback: () => console.log('modal closed'),
          }}
          successButton={{
            label: 'I agree!',
            color: 'success',
            callback: () => console.log('clicked agree'),
          }}
        />
      </div>
    )
  })
  .add('Three buttons', () => {
    const [show, setShow] = useState(false)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" onClick={() => setShow(!show)}>
          Open modal!
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="This is a modal title!"
          body={
            <div>
              <p>And this is a modal body.</p>
              <p>Three buttons example.</p>
            </div>
          }
          closeButton={{
            label: 'Close me',
            color: 'secondary',
            callback: () => console.log('modal closed'),
          }}
          middleButton={{
            label: 'Maybe',
            color: 'info',
            callback: () => console.log('clicked maybe'),
          }}
          successButton={{
            label: 'I agree!',
            color: 'success',
            callback: () => console.log('clicked agree'),
          }}
        />
      </div>
    )
  })
  .add('More options', () => {
    const [show, setShow] = useState(false)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" onClick={() => setShow(!show)}>
          Open modal!
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="This is a modal title!"
          body={
            <div>
              <p>And this is a modal body.</p>
              <p>
                This modal is centered, upper close button is hidden and buttons are aligned to the
                right.
              </p>
            </div>
          }
          showHeaderCloseButton={false}
          verticallyCentered
          buttonsAlignment="right"
          closeButton={{
            label: 'Close me',
            color: 'secondary',
            callback: () => console.log('modal closed'),
          }}
          middleButton={{
            label: 'Maybe',
            color: 'info',
            callback: () => console.log('clicked maybe'),
          }}
          successButton={{
            label: 'I agree!',
            color: 'success',
            callback: () => console.log('clicked agree'),
          }}
        />
      </div>
    )
  })
