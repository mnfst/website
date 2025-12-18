import { Component } from '@angular/core'
import { WaitingListFormComponent } from '../../../../../../common/partials/waiting-list-form/waiting-list-form.component'
import { DiagramComponent } from './diagram/diagram.component'

@Component({
  selector: 'app-mcp-hero',
  standalone: true,
  imports: [WaitingListFormComponent, DiagramComponent],
  templateUrl: './mcp-hero.component.html',
  styleUrls: ['./mcp-hero.component.scss']
})
export class McpHeroComponent {}
