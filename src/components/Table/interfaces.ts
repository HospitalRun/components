import { ColumnInstance, UseSortByColumnProps, UseFiltersColumnProps } from 'react-table'

export interface TableProperties {
  tableClassname: string
  columns: CustomColumn[]
}

export interface CustomColumn {
  accessor: string
  type: 'string' | 'boolean' | 'date'
  title: string
  label?: string
  filterPlaceholder?: string
  headerClassName?: string
  className?: string
  disableFiltering?: boolean
  disableSorting?: boolean
  styles?: ColumnStyle[]
  customTrueIcon?: JSX.Element
  customFalseIcon?: JSX.Element
  undefinedMeansFalse?: boolean
}

export interface ColumnStyle {
  conditions?: any
  style: StyleObject
}

type StyleObject = Record<string, any>

export interface DefaultColumnFilterOptions {
  column: TableColumn<object>
}

interface CustomFilters {
  filterPlaceholder?: string
}

interface TableColumn<D extends object = {}>
  extends ColumnInstance<D>,
    UseSortByColumnProps<D>,
    UseFiltersColumnProps<D>,
    CustomFilters {}

export type Element = any

export type Data = object

interface CustomSubColumn {
  headerClassName?: string
  disableFiltering?: boolean
  disableSorting?: boolean
}

export interface GeneratedColumn extends CustomSubColumn, Omit<ColumnInstance, 'accessor'> {}
