import React from 'react'

type T = { [key: string]: any }

interface Props {
  tableClassName?: string
  headerClassName?: string
  columns: { key: string; label: string; accessor?: (row: T) => React.ReactNode }[]
  data: T[]
  actions?: { label: string; action: (row: T) => void }[]
  getID: (row: T) => string
  onRowClick?: (row: T) => void
}

// todo: actions header int'lize

const Table = (props: Props) => {
  const { tableClassName, headerClassName, columns, data, actions, getID, onRowClick } = props

  const table = (
    <table className={tableClassName || 'table table-hover'}>
      <thead className={headerClassName || 'thead-light'}>
        <tr>
          {columns.map((column) => (
            <th>{column.label}</th>
          ))}
          {actions ? <th>Actions</th> : null}
        </tr>
      </thead>

      <tbody>
        {data.map((row: T) => (
          <tr
            key={getID(row)}
            onClick={() => {
              if (onRowClick) {
                onRowClick(row)
              }
            }}
          >
            {columns.map((column) => {
              const content = !column.accessor ? row[column.key] : column.accessor(row)
              return <td role="presentation">{content}</td>
            })}

            {actions ? (
              <td>
                {actions.map(({ label, action }) => (
                  <span
                    role="presentation"
                    onClick={(e) => {
                      e.stopPropagation()
                      action(row)
                    }}
                  >
                    {label}
                  </span>
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
  tableClassName: null,
  headerClassName: null,
  columns: {
    accessor: null,
  },
  actions: null,
  onRowClick: null,
}

export { Table }
