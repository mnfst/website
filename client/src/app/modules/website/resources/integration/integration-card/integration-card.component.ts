import { Component, Input } from '@angular/core'
import { Integration } from '../../../../../types/integration.interface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-integration-card',
  imports: [RouterLink],
  templateUrl: './integration-card.component.html',
  styleUrl: './integration-card.component.scss'
})
export class IntegrationCardComponent {
  @Input() integration: Integration
}
