import { CommonModule, NgFor, NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { environment } from '../../../../../../environments/environment'
import { SeoService } from '../../../../../common/services/seo.service'
import { Integration } from '../../../../../types/integration.interface'
import { integrations } from '../integrations.content'

@Component({
  selector: 'app-integration-detail',
  imports: [NgIf, NgFor, RouterLink, CommonModule],
  templateUrl: './integration-detail.component.html',
  styleUrl: './integration-detail.component.scss'
})
export class IntegrationDetailComponent {
  integration: Integration | undefined
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const slug = params['slug']
      this.integration = integrations.find((i) => i.slug === slug)

      if (!this.integration) {
        this.router.navigate(['/404'])
      }

      this.seoService.updateMetadata({
        title: `${this.integration.title} - Manifest`,
        description: this.integration.excerpt,
        keywords: `${this.integration.title}, manifest, integration`,
        canonicalUrl: `${environment.baseUrl}/integrations/${this.integration.slug}`,
        og: {
          image: `${environment.baseUrl}${this.integration.cover}`,
          type: 'website'
        }
      })
    })
  }
}
