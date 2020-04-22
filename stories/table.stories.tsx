import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, Icon, TableProperties, Toaster, Toast } from '../src'

storiesOf('Table', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em', textAlign: 'center' }}>
      {storyFn()}
      <Toaster autoClose={800} hideProgressBar draggable />
    </div>
  ))
  .add('Demo Table', () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 20,
        status: 'married',
        admin: true,
        date: new Date().toString(),
        id: 123,
      },
      {
        firstName: 'Jack',
        lastName: 'Doe',
        age: 21,
        status: 'single',
        admin: false,
        date: new Date().toString(),
        id: 456,
      },
      {
        firstName: 'Jason',
        lastName: 'Gutemberg',
        age: 22,
        status: 'married',
        admin: false,
        date: new Date().toString(),
        id: 789,
      },
    ]

    const tableProperties: TableProperties = {
      tableClassname: '',
      columns: [
        {
          accessor: 'firstName',
          type: 'string',
          title: 'Name',
          headerClassName: 'text-info',
          className: 'pl-3 fixoverflow',
          disableFiltering: false,
          disableSorting: false,
          filterPlaceholder: 'Search in names!',
          styles: [
            {
              conditions: [
                {
                  or: [
                    {
                      and: [
                        {
                          or: [
                            {
                              property: 'firstName',
                              value: 'John',
                            },
                            {
                              property: 'firstName',
                              value: 'Jack',
                            },
                          ],
                        },
                        {
                          property: 'firstName',
                          value: 'Mob',
                        },
                      ],
                    },
                    {
                      and: [
                        {
                          property: 'firstName',
                          value: 'Fog',
                        },
                      ],
                    },
                  ],
                },
              ],
              style: {
                fontWeight: '600',
              },
            },
          ],
        },
        {
          accessor: 'lastName',
          type: 'string',
          title: 'Surname',
          headerClassName: 'text-info',
          className: 'pl-3 fixoverflow',
          disableFiltering: false,
          disableSorting: true,
        },
        {
          accessor: 'age',
          type: 'string',
          title: 'Age',
          headerClassName: '',
          className: 'pl-3 fixoverflow',
          disableFiltering: false,
          disableSorting: false,
          filterPlaceholder: 'Search in ages',
        },
        {
          accessor: 'admin',
          type: 'boolean',
          title: 'Admin',
          headerClassName: 'text-info',
          className: 'pl-3 fixoverflow',
          disableFiltering: false,
          disableSorting: false,
          customTrueIcon: (
            <div style={{ color: 'green' }}>
              <Icon icon="appointment" />
            </div>
          ),
          customFalseIcon: (
            <div style={{ color: 'red' }}>
              <Icon icon="calendar" />
            </div>
          ),
        },
        {
          accessor: 'date',
          type: 'date',
          title: 'Date',
          headerClassName: '',
          className: 'pl-3 fixoverflow',
          disableFiltering: false,
          disableSorting: false,
          filterPlaceholder: 'Search in dates',
        },
        {
          accessor: '',
          id: 'edit',
          type: 'action',
          title: 'Edit',
          headerClassName: '',
          className: 'pl-3 fixoverflow',
          onClick: (patientid: string) => {
            Toast('success', `${patientid}Edit button clicked!!`, 'Success')
          },
        },
        {
          accessor: '',
          id: 'delete',
          type: 'action',
          title: 'Delete',
          headerClassName: '',
          className: 'pl-3 fixoverflow',
          onClick: (patientid: string) => {
            Toast('success', `${patientid}Delete button clicked!!`, 'Success')
          },
        },
      ],
    }

    return (
      <div>
        <Table data={data} tableProperties={tableProperties} />
      </div>
    )
  })
