import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataTableData, TableCell, TableColumn } from '../models/widget.models'

@Component({
  selector: 'app-data-table-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table-widget.component.html',
  styleUrl: './data-table-widget.component.scss'
})
export class DataTableWidgetComponent {
  @Input() data!: DataTableData

  getCellClass(column: TableColumn): string {
    return column.align === 'right' ? 'data-table__cell--right' : ''
  }

  getBadgeClass(cell: TableCell): string {
    const base = 'data-table__badge'
    if (cell.variant && cell.variant !== 'default') {
      return `${base} ${base}--${cell.variant}`
    }
    return base
  }
}
