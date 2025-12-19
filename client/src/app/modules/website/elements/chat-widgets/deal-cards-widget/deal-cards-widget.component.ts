import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DealCardsData, DealCard } from '../models/widget.models'

@Component({
  selector: 'app-deal-cards-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deal-cards-widget.component.html',
  styleUrl: './deal-cards-widget.component.scss'
})
export class DealCardsWidgetComponent {
  @Input() data!: DealCardsData
  @Input() theme: 'dark' | 'light' = 'dark'

  getHealthClass(health: DealCard['health']): string {
    const base = 'deal-card__health'
    return `${base} ${base}--${health}`
  }

  getHealthLabel(health: DealCard['health']): string {
    switch (health) {
      case 'healthy':
        return 'On Track'
      case 'at-risk':
        return 'At Risk'
      case 'critical':
        return 'Critical'
      default:
        return ''
    }
  }
}
