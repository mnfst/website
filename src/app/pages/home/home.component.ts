import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeFaq: number | null = null

  faqs = [
    {
      question: 'I do not use Angular and/or Nest, can I use CASE ?',
      answer: `<p>As of today, CASE is made for that stack only.</p>

      <p>If you only use one of those 2 frameworks, it may be profitable to use CASE and learn the other with the time saved with CASE. Nest is heavily inspired by Angular and shares a lot of similarities.</p>
      
      <p>If you come from React, Svelte or other JS frameworks and are interested in having CASE for your stack, let us know. The philosophy and the concepts behind CASE are framework-agnostic and may be adapted to other “flavors” in the future.</p>`
    },
    {
      question: 'Is CASE a low-code / no-code solution ?',
      answer: `<p>No, CASE is a tool for developers with at least a “junior” level in Javascript or Typescript.</p>

      <p>Low-code / no-code solutions can be useful in some cases, but they  force you to trade-off your freedom for a gain in time. It works great until you need to implement a custom rule or business logic, which is pretty often as all businesses work in their own way.</p>
      
      <p>Like those solutions, CASE builds the bothersome stuff for you. However you can make it your way if it does not suit your needs or build on top of it.</p>
      `
    },
    {
      question: 'Is CASE a CMS ?',
      answer: `<p>No, but you can use CASE to build a CMS if you want to.</p>
      <p>However, CASE performs best when you build your own custom web app like an admin panel, a dashboard or an ERP. It is a tool to help you build your app faster and more efficiently.</p>`
    },
    {
      question: 'How long does it take to learn CASE ?',
      answer: `<p>On our beta tests, most of the developers were able to create a basic dashboard app in 1 hour.  And half of them were not familiar with Angular and Nest !</p>

      <p>Follow the quickstart guide to create your first CASE app. From there you are free to use (or not) CASE elements, resources and features.</p>`
    }
  ]

  constructor(meta: Meta, title: Title) {
    title.setTitle('CASE - Full Stack Framework | Build your app faster')
    meta.addTag({
      name: 'og:title',
      content: 'CASE - Full Stack Framework | Build your app faster'
    })
    meta.addTag({
      name: 'description',
      content:
        'Build quickly and easily your custom web apps, ERPs and dashboards with this Angular + NestJS framework.'
    })
    meta.addTag({
      name: 'og:description',
      content:
        'Build quickly and easily your custom web apps, ERPs and dashboards with this Angular + NestJS framework.'
    })
    meta.addTag({ name: 'og:url', content: 'https://case.app' })
    meta.addTag({
      name: 'og:image',
      content: 'https://case.app/assets/images/case-og-image.png'
    })
    meta.addTag({
      name: 'keywords',
      content:
        'CASE, Angular, Nest,  Admin panel, Dashboard, ERP, Business app, Business application, Business software, Business tool, Business tool, Framework, CLI'
    })
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index
  }
}
