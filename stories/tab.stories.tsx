import { storiesOf } from '@storybook/react'
import { useState } from 'react'

import { Tab, TabsHeader } from '../src'

storiesOf('Tabs', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em', textAlign: 'center' }}>{storyFn()}</div>
  ))
  .add('Tabs Group', () => {
    const [tab, setTab] = useState('appointments')

    return (
      <div>
        <TabsHeader>
          <Tab
            onClick={() => setTab('appointments')}
            label="Appointments"
            active={tab === 'appointments'}
          />
          <Tab onClick={() => setTab('diagnoses')} label="Diagnoses" active={tab === 'diagnoses'} />
          <Tab label="Disabled" disabled active={tab === 'disabled'} />
        </TabsHeader>

        <div>{tab === 'appointments' && <span>Appointments Content</span>}</div>
        <div>{tab === 'diagnoses' && <span>Diagnoses Content</span>}</div>
      </div>
    )
  })
  .add('Tabs With Icons', () => {
    const [tab, setTab] = useState('appointments')

    return (
      <div>
        <TabsHeader>
          <Tab
            onClick={() => setTab('appointments')}
            label="Appointments"
            active={tab === 'appointments'}
            icon="patient"
          />
          <Tab onClick={() => setTab('diagnoses')} label="Diagnoses" active={tab === 'diagnoses'} />
          <Tab
            label="Disabled"
            disabled
            active={tab === 'disabled'}
            icon="patient"
            iconLocation="right"
          />
        </TabsHeader>

        <div>{tab === 'appointments' && <span>Appointments Content</span>}</div>
        <div>{tab === 'diagnoses' && <span>Diagnoses Content</span>}</div>
      </div>
    )
  })
