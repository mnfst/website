import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  CompositeWidgetConfig,
  StatGridData,
  BarChartData,
  DataTableData,
  DataGridData,
  ActionButtonsData,
  PipelineData,
  DealCardsData,
  FlightCardsData
} from '../models/widget.models'
import { StatGridWidgetComponent } from '../stat-grid-widget/stat-grid-widget.component'
import { BarChartWidgetComponent } from '../bar-chart-widget/bar-chart-widget.component'
import { DataTableWidgetComponent } from '../data-table-widget/data-table-widget.component'
import { DataGridWidgetComponent } from '../data-grid-widget/data-grid-widget.component'
import { ActionButtonsWidgetComponent } from '../action-buttons-widget/action-buttons-widget.component'
import { PipelineWidgetComponent } from '../pipeline-widget/pipeline-widget.component'
import { DealCardsWidgetComponent } from '../deal-cards-widget/deal-cards-widget.component'
import { FlightCardsWidgetComponent } from '../flight-cards-widget/flight-cards-widget.component'

@Component({
  selector: 'app-widget-container',
  standalone: true,
  imports: [
    CommonModule,
    StatGridWidgetComponent,
    BarChartWidgetComponent,
    DataTableWidgetComponent,
    DataGridWidgetComponent,
    ActionButtonsWidgetComponent,
    PipelineWidgetComponent,
    DealCardsWidgetComponent,
    FlightCardsWidgetComponent
  ],
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss'
})
export class WidgetContainerComponent {
  @Input() config!: CompositeWidgetConfig

  asStatGrid(data: unknown): StatGridData {
    return data as StatGridData
  }

  asBarChart(data: unknown): BarChartData {
    return data as BarChartData
  }

  asDataTable(data: unknown): DataTableData {
    return data as DataTableData
  }

  asDataGrid(data: unknown): DataGridData {
    return data as DataGridData
  }

  asActionButtons(data: unknown): ActionButtonsData {
    return data as ActionButtonsData
  }

  asPipeline(data: unknown): PipelineData {
    return data as PipelineData
  }

  asDealCards(data: unknown): DealCardsData {
    return data as DealCardsData
  }

  asFlightCards(data: unknown): FlightCardsData {
    return data as FlightCardsData
  }
}
