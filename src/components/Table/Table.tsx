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
            {headerGroup.headers.map((column: any) => (
              // console.log('column.getHeaderProps()', column)
              <th
                {...column.getHeaderProps()}
                className={column.headerClassName ? column.headerClassName : ''}
              >
                {column.render('Header')}
              </th>
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
              {row.cells.map((cell: any) => {
                console.log('cell.getCellProps()', cell)
                return (
                  <td
                    {...cell.getCellProps()}
                    className={cell.column.className ? cell.column.className : ''}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { Table }
