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
  subtitle?: string
  bars: BarChartItem[]
  maxValue?: number
  valueFormat?: 'number' | 'percent' | 'currency'
  theme?: 'dark' | 'marketing'
}

export interface BarChartItem {
  name: string
  value: number
  variant?: 'default' | 'warning' | 'danger' | 'marketing'
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

// Flight Cards Widget (Skyscanner-style flight results)
export interface FlightCardsData {
  type: 'flight-cards'
  flights: FlightCard[]
}

export interface FlightLeg {
  airline: string
  airlineLogo?: string
  departureTime: string
  arrivalTime: string
  departureCity: string
  arrivalCity: string
  duration: string
  stops: string
  stopCity?: string
  operatedBy?: string
}

export interface FlightCard {
  id: string
  airline: string
  airlineLogo: string
  departureTime: string
  arrivalTime: string
  departureCity: string
  arrivalCity: string
  duration: string
  stops: string
  price: string
  isBestValue?: boolean
  // New fields for round-trip cards
  dealsCount?: number
  returnFlight?: FlightLeg
  operatedBy?: string
  stopCity?: string
}

// Deployment Timeline Widget (Bugsnag-style)
export interface DeploymentTimelineData {
  type: 'deployment-timeline'
  deployments: DeploymentItem[]
}

export interface DeploymentItem {
  id: string
  version: string
  commit?: string
  timestamp: string
  status: 'success' | 'failed' | 'rolling-back'
  environment?: string
  errorCount: number
  warningCount?: number
  usersImpacted?: number
  errors?: DeploymentError[]
}

export interface DeploymentError {
  id: string
  message: string
  type: string
  count: number
  severity: 'critical' | 'warning' | 'info'
  firstSeen: string
  lastSeen?: string
  affectedEndpoint?: string
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
  | FlightCardsData
  | DeploymentTimelineData

// App Bar configuration (displayed above the widget)
export interface AppBarConfig {
  name: string
  logo?: 'manifest' | 'sales' | 'skyscanner' | 'marketing' | 'devops' | 'custom'
  customLogoSvg?: string
}

// Composite widget configuration
export interface CompositeWidgetConfig {
  style: 'hris' | 'browser' | 'sales' | 'skyscanner' | 'marketing' | 'devops'
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
