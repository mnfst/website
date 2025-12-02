import { Component } from '@angular/core'

@Component({
  selector: 'app-diagram',
  standalone: true,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent {
  isSlotSelected = false

  onSlotClick(): void {
    if (!this.isSlotSelected) {
      this.isSlotSelected = true
    }
  }
}