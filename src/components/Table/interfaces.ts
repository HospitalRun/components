// import { RowInfo } from 'react-table'

export interface Filter {
  id: string
  value: Value
}

export interface FilterType {
  filter: Filter
  onChange(): (value: Value) => void
}

interface Value {
  type: string
  data: any
}

export interface SortType {
  id: string
  desc: boolean
}

export interface TableProperties {
  headerTitle?: string
  newElementButtonLabel?: string
  newElementButtonRoute: string
  elevatedRoles?: string[]
  tableClassNames?: string
  hideHeader?: boolean
  hidePagination?: boolean
  showOmniSearchBox?: boolean
  showClearAllFilters?: boolean
  showWithoutRecords?: boolean
  customNoResultsText?: string
  defaultPageSize?: number
  pageSizeOptions?: number[]
  prefixUrl?: string
  // rowClickCallback?(rowInfo: RowInfo): void
  // rowStyling?(state: any, rowInfo: RowInfo, column: any): any
  fields: Field[]
}

export interface Field {
  accessor: string
  type: 'string' | 'boolean' | 'date' | 'array' | 'externalLink' | 'actionButtons'
  headerTitle: string
  label?: string
  filterPlaceholder?: string
  headerClassName?: string
  className?: string
  disableFiltering?: boolean
  disableSorting?: boolean
  style?: Record<string, any>
  pathPrefix?: string
  path?: Record<string, any>
  openInNewTab?: boolean
  buttons?: GenericButton[]
  elevatedRolesOnly?: boolean
  overridedElevatedRolesForThisField?: string[]
  hideHMS?: boolean
  width?: number
  property?: string
  styleWithCondition?: StyleWithCondition
  customTrueIcon?: JSX.Element
  customFalseIcon?: JSX.Element
  undefinedMeansFalse?: boolean
}

interface StyleWithCondition {
  condition: {
    property: string
    value: string
  }
  style: any
}

interface GenericButton {
  type?: string
  label?: string
  color?: string
  icon?: string
  className?: string
  path?: Record<string, any>
  LinkElement?: any
  parameterForAction?: string
  action?(_id: string): void
}

export interface GetResourcesRemotelyOptions {
  url?: string
  externals?: {
    localField: string
    externalCollection: string
    externalField: string
    transformFunction?(externalData: any): string
  }[]
}
