import React from 'react'
// import TextFilter from './filters/textFilter'
// import BooleanFilter from './filters/booleanFilter'
// import DateFilter from './filters/dateFilter'
// import ActionButton from './components/actionButton'
// import ExternalLink from './components/externalLink'
import { get } from 'lodash'
// import { format } from 'date-fns'
// import { Cell } from 'react-table'
import { Field, Filter, SortType } from './interfaces'
// import {  } from 'react-bootstrap'

// const checkUserPermissions = (userRole: string, elevatedRoles: string[]) => {
//   if (elevatedRoles.find((role) => role === userRole)) {
//     return true
//   } else return false
// }

export const generateColumns = (
  fields: Field[],
  // user: any,
  // elevatedRoles: string[],
  // localMode: boolean,
) => {
  const columns: any = []
  let el: any

  fields.map((element) => {
    switch (get(element, 'type', '')) {
      case 'boolean':
        el = {
          Header: element.headerTitle || element.accessor || '',
          accessor: element.accessor || '',
          Cell:
            element.undefinedMeansFalse === false
              ? element.customTrueIcon
                ? element.customFalseIcon
                  ? (row: any) => (
                      <>
                        {row.value === true && element.customTrueIcon}
                        {row.value === false && element.customFalseIcon}
                        {row.value !== true && row.value !== false && <div />}
                      </>
                    )
                  : (row: any) => (
                      <>
                        {row.value === true && element.customTrueIcon}
                        {row.value === false && (
                          <div style={{ color: 'red' }}>
                            <i className="fas fa-times" />
                          </div>
                        )}
                        {row.value !== true && row.value !== false && <div />}
                      </>
                    )
                : element.customFalseIcon
                ? (row: any) => (
                    <>
                      {row.value === true && (
                        <div style={{ color: 'green' }}>
                          <i className="fas fa-check" />
                        </div>
                      )}
                      {row.value === false && element.customFalseIcon}
                      {row.value !== true && row.value !== false && <div />}
                    </>
                  )
                : (row: any) => (
                    <>
                      {row.value === true && (
                        <div style={{ color: 'green' }}>
                          <i className="fas fa-check" />
                        </div>
                      )}
                      {row.value === false && (
                        <div style={{ color: 'red' }}>
                          <i className="fas fa-times" />
                        </div>
                      )}
                      {row.value !== true && row.value !== false && <div />}
                    </>
                  )
              : element.customTrueIcon
              ? element.customFalseIcon
                ? (row: any) => (
                    <>
                      {row.value === true && element.customTrueIcon}
                      {row.value !== true && element.customFalseIcon}
                    </>
                  )
                : (row: any) => (
                    <>
                      {row.value === true && element.customTrueIcon}
                      {row.value !== true && (
                        <div style={{ color: 'red' }}>
                          <i className="fas fa-times" />
                        </div>
                      )}
                    </>
                  )
              : element.customFalseIcon
              ? (row: any) => (
                  <>
                    {row.value === true && (
                      <div style={{ color: 'green' }}>
                        <i className="fas fa-check" />
                      </div>
                    )}
                    {row.value !== true && element.customFalseIcon}
                  </>
                )
              : (row: any) => (
                  <>
                    {row.value === true && (
                      <div style={{ color: 'green' }}>
                        <i className="fas fa-check" />
                      </div>
                    )}
                    {row.value !== true && (
                      <div style={{ color: 'red' }}>
                        <i className="fas fa-times" />
                      </div>
                    )}
                  </>
                ),
          className: element.className || '',
          style: element.style || {},
          width: element.width || 100,
          headerClassName: element.headerClassName || '',
          sortable: !element.disableSorting,
          // Filter: ({ filter, onChange }: FilterType) => (
          //   <BooleanFilter
          //     filter={filter}
          //     onChange={onChange}
          //     filterable={element.disableFiltering ? false : true}
          //     // localMode={localMode}
          //   />
          // ),
          filterMethod: () =>
            // filterMethod: (filter: Filter, row: any) => {
            // FILTRAGGIO FRONTEND
            // if (localMode) {
            //   if (filter.value.data === '') {
            //     return true
            //   }
            //   if (filter.value.data === 'true') {
            //     return row[filter.id] === true
            //   }
            //   if (filter.value.data === 'false') {
            //     return row[filter.id] === false
            //   } else return false
            // } else {
            true,
          // }
        }
        if (element.elevatedRolesOnly) {
          if (element.overridedElevatedRolesForThisField) {
            // if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
            //   columns.push(el)
            // }
          } else {
            // if (checkUserPermissions(user.role, elevatedRoles)) {
            //   columns.push(el)
            // }
          }
        } else {
          columns.push(el)
        }
        return columns
      case 'date':
        el = {
          Header: element.headerTitle || element.accessor || '',
          accessor: element.accessor || '',
          // Cell: (row: any) => (
          //   <>{format(row.value, element.hideHMS ? 'DD/MM/YYYY' : 'DD/MM/YYYY - HH:mm:ss')}</>
          // ),
          className: element.className ? `${element.className} text-center` : 'text-center',
          style: element.style || {},
          width: element.width || 320,
          headerClassName: element.headerClassName || '',
          sortable: !element.disableSorting,
          // Filter: ({ filter, onChange }: FilterType) => (
          //   <DateFilter
          //     filter={filter}
          //     onChange={onChange}
          //     filterable={element.disableFiltering ? false : true}
          //     // localMode={localMode}
          //   />
          // ),
          // filterMethod: (filter: Filter, row: any) =>
          // FILTRAGGIO FRONTEND
          // localMode
          //   ? row[filter.id]
          //     ? filter.value.data.selector === '='
          //       ? row[filter.id]
          //           .toString()
          //           .toLowerCase()
          //           .includes(filter.value.data.date.toLowerCase())
          //       : filter.value.data.selector === '<='
          //       ? row[filter.id].toString().toLowerCase() <= filter.value.data.date.toLowerCase()
          //       : filter.value.data.selector === '>='
          //       ? row[filter.id].toString().toLowerCase() >= filter.value.data.date.toLowerCase()
          //       : row[filter.id]
          //     : row[filter.id]
          //   : row[filter.id],
        }
        if (element.elevatedRolesOnly) {
          if (element.overridedElevatedRolesForThisField) {
            // if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
            //   columns.push(el)
            // }
          } else {
            // if (checkUserPermissions(user.role, elevatedRoles)) {
            //   columns.push(el)
            // }
          }
        } else {
          columns.push(el)
        }
        return columns
      case 'array':
        el = {
          Header: element.headerTitle || element.accessor || '',
          accessor: element.accessor || '',
          Cell: (row: any) => (
            <>
              {row.value &&
                row.value.length > 0 &&
                `${row.value.length} | ${row.value
                  .map(
                    (subMenu: any, i: number) =>
                      `${subMenu[element.property || 0]}${i !== row.value.length - 1 ? ' - ' : ''}`,
                  )
                  .join('')}`}
              {(typeof row.value === 'undefined' || (row.value && row.value.length === 0)) &&
                'Nessun sottomenu'}
            </>
          ),
          filterable: false,
          className: element.className ? element.className : '',
          style: element.style || {},
          headerClassName: element.headerClassName || '',
        }
        if (element.elevatedRolesOnly) {
          if (element.overridedElevatedRolesForThisField) {
            // if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
            //   columns.push(el)
            // }
          } else {
            // if (checkUserPermissions(user.role, elevatedRoles)) {
            //   columns.push(el)
            // }
          }
        } else {
          columns.push(el)
        }
        return columns
      // case 'externalLink':
      //   el = {
      //     Header: element.headerTitle || '',
      //     accessor: '',
      //     Cell: (row: any) => <ExternalLink {...row} {...element} />,
      //     className:
      //       `${element.className} external-link custom-width` || 'external-link custom-width',
      //     headerStyle: element.style || {},
      //     style: element.style || '',
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
      //     Header: element.headerTitle || 'Azioni',
      //     accessor: '',
      //     className: element.className
      //       ? `${element.className} action-buttons text-center`
      //       : `action-buttons text-center`,
      //     style: element.style || {},
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
          Header: element.headerTitle || element.accessor || '',
          Cell: ({ row }: any) => {
            console.log('row', row)
            console.log('element', element)
            console.log(
              '!',
              element.styleWithCondition
                ? row.original[element.styleWithCondition.condition.property]
                : '',
            )
            return element.styleWithCondition ? (
              row.original[element.styleWithCondition.condition.property] ===
              element.styleWithCondition.condition.value ? (
                <div style={element.styleWithCondition.style}>{row.values[element.accessor]}</div>
              ) : (
                <>{row.values[element.accessor]}</>
              )
            ) : (
              <>{row.values[element.accessor]}</>
            )
          },
          accessor: element.accessor || '',
          className: element.className || '',
          // style: element.style || {},
          // headerStyle: element.style || {},
          headerClassName: element.headerClassName || '',
          styleWithCondition: element.styleWithCondition || null,
          // sortable: !element.disableSorting,
          // Filter: ({ filter, onChange }: FilterType) => (
          // <TextFilter
          //   filter={filter}
          //   onChange={onChange}
          //   placeholder={
          //     element.filterPlaceholder ||
          //     `Cerca per ${(get(element, 'headerTitle', element.accessor) || '').toLowerCase()}`
          //   }
          //   filterable={element.disableFiltering ? false : true}
          //   // localMode={localMode}
          // />
          // ),
          // filterMethod: (filter: Filter, row: any) =>
          //   //FILTRAGGIO FRONTEND
          //   localMode
          //     ? row[filter.id]
          //       ? row[filter.id]
          //           .toString()
          //           .toLowerCase()
          //           .includes(filter.value.data.toLowerCase())
          //       : ''
          //     : undefined,
        }
        if (element.elevatedRolesOnly) {
          if (element.overridedElevatedRolesForThisField) {
            // if (checkUserPermissions(user.role, element.overridedElevatedRolesForThisField)) {
            //   columns.push(el)
            // }
          } else {
            // if (checkUserPermissions(user.role, elevatedRoles)) {
            //   columns.push(el)
            // }
          }
        } else {
          console.log('pusho colonna')
          columns.push(el)
        }
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

export const addFilters = (filters: Filter[]) => {
  const partialUrl = filters.length !== 0 ? '&' : ''
  // filters.map((filter) => {
  //   switch (filter.value.type) {
  //     case 'boolean':
  //       if (filter.value.data) {
  //         return (partialUrl += filter.id + '=' + filter.value.data + '&')
  //       } else {
  //         break
  //       }
  //     case 'date': {
  //       if (filter.value.data && filter.value.data.date) {
  //         if (filter.value.data.selector === '=') {
  //           partialUrl +=
  //             filter.id +
  //             '>=' +
  //             startOfDay(filter.value.data.date).toISOString() +
  //             '&' +
  //             filter.id +
  //             '<=' +
  //             endOfDay(filter.value.data.date).toISOString()
  //         } else {
  //           // partialUrl +=
  //           //   filter.id + filter.value.data.selector + parse(filter.value.data.date).toISOString()
  //         }
  //         return partialUrl
  //       } else {
  //         break
  //       }
  //     }
  //     case 'text': {
  //       if (filter.value.data) {
  //         return (partialUrl += filter.id + '=/.*' + filter.value.data + '.*/i&')
  //       } else {
  //         break
  //       }
  //     }
  //     default: {
  //       return {}
  //     }
  //   }
  // })
  return partialUrl.slice(0, -1) === '&' ? partialUrl.slice(0, -1) : partialUrl
}

export const addOmniQuery = (query: string) => (query ? `&q=${query}` : '')
