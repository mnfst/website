import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-mcp-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcp-hero.component.html',
  styleUrls: ['./mcp-hero.component.scss']
})
export class McpHeroComponent {
  partnerLogos = [
    {
      name: 'PostgreSQL',
      src: './assets/images/partners/postgresql.svg',
      alt: 'PostgreSQL'
    },
    {
      name: 'MySQL',
      src: './assets/images/partners/mysql.svg',
      alt: 'MySQL'
    },
    {
      name: 'MongoDB',
      src: './assets/images/partners/mongodb.svg',
      alt: 'MongoDB'
    }
  ]

  onGetDemo(): void {
    window.open('https://calendly.com/sebastien-manifest/30min', '_blank')
  }
}