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
  accordion?: boolean
}

export interface TableColumn {
  key: string
  label: string
  align?: 'left' | 'right'
}

export interface TableRow {
  [key: string]: TableCell | TableRowDetail[] | undefined
  _details?: TableRowDetail[]
}

export interface TableCell {
  value: string | number
  variant?: 'default' | 'warning' | 'danger' | 'success'
  type?: 'text' | 'badge'
}

export interface TableRowDetail {
  name: string
  role?: string
  date: string
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
  icon?: 'email' | 'clock' | 'download' | 'refresh' | 'check' | 'phone' | 'calendar'
  variant?: 'default' | 'primary' | 'success'
}

// Pipeline Widget (Sales-focused horizontal stages)
export interface PipelineData {
  type: 'pipeline'
  stages: PipelineStage[]
  activeStage?: string
}

export interface PipelineStage {
  id: string
  label: string
  count: number
  value: string
  variant?: 'default' | 'active' | 'success' | 'warning' | 'danger'
}

// Deal Cards Widget (Sales deal cards)
export interface DealCardsData {
  type: 'deal-cards'
  deals: DealCard[]
}

export interface DealCard {
  id: string
  company: string
  value: string
  stage: string
  owner: string
  nextStep: string
  daysInStage: number
  health: 'healthy' | 'at-risk' | 'critical'
}

// Union type for all widgets
export type WidgetData =
  | StatGridData
  | BarChartData
  | DataTableData
  | DataGridData
  | ActionButtonsData
  | PipelineData
  | DealCardsData

// App Bar configuration (displayed above the widget)
export interface AppBarConfig {
  name: string
  logo?: 'manifest' | 'sales' | 'custom'
  customLogoSvg?: string
}

// Composite widget configuration
export interface CompositeWidgetConfig {
  style: 'hris' | 'browser' | 'sales'
  appBar?: AppBarConfig
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
