import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StatGridData, StatItem } from '../models/widget.models'

@Component({
  selector: 'app-stat-grid-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-grid-widget.component.html',
  styleUrl: './stat-grid-widget.component.scss'
})
export class StatGridWidgetComponent {
  @Input() data!: StatGridData
  @Input() theme: 'dark' | 'light' = 'dark'

  getStatClass(stat: StatItem): string {
    const classes = ['stat-grid__stat']
    if (stat.variant === 'large') classes.push('stat-grid__stat--large')
    return classes.join(' ')
  }

  getValueClass(stat: StatItem): string {
    const base = 'stat-grid__value'
    if (stat.variant && stat.variant !== 'large' && stat.variant !== 'default') {
      return `${base} ${base}--${stat.variant}`
    }
    return base
  }
}
