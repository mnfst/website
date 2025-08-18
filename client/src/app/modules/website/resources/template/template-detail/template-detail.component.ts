import { NgClass, NgFor, NgIf } from '@angular/common'
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import yaml from 'highlight.js/lib/languages/yaml'
import { environment } from '../../../../../../environments/environment'
import { SeoService } from '../../../../../common/services/seo.service'
import { Endpoint } from '../../../../../types/endpoint.interface'
import { Template } from '../../../../../types/template.interface'
import { templates } from '../../../resources/template/templates.content'
import { templateDetailFAQContent } from './template-detail-faq.content'

hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('javascript', javascript)

@Component({
  selector: 'app-template-detail',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink],
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements AfterViewInit {
  @ViewChildren('codeBlock') codeBlocks!: QueryList<ElementRef<HTMLElement>>

  template!: Template
  faqContent = templateDetailFAQContent
  selectedTab: 'db' | 'api' | 'code' = 'db'
  selectedFile = 'manifest.yml'

  endpoints: Endpoint[] = []
  filteredEndpoints: Endpoint[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1) Cas "comme les intégrations" (route statique générée via templates.map): data.template
    const dataTemplate = this.activatedRoute.snapshot.data['template'] as
      | Template
      | undefined
    if (dataTemplate) {
      this.template = dataTemplate
    } else {
      // 2) Cas route dynamique: templates/:slug
      const slug = this.activatedRoute.snapshot.params['slug']
      if (slug) {
        const found = templates.find((t) => t.slug === slug)
        if (found) this.template = found
      }
    }

    // Toujours rien ? -> 404
    if (!this.template) {
      this.router.navigate(['/404'])
      return
    }

    // SEO
    this.seoService.updateMetadata({
      title: `${this.template.name} - Manifest`,
      description: this.template.excerpt,
      keywords: `manifest, ${this.template.tags?.join(', ') ?? ''}`,
      canonicalUrl: `${environment.baseUrl}/templates/${this.template.slug}`,
      og: { image: `${environment.baseUrl}/assets/images/og-image.png` }
    })

    // OpenAPI → endpoints
    const apiDocPaths: any = (this.template as any).apiDoc?.paths
    if (apiDocPaths) {
      this.endpoints = Object.entries(apiDocPaths).flatMap(
        ([path, pathItem]: any) => {
          const methods = Object.entries(pathItem).filter(
            ([method]) => !['$ref', 'servers', 'parameters'].includes(method)
          )
          return methods.map(([method, operation]: any) => ({
            path,
            method: String(method).toUpperCase(),
            summary: operation.summary || '',
            description: operation.description || '',
            auth: operation.security
              ? operation.security
                  .map((s: any) => Object.keys(s).join(', '))
                  .join(', ')
              : undefined
          }))
        }
      )
      this.filterEndpoints({ value: 'Public' })
    }
  }

  filterEndpoints(eventTarget: any) {
    const searchTerm = String(eventTarget.value || '').toLowerCase()
    if (searchTerm === '') {
      this.filteredEndpoints = this.endpoints
    } else if (searchTerm === 'public') {
      this.filteredEndpoints = this.endpoints.filter((e) => !e.auth)
    } else {
      this.filteredEndpoints = this.endpoints.filter((e) =>
        e.auth?.toLowerCase().includes(searchTerm)
      )
    }
  }

  ngAfterViewInit(): void {
    // Applique highlight.js à tous les <code #codeBlock>
    // (Assure-toi que tes blocs HTML utilisent bien #codeBlock et contiennent le code en texte)
    this.codeBlocks.forEach((block) => {
      hljs.highlightElement(block.nativeElement)
    })
  }
}
