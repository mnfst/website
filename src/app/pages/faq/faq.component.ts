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
      question: 'Who is CASE for?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE is for any developer that wants to build high quality CRUD applications quickly.</p>
      <p>A CASE app can be a portion of a larger project, or as a standalone product with integrations to other applications.</p>`)
    },
    {
      question: 'How can I customize [insert element here]?',
      answer: this.sanitizer.bypassSecurityTrustHtml(
        `<p>If it does not appear in the <a href="https://docs.case.app" target="_blank">docs</a>, you can't.</p>
        <p>If you have an idea for a feature, you can create a <a href="https://github.com/casejs/case/discussions/new?category=feature-request" target="_blank">feature request</a>.</p>
        <p>Nevertheless, it is important to acknowledge that CASE's philosophy is to keep things as simple and as standardized as possible. CASE will probably not fit well in projects with a high need for customization.</p>`
      )
    },
    {
      question: 'Can I use [insert cool tech here]?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>CASE works currently with TypeScript and SQLite and will probably not change soon.</p>
      <p>If you need to add a custom package or custom script, check out the <a href="https://docs.case.app/custom-logic" target="_blank">related docs</a>.
      </p>`)
    },
    {
      question: 'Where can I find help?',
      answer: this.sanitizer.bypassSecurityTrustHtml(`
      <p>Drop us a line on <a href="https://discord.com/invite/FepAked3W7" target="_blank">our Discord channel</a>!</p>`)
    }
  ]
}
