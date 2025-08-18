import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import hljs from 'highlight.js/lib/core'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('yaml', yaml)

@Component({
  selector: 'app-live-code-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-code-hero.component.html',
  styleUrls: ['./live-code-hero.component.scss']
})
export class LiveCodeHeroComponent implements AfterViewInit {
  @ViewChild('codeBlock', { static: false }) codeBlock!: ElementRef<HTMLElement>

  yamlCode: string = `name: Contact Form Submission Backend

entities:
  Contact:
    properties:
      - { name: firstName, type: string }
      - { name: lastName, type: string, validation: { maxLength: 50} }
      - { name: email, type: email, validation: { required: true } }
      - { name: message, type: text }
    policies:
      create:
        - access: public
    middlewares:
      beforeCreate:
        - handler: sendEmail`

  ngAfterViewInit(): void {
    const el = this.codeBlock?.nativeElement
    if (el) {
      const result = hljs.highlight(this.yamlCode, { language: 'yaml' })
      el.innerHTML = result.value
    }
  }
}
