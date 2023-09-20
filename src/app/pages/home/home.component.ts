import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isCopied = false

  constructor(meta: Meta, title: Title) {
    title.setTitle('CASE - Develop a CRUD web app in 15 minutes 🚀')
    meta.addTag({
      name: 'og:title',
      content: 'CASE - Develop a CRUD web app in 15 minutes 🚀'
    })
    meta.addTag({
      name: 'description',
      content:
        'CASE allows developers to install, develop and deploy a crud app in minutes'
    })
    meta.addTag({
      name: 'og:description',
      content:
        'CASE allows developers to install, develop and deploy a crud app in minutes'
    })
    meta.addTag({ name: 'og:url', content: 'https://case.app' })
    meta.addTag({
      name: 'og:image',
      content: 'https://case.app/assets/images/og-image.png'
    })
    meta.addTag({
      name: 'keywords',
      content:
        'CASE, Typescript, Javascript,Admin panel, Dashboard, ERP, Business app, Business application, Business software, APIs, Business tool, CMS, Frameworkless, CRUD app, CLI, ERP, Custom web app'
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
