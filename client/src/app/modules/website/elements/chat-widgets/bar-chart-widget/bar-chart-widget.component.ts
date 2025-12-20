import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartData, BarChartItem } from '../models/widget.models'

@Component({
  selector: 'app-bar-chart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart-widget.component.html',
  styleUrl: './bar-chart-widget.component.scss'
})
export class BarChartWidgetComponent implements OnInit {
  @Input() data!: BarChartData
  @Input() theme: 'dark' | 'light' = 'dark'

  maxValue = 0

  ngOnInit(): void {
    this.maxValue =
      this.data.maxValue || Math.max(...this.data.bars.map((b) => b.value))
  }

  getBarWidth(bar: BarChartItem): number {
    return (bar.value / this.maxValue) * 100
  }

  getBarClass(bar: BarChartItem): string {
    const base = 'bar-chart__bar'
    const variant = bar.variant || (this.data.theme === 'marketing' ? 'marketing' : 'default')
    if (variant && variant !== 'default') {
      return `${base} ${base}--${variant}`
    }
    return base
  }

  getChartClass(): string {
    const base = 'bar-chart'
    if (this.data.theme === 'marketing') {
      return `${base} ${base}--marketing`
    }
    return base
  }

  formatValue(value: number): string {
    switch (this.data.valueFormat) {
      case 'percent':
        return `${value}%`
      case 'currency':
        return `$${value.toLocaleString()}`
      default:
        return value.toString()
    }
  }
}
