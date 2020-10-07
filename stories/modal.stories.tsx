import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { Modal, Button } from '../src'

storiesOf('Modal', module)
  .addParameters({
    info: {
      inline: true,
      propTables: [Modal],
      propTablesExclude: [Button],
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em' }}>{storyFn()}</div>
  ))
  .add('Simple modal', () => {
    const [show, setShow] = useState(false)
    const [log, setLog] = useState('')
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" onClick={() => setShow(!show)}>
          Open modal!
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="This is a modal title!"
          onEnter={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onEnter`)}
          onEntered={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onEntered`)}
          onEntering={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onEntering`)}
          onExit={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onExit`)}
          onExited={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onExited`)}
          onExiting={() => setLog(`${log}\n${new Date().toLocaleTimeString()}: onExiting`)}
          body={
            <div>
              <p>And this is a modal body.</p>
              <div>
                Simple example with just one button. <br /> The modal body can be any JSX.
              </div>
            </div>
          }
          closeButton={{
            children: 'Close me',
            onClick: () => {
              setLog(`${log}\n${new Date().toLocaleTimeString()}: onclicked close`)
              setShow(!show)
            },
          }}
        />
        <div style={{ textAlign: 'left' }}>
          <h3>Log:</h3>
          <pre style={{ border: '1px solid black' }}>{log}</pre>
        </div>
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
            children: 'Close me',
            color: 'secondary',
            icon: 'remove',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked close')
              setShow(!show)
            },
          }}
          successButton={{
            children: 'I agree!',
            color: 'success',
            icon: 'add',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked agree')
              setShow(!show)
            },
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
            children: 'Close me',
            color: 'secondary',
            icon: 'remove',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked close')
              setShow(!show)
            },
          }}
          middleButton={{
            children: 'Disabled',
            color: 'info',
            icon: 'save',
            iconLocation: 'left',
            disabled: true,
            onClick: () => {
              console.log('clicked maybe')
              setShow(!show)
            },
          }}
          successButton={{
            children: 'I agree!',
            color: 'success',
            icon: 'add',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked agree')
              setShow(!show)
            },
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
            children: 'Close me',
            color: 'secondary',
            icon: 'remove',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked close')
              setShow(!show)
            },
          }}
          middleButton={{
            children: 'Maybe',
            color: 'info',
            icon: 'save',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked maybe')
              setShow(!show)
            },
          }}
          successButton={{
            children: 'I agree!',
            color: 'success',
            icon: 'add',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked agree')
              setShow(!show)
            },
          }}
        />
      </div>
    )
  })
