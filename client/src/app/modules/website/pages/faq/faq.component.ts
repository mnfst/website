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
      question: 'Is Manifest a low-code / no-code tool ?',
      answer: [
        "No. It just works like just any other file in your codebase. It's code, simple code."
      ]
    },
    {
      question: 'How is Manifest different from other BaaS?',
      answer: [
        'Most BaaS platforms are no-code tools working with a dashboard to manage your backend. Manifest gives you a single file you can generate, edit and version like any other part of your codebase.',
        'You stay in your editor. You do not have to deal with bloated UI, setup steps or custom platform rules.',
        'Manifest is open source, easy to validate, and designed to fit naturally into AI-assisted workflows. It provides full control, minimal complexity, and no lock-in.'
      ]
    },
    {
      question: 'Is Manifest for me?',
      answer: [
        'It does not matter if you are junior or senior developer, if you code in JS, PHP or Python. You can be frontend, backend or fullstack, a mobile developer, indie hacker or devsigner. If you know a bit of software development, you will have no problem using Manifest.'
      ]
    },
    {
      question: 'Can I use Manifest with AI tools like Cursor or Copilot?',
      answer: [
        'Yes. Manifest is designed for AI-assisted workflows. Its syntax and structure are easy for LLMs to generate and edit, which makes it perfect for vibe coding or AI-generated projects.'
      ]
    },
    {
      question: 'Can I use Manifest without any AI tool?',
      answer: [
        'Absolutely. You can write and maintain your backend manually like any other code file. Manifest works without AI tools, but it fits perfectly into AI-assisted workflows.'
      ]
    },
    {
      question: 'Can I self-host Manifest?',
      answer: [
        'Yes. You can run Manifest locally or deploy it wherever you want. There is no dependency on any hosted service.'
      ]
    },
    {
      question: 'Can I use Manifest in production?',
      answer: [
        'Manifest is currently in BETA, you can use it at your own risk. It is stable enough to power small projects, prototypes and MVPs but we do not recommend to use it on critical platforms.'
      ]
    },
    {
      question: 'What is behind the magic?',
      answer: [
        'Manifest is based on a small set of clear and composable concepts. It removes repetitive code, avoids complexity, and includes the core features every backend needs by default.',
        'Under the hood, it uses popular technologies that developers already trust. The current version runs on Node.js, Express, and NestJS. We use JSON Schema to validate the YAML file, js-yaml to parse it, and TypeORM to map it into a SQLite database.'
      ]
    }
  ]

  toggleFaq(index: number) {
    this.selectedFaqIndex = this.selectedFaqIndex === index ? -1 : index
  }
}
