import React from 'react'
import { ButtonVariant } from 'src/interfaces'

import { Button } from '../Button'

type T = { [key: string]: any }

interface Props {
  tableClassName: string
  headerClassName: string
  columns: {
    key: string
    label: string
    formatter?: (row: T) => React.ReactNode
    sortable?: boolean
  }[]
  data: T[] | undefined
  actionsHeaderText: string
  actions?: { label: string; action: (row: T) => void; buttonColor?: ButtonVariant }[]
  getID: (row: T) => string
  onRowClick?: (row: T) => void
  onSortByClick?: (key: string) => void
  currentSort?: { by: string; asc: boolean }
}

const Table = (props: Props) => {
  const {
    tableClassName,
    headerClassName,
    columns,
    data,
    actionsHeaderText,
    actions,
    getID,
    onRowClick,
    onSortByClick,
    currentSort,
  } = props

  const getSortIcon = (key: string): any => {
    if (!currentSort) {
      return null
    }
    if (currentSort.by === key) {
      return currentSort.asc ? <span>&#9650;</span> : <span>&#9660;</span>
    }
    return <span>&#9651;</span>
  }

  const table = (
    <table className={tableClassName}>
      <thead className={headerClassName}>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              onClick={() => {
                if (onSortByClick && column.sortable) {
                  onSortByClick(column.key)
                }
              }}
            >
              {column.label} {column.sortable ? getSortIcon(column.key) : null}
            </th>
          ))}
          {actions ? <th>{actionsHeaderText}</th> : null}
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((row: T) => (
            <tr
              key={getID(row)}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row)
                }
              }}
            >
              {columns.map((column) => {
                const content = !column.formatter ? row[column.key] : column.formatter(row)
                return <td key={`${column.key}-${getID(row)}`}>{content}</td>
              })}

              {actions ? (
                <td>
                  {actions.map(({ label, action, buttonColor }, i) => (
                    <Button
                      key={label}
                      color={buttonColor || 'primary'}
                      onClick={(e) => {
                        e.stopPropagation()
                        action(row)
                      }}
                      className={i > 0 ? 'ml-1' : ''}
                    >
                      {label}
                    </Button>
                  ))}
                </td>
              ) : null}
            </tr>
          ))}
      </tbody>
    </table>
  )

  return table
}

Table.defaultProps = {
  tableClassName: 'table table-hover',
  headerClassName: 'thead-light',
  actionsHeaderText: 'Actions',
}

export { Table }
