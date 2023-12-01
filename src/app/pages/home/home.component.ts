import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isCopied = false
  isDemoMenuOpen = false
  isApiWindow = false

  constructor(meta: Meta, title: Title) {
    title.setTitle('CASE - A complete backend without leaving your IDE 🚀')
    meta.addTag({
      name: 'og:title',
      content: 'CASE - A complete backend without leaving your IDE 🚀'
    })
    meta.addTag({
      name: 'description',
      content:
        'CASE is a Typescript lightweight BaaS (Backend As A Service) requiring minimal coding.'
    })
    meta.addTag({
      name: 'og:description',
      content:
        'CASE is a Typescript lightweight BaaS (Backend As A Service) requiring minimal coding.'
    })
    meta.addTag({ name: 'og:url', content: 'https://case.app' })
    meta.addTag({
      name: 'og:image',
      content: 'https://case.app/assets/images/og-image.png'
    })
    meta.addTag({
      name: 'keywords',
      content:
        'BaaS, Typescript, Javascript, Admin panel, Dashboard, ERP, Business app, Business application, Business software, APIs, CRUD app, CLI, ERP, Custom web app'
    })
  }

  copyToClipboard(): Promise<void> {
    return navigator.clipboard
      .writeText('npx create-case-app my-case-app')
      .then(() => {
        this.isCopied = true
      })
  }
}
