import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActionButtonsData, ActionButton } from '../models/widget.models'

@Component({
  selector: 'app-action-buttons-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-buttons-widget.component.html',
  styleUrl: './action-buttons-widget.component.scss'
})
export class ActionButtonsWidgetComponent {
  @Input() data!: ActionButtonsData

  getButtonClass(button: ActionButton): string {
    const base = 'action-buttons__btn'
    if (button.variant === 'primary') {
      return `${base} ${base}--primary`
    }
    return base
  }
}
