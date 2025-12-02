import { Component } from '@angular/core'
import { McpHeroComponent } from './elements/mcp-hero/mcp-hero.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [McpHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
