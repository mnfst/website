import { NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { Template } from '../../../../../types/template.interface'
import { TemplateCardComponent } from '../template-card/template-card.component'
import { templates } from '../templates.content'

@Component({
  selector: 'app-template-list',
  imports: [NgFor, TemplateCardComponent],
  templateUrl: './template-list.component.html',
  styleUrl: './template-list.component.scss'
})
export class TemplateListComponent {
  templates: Template[] = templates
}
