import { Component } from '@angular/core'
import { Integration } from '../../../../../types/integration.interface'
import { integrations } from '../integrations.content'
import { NgFor } from '@angular/common'
import { IntegrationCardComponent } from '../integration-card/integration-card.component'

@Component({
  selector: 'app-integration-list',
  imports: [NgFor, IntegrationCardComponent],
  templateUrl: './integration-list.component.html',
  styleUrl: './integration-list.component.scss'
})
export class IntegrationListComponent {
  storageIntegrations: Integration[] = integrations.filter(
    (i) => i.category === 'storage'
  )
  deploymentIntegrations: Integration[] = integrations.filter(
    (i) => i.category === 'deployment'
  )
}
