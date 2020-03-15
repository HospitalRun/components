import React from 'react'
import { get } from 'lodash'
import { CellProps } from 'react-table'
import { CustomColumn, ColumnStyle, DefaultColumnFilterOptions, Element } from './interfaces'
import { DateTimePicker } from '../DateTimePicker'

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
    const opt: string[] = []
    preFilteredRows.forEach((row) => {
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
      onChange={(date: Date) => {
        setFilter(date.toString())
      }}
      selected={filterValue ? new Date(filterValue) : new Date()}
      timeIntervals={30}
      withPortal={false}
    />
  </div>
)

export const generateColumns = (columns: CustomColumn[]) => {
  const generatedColumns: Element[] = []
  let el: Element

  columns.map((element) => {
    switch (get(element, 'type', '')) {
      case 'boolean':
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          Cell:
            element.undefinedMeansFalse === false
              ? element.customTrueIcon
                ? element.customFalseIcon
                  ? ({ row }: CellProps<object>) => (
                      <>
                        {row.values[element.accessor] === true && element.customTrueIcon}
                        {row.values[element.accessor] === false && element.customFalseIcon}
                        {row.values[element.accessor] !== true &&
                          row.values[element.accessor] !== false && <div />}
                      </>
                    )
                  : ({ row }: CellProps<object>) => (
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
                ? ({ row }: CellProps<object>) => (
                    <>
                      {row.values[element.accessor] === true && (
                        <div style={{ color: 'green' }}>true</div>
                      )}
                      {row.values[element.accessor] === false && element.customFalseIcon}
                      {row.values[element.accessor] !== true &&
                        row.values[element.accessor] !== false && <div />}
                    </>
                  )
                : ({ row }: CellProps<object>) => (
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
                ? ({ row }: CellProps<object>) => (
                    <>
                      {row.values[element.accessor] === true && element.customTrueIcon}
                      {row.values[element.accessor] !== true && element.customFalseIcon}
                    </>
                  )
                : ({ row }: CellProps<object>) => (
                    <>
                      {row.values[element.accessor] === true && element.customTrueIcon}
                      {row.values[element.accessor] !== true && (
                        <div style={{ color: 'red' }}>false</div>
                      )}
                    </>
                  )
              : element.customFalseIcon
              ? ({ row }: CellProps<object>) => (
                  <>
                    {row.values[element.accessor] === true && (
                      <div style={{ color: 'green' }}>true</div>
                    )}
                    {row.values[element.accessor] !== true && element.customFalseIcon}
                  </>
                )
              : ({ row }: CellProps<object>) => (
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
          headerClassName: element.headerClassName || '',
          disableSorting: element.disableSorting,
          disableFiltering: element.disableFiltering,
          Filter: SelectColumnFilter,
        }
        generatedColumns.push(el)
        return generatedColumns
      case 'date':
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          className: element.className ? `${element.className} text-center` : 'text-center',
          headerClassName: element.headerClassName || '',
          disableSorting: element.disableSorting,
          disableFiltering: element.disableFiltering,
          filterPlaceholder: element.filterPlaceholder || '',
          Filter: DateColumnFilter,
        }
        generatedColumns.push(el)
        return generatedColumns
      default:
        el = {
          Header: element.title || element.accessor || '',
          accessor: element.accessor || '',
          Cell: ({ row }: CellProps<object>) => {
            let resultingStyle = {}
            let applyStyle = true
            if (element.styles && element.styles.length) {
              element.styles.forEach((columnsStyle: ColumnStyle) => {
                if (columnsStyle.conditions) {
                  // TODO check conditions and eventually toggle applyStyle
                  applyStyle = true
                }
                if (applyStyle) {
                  resultingStyle = { ...resultingStyle, ...columnsStyle.style }
                }
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
        generatedColumns.push(el)
        return generatedColumns
    }
  })
  return generatedColumns
}
