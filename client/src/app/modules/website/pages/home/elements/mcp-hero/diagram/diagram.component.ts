import { Component } from '@angular/core'

@Component({
  selector: 'app-diagram',
  standalone: true,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent {
  selectedSlotId: string | null = null

  onSlotClick(slotId: string): void {
    if (!this.selectedSlotId) {
      this.selectedSlotId = slotId
    }
  }
}