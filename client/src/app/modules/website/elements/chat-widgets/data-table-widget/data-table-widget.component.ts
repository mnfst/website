import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  DataTableData,
  TableCell,
  TableColumn,
  TableRow,
  TableRowDetail
} from '../models/widget.models'

@Component({
  selector: 'app-data-table-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table-widget.component.html',
  styleUrl: './data-table-widget.component.scss'
})
export class DataTableWidgetComponent implements OnInit {
  @Input() data!: DataTableData
  @Input() theme: 'dark' | 'light' = 'dark'

  expandedRows: Set<number> = new Set()

  ngOnInit(): void {
    // Expand first row by default when accordion is enabled
    if (this.data.accordion && this.data.rows.length > 0) {
      this.expandedRows.add(0)
    }
  }

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

  toggleRow(index: number): void {
    if (this.expandedRows.has(index)) {
      this.expandedRows.delete(index)
    } else {
      this.expandedRows.add(index)
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedRows.has(index)
  }

  getCell(row: TableRow, key: string): TableCell | undefined {
    const value = row[key]
    if (value && typeof value === 'object' && 'value' in value) {
      return value as TableCell
    }
    return undefined
  }

  getDetails(row: TableRow): TableRowDetail[] {
    return row._details || []
  }

  hasDetails(row: TableRow): boolean {
    return !!(row._details && row._details.length > 0)
  }
}
