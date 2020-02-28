import React from 'react'
import { get } from 'lodash'
import { Field, SortType } from './interfaces'
import { DateTimePicker } from '../DateTimePicker'

interface DefaultColumnFilterOptions {
  column: {
    filterValue: string
    setFilter: (filter?: string) => void
    filterPlaceholder: string
    id?: string
    preFilteredRows?: any
  }
}
const DefaultColumnFilter = ({
  column: { filterValue = '', setFilter, filterPlaceholder = '' },
}: DefaultColumnFilterOptions) => (
  <input
    value={filterValue}
    onChange={(e) => {
      setFilter(e.target.value || undefined)
    }}
    placeholder={filterPlaceholder || 'Search records...'}
  />
)

const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id = '0' },
}: DefaultColumnFilterOptions) => {
  const options = React.useMemo(() => {
    const opt: any = []
    preFilteredRows.forEach((row: any) => {
      if (opt.indexOf(row.values[id]) === -1) {
        opt.push(row.values[id])
      }
    })
    return [...opt]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toString()}
        </option>
      ))}
    </select>
  )
}

const DateColumnFilter = ({
  column: { filterValue = '', setFilter },
}: DefaultColumnFilterOptions) => (
  <div>
    <DateTimePicker
      dateFormat="MM/dd/yyyy"
      dateFormatCalendar="LLLL yyyy"
      dropdownMode="scroll"
      locale="enUS"
      onChange={(e: any) => {
        setFilter(e)
      }}
      selected={filterValue ? new Date(filterValue) : new Date()}
      timeIntervals={30}
      withPortal={false}
    />
  </div>
)

export const generateColumns = (fields: Field[]) => {
  const columns: any = []
  let el: any

  fields.map((element) => {
    switch (get(element, 'type', '')) {
      case 'boolean':
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          Cell:
            element.undefinedMeansFalse === false
              ? element.customTrueIcon
                ? element.customFalseIcon
                  ? ({ row }: any) => (
                      <>
                        {row.values[element.accessor] === true && element.customTrueIcon}
                        {row.values[element.accessor] === false && element.customFalseIcon}
                        {row.values[element.accessor] !== true &&
                          row.values[element.accessor] !== false && <div />}
                      </>
                    )
                  : ({ row }: any) => (
                      <>
                        {row.values[element.accessor] === true && element.customTrueIcon}
                        {row.values[element.accessor] === false && (
                          <div style={{ color: 'red' }}>false</div>
                        )}
                        {row.values[element.accessor] !== true &&
                          row.values[element.accessor] !== false && <div />}
                      </>
                    )
                : element.customFalseIcon
                ? ({ row }: any) => (
                    <>
                      {row.values[element.accessor] === true && (
                        <div style={{ color: 'green' }}>true</div>
                      )}
                      {row.values[element.accessor] === false && element.customFalseIcon}
                      {row.values[element.accessor] !== true &&
                        row.values[element.accessor] !== false && <div />}
                    </>
                  )
                : ({ row }: any) => (
                    <>
                      {row.values[element.accessor] === true && (
                        <div style={{ color: 'green' }}>true</div>
                      )}
                      {row.values[element.accessor] === false && (
                        <div style={{ color: 'red' }}>false</div>
                      )}
                      {row.values[element.accessor] !== true &&
                        row.values[element.accessor] !== false && <div />}
                    </>
                  )
              : element.customTrueIcon
              ? element.customFalseIcon
                ? ({ row }: any) => (
                    <>
                      {row.values[element.accessor] === true && element.customTrueIcon}
                      {row.values[element.accessor] !== true && element.customFalseIcon}
                    </>
                  )
                : ({ row }: any) => (
                    <>
                      {row.values[element.accessor] === true && element.customTrueIcon}
                      {row.values[element.accessor] !== true && (
                        <div style={{ color: 'red' }}>false</div>
                      )}
                    </>
                  )
              : element.customFalseIcon
              ? ({ row }: any) => (
                  <>
                    {row.values[element.accessor] === true && (
                      <div style={{ color: 'green' }}>true</div>
                    )}
                    {row.values[element.accessor] !== true && element.customFalseIcon}
                  </>
                )
              : ({ row }: any) => (
                  <>
                    {row.values[element.accessor] === true && (
                      <div style={{ color: 'green' }}>true</div>
                    )}
                    {row.values[element.accessor] !== true && (
                      <div style={{ color: 'red' }}>false</div>
                    )}
                  </>
                ),
          className: element.className || '',
          // width: element.width || 100,
          headerClassName: element.headerClassName || '',
          disableSorting: element.disableSorting,
          disableFiltering: element.disableFiltering,
          Filter: SelectColumnFilter,
        }
        columns.push(el)
        return columns
      case 'date':
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          className: element.className ? `${element.className} text-center` : 'text-center',
          // width: element.width || 320,
          headerClassName: element.headerClassName || '',
          disableSorting: element.disableSorting,
          disableFiltering: element.disableFiltering,
          filterPlaceholder: element.filterPlaceholder || '',
          Filter: DateColumnFilter,
        }
        columns.push(el)
        return columns
      // case 'externalLink':
      //   el = {
      //     Header: element.title || '',
      //     accessor: '',
      //     Cell: (row: any) => <ExternalLink {...row} {...element} />,
      //     className:
      //       `${element.className} external-link custom-width` || 'external-link custom-width',
      //     headerStyle: element.styles || {},
      //     style: element.styles || '',
      //     headerClassName: element.headerClassName
      //       ? `${element.headerClassName} external-link custom-width`
      //       : 'external-link custom-width',
      //     filterable: false,
      //     sortable: false,
      //     width: element.width || 170,
      //   }
      //   if (element.elevatedRolesOnly) {
      //     if (element.overridedElevatedRolesForThisField) {
      //       if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
      //         columns.push(el)
      //       }
      //     } else {
      //       if (checkUserPermissions(user.role, elevatedRoles)) {
      //         columns.push(el)
      //       }
      //     }
      //   } else {
      //     columns.push(el)
      //   }
      //   return columns
      // case 'actionButtons':
      //   el = {
      //     Header: element.title || 'Azioni',
      //     accessor: '',
      //     className: element.className
      //       ? `${element.className} action-buttons text-center`
      //       : `action-buttons text-center`,
      //     style: element.styles || {},
      //     headerClassName: element.headerClassName
      //       ? `${element.headerClassName} action-buttons text-center`
      //       : 'action-buttons text-center',
      //     Cell: (row: any) => (
      //       <>
      //         {element.buttons
      //           ? element.buttons.map((butt, i) => <ActionButton key={i} {...row} {...butt} />)
      //           : ''}
      //       </>
      //     ),
      //     filterable: false,
      //     sortable: false,
      //     width: element.width || 100,
      //   }
      //   if (element.elevatedRolesOnly) {
      //     if (element.overridedElevatedRolesForThisField) {
      //       if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
      //         columns.push(el)
      //       }
      //     } else {
      //       if (checkUserPermissions(user.role, elevatedRoles)) {
      //         columns.push(el)
      //       }
      //     }
      //   } else {
      //     columns.push(el)
      //   }
      //   return columns
      default:
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          Cell: ({ row }: any) => {
            let resultingStyle = {}
            if (element.styles && element.styles.length) {
              element.styles.forEach((style: any) => {
                resultingStyle = { ...resultingStyle, ...style.style }
              })
            }
            return resultingStyle ? (
              <div style={resultingStyle}>{row.values[element.accessor]}</div>
            ) : (
              <>{row.values[element.accessor]}</>
            )
          },
          className: element.className || '',
          headerClassName: element.headerClassName || '',
          Filter: DefaultColumnFilter,
          disableSorting: element.disableSorting,
          disableFiltering: element.disableFiltering,
          filterPlaceholder: element.filterPlaceholder || '',
        }
        columns.push(el)
        return columns
    }
  })
  return columns
}

export const addPagination = (page: number, sizerPerPage: number) => {
  const skip = page * sizerPerPage
  return `offset=${skip}`
}

export const addLimit = (limit: number) => (limit ? `&limit=${limit}` : '')

export const addSorting = (sorting: SortType[], clearSort: boolean, resetSort: Function) => {
  if (clearSort) {
    resetSort()
    return ''
  }
  let partialUrl = sorting.length !== 0 ? '&sort=' : ''
  sorting.forEach((sort) => {
    partialUrl += `${(sort.desc ? '-' : '') + sort.id},`
  })
  return partialUrl.slice(0, -1)
}

export const addOmniQuery = (query: string) => (query ? `&q=${query}` : '')
