import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table } from '../src'
// import { TableProperties } from './src'

storiesOf('Table', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ marginLeft: '2em', marginRight: '2em', textAlign: 'center' }}>{storyFn()}</div>
  ))
  .add('Stupid Table', () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 20,
        status: 'married',
      },
    ]

    const tableProperties: any = {
      // headerTitle: Object.getPrototypeOf(this).constructor.resourceTitle,
      // newElementButtonLabel: Object.getPrototypeOf(this).constructor.newElementButtonLabel,
      // newElementButtonRoute: `/${Object.getPrototypeOf(this).constructor.resource}/details`,

      // elevatedRoles: ['admin', 'superadmin'],
      tableClassNames: '',
      columns: [
        {
          accessor: 'firstName',
          type: 'string',
          headerTitle: 'Nome',
          headerClassName: 'table-header-bold',
          className: 'pl-3 fixoverflow',
          // styleWithCondition: {
          //   condition: {
          //     property: 'title',
          //     value: 'Metastasi',
          //   },
          //   style: {
          //     fontWeight: '600',
          //   },
          // },
        },
        {
          accessor: 'lastName',
          type: 'string',
          headerTitle: 'Cognome',
          headerClassName: 'table-header-bold',
          className: 'pl-3',
        },
      ],
    }

    // const columns = [
    //   {
    //     accessor: 'firstName',
    //     // type: 'string',
    //     // headerTitle: 'Nome pagina',
    //     // headerClassName: 'table-header-bold',
    //     // className: 'pl-3 fixoverflow',
    //     // styleWithCondition: {
    //     //   condition: {
    //     //     property: 'title',
    //     //     value: 'Metastasi',
    //     //   },
    //     //   style: {
    //     //     fontWeight: '600',
    //     //   },
    //     // },
    //   },
    //   {
    //     accessor: 'lastName',
    //     // type: 'date',
    //     // headerTitle: 'Ultima modifica',
    //     // headerClassName: 'table-header-bold',
    //     // className: 'pl-3',
    //   },
    // ]

    // const tableProperties: TableProperties = {
    //   columns = [

    //   ]
    // }

    return (
      <div>
        <Table data={data} tableProperties={tableProperties} />
      </div>
    )
  })
