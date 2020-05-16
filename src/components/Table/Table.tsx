import React from 'react'
import { useTable, useFilters, useSortBy, usePagination, TableInstance } from 'react-table'
import { generateColumns } from './helper'
import { Data, TableProperties, GeneratedColumn } from './interfaces'

interface Props<T extends object = {}> {
  /** TableProperties are composed by a tableClassname string property and the columns array */
  tableProperties: TableProperties
  /** Provides data for the table */
  data: T[]
  /** the class name for the table */
  tableClassName?: string
  /** the label is the name of the column, the accessor is a function that will get the value to render and return a react node to render in the column. */
  columns: { label: string; accessor: (row: T) => React.ReactNode }[]
  /** actions will render buttons with the label, and action is what will happen when that button is clicked. */
  actions?: { label: string; action: (row: T) => void }[]
  /** defines what should happen when the table row is clicked. */
  onRowClick?: (row: T) => void
}

function Table<T extends object>({
  data,
  tableProperties,
  tableClassName,
}: Props<T>): React.ReactElement<Props<T>> {
  const columns = React.useMemo(() => generateColumns(tableProperties.columns), [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable<Data>(
    {
      columns,
      data: data || [],
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination,
  ) as TableInstance<object>

  return (
    <>
      <table {...getTableProps()} className={tableClassName}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: GeneratedColumn) => (
                <th
                  {...column.getHeaderProps()}
                  className={column.headerClassName ? column.headerClassName : ''}
                >
                  <div {...(column.disableSorting ? null : column.getSortByToggleProps())}>
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
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
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
      <div className="pagination">
        <button
          type="button"
          id="firstPageButton"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>{' '}
        <button
          type="button"
          id="previousPageButton"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button
          type="button"
          id="nextPageButton"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
        <button
          type="button"
          id="lastPageButton"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {data && data.length ? pageIndex + 1 : pageIndex} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const p = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(p)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageS) => (
            <option key={pageS} value={pageS}>
              Show {pageS}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export { Table }
