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
  faqItems: { question: string; answer: string }[] = [
    {
      question: 'Is Manifest a low-code / no-code tool ?',
      answer:
        "No. It just works like just any other file in your codebase. It's code, simple code."
    },
    {
      question: 'Is Manifest for me?',
      answer:
        'It does not matter if you are junior or senior developer, if you code in JS, PHP or Python. You can be frontend, backend or fullstack, a mobile developer, indie hacker or devsigner. If you know a bit of software development, you will have no problem using Manifest.'
    },
    {
      question: 'Can I use Manifest in production?',
      answer:
        'Manifest is currently in BETA, you can use it at your own risk. It is stable enough to power small projects, prototypes and MVPs but we do not recommend to use it on critical platforms.'
    },
    {
      question: 'What is behind the magic?',
      answer:
        'Good sense and ordinary popular stacks: the current version runs on NodeJS, Express and NestJS. We use JSON Schema to validate the YAML file, JS-YAML to parse it and TypeORM to map it into a SQLite database.'
    }
  ]

  toggleFaq(index: number) {
    if (this.selectedFaqIndex === index) {
      this.selectedFaqIndex = -1
    } else {
      this.selectedFaqIndex = index
    }
  }
}
