import { Component } from '@angular/core'
import { DiagramComponent } from './diagram/diagram.component'

@Component({
  selector: 'app-mcp-hero',
  standalone: true,
  imports: [DiagramComponent],
  templateUrl: './mcp-hero.component.html',
  styleUrls: ['./mcp-hero.component.scss']
})
export class McpHeroComponent {}
