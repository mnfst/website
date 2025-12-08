// src/app/common/partials/header/header.component.ts
import { Component, Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private static scriptInjected = false
  githubStars = 'Star'

  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.fetchGitHubStars()
    }
  }

  private fetchGitHubStars(): void {
    console.log('Fetching GitHub stars...')
    this.http.get<any>('https://api.github.com/repos/mnfst/manifest')
      .subscribe({
        next: (response) => {
          console.log('GitHub API response:', response)
          const stars = response.stargazers_count
          console.log('Stars count:', stars)
          this.githubStars = `${this.formatStarCount(stars)}`
        },
        error: (err) => {
          console.error('GitHub API error:', err)
          this.githubStars = 'Star'
        }
      })
  }

  private formatStarCount(count: number): string {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  onGetDemo(): void {
    window.open('https://calendly.com/sebastien-manifest/30min', '_blank')
  }
}
