import { NgClass, NgFor } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  selectedFaqIndex: number = -1

  faqItems: { question: string; answer: string[] }[] = [
    {
      question: 'What is an Agentic UI?',
      answer: [
        'An Agentic UI is a branded, interactive interface that appears inside AI assistants like ChatGPT or Claude when they perform actions on behalf of users.',
        'Instead of generic text responses, your customers see your product with your design, your UX, and your conversion flow — directly in the conversation.'
      ]
    },
    {
      question: 'Why do I need an Agentic UI?',
      answer: [
        'Consumer behavior is shifting. People increasingly ask AI assistants to book, compare, and buy for them instead of opening apps or searching Google.',
        "If your brand isn't present in these conversations, you become invisible, just another generic recommendation. You also lose all data on customer intent, conversion, and churn."
      ]
    },
    {
      question: 'Which AI assistants does Manifest support?',
      answer: [
        'Manifest is cross-platform compatible, so your Agentic UI works wherever your customers interact with AI.'
      ]
    },
    {
      question: 'What kind of analytics do I get?',
      answer: [
        'Manifest provides conversion analytics specific to AI conversations: impressions, click-through, checkout completion, and drop-off points.',
        'You get the same visibility you expect from your app or website.'
      ]
    },
    {
      question: 'How is Manifest different from building in-house?',
      answer: [
        'Building in-house requires hiring MCP specialists, months of development, and ongoing maintenance as protocols evolve.',
        'Manifest gets you live in weeks with analytics included — so your engineering team stays focused on your core product.'
      ]
    },
    {
      question:
        'How is Manifest different from the Agentic Commerce Protocol (ACP)?',
      answer: [
        "ACP is a protocol, a standard you implement yourself. Manifest is a platform. We handle the complexity of MCP, external apps, and cross-platform rendering so you don't have to.",
        'ACP is also commerce-focused. Manifest works for other areas as healthtech, fintech and so on.'
      ]
    },
    {
      question: 'Is Manifest for me?',
      answer: [
        'Manifest is built for tech-forward companies with high transaction volume and strong brand identity.',
        'If your customers interact with you frequently and your brand matters, Manifest is for you.'
      ]
    },
    {
      question: 'How do I get started?',
      answer: [
        "We're onboarding pilot partners now. Reach out and we'll help you to build your first Agentic UI, from API to live in AI assistants."
      ]
    }
  ]

  toggleFaq(index: number) {
    this.selectedFaqIndex = this.selectedFaqIndex === index ? -1 : index
  }
}
