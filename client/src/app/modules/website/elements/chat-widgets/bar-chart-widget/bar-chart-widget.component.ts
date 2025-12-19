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
    if (bar.variant && bar.variant !== 'default') {
      return `${base} ${base}--${bar.variant}`
    }
    return base
  }
}
