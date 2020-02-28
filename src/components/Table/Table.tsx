import React from 'react'
import { useTable, useFilters, useSortBy, Row } from 'react-table'
import { generateColumns } from './helper'

interface MyProps {
  tableProperties: any
  data: any
}

function Table({ data, tableProperties }: MyProps) {
  console.log(tableProperties)
  const columns = generateColumns(tableProperties.columns)
  console.log('COLUMNS', columns)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
  )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps()}
                className={column.headerClassName ? column.headerClassName : ''}
              >
                <div {...(column.disableSorting ? null : column.getSortByToggleProps())}>
                  {/* {console.log('column', column)} */}
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </div>

                <div>{!column.disableFiltering && column.render('Filter')}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row) => {
          // console.log(row)
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                // console.log('cell.getCellProps()', cell)
                <td
                  {...cell.getCellProps()}
                  className={cell.column.className ? cell.column.className : ''}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { Table }
