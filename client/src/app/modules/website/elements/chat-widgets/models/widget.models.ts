// Widget Badge
export interface WidgetBadge {
  label: string
  type?: 'live' | 'synced' | 'api'
}

// Stat Grid Widget
export interface StatGridData {
  type: 'stat-grid'
  stats: StatItem[]
}

export interface StatItem {
  value: string | number
  label: string
  variant?: 'default' | 'accent' | 'warning' | 'danger' | 'large'
}

// Bar Chart Widget
export interface BarChartData {
  type: 'bar-chart'
  title?: string
  bars: BarChartItem[]
  maxValue?: number
}

export interface BarChartItem {
  name: string
  value: number
  variant?: 'default' | 'warning' | 'danger'
}

// Data Table Widget
export interface DataTableData {
  type: 'data-table'
  columns: TableColumn[]
  rows: TableRow[]
}

export interface TableColumn {
  key: string
  label: string
  align?: 'left' | 'right'
}

export interface TableRow {
  [key: string]: TableCell
}

export interface TableCell {
  value: string | number
  variant?: 'default' | 'warning' | 'danger' | 'success'
  type?: 'text' | 'badge'
}

// Data Grid Widget (simple key-value rows)
export interface DataGridData {
  type: 'data-grid'
  rows: DataGridRow[]
}

export interface DataGridRow {
  label: string
  value: string
  color?: string
}

// Action Buttons Widget
export interface ActionButtonsData {
  type: 'action-buttons'
  buttons: ActionButton[]
}

export interface ActionButton {
  label: string
  icon?: 'email' | 'clock' | 'download' | 'refresh' | 'check'
  variant?: 'default' | 'primary'
}

// Union type for all widgets
export type WidgetData =
  | StatGridData
  | BarChartData
  | DataTableData
  | DataGridData
  | ActionButtonsData

// Composite widget configuration
export interface CompositeWidgetConfig {
  style: 'hris' | 'browser'
  header?: {
    title?: string
    subtitle?: string
    badge?: WidgetBadge
    urlBar?: string
    icon?: string
  }
  sections: WidgetData[]
  footer?: {
    source?: string
    badge?: string
    updatedAt?: string
  }
}
