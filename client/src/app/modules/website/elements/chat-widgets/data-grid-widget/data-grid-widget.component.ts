import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataGridData } from '../models/widget.models'

@Component({
  selector: 'app-data-grid-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid-widget.component.html',
  styleUrl: './data-grid-widget.component.scss'
})
export class DataGridWidgetComponent {
  @Input() data!: DataGridData
  @Input() theme: 'dark' | 'light' = 'dark'
}
