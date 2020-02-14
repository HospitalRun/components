import React from 'react'
// import styled from 'styled-components'
import { useTable, Row } from 'react-table'
import { generateColumns } from './helper'
// import { TableProperties } from './interfaces'

interface MyProps {
  tableProperties: any
  data: any
  // columns: any
}

function Table({ data, tableProperties }: MyProps) {
  console.log(tableProperties)
  // convertire con generateColumns
  const columns = generateColumns(tableProperties.columns)
  console.log('COLUMNS', columns)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row) => {
          console.log(row)
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { Table }
