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
      question: 'Who is CASE addressed to ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE is addressed to any developer that wants to build quickly a solid CRUD app.</p>
      <p>A CASE app can be included in projects of different sizes, as a whole or connected to other apps.</p>`)
    },
    {
      question: 'How can I custom [insert element here] ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(
        `<p>If it does not appear in the <a href="https://docs.case.app" target="_blank">docs</a>, you can't.</p>
        <p>If you think that this customization should be possible, you can fill a <a href="https://github.com/casejs/case/discussions/new?category=feature-request" target="_blank">feature request</a>.</p>
        <p>Nevertheless, it is important to acknowledge that CASE's philosophy is to keep things as simple and as standardized as possible. CASE will probably not fit well in projects with a high need for customization.</p>`
      )
    },
    {
      question: 'Can I use [insert cool tech here] ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE works currently with TypeScript and SQLite and will probably not change soon.</p>
      <p>If you need to add a custom package or custom script to trigger at some point, checkout the <a href="https://docs.case.app/custom-logic" target="_blank">related doc</a>.
      </p>`)
    },
    {
      question: 'Where can I find help ?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>Just ask us something on <a href="https://discord.com/invite/FepAked3W7" target="_blank">our Discord channel if needed.</p>`)
    }
  ]
}
