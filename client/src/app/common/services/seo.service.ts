import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { filter, map, mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Initialize the SEO service to listen for route changes
   * This should be called in app.component.ts
   */
  init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data['seo']) {
          this.updateMetadata(data['seo'])
        }
      })
  }

  /**
   * Set page title
   * @param title - The page title
   */
  setTitle(title: string) {
    this.title.setTitle(title)
  }

  /**
   * Set meta description
   * @param description - The page description
   */
  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description })
  }

  /**
   * Set canonical URL
   * @param url - The canonical URL (optional - uses current URL if not specified)
   */
  setCanonicalUrl(url?: string) {
    this.meta.updateTag({ rel: 'canonical', href: url }, 'rel="canonical"')
  }

  /**
   * Set meta tags for Open Graph (Facebook)
   * @param config - Open Graph configuration
   */
  setOpenGraph(config: {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
  }) {
    if (config.title) {
      this.meta.updateTag({ property: 'og:title', content: config.title })
    }
    if (config.description) {
      this.meta.updateTag({
        property: 'og:description',
        content: config.description
      })
    }
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image })
    }

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url })
    }

    if (config.type) {
      this.meta.updateTag({ property: 'og:type', content: config.type })
    }
  }

  /**
   * Set meta tags for Twitter Cards
   * @param config - Twitter card configuration
   */
  setTwitterCard(config: {
    title?: string
    description?: string
    image?: string
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
  }) {
    this.meta.updateTag({
      name: 'twitter:card',
      content: config.card || 'summary_large_image'
    })

    if (config.title) {
      this.meta.updateTag({ name: 'twitter:title', content: config.title })
    }
    if (config.description) {
      this.meta.updateTag({
        name: 'twitter:description',
        content: config.description
      })
    }
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image })
    }
    if (config.site) {
      this.meta.updateTag({ name: 'twitter:site', content: config.site })
    }
  }

  /**
   * Update all metadata for a page
   * @param config - SEO configuration
   */
  updateMetadata(config: {
    title?: string
    description?: string
    robots?: string
    keywords?: string
    canonicalUrl?: string
    og?: {
      image?: string
      url?: string
      type?: string
    }
    twitter?: {
      image?: string
      card?: 'summary' | 'summary_large_image' | 'app' | 'player'
      site?: string
    }
  }) {
    if (config.title) {
      this.setTitle(config.title)
    }

    if (config.description) {
      this.setDescription(config.description)
    }

    if (config.robots) {
      this.meta.updateTag({ name: 'robots', content: config.robots })
    }

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords })
    }

    if (config.canonicalUrl || config.canonicalUrl === '') {
      this.setCanonicalUrl(config.canonicalUrl)
    }

    // Set Open Graph tags, auto-using page title and description
    const ogConfig = {
      title: config.title,
      description: config.description,
      ...(config.og || {})
    }
    this.setOpenGraph(ogConfig)

    // Set Twitter tags, auto-using page title and description
    const twitterConfig = {
      title: config.title,
      description: config.description,
      ...(config.twitter || {})
    }
    this.setTwitterCard(twitterConfig)
  }

  /**
   * Remove a specific meta tag
   * @param name - The name of the meta tag to remove
   */
  removeMetaTag(name: string) {
    this.meta.removeTag(`name='${name}'`)
  }
}
