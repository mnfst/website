import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Template } from '../../../../../types/template.interface'

@Component({
  selector: 'app-template-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './template-card.component.html',
  styleUrl: './template-card.component.scss'
})
export class TemplateCardComponent {
  @Input() template: Template | undefined

  // light ou dark (par défaut "dark")
  @Input() theme: 'light' | 'dark' = 'dark'
}
