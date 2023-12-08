import { Component } from '@angular/core'
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser'
import { ActivatedRoute, Data } from '@angular/router'
import { content } from './content'

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.scss'
})
export class IntegrationComponent {
  framework: string
  content: {
    title: string
    h1: string
    description: string
    body: string
    cta: string
    ctaLink: string
  }
  bodyHtml: SafeHtml

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.framework = data['framework']
      this.content = content[this.framework as keyof typeof content]
      this.bodyHtml = this.sanitizer.bypassSecurityTrustHtml(this.content.body)

      this.title.setTitle(this.content.title)

      this.meta.updateTag({
        name: 'og:title',
        content: this.content.title
      })
      this.meta.updateTag({
        name: 'description',
        content: this.content.description
      })
      this.meta.updateTag({
        name: 'og:description',
        content: this.content.description
      })
    })
  }
}
