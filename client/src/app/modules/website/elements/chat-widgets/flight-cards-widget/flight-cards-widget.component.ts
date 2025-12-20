import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlightCardsData } from '../models/widget.models'

@Component({
  selector: 'app-flight-cards-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-cards-widget.component.html',
  styleUrl: './flight-cards-widget.component.scss'
})
export class FlightCardsWidgetComponent {
  @Input() data!: FlightCardsData
  @Input() theme: 'dark' | 'light' = 'dark'
}
