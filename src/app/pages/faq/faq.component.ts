import { Component } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  constructor(private sanitizer: DomSanitizer) {}

  faqs: { question: string; answer: SafeHtml }[] = [
    {
      question: 'What is CASE ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE is a Typescript lightweight BaaS (Backend As A Service) that provides a complete backend for your web application.</p>
      `)
    },
    {
      question: 'Who is CASE addressed to ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE is addressed to any developer that wants to build quickly a backend for his or her web app.</p>
      <p>A CASE app can be included in projects of different sizes, as a whole or connected to other apps.</p>`)
    },
    {
      question: 'Can I use this framework ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE offers a JS client library that can be used with any JS client framework or vanilla JS. If you do not want to use it, you can use directly the REST API.</p>`)
    },
    {
      question: 'Where can I find help ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>Just ask us something on <a href="https://discord.com/invite/FepAked3W7" target="_blank">our Discord channel if needed.</p>`)
    }
  ]
}
