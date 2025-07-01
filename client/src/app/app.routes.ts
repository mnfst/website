import { Routes } from '@angular/router'
import { environment } from '../environments/environment'
import { BrandAssetsComponent } from './modules/website/pages/brand-assets/brand-assets.component'
import { Error404Component } from './modules/website/pages/error-404/error-404.component'
import { FaqComponent } from './modules/website/pages/faq/faq.component'
import { HomeComponent } from './modules/website/pages/home/home.component'
import { PartnerWithUsComponent } from './modules/website/pages/partner-with-us/partner-with-us.component'
import { PrivacyPolicyComponent } from './modules/website/pages/privacy-policy/privacy-policy.component'
import { SponsorComponent } from './modules/website/pages/sponsor/sponsor.component'
import { IntegrationDetailComponent } from './modules/website/resources/integration/integration-detail/integration-detail.component'
import { IntegrationListComponent } from './modules/website/resources/integration/integration-list/integration-list.component'
import { integrations } from './modules/website/resources/integration/integrations.content'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'Manifest - The backend for AI code editors',
        description:
          'A backend made for AI-powered coding with auth, storage, logic and all the essentials',
        keywords:
          'backend, micro-backend, AI-powered editor, backend for LLMs, AI coding tools backend, backend for vibe coding, backend for modern workflows, manifest, admin panel, rest api, auth, storage',
        canonicalUrl: environment.baseUrl,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: environment.baseUrl
        }
      }
    }
  },
  {
    path: 'brand-assets',
    component: BrandAssetsComponent,
    data: {
      seo: {
        title: 'Brand Assets - Manifest',
        description:
          'Download the official brand assets for Manifest, including logos and more.',
        keywords: 'brand assets, logos, manifest',
        canonicalUrl: `${environment.baseUrl}/brand-assets`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/brand-assets`
        }
      }
    }
  },
  {
    path: 'partnerships',
    component: PartnerWithUsComponent,
    data: {
      seo: {
        title: 'Partnerships - Manifest',
        description: 'Become a partner with Manifest and grow together.',
        keywords: 'partnerships, manifest, grow together',
        canonicalUrl: `${environment.baseUrl}/partnerships`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/partnerships`
        }
      }
    }
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
    data: {
      seo: {
        title: 'Privacy Policy - Manifest',
        description:
          'Read our Privacy Policy to understand how we collect, use, and protect your data on Manifest.',
        keywords: 'privacy policy, manifest, data handling',
        canonicalUrl: `${environment.baseUrl}/privacy`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/privacy`
        }
      }
    }
  },

  {
    path: 'integrations',
    component: IntegrationListComponent,
    data: {
      seo: {
        title: 'Integrations - Manifest',
        description:
          'Manifest integrates with many of your favorite third-party services.',
        keywords: 'integrations, manifest, backend enhancements',
        canonicalUrl: `${environment.baseUrl}/integrations`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/integrations`
        }
      }
    }
  },
  ...integrations.map((integration) => ({
    path: `integrations/${integration.slug}`,
    component: IntegrationDetailComponent,
    data: {
      integration,
      seo: {
        title: `${integration.title} - Manifest`,
        description: integration.excerpt,
        keywords: `${integration.title}, manifest, integration`,
        canonicalUrl: `${environment.baseUrl}/integrations/${integration.slug}`,
        og: {
          image: `${environment.baseUrl}${integration.cover}`,
          type: 'website',
          url: `${environment.baseUrl}/integrations/${integration.slug}`
        }
      }
    }
  })),
  {
    path: 'sponsors',
    component: SponsorComponent,
    data: {
      seo: {
        title: 'Sponsors - Manifest',
        description:
          'Become a sponsor of Manifest and help us build the future of backend development.',
        keywords: 'sponsors, manifest, support open source',
        canonicalUrl: `${environment.baseUrl}/sponsors`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/sponsors`
        }
      }
    }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      seo: {
        title: 'FAQ - Manifest',
        description: 'Frequently asked questions about Manifest',
        keywords: 'brand assets, logos, manifest',
        canonicalUrl: `${environment.baseUrl}/faq`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/faq`
        }
      }
    }
  },
  {
    path: '404',
    component: Error404Component,
    data: {
      seo: {
        title: '404 Page Not Found - Manifest',
        description: 'The page you are looking for does not exist.',
        keywords: '404, page not found, manifest',
        canonicalUrl: `${environment.baseUrl}/404`,
        og: {
          image: `${environment.baseUrl}/assets/images/og-image.png`,
          type: 'website',
          url: `${environment.baseUrl}/404`
        }
      }
    }
  },
  {
    path: '**',
    redirectTo: '404'
  }
]
