import { Component } from '@angular/core'
import { McpHeroComponent } from './elements/mcp-hero/mcp-hero.component'
import { UseCasesComponent } from './elements/use-cases/use-cases.component'
import { MeshGradientBackgroundComponent } from '../../elements/mesh-gradient-background/mesh-gradient-background.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [McpHeroComponent, UseCasesComponent, MeshGradientBackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
